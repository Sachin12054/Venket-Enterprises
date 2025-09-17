/**
 * ======================================
 * GLOBAL THEME MANAGEMENT SYSTEM
 * Unified dark/light mode for all pages
 * ======================================
 */

class ThemeManager {
    constructor() {
        this.storageKey = 'venkat-enterprises-theme';
        this.currentTheme = this.getStoredTheme();
        this.init();
    }

    init() {
        // Apply theme immediately to prevent flash
        this.applyTheme(this.currentTheme);
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupThemeToggle();
                this.setupThemeIcon();
            });
        } else {
            this.setupThemeToggle();
            this.setupThemeIcon();
        }

        // Listen for theme changes from other pages
        window.addEventListener('storage', (e) => {
            if (e.key === this.storageKey) {
                this.currentTheme = e.newValue || 'light';
                this.applyTheme(this.currentTheme);
                this.updateThemeIcon();
            }
        });
    }

    getStoredTheme() {
        // Check localStorage first
        const stored = localStorage.getItem(this.storageKey);
        if (stored) return stored;
        
        // Fallback to system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        
        return 'light';
    }

    applyTheme(theme) {
        document.documentElement.classList.toggle('dark-theme', theme === 'dark');
        document.body.classList.toggle('dark-theme', theme === 'dark');
        
        // Update meta theme-color for mobile browsers
        this.updateMetaThemeColor(theme);
    }

    updateMetaThemeColor(theme) {
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.name = 'theme-color';
            document.head.appendChild(metaThemeColor);
        }
        
        metaThemeColor.content = theme === 'dark' ? '#212529' : '#ffffff';
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }

    setupThemeIcon() {
        this.updateThemeIcon();
    }

    updateThemeIcon() {
        const themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) return;

        const moonIcon = themeToggle.querySelector('.icon-moon');
        const sunIcon = themeToggle.querySelector('.icon-sun');
        
        if (moonIcon && sunIcon) {
            if (this.currentTheme === 'dark') {
                moonIcon.style.display = 'none';
                sunIcon.style.display = 'block';
            } else {
                moonIcon.style.display = 'block';
                sunIcon.style.display = 'none';
            }
        } else {
            // Fallback for simple icon toggle
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = this.currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
        this.saveTheme();
        this.updateThemeIcon();
        
        // Add smooth transition effect
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    saveTheme() {
        localStorage.setItem(this.storageKey, this.currentTheme);
    }

    getCurrentTheme() {
        return this.currentTheme;
    }

    setTheme(theme) {
        if (theme !== 'light' && theme !== 'dark') return;
        
        this.currentTheme = theme;
        this.applyTheme(theme);
        this.saveTheme();
        this.updateThemeIcon();
    }
}

// Initialize theme manager immediately
window.themeManager = new ThemeManager();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThemeManager;
}