/* =========================================================
   Stylenm.com — Stylish Name Generator
   Lazy loading • Favorites • Copy • Category tracking
   Random styles & trending names on every load
   ========================================================= */
(function () {
  'use strict';

  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));

  /* ---------- STATE ---------- */
  const state = {
    name: '',
    favorites: new Set(),
    expanded: {},        // { categoryId: true }
    trendExpanded: {},   // { categoryId: true }
    activeCategory: null,
    observer: null,
    shuffled: {}         // { categoryId: { styles: [...], trends: [...] } }
  };

  const STYLE_PREVIEW = 5;
  const TREND_PREVIEW = 3;
  const FAV_KEY = 'stylenm_favs_v1';

  /* ---------- HELPERS ---------- */
  const esc = (s) => String(s).replace(/[&<>"']/g, (m) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[m]));

  // Fisher-Yates shuffle
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Shuffle all categories' styles & trending once per page load
  function shuffleAllCategories() {
    if (!DATA || !DATA.categories) return;
    DATA.categories.forEach((cat) => {
      state.shuffled[cat.id] = {
        styles: shuffle(cat.styles || []),
        trends: shuffle(cat.trending || [])
      };
    });
  }

  function getShuffledStyles(cat) {
    return (state.shuffled[cat.id] && state.shuffled[cat.id].styles) || cat.styles || [];
  }
  function getShuffledTrends(cat) {
    return (state.shuffled[cat.id] && state.shuffled[cat.id].trends) || cat.trending || [];
  }

  function toast(msg) {
    let el = $('.toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'toast';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove('show'), 1600);
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise((res, rej) => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); res(); }
      catch (e) { rej(e); }
      document.body.removeChild(ta);
    });
  }

  /* ---------- NAME TRANSFORMER ---------- */
  function applyName(style, name) {
    const hasName = name && name.trim().length > 0;
    const nm = hasName ? name.trim() : '';
    const out = [];
    let i = 0;
    const ph = style.ph;
    const tpl = style.tpl;

    while (i < tpl.length) {
      if (tpl.startsWith(ph, i)) {
        if (!hasName) {
          out.push(ph);
        } else {
          out.push(transformLetters(nm, style.map));
        }
        i += ph.length;
      } else {
        out.push(tpl[i]);
        i++;
      }
    }
    return out.join('');
  }

  function transformLetters(str, map) {
    return str.split('').map((ch) => {
      if (map.up && map.up[ch]) return map.up[ch];
      if (map.low && map.low[ch]) return map.low[ch];
      return ch;
    }).join('');
  }

  /* ---------- FAVORITES ---------- */
  function loadFavs() {
    try {
      const raw = localStorage.getItem(FAV_KEY);
      if (raw) state.favorites = new Set(JSON.parse(raw));
    } catch (e) { /* ignore */ }
  }
  function saveFavs() {
    try {
      localStorage.setItem(FAV_KEY, JSON.stringify(Array.from(state.favorites)));
    } catch (e) { /* ignore */ }
  }
  function favId(catId, idx) { return catId + '::' + idx; }

  function toggleFav(catId, idx, btn) {
    const id = favId(catId, idx);
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
      btn.classList.remove('on');
      btn.textContent = '♡';
    } else {
      state.favorites.add(id);
      btn.classList.add('on');
      btn.textContent = '♥';
    }
    saveFavs();
    renderFavorites();
  }

  function renderFavorites() {
    const wrap = $('#favWrap');
    const list = $('#favList');
    if (!wrap || !list) return;

    if (state.favorites.size === 0) {
      wrap.hidden = true;
      list.innerHTML = '';
      return;
    }

    wrap.hidden = false;
    const frag = document.createDocumentFragment();

    state.favorites.forEach((id) => {
      const [catId, idxStr] = id.split('::');
      const idx = parseInt(idxStr, 10);
      const cat = DATA.categories.find((c) => c.id === catId);
      if (!cat || !cat.styles[idx]) return;

      const style = cat.styles[idx];
      const text = applyName(style, state.name);

      const card = document.createElement('div');
      card.className = 'style-card';
      card.innerHTML =
        '<div class="style-text">' + esc(text) + '</div>' +
        '<div class="style-actions">' +
          '<button class="act-btn" data-copy="' + esc(text) + '">📋 Copy</button>' +
          '<button class="act-btn fav on" data-fav="' + id + '">♥</button>' +
        '</div>';
      frag.appendChild(card);
    });

    list.innerHTML = '';
    list.appendChild(frag);
  }

  /* ---------- RENDER: category sections ---------- */
  function renderCategorySections() {
    const container = $('#sections');
    if (!container) return;

    const frag = document.createDocumentFragment();

    DATA.categories.forEach((cat) => {
      const sec = document.createElement('section');
      sec.className = 'cat-section';
      sec.id = 'cat-' + cat.id;
      sec.dataset.cat = cat.id;

      const styles = getShuffledStyles(cat);
      const trends = getShuffledTrends(cat);

      const isExpanded = !!state.expanded[cat.id];
      const shownStyles = isExpanded ? styles : styles.slice(0, STYLE_PREVIEW);

      const trendExp = !!state.trendExpanded[cat.id];
      const shownTrends = trendExp ? trends : trends.slice(0, TREND_PREVIEW);

      let html = '';
      html += '<div class="cat-head">';
      html +=   '<h2><span class="emoji">' + esc(cat.emoji || '✨') + '</span>' + esc(cat.name) + '</h2>';
      html +=   '<span class="cat-count">' + styles.length + ' styles</span>';
      html += '</div>';

      // Style grid
      html += '<div class="style-grid">';
      shownStyles.forEach((style) => {
        // Important: original index use karo taaki favorites consistent rahein
        const idx = cat.styles.indexOf(style);
        const id = favId(cat.id, idx);
        const isFav = state.favorites.has(id);
        const text = applyName(style, state.name);
        html += '<div class="style-card">';
        html +=   '<div class="style-text">' + esc(text) + '</div>';
        html +=   '<div class="style-actions">';
        html +=     '<button class="act-btn" data-copy="' + esc(text) + '">📋 Copy</button>';
        html +=     '<button class="act-btn fav' + (isFav ? ' on' : '') + '" data-fav="' + id + '">' + (isFav ? '♥' : '♡') + '</button>';
        html +=   '</div>';
        html += '</div>';
      });
      html += '</div>';

      // More button
      if (styles.length > STYLE_PREVIEW) {
        html += '<div class="more-wrap">';
        html +=   '<button class="more-btn' + (isExpanded ? ' less' : '') + '" data-more="' + cat.id + '">';
        html +=     isExpanded ? '− See Less' : '+ More (' + (styles.length - STYLE_PREVIEW) + ' more)';
        html +=   '</button>';
        html += '</div>';
      }

      // Trending
      if (trends.length > 0) {
        html += '<div class="trend-wrap">';
        html +=   '<div class="trend-title">🔥 Trending Names</div>';
        html +=   '<div class="trend-grid">';
        shownTrends.forEach((t) => {
          html += '<div class="trend-item">';
          html +=   '<span class="t-txt">' + esc(t) + '</span>';
          html +=   '<button class="t-copy" data-copy="' + esc(t) + '">📋</button>';
          html += '</div>';
        });
        html +=   '</div>';
        if (trends.length > TREND_PREVIEW) {
          html += '<div class="more-wrap">';
          html +=   '<button class="more-btn' + (trendExp ? ' less' : '') + '" data-more-trend="' + cat.id + '">';
          html +=     trendExp ? '− See Less' : '+ More (' + (trends.length - TREND_PREVIEW) + ' more)';
          html +=   '</button>';
          html += '</div>';
        }
        html += '</div>';
      }

      sec.innerHTML = html;
      frag.appendChild(sec);
    });

    container.innerHTML = '';
    container.appendChild(frag);
  }

  /* ---------- RENDER: category chips ---------- */
  function renderCategoryChips() {
    const bar = $('#catScroll');
    if (!bar) return;
    const frag = document.createDocumentFragment();
    DATA.categories.forEach((cat) => {
      const a = document.createElement('a');
      a.className = 'cat-chip';
      a.href = '#cat-' + cat.id;
      a.dataset.cat = cat.id;
      a.textContent = (cat.emoji ? cat.emoji + ' ' : '') + cat.name;
      frag.appendChild(a);
    });
    bar.innerHTML = '';
    bar.appendChild(frag);
  }

  /* ---------- UPDATE all visible style texts ---------- */
  function refreshAllStyles() {
    renderCategorySections();
    renderFavorites();
  }

  /* ---------- EVENT DELEGATION ---------- */
  function bindEvents() {
    // Menu
    const menuBtn = $('#menuBtn');
    const drawer = $('#drawer');
    if (menuBtn && drawer) {
      menuBtn.addEventListener('click', () => {
        const open = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', String(!open));
        drawer.hidden = open;
      });
      drawer.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
          menuBtn.setAttribute('aria-expanded', 'false');
          drawer.hidden = true;
        }
      });
    }

    // Generate button
    const genBtn = $('#genBtn');
    const input = $('#nameInput');
    const clearBtn = $('#clearBtn');
    const bbInput = $('.bb-input');

    function updateInputState() {
      if (bbInput) bbInput.classList.toggle('has-value', input.value.length > 0);
    }

    if (input) {
      input.addEventListener('input', () => {
        state.name = input.value;
        updateInputState();
      });
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          state.name = input.value;
          // ✅ Shuffle again so naya set aaye
          shuffleAllCategories();
          refreshAllStyles();
          toast('✨ Name generated!');
        }
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        input.value = '';
        state.name = '';
        updateInputState();
        refreshAllStyles();
      });
    }

    if (genBtn) {
      genBtn.addEventListener('click', () => {
        state.name = input ? input.value : '';
        // ✅ Shuffle again so naya set aaye
        shuffleAllCategories();
        refreshAllStyles();
        toast(state.name ? '✨ Name generated!' : 'Type a name first');
      });
    }

    // Add-name FAB
    const addBtn = $('#addBtn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        input.focus();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      });
    }

    // Top FAB
    const topBtn = $('#topBtn');
    if (topBtn) {
      topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Global click delegation
    document.addEventListener('click', (e) => {
      // Copy
      const copyBtn = e.target.closest('[data-copy]');
      if (copyBtn) {
        const text = copyBtn.getAttribute('data-copy') || '';
        copyText(text).then(() => {
          const orig = copyBtn.innerHTML;
          copyBtn.classList.add('copied');
          copyBtn.innerHTML = '✓ Copied';
          setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.innerHTML = orig;
          }, 1200);
        }).catch(() => toast('Copy failed'));
        return;
      }

      // Favorite
      const favBtn = e.target.closest('[data-fav]');
      if (favBtn) {
        const id = favBtn.getAttribute('data-fav');
        const [catId, idxStr] = id.split('::');
        toggleFav(catId, parseInt(idxStr, 10), favBtn);
        return;
      }

      // More styles
      const moreBtn = e.target.closest('[data-more]');
      if (moreBtn) {
        const catId = moreBtn.getAttribute('data-more');
        Object.keys(state.expanded).forEach((k) => {
          if (k !== catId) state.expanded[k] = false;
        });
        state.expanded[catId] = !state.expanded[catId];
        // ✅ Jab "See Less" pe click ho, to naya shuffle karo
        if (!state.expanded[catId]) {
          const cat = DATA.categories.find((c) => c.id === catId);
          if (cat) {
            state.shuffled[catId] = {
              styles: shuffle(cat.styles || []),
              trends: state.shuffled[catId] ? state.shuffled[catId].trends : shuffle(cat.trending || [])
            };
          }
        }
        renderCategorySections();
        const el = document.getElementById('cat-' + catId);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 120;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
        return;
      }

      // More trends
      const moreTrendBtn = e.target.closest('[data-more-trend]');
      if (moreTrendBtn) {
        const catId = moreTrendBtn.getAttribute('data-more-trend');
        Object.keys(state.trendExpanded).forEach((k) => {
          if (k !== catId) state.trendExpanded[k] = false;
        });
        state.trendExpanded[catId] = !state.trendExpanded[catId];
        renderCategorySections();
        const el = document.getElementById('cat-' + catId);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 120;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
        return;
      }
    });

    // Show / hide top FAB
    window.addEventListener('scroll', () => {
      if (topBtn) {
        topBtn.classList.toggle('show', window.scrollY > 400);
      }
    }, { passive: true });

    // Category chips active state
    const chips = $$('.cat-chip');
    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        chips.forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
      });
    });
  }

  /* ---------- LAZY LOADING via IntersectionObserver ---------- */
  function setupLazyLoad() {
    const sections = $$('.cat-section');
    if (!('IntersectionObserver' in window)) return;

    if (state.observer) state.observer.disconnect();

    state.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const catId = el.dataset.cat;

        if (catId && state.activeCategory !== catId) {
          state.activeCategory = catId;
          const cat = DATA.categories.find((c) => c.id === catId);
          const label = $('#catCurrent');
          if (cat && label) label.textContent = cat.name;

          $$('.cat-chip').forEach((chip) => {
            chip.classList.toggle('active', chip.dataset.cat === catId);
          });

          const activeChip = $('.cat-chip.active');
          const bar = $('#catScroll');
          if (activeChip && bar) {
            const offset = activeChip.offsetLeft - bar.clientWidth / 2 + activeChip.clientWidth / 2;
            bar.scrollTo({ left: Math.max(0, offset), behavior: 'smooth' });
          }
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

    sections.forEach((s) => state.observer.observe(s));
  }

  /* ---------- STATIC SECTIONS ---------- */
  function renderStaticSections() {
    const cfg = DATA.site || {};

    if (cfg.brand) {
      const b = $('#brandName');
      if (b) b.textContent = cfg.brand;
    }

    const y = $('#year');
    if (y) y.textContent = new Date().getFullYear();

    // FAQ
    const faqList = $('#faqList');
    if (faqList && Array.isArray(cfg.faq)) {
      const frag = document.createDocumentFragment();
      cfg.faq.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'faq-item';
        div.innerHTML =
          '<button class="faq-q" type="button">' +
            '<span>' + esc(item.q) + '</span>' +
            '<span class="arrow">▾</span>' +
          '</button>' +
          '<div class="faq-a">' + esc(item.a) + '</div>';
        frag.appendChild(div);
      });
      faqList.innerHTML = '';
      faqList.appendChild(frag);

      faqList.addEventListener('click', (e) => {
        const q = e.target.closest('.faq-q');
        if (!q) return;
        const item = q.parentElement;
        const wasOpen = item.classList.contains('open');
        $$('.faq-item').forEach((el) => el.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
      });
    }

    // Why
    const whyList = $('#whyList');
    if (whyList && Array.isArray(cfg.why)) {
      whyList.innerHTML = cfg.why.map((w) =>
        '<div class="why-card"><h3>' + esc(w.title) + '</h3><p>' + esc(w.desc) + '</p></div>'
      ).join('');
    }

    // Tips
    const tipList = $('#tipList');
    if (tipList && Array.isArray(cfg.tips)) {
      tipList.innerHTML = cfg.tips.map((t) => '<li>' + esc(t) + '</li>').join('');
    }

    // About
    const aboutText = $('#aboutText');
    if (aboutText && cfg.about) {
      aboutText.innerHTML = cfg.about.split('\n').map((p) =>
        '<p>' + esc(p) + '</p>'
      ).join('');
    }

    // Share
    const shareRow = $('#shareRow');
    if (shareRow && cfg.share) {
      const url = encodeURIComponent(cfg.share.url || location.href);
      const text = encodeURIComponent(cfg.share.text || 'Check out this stylish name generator!');
      const items = [
        { cls: 'wa', label: 'WhatsApp', href: 'https://wa.me/?text=' + text + '%20' + url },
        { cls: 'fb', label: 'Facebook', href: 'https://www.facebook.com/sharer/sharer.php?u=' + url },
        { cls: 'tw', label: 'X / Twitter', href: 'https://twitter.com/intent/tweet?text=' + text + '&url=' + url },
        { cls: 'ig', label: 'Instagram', href: 'https://www.instagram.com/' },
        { cls: 'cp', label: 'Copy Link', href: '#' }
      ];
      shareRow.innerHTML = items.map((s) =>
        '<a class="share-btn ' + s.cls + '" href="' + s.href + '"' +
        (s.cls !== 'cp' ? ' target="_blank" rel="noopener"' : '') +
        ' data-share="' + s.cls + '">' + esc(s.label) + '</a>'
      ).join('');

      shareRow.addEventListener('click', (e) => {
        const a = e.target.closest('[data-share="cp"]');
        if (a) {
          e.preventDefault();
          copyText(location.href).then(() => toast('🔗 Link copied!'));
        }
      });
    }
  }

  /* ---------- INIT ---------- */
  function init() {
    if (typeof DATA === 'undefined' || !DATA.categories) {
      console.error('data.js missing or invalid');
      return;
    }

    loadFavs();
    shuffleAllCategories();   // ✅ Pehli baar shuffle
    renderCategoryChips();
    renderCategorySections();
    renderStaticSections();
    renderFavorites();
    bindEvents();
    setupLazyLoad();

    const input = $('#nameInput');
    if (input && state.name) input.value = state.name;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
