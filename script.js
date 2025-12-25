let currentFilter = "love";
let suggestionsVisible = false;
let nameInputTimer = null;
let isDarkTheme = false;

// ==================== FLEXIBLE DATA STRUCTURES ====================

let suggestionsData = {
  love: [
    "⋆𐙚:͢I:͢L:͢♡:͢V:͢E:͢y:͢o:͢u𓏧𓅚",
    "►►❇︎˖°M̶o̶m̶-D̶a̶d̶°˖☂ ‹𝟹",
    "☁️𝒮𝓌𝑒𝑒𝓉 𝒞𝓁☁️𝓊𝒹☁️"
  ],
  gamer: [
    "𝚾-Ꮮᴏʀᴅ 亗",
    "ɪᴍ • F ᴀ ɴ ɪ •々",
    "៚ɪ ᴛ ᴀ ᴄ ʜ ɪ ❶❶"
  ],
  fancy: [
    "ꫝ𝛈𝛋𝛖sʜ  ??",
    "𝙲𝚁𝙰𝚉𝚈 βσყ ×͜×",
    "आदिवासी ෴",
    "ᛖᚱ Vιяυѕ ⚠"
  ],
  font: [
    "ᴅ ɪ ᴍ ⌔ ɴ ᴅ",
    "𝘚𝘗ΞΞ𝘋",
    "ꫝυяα"
  ]
};

let stylesByCategory = {
  love: [
    {
      name: "love_panda_style",
      prefix: "˗ˏˋ🐼ﮩ٨ـ",
      suffix: "ـﮩ٨ـ🐼ˎˊ˗",
      map: {
        a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
        k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
        u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ",
        A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
        K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
        U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ"
      }
    },
    {
      name: "love_sparkle_style",
      prefix: "𐙚✨˚",
      suffix: "˚✨𐙚 ツ",
      map: {
        a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
        k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
        u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷",
        A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
        K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
        U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
      }
    }
  ],
  gamer: [],
  fancy: [],
  font: []
};

let symbolsData = {
  frames: [
    { symbol: "꧁", name: "Left Frame" },
    { symbol: "꧂", name: "Right Frame" }
  ],
  tech: [
    { symbol: "░", name: "Light Shade" },
    { symbol: "▒", name: "Medium Shade" }
  ],
  nature: [
        { symbol: "🌿", name: "Leaf" },
        { symbol: "🌻", name: "Sunflower" },
        { symbol: "⛰️", name: "Mountain" }
    ],
  cute: [
    { symbol: "☺︎", name: "Smiley" },
    { symbol: "☃︎", name: "Snowman" }
  ]
};

// ==================== EASY-TO-USE FUNCTIONS ====================

window.addStyle = function(category, styleName, prefix, suffix, charMap) {
  if (!stylesByCategory[category]) {
    stylesByCategory[category] = [];
  }
  
  const exists = stylesByCategory[category].find(s => s.name === styleName);
  if (exists) {
    showToast(`Style "${styleName}" already exists in ${category}`);
    return false;
  }
  
  const newStyle = {
    name: styleName,
    prefix: prefix || "",
    suffix: suffix || "",
    map: charMap
  };
  
  stylesByCategory[category].push(newStyle);
  showToast(`New style "${styleName}" added to ${category}`);
  
  if (currentFilter === category) {
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
      generateStyles();
    }
  }
  
  return true;
};

window.addSuggestion = function(category, suggestionText) {
  if (!suggestionsData[category]) {
    suggestionsData[category] = [];
  }
  
  suggestionsData[category].push(suggestionText);
  showToast(`New suggestion added to ${category}`);
  
  if (suggestionsVisible && currentFilter === category) {
    loadSuggestions();
  }
  
  return true;
};

window.addSymbols = function(symbolCategory, symbol, name) {
  if (!symbolsData[symbolCategory]) {
    symbolsData[symbolCategory] = [];
  }
  
  symbolsData[symbolCategory].push({ symbol: symbol, name: name });
  showToast(`New symbol "${name}" added to ${symbolCategory}`);
  
  const modal = document.getElementById('symbolModal');
  if (modal.classList.contains('show')) {
    loadModalTabs();
  }
  
  return true;
};

// ==================== CORE FUNCTIONS ====================

function convert(name, map) {
  return name.split("").map(ch => {
    if (map[ch] !== undefined) {
      return map[ch];
    }
    
    const lowerChar = ch.toLowerCase();
    if (map[lowerChar] !== undefined) {
      return map[lowerChar];
    }
    
    const upperChar = ch.toUpperCase();
    if (map[upperChar] !== undefined) {
      return map[upperChar];
    }
    
    return ch;
  }).join("");
}

function generateStyles() {
  const name = document.getElementById('nameInput').value.trim();
  const result = document.getElementById('result');
  const resultsCount = document.getElementById('resultsCount');
  
  result.innerHTML = "";
  
  if (!name) {
    result.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-magic"></i>
        <p>Enter your name to see magical styles!</p>
      </div>
    `;
    resultsCount.textContent = "0";
    return;
  }
  
  const styles = stylesByCategory[currentFilter] || [];
  
  if (styles.length === 0) {
    result.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-exclamation-circle"></i>
        <p>No styles available for this category.</p>
      </div>
    `;
    resultsCount.textContent = "0";
    return;
  }
  
  const shuffled = [...styles].sort(() => Math.random() - 0.5);
  
  shuffled.forEach(style => {
    const styled = style.prefix + convert(name, style.map) + style.suffix;
    const escapedStyled = styled.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    
    const div = document.createElement('div');
    div.className = `style-box ${currentFilter}`;
    div.innerHTML = `
      <span class="style-text">${styled}</span>
      <button class="copy-btn" onclick="copyText('${escapedStyled}', this)">
        <i class="fas fa-copy"></i> Copy
      </button>
    `;
    result.appendChild(div);
  });
  
  resultsCount.textContent = styles.length;
}

function selectCategory(type) {
  currentFilter = type;
  
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-tab') === type) {
      btn.classList.add('active');
    }
  });
  
  if (suggestionsVisible) {
    toggleSuggestions();
  }
  
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    generateStyles();
  } else {
    document.getElementById('result').innerHTML = `
      <div class="empty-state">
        <i class="fas fa-magic"></i>
        <p>Enter your name to see ${type} styles!</p>
      </div>
    `;
    document.getElementById('resultsCount').textContent = "0";
  }
}

function toggleSuggestions() {
  const suggestionsSection = document.getElementById('suggestionsSection');
  const toggleBtn = document.querySelector('.toggle-suggestions-btn');
  
  if (!suggestionsVisible) {
    suggestionsSection.classList.add('show');
    loadSuggestions();
    toggleBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Suggestions';
    suggestionsVisible = true;
  } else {
    suggestionsSection.classList.remove('show');
    toggleBtn.innerHTML = '<i class="fas fa-lightbulb"></i> Show Name Suggestions';
    suggestionsVisible = false;
  }
}

function loadSuggestions() {
  const suggestionsSection = document.getElementById('suggestionsSection');
  const currentSuggestions = suggestionsData[currentFilter] || [];
  
  if (currentSuggestions.length === 0) {
    suggestionsSection.innerHTML = `
      <h3 class="suggestions-title"><i class="fas fa-lightbulb"></i> ${currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1)} Name Suggestions</h3>
      <p class="no-suggestions">No suggestions available.</p>
    `;
    return;
  }
  
  let html = `<h3 class="suggestions-title"><i class="fas fa-lightbulb"></i> ${currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1)} Name Suggestions</h3>`;
  html += `<div class="suggestions-grid">`;
  
  currentSuggestions.forEach(suggestion => {
    const escapedSuggestion = suggestion.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    html += `
      <div class="suggestion-box ${currentFilter}">
        <span class="suggestion-text">${suggestion}</span>
        <button class="suggestion-copy-btn" onclick="copyText('${escapedSuggestion}', this)">
          <i class="fas fa-copy"></i> Copy
        </button>
      </div>
    `;
  });
  
  html += `</div>`;
  suggestionsSection.innerHTML = html;
}

function loadModalTabs() {
  const modalTabs = document.getElementById('modalTabs');
  let html = '';
  
  Object.keys(symbolsData).forEach((category, index) => {
    const activeClass = index === 0 ? 'active' : '';
    html += `<button class="modal-tab-btn ${activeClass}" onclick="openSymbolTab('${category}')">${category.charAt(0).toUpperCase() + category.slice(1)}</button>`;
  });
  
  modalTabs.innerHTML = html;
  
  const firstCategory = Object.keys(symbolsData)[0];
  if (firstCategory) {
    openSymbolTab(firstCategory);
  }
}

