// Ekstra JavaScript fonksiyonları

// Analytics tracking (isteğe bağlı)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// Search enhancement
if (typeof docsify !== 'undefined') {
    window.$docsify = window.$docsify || {};
    window.$docsify.search = {
        maxAge: 86400000, // 1 day
        paths: 'auto',
        placeholder: 'Ara...',
        noData: 'Sonuç bulunamadı.',
        depth: 6
    };
}

// Progress bar
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    let progressBar = document.querySelector('.reading-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        document.body.appendChild(progressBar);
    }
    
    progressBar.style.width = scrolled + '%';
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // '/' tuşu ile search focus
    if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        const searchInput = document.querySelector('[type="search"]');
        if (searchInput) searchInput.focus();
    }
    
    // Escape ile search blur
    if (e.key === 'Escape') {
        const active = document.activeElement;
        if (active && active.type === 'search') {
            active.blur();
        }
    }
});

// Toast notifications
window.showToast = function(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
};

// Form validation helper
window.validateEmail = function(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Debounce function
window.debounce = function(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};