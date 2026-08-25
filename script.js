// ============================================================
//  SCRIPT.JS – All logic, uses data from data.js
// ============================================================

// ---- DOM refs ----
const nameInput = document.getElementById('nameInput');
const generateBtn = document.getElementById('generateBtn');
const resultsGrid = document.getElementById('resultsGrid');
const resultsCount = document.getElementById('resultsCount');
const categoryTabs = document.querySelectorAll('.cat-tab');
const scrollWrappers = document.querySelectorAll('.category-scroll');

// ---- Helpers ----
function getActiveCategory() {
    const activeTab = document.querySelector('.cat-tab.active');
    return activeTab ? activeTab.dataset.cat : 'love';
}

function getCurrentName() {
    return nameInput.value.trim() || 'Name';
}

// ---- Generate styles ----
function generateStyles() {
    const name = getCurrentName();
    if (!name || name === 'Name') {
        nameInput.focus();
        nameInput.style.borderColor = '#ff6b6b';
        setTimeout(() => nameInput.style.borderColor = '', 1000);
        return;
    }

    const category = getActiveCategory();
    const patterns = window.STYLE_PATTERNS[category] || window.STYLE_PATTERNS.love;
    
    // Replace {name} placeholder with actual name
    const styles = patterns.map(p => p.replace(/{name}/g, name));
    
    displayResults(styles);
}

// ---- Display results ----
function displayResults(styles) {
    if (!resultsGrid) return;
    
    if (!styles || styles.length === 0) {
        resultsGrid.innerHTML = `<div class="empty-state">
            <i class="fas fa-magic"></i>
            <p>No styles generated. Try a different name or category!</p>
        </div>`;
        if (resultsCount) resultsCount.textContent = '0';
        return;
    }

    resultsGrid.innerHTML = styles.map(s => `
        <div class="result-card" data-style="${s.replace(/"/g, '&quot;')}">
            <span class="result-text">${s}</span>
            <button class="copy-result" title="Copy"><i class="fas fa-copy"></i></button>
        </div>
    `).join('');

    if (resultsCount) resultsCount.textContent = styles.length;

    // Attach copy events
    resultsGrid.querySelectorAll('.copy-result').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.result-card');
            const text = card.dataset.style || '';
            copyToClipboard(text, this);
        });
    });

    resultsGrid.querySelectorAll('.result-card').forEach(card => {
        card.addEventListener('click', function() {
            const text = this.dataset.style || '';
            const btn = this.querySelector('.copy-result');
            copyToClipboard(text, btn);
        });
    });
}

// ---- Copy helpers ----
function copyToClipboard(text, btn) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showCopySuccess(btn);
        }).catch(() => {
            fallbackCopy(text, btn);
        });
    } else {
        fallbackCopy(text, btn);
    }
}

function fallbackCopy(text, btn) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
        document.execCommand('copy');
        showCopySuccess(btn);
    } catch (e) {
        alert('Copy failed. Please copy manually:\n' + text);
    }
    ta.remove();
}

function showCopySuccess(btn) {
    if (btn) {
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => { btn.innerHTML = original; }, 1500);
    }
}

// ---- Render example cards in scroll containers ----
function renderExamples() {
    const data = window.EXAMPLE_DATA || {};
    const name = getCurrentName();
    
    Object.keys(data).forEach(category => {
        const container = document.getElementById('scroll' + category.charAt(0).toUpperCase() + category.slice(1));
        if (!container) return;
        const styles = data[category] || [];
        container.innerHTML = styles.map(p => {
            const displayText = p.replace(/{name}/g, name);
            return `<div class="example-card" data-style="${displayText.replace(/"/g, '&quot;')}">
                        <span class="example-text">${displayText}</span>
                        <button class="copy-example" title="Copy"><i class="fas fa-copy"></i></button>
                    </div>`;
        }).join('');

        // Copy events for example cards
        container.querySelectorAll('.copy-example').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const card = this.closest('.example-card');
                const text = card.dataset.style || '';
                copyToClipboard(text, this);
            });
        });

        container.querySelectorAll('.example-card').forEach(card => {
            card.addEventListener('click', function() {
                const text = this.dataset.style || '';
                const btn = this.querySelector('.copy-example');
                copyToClipboard(text, btn);
            });
        });
    });
}

// ---- Switch category ----
function switchCategory(cat) {
    // Update tabs
    categoryTabs.forEach(t => t.classList.toggle('active', t.dataset.cat === cat));
    // Update scroll containers
    scrollWrappers.forEach(w => w.classList.toggle('active', w.dataset.cat === cat));
    // Re-render examples (in case name changed)
    renderExamples();
    // If there's a name, regenerate results
    if (nameInput.value.trim()) {
        generateStyles();
    }
}

// ---- Set example name (from hint clicks) ----
window.setExample = function(name) {
    nameInput.value = name;
    nameInput.focus();
    generateStyles();
    renderExamples(); // update examples to show the new name
};

// ---- Initialize ----
function init() {
    // Set default active category
    const firstTab = document.querySelector('.cat-tab');
    if (firstTab) {
        switchCategory(firstTab.dataset.cat);
    }
    // Render examples initially
    renderExamples();
    // If there's a name pre-filled, generate
    if (nameInput.value.trim()) {
        generateStyles();
    }
}

// ---- Event listeners ----
generateBtn.addEventListener('click', generateStyles);

nameInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        generateStyles();
    }
});

// Debounced re-render examples when typing
let debounceTimer;
nameInput.addEventListener('input', function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        if (this.value.trim()) {
            renderExamples();
        }
    }, 300);
});

// Category tab clicks
categoryTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const cat = this.dataset.cat;
        switchCategory(cat);
    });
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', () => {
        scrollTopBtn.style.display = window.scrollY > 400 ? 'flex' : 'none';
    });
    scrollTopBtn.style.display = 'none';
}

// ---- Expose functions globally (for inline event handlers) ----
window.generateStyles = generateStyles;
window.switchCategory = switchCategory;

// ---- Start ----
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