function openSymbolTab(category) {
  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase().includes(category.toLowerCase())) {
      btn.classList.add('active');
    }
  });
  
  const symbolsGrid = document.getElementById('symbolsGrid');
  const symbols = symbolsData[category] || [];
  
  if (symbols.length === 0) {
    symbolsGrid.innerHTML = '<p class="no-symbols">No symbols available.</p>';
    return;
  }
  
  let html = '';
  symbols.forEach(symbol => {
    const escapedSymbol = symbol.symbol.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    html += `
      <div class="symbol-item">
        <div class="symbol-display">${symbol.symbol}</div>
        <div class="symbol-name">${symbol.name}</div>
        <div class="symbol-actions">
          <button class="symbol-insert-btn" onclick="insertSymbol('${escapedSymbol}')">
            <i class="fas fa-plus"></i> Insert
          </button>
          <button class="symbol-copy-btn" onclick="copyText('${escapedSymbol}', this)">
            <i class="fas fa-copy"></i> Copy
          </button>
        </div>
      </div>
    `;
  });
  
  symbolsGrid.innerHTML = html;
}

function insertSymbol(symbol) {
  const nameInput = document.getElementById('nameInput');
  const currentValue = nameInput.value;
  const cursorPos = nameInput.selectionStart;
  
  nameInput.value = currentValue.substring(0, cursorPos) + symbol + currentValue.substring(cursorPos);
  nameInput.selectionStart = nameInput.selectionEnd = cursorPos + symbol.length;
  nameInput.dispatchEvent(new Event('input'));
  closeSymbolModal();
}

function copyText(text, buttonElement = null) {
  navigator.clipboard.writeText(text)
    .then(() => {
      if (buttonElement) {
        const originalText = buttonElement.innerHTML;
        const originalClass = buttonElement.className;
        
        buttonElement.innerHTML = '<i class="fas fa-check"></i> Copied!';
        buttonElement.classList.add('copied');
        
        setTimeout(() => {
          buttonElement.innerHTML = originalText;
          buttonElement.className = originalClass;
        }, 1500);
      } else {
        showToast('Text copied to clipboard!');
      }
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
      showToast('Failed to copy text. Please try again.');
    });
}

function showToast(message) {
  const existingToast = document.querySelector('.toast-message');
  if (existingToast) {
    existingToast.remove();
  }
  
  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      if (toast.parentNode) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

function toggleTheme() {
  isDarkTheme = !isDarkTheme;
  const body = document.body;
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  
  if (isDarkTheme) {
    body.classList.add('dark-theme');
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'light');
  }
}

function openSymbolModal() {
  document.getElementById('symbolModal').classList.add('show');
  loadModalTabs();
}

function closeSymbolModal() {
  document.getElementById('symbolModal').classList.remove('show');
}

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', function() {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDarkTheme = true;
    document.body.classList.add('dark-theme');
    document.getElementById('themeToggleBtn').innerHTML = '<i class="fas fa-moon"></i>';
  }
  
  // Theme toggle button
  document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
  
  // Auto-generate when typing
  document.getElementById('nameInput').addEventListener('input', function() {
    clearTimeout(nameInputTimer);
    nameInputTimer = setTimeout(() => {
      if (this.value.trim().length > 0) {
        generateStyles();
      }
    }, 300);
  });
  
  // Symbol picker button
  document.getElementById('symbolPickerBtn').addEventListener('click', openSymbolModal);
  
  // Scroll to top button
  const scrollBtn = document.getElementById('scrollToTop');
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });
  
  scrollBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Close modal when clicking outside
  document.getElementById('symbolModal').addEventListener('click', function(e) {
    if (e.target === this) {
      closeSymbolModal();
    }
  });
  
  // Initial load
  loadModalTabs();

  // ============ YAHAN APNE 112 STYLES ADD KARO ============
  // Style 1: Combining Ring Style
  addStyle('font', 'font_combining_ring', '', '', {
    a: "a͢", b: "b͢", c: "c͢", d: "d͢", e: "e͢", f: "f͢", g: "g͢", h: "h͢", i: "i͢", j: "j͢",
    k: "k͢", l: "l͢", m: "m͢", n: "n͢", o: "o͢", p: "p͢", q: "q͢", r: "r͢", s: "s͢", t: "t͢",
    u: "u͢", v: "v͢", w: "w͢", x: "x͢", y: "y͢", z: "z͢",
    A: "A͢", B: "B͢", C: "C͢", D: "D͢", E: "E͢", F: "F͢", G: "G͢", H: "H͢", I: "I͢", J: "J͢",
    K: "K͢", L: "L͢", M: "M͢", N: "N͢", O: "O͢", P: "P͢", Q: "Q͢", R: "R͢", S: "S͢", T: "T͢",
    U: "U͢", V: "V͢", W: "W͢", X: "X͢", Y: "Y͢", Z: "Z͢"
  });

  // Style 2: Double Struck Circle Style
  addStyle('font', 'font_double_struck_circle', '', '', {
    a: "𝕒⃟", b: "𝕓⃟", c: "𝕔⃟", d: "𝕕⃟", e: "𝕖⃟", f: "𝕗⃟", g: "𝕘⃟", h: "𝕙⃟", i: "𝕚⃟", j: "𝕛⃟",
    k: "𝕜⃟", l: "𝕝⃟", m: "𝕞⃟", n: "𝕟⃟", o: "𝕠⃟", p: "𝕡⃟", q: "𝕢⃟", r: "𝕣⃟", s: "𝕤⃟", t: "𝕥⃟",
    u: "𝕦⃟", v: "𝕧⃟", w: "𝕨⃟", x: "𝕩⃟", y: "𝕪⃟", z: "𝕫⃟",
    A: "𝕒⃟", B: "𝕓⃟", C: "𝕔⃟", D: "𝕕⃟", E: "𝕖⃟", F: "𝕗⃟", G: "𝕘⃟", H: "𝕙⃟", I: "𝕚⃟", J: "𝕛⃟",
    K: "𝕜⃟", L: "𝕝⃟", M: "𝕞⃟", N: "𝕟⃟", O: "𝕠⃟", P: "𝕡⃟", Q: "𝕢⃟", R: "𝕣⃟", S: "𝕤⃟", T: "𝕥⃟",
    U: "𝕦⃟", V: "𝕧⃟", W: "𝕨⃟", X: "𝕩⃟", Y: "𝕪⃟", Z: "𝕫⃟"
  });

  // ============ GAMER STYLES ============
  addStyle('gamer', 'gamer_bold_sans_serif', '', '', {
    a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
    k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
    u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯",
    A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
    K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
    U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭"
  });

  // ============ LOVE STYLES ============
  addStyle('love', 'love_italic', '', '', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
    K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
    U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍"
  });

  // ============ FANCY STYLES ============
  addStyle('fancy', 'fancy_squared', '', '', {
    a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
    k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
    u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉",
    A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
    K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
    U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉"
  });

  // ============ FONT STYLES ============
  addStyle('font', 'font_sans_serif_italic', '', '', {
    a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
    k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
    u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
    A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
    K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
    U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
  });
  // ... yahan baaki ke 110 styles add karo ...
  // Optional success message
  // showToast("All styles loaded successfully!");

   // Initial load
  // Style 4: Egyptian Bold with Decoration
  addStyle('love', 'love_egyptian_bold', '𓆜⋆˚࿔⊹ ࣪', ' 𓆝⋆.˚﹏𓊝₊˚⊹', {
    a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
    k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
    u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ",
    A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
    K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
    U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ"
  });

  // Style 5: Circle with Underline Accent
  addStyle('love', 'love_circle_accent', '̤̮ ', ' ✔', {
    a: "🅐 ̤̮", b: "🅑 ̤̮", c: "🅒 ̤̮", d: "🅓 ̤̮", e: "🅔 ̤̮", f: "🅕 ̤̮", g: "🅖 ̤̮", h: "🅗 ̤̮", i: "🅘 ̤̮", j: "🅙 ̤̮",
    k: "🅚 ̤̮", l: "🅛 ̤̮", m: "🅜 ̤̮", n: "🅝 ☻", o: "🅞 ̤̮", p: "🅟 ̤̮", q: "🅠 ̤̮", r: "🅡 ̤̮", s: "🅢 ̤̮", t: "🅣 ̤̮",
    u: "🅤 ̤̮", v: "🅥 ̤̮", w: "🅦 ̤̮", x: "🅧 ̤̮", y: "🅨 ̤̮", z: "🅩 ̤̮",
    A: "🅐 ̤̮", B: "🅑 ̤̮", C: "🅒 ̤̮", D: "🅓 ̤̮", E: "🅔 ̤̮", F: "🅕 ̤̮", G: "🅖 ̤̮", H: "🅗 ̤̮", I: "🅘 ̤̮", J: "🅙 ̤̮",
    K: "🅚 ̤̮", L: "🅛 ̤̮", M: "🅜 ̤̮", N: "🅝 ☻", O: "🅞 ̤̮", P: "🅟 ̤̮", Q: "🅠 ̤̮", R: "🅡 ̤̮", S: "🅢 ̤̮", T: "🅣 ̤̮",
    U: "🅤 ̤̮", V: "🅥 ̤̮", W: "🅦 ̤̮", X: "🅧 ̤̮", Y: "🅨 ̤̮", Z: "🅩 ̤̮"
  });

  // Style 6: Double Struck with Star Decoration
  addStyle('love', 'love_double_struck_stars', '⊹˚₊𐙚', '𐙚₊˚⊹࿐', {
    a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
    k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
    u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
    A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
    K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
    U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ"
  });

  // Style 7: Bold Sans Serif with Cross Decoration
  addStyle('love', 'love_bold_sans_serif_cross', '—͟͞͞✰', 'ᯓ✈︎⋆ˎˊ˗', {
    a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷",
    k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁",
    u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇",
    A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
    K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
    U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭"
  });

  // Style 8: Superscript with Cross Decoration
  addStyle('love', 'love_superscript_cross', '—͟͞͞✞ ', ' ✞𓂃✍︎', {
    a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ", j: "ʲ",
    k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "ᑫ", r: "ʳ", s: "ˢ", t: "ᵗ",
    u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ",
    A: "ᴬ", B: "ᴮ", C: "ᶜ", D: "ᴰ", E: "ᴱ", F: "ᶠ", G: "ᴳ", H: "ᴴ", I: "ᴵ", J: "ᴶ",
    K: "ᴷ", L: "ᴸ", M: "ᴹ", N: "ᴺ", O: "ᴼ", P: "ᴾ", Q: "ᵠ", R: "ᴿ", S: "ˢ", T: "ᵀ",
    U: "ᵁ", V: "ⱽ", W: "ᵂ", X: "ˣ", Y: "ʸ", Z: "ᶻ"
  });
  
  // Style 1: Greek with Flower Decoration
  addStyle('fancy', 'fancy_greek_flower', '𐙚✿', '𐙚✿.࿐', {
    a: "Δ", b: "β", c: "C", d: "Đ", e: "Σ", f: "Ϝ", g: "Ꮆ", h: "Ħ", i: "I", j: "J",
    k: "К", l: "Ꮭ", m: "M", n: "П", o: "Ø", p: "Ƥ", q: "Ǫ", r: "Ŗ", s: "Ѕ", t: "Ͳ",
    u: "Ц", v: "Ѵ", w: "Ш", x: "X", y: "Ψ", z: "Ẕ",
    A: "Δ", B: "β", C: "C", D: "Đ", E: "Σ", F: "Ϝ", G: "Ꮆ", H: "Ħ", I: "I", J: "J",
    K: "К", L: "Ꮭ", M: "M", N: "П", O: "Ø", P: "Ƥ", Q: "Ǫ", R: "Ŗ", S: "Ѕ", T: "Ͳ",
    U: "Ц", V: "Ѵ", W: "Ш", X: "X", Y: "Ψ", Z: "Ẕ"
  });

  // Style 2: Circled with Butterfly Decoration
  addStyle('fancy', 'fancy_circled_butterfly', '༒➤⃝🦋', '➤⃝🦋༒', {
    a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
    k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
    u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ",
    A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
    K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
    U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ"
  });

  // Style 3: Monospace with Star Decoration
  addStyle('fancy', 'fancy_monospace_stars', '✨✗ ', ' ✗✨࿐', {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
    k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
    u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
    K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
    U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  });

  // Style 4: Sans Serif Italic with Symbol Frame
  addStyle('fancy', 'fancy_sans_serif_frame', '꧁●⃝⛧', '●⃝⛧꧂', {
    a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
    k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
    u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
    A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
    K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
    U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
  });

  // Style 5: Runic with Unicorn Decoration
  addStyle('fancy', 'fancy_runic_unicorn', '𐍆𐍆_', '_₊˚⊹🦄', {
    a: "𐌻", b: "𐌱", c: "𐌲", d: "𐌳", e: "𐌴", f: "𐍆", g: "𐌾", h: "𐌷", i: "𐌹", j: "𝙅",
    k: "𐌺", l: "𐍊", m: "𐌼", n: "𐌽", o: "𐍈", p: "𐍉", q: "𐍀", r: "𐍂", s: "𐍃", t: "𐍄",
    u: "𐍁", v: "𝙑", w: "𐍉", x: "𐍇", y: "𐍅", z: "𐌶",
    A: "𐌻", B: "𐌱", C: "𐌲", D: "𐌳", E: "𐌴", F: "𐍆", G: "𐌾", H: "𐌷", I: "𐌹", J: "𝙅",
    K: "𐌺", L: "𐍊", M: "𐌼", N: "𐌽", O: "𐍈", P: "𐍉", Q: "𐍀", R: "𐍂", S: "𐍃", T: "𐍄",
    U: "𐍁", V: "𝙑", W: "𐍉", X: "𐍇", Y: "𐍅", Z: "𐌶"
  });
  
  // Style 1: Sans Serif Italic with Symbol Prefix
  addStyle('gamer', 'gamer_sans_serif_symbol', 'T͢N͢ ☯', 'メ࿐', {
    a: "𝘢", b: "𝘣", c: "c", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
    k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
    u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
    A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
    K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
    U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
  });

  // Style 2: Small Caps OP Style
  addStyle('gamer', 'gamer_small_caps_op', 'ᴏᴘ メ', 'メ࿐', {
    a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
    k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
    u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
    A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
    K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
    U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
  });

  // Style 3: Currency Symbol Prefix
  addStyle('gamer', 'gamer_currency_prefix', '₦₲ ', ' ™', {
    a: "𝘢", b: "𝘣", c: "𝘤̆̈", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
    k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
    u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
    A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
    K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
    U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
  });

  // Style 4: Bold with Checkmark
  addStyle('gamer', 'gamer_bold_checkmark', '𝚼𝚻_', ' ✔', {
    a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "Ꮐ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
    k: "Ꮶ", l: "Ꮮ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "ᖶ",
    u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "Ꭹ", z: "ᘔ",
    A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "Ꮐ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
    K: "Ꮶ", L: "Ꮮ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "ᖶ",
    U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "Ꭹ", Z: "ᘔ"
  });

  // Style 5: Italic with Flower Decoration
  addStyle('gamer', 'gamer_italic_flower', '༒', ' ✿˚₊࿐ ᵒᵖ', {
    a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗",
    k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡",
    u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧",
    A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽",
    K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇",
    U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍"
  });

  // Style 6: Monospace with Number Suffix
  addStyle('gamer', 'gamer_monospace_number', 'ҩɴ ✗ ', ' ✗ ⁹⁹⁹', {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
    k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
    u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
    K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
    U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  });

  // Style 7: Strikethrough with Korean Symbol
  addStyle('gamer', 'gamer_strikethrough_korean', '𝚾- ', ' 모', {
    a: "a̷", b: "b̷", c: "c̷", d: "d̷", e: "e̷", f: "f̷", g: "g̷", h: "h̷", i: "i̷", j: "j̷",
    k: "k̷", l: "l̷", m: "m̷", n: "n̷", o: "o̷", p: "p̷", q: "q̷", r: "r̷", s: "s̷", t: "t̷",
    u: "u̷", v: "v̷", w: "w̷", x: "x̷", y: "y̷", z: "z̷",
    A: "A̷̷", B: "B̷̷", C: "C̷̷", D: "D̷̷", E: "E̷̷", F: "F̷̷", G: "G̷̷", H: "H̷̷", I: "I̷̷", J: "J̷̷",
    K: "K̷̷", L: "L̷̷", M: "M̷̷", N: "N̷̷", O: "O̷̷", P: "P̷̷", Q: "Q̷̷", R: "R̷̷", S: "S̷̷", T: "T̷̷",
    U: "U̷̷", V: "V̷̷", W: "W̷̷", X: "X̷̷", Y: "Y̷̷", Z: "Z̷̷"
  });

  // Style 8: Superscript Circle with Frame
  addStyle('gamer', 'gamer_superscript_circle_frame', '꧁✞ ', ' ✞꧂', {
    a: "ᵃ͎", b: "ᵇ͎", c: "ᶜ͎", d: "ᵈ͎", e: "ᵉ͎", f: "ᶠ͎", g: "ᵍ͎", h: "ʰ͎", i: "ⁱ͎", j: "ʲ͎",
    k: "ᵏ͎", l: "ˡ͎", m: "ᵐ͎", n: "ⁿ͎", o: "ᵒ͎", p: "ᵖ͎", q: "ᑫ͎", r: "ʳ͎", s: "ˢ͎", t: "ᵗ͎",
    u: "ᵘ͎", v: "ᵛ͎", w: "ʷ͎", x: "ˣ͎", y: "ʸ͎", z: "ᶻ͎",
    A: "ᴬ͎", B: "ᴮ͎", C: "ᶜ͎", D: "ᴰ͎", E: "ᴱ͎", F: "ᶠ͎", G: "ᴳ͎", H: "ᴴ͎", I: "ᴵ͎", J: "ᴶ͎",
    K: "ᴷ͎", L: "ᴸ͎", M: "ᴹ͎", N: "ᴺ͎", O: "ᴼ͎", P: "ᴾ͎", Q: "ᵠ͎", R: "ᴿ͎", S: "ˢ͎", T: "ᵀ͎",
    U: "ᵁ͎", V: "ⱽ͎", W: "ᵂ͎", X: "ˣ͎", Y: "ʸ͎", Z: "ᶻ͎"
  });

  // Style 9: Greek Small Simple
  addStyle('gamer', 'gamer_greek_simple', 'ˢⁱᵐᵖˡᵉ✗', '✗ˎˊ˗࿐', {
    a: "α", b: "в", c: "c", d: "ɗ", e: "ε", f: "ƒ", g: "ɠ", h: "н", i: "ɪ", j: "נ",
    k: "κ", l: "ℓ", m: "м", n: "η", o: "σ", p: "ρ", q: "զ", r: "я", s: "ѕ", t: "τ",
    u: "υ", v: "ν", w: "ω", x: "χ", y: "γ", z: "ƶ",
    A: "α", B: "в", C: "c", D: "ɗ", E: "ε", F: "ƒ", G: "ɠ", H: "н", I: "ɪ", J: "נ",
    K: "κ", L: "ℓ", M: "м", N: "η", O: "σ", P: "ρ", Q: "զ", R: "я", S: "ѕ", T: "τ",
    U: "υ", V: "ν", W: "ω", X: "χ", Y: "γ", Z: "ƶ"
  });

  // Style 10: Circle Accent with Star Frame
  addStyle('gamer', 'gamer_circle_accent_stars', '༒✰ ', '✰༒', {
    a: "̤̮🅐", b: "̤̮🅑", c: "̤̮🅒", d: "̤̮🅓", e: "̤̮🅔", f: "̤̮🅕", g: "̤̮🅖", h: "̤̮🅗", i: "̤̮🅘", j: "̤̮🅙",
    k: "̤̮🅚", l: "̤̮🅛", m: "̤̮🅜", n: "̤̮🅝 ☻", o: "̤̮🅞", p: "̤̮🅟", q: "̤̮🅠", r: "̤̮🅡", s: "̤̮🅢", t: "̤̮🅣",
    u: "̤̮🅤", v: "̤̮🅥", w: "̤̮🅦", x: "̤̮🅧", y: "̤̮🅨", z: "̤̮🅩",
    A: "̤̮🅐", B: "̤̮🅑", C: "̤̮🅒", D: "̤̮🅓", E: "̤̮🅔", F: "̤̮🅕", G: "̤̮🅖", H: "̤̮🅗", I: "̤̮🅘", J: "̤̮🅙",
    K: "̤̮🅚", L: "̤̮🅛", M: "̤̮🅜", N: "̤̮🅝 ☻", O: "̤̮🅞", P: "̤̮🅟", Q: "̤̮🅠", R: "̤̮🅡", S: "̤̮🅢", T: "̤̮🅣",
    U: "̤̮🅤", V: "̤̮🅥", W: "̤̮🅦", X: "̤̮🅧", Y: "̤̮🅨", Z: "̤̮🅩"
  });
  
  // Frame Symbols - All 40 pairs
  addMultipleSymbols('frames', [
    {symbol: '❮', name: 'Left Angle'},
    {symbol: '❯', name: 'Right Angle'},
    {symbol: '︻', name: 'Left Gun'},
    {symbol: '︼', name: 'Right Gun'},
    {symbol: '⫷', name: 'Left Triple'},
    {symbol: '⫸', name: 'Right Triple'},
    {symbol: '《', name: 'Left Book'},
    {symbol: '》', name: 'Right Book'},
    {symbol: '«', name: 'Left Double'},
    {symbol: '»', name: 'Right Double'},
    {symbol: '【', name: 'Left Bracket'},
    {symbol: '】', name: 'Right Bracket'},
    {symbol: '〖', name: 'Left White Bracket'},
    {symbol: '〗', name: 'Right White Bracket'},
    {symbol: '『', name: 'Left Corner'},
    {symbol: '』', name: 'Right Corner'},
    {symbol: '❰', name: 'Heavy Left'},
    {symbol: '❱', name: 'Heavy Right'},
    {symbol: '⟦', name: 'Double Left'},
    {symbol: '⟧', name: 'Double Right'},
    {symbol: '⟬', name: 'White Left'},
    {symbol: '⟭', name: 'White Right'},
    {symbol: '⪻', name: 'Small Left'},
    {symbol: '⪼', name: 'Small Right'},
    {symbol: '⧼', name: 'Angle Left'},
    {symbol: '⧽', name: 'Angle Right'},
    {symbol: '═', name: 'Double Line'},
    {symbol: '▌', name: 'Left Half Block'},
    {symbol: '▐', name: 'Right Half Block'},
    {symbol: '╚', name: 'Bottom Left Corner'},
    {symbol: '╝', name: 'Bottom Right Corner'},
    {symbol: '⎛', name: 'Top Left Parenthesis'},
    {symbol: '⎞', name: 'Top Right Parenthesis'},
    {symbol: '⎜', name: 'Left Parenthesis'},
    {symbol: '⎟', name: 'Right Parenthesis'},
    {symbol: '⎝', name: 'Bottom Left Parenthesis'},
    {symbol: '⎠', name: 'Bottom Right Parenthesis'},
    {symbol: '⩸', name: 'Circle Left'},
    {symbol: '⩹', name: 'Circle Right'},
    {symbol: '⟊', name: 'Diamond Left'},
    {symbol: '⟉', name: 'Diamond Right'},
    {symbol: '✦', name: 'Black Star'},
    {symbol: '✧', name: 'White Star'},
    {symbol: '✩', name: 'Outline Star'},
    {symbol: '✪', name: 'Circle Star'},
    {symbol: '✫', name: 'Open Star'},
    {symbol: '✬', name: 'Black Center Star'},
    {symbol: '❂', name: 'Circled Star'},
    {symbol: '❃', name: 'Heavy Star'},
    {symbol: '✹', name: 'Four Star'},
    {symbol: '✸', name: 'Heavy Asterisk'},
    {symbol: '✺', name: 'Six Point Star'},
    {symbol: '✻', name: 'Eight Point Star'},
    {symbol: '✼', name: 'Sparkle Star'},
    {symbol: '✽', name: 'Heavy Sparkle'},
    {symbol: '☌', name: 'Conjunction'},
    {symbol: '☍', name: 'Opposition'},
    {symbol: '☽', name: 'Waxing Moon'},
    {symbol: '☾', name: 'Waning Moon'},
    {symbol: '𐌗', name: 'Old X'},
    {symbol: '𐌘', name: 'Old Phi'},
    {symbol: '〔', name: 'Tortoise Shell Left'},
    {symbol: '〕', name: 'Tortoise Shell Right'},
    {symbol: '⦃', name: 'White Curly Left'},
    {symbol: '⦄', name: 'White Curly Right'},
    {symbol: '⦇', name: 'White Parenthesis Left'},
    {symbol: '⦈', name: 'White Parenthesis Right'},
    {symbol: '⧈', name: 'Square with X'},
    {symbol: '⧉', name: 'Square with Dot'},
    {symbol: '⋖', name: 'Less Than with Dot'},
    {symbol: '⋗', name: 'Greater Than with Dot'},
    {symbol: '⧘', name: 'Left Wiggly'},
    {symbol: '⧙', name: 'Right Wiggly'},
    {symbol: '⪢', name: 'Double Greater Than'},
    {symbol: '⪡', name: 'Double Less Than'},
    {symbol: '⥊', name: 'Left Fish Tail'},
    {symbol: '⥋', name: 'Right Fish Tail'}
  ]);
  
}); // ← BILKUL LAST LINE
