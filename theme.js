/**
 * Mixes two RGB colors by a given percentage.
 * @param {string} color1 - First color in rgb(...) or hex format
 * @param {number} percent - Percentage of color1 (0-100)
 * @param {string} color2 - Second color in hex format (base)
 * @returns {string} - Resulting hex color
 */
function mixColors(color1, percent, color2) {
    const rgb1Match = color1.match(/\d+/g);
    if (!rgb1Match || rgb1Match.length < 3) return color2; // Fallback
    const r1 = parseInt(rgb1Match[0]);
    const g1 = parseInt(rgb1Match[1]);
    const b1 = parseInt(rgb1Match[2]);

    const r2 = parseInt(color2.slice(1, 3), 16);
    const g2 = parseInt(color2.slice(3, 5), 16);
    const b2 = parseInt(color2.slice(5, 7), 16);

    const ratio = percent / 100;
    const r = Math.round(r1 * ratio + r2 * (1 - ratio));
    const g = Math.round(g1 * ratio + g2 * (1 - ratio));
    const b = Math.round(b1 * ratio + b2 * (1 - ratio));

    const toHex = (n) => n.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Get contrasting text color (black or white) for a given hex background
 */
function getContrastColor(hexColor) {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? '#000000' : '#FFFFFF';
}

/**
 * Apply a custom accent color to the theme
 */
function applyCustomAccent(hexColor) {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    const contrastColor = getContrastColor(hexColor);

    const root = document.documentElement;

    const mixBase = '#050505'; 

    root.style.setProperty('--md-sys-color-primary', rgbColor);
    root.style.setProperty('--md-sys-color-on-primary', contrastColor);
    root.style.setProperty('--md-sys-color-primary-container', mixColors(rgbColor, 30, mixBase));
    root.style.setProperty('--md-sys-color-on-primary-container', mixColors(rgbColor, 90, '#ffffff'));
    root.style.setProperty('--md-sys-color-surface-container', mixColors(rgbColor, 12, mixBase));
    root.style.setProperty('--md-sys-color-surface-container-low', mixColors(rgbColor, 8, mixBase));
    root.style.setProperty('--md-sys-color-surface-container-high', mixColors(rgbColor, 16, mixBase));
    root.style.setProperty('--md-sys-color-surface-container-highest', mixColors(rgbColor, 22, mixBase));

    root.style.setProperty('--md-sys-color-secondary-container', mixColors(rgbColor, 25, mixBase));
    root.style.setProperty('--md-sys-color-on-secondary-container', mixColors(rgbColor, 90, '#FFFFFF'));

    root.style.setProperty('--md-sys-color-outline', mixColors(rgbColor, 30, '#938F99'));
    root.style.setProperty('--md-sys-color-outline-variant', mixColors(rgbColor, 20, '#49454F'));

    const tintedBackground = mixColors(rgbColor, 6, mixBase);
    const darkGradientStart = mixColors(rgbColor, 20, mixBase);

    root.style.setProperty('--md-sys-color-background', tintedBackground);
    root.style.setProperty('--md-sys-color-surface', tintedBackground);
    root.style.setProperty('--gradient-surface', `radial-gradient(circle at top right, ${darkGradientStart}, ${tintedBackground} 70%)`);

    root.style.setProperty('--md-sys-color-tertiary', mixColors(rgbColor, 50, '#A6C8FF'));

    const metaThemeColor = document.querySelector('meta[name="theme-color"]:not([media])');
    const isLightMode = localStorage.getItem('theme') === 'light' || (document.body && document.body.classList.contains('light-mode'));
    if (metaThemeColor && !isLightMode) {
        metaThemeColor.content = tintedBackground;
    }

    let styleTag = document.getElementById('dynamic-theme-styles');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'dynamic-theme-styles';
        // Check if head exists since this runs before document loaded potentially
        if (document.head) {
            document.head.appendChild(styleTag);
        } else {
            document.documentElement.appendChild(styleTag);
        }
    }

    const lightPrimary = rgbColor;
    const lightOnPrimary = contrastColor; 
    const lightPrimaryContainer = mixColors(rgbColor, 25, '#ffffff');
    const lightOnPrimaryContainer = mixColors(rgbColor, 90, '#000000');
    const lightSecondaryContainer = mixColors(rgbColor, 15, '#E1E3E8');
    const lightBackground = mixColors(rgbColor, 5, '#FDFBFF');
    const lightSidebar = mixColors(rgbColor, 3, '#F6F8FC');
    const lightTableHeader = mixColors(rgbColor, 6, '#F0F4F9');
    const lightRowHeader = mixColors(rgbColor, 4, '#F6F8FC');
    const lightSearchBox = mixColors(rgbColor, 8, '#F5F5F5');
    const lightGradientStart = mixColors(rgbColor, 15, '#EBF0F8');

    styleTag.innerHTML = `
        body.light-mode {
            --md-sys-color-primary: ${lightPrimary};
            --md-sys-color-on-primary: ${lightOnPrimary};
            --md-sys-color-primary-container: ${lightPrimaryContainer};
            --md-sys-color-on-primary-container: ${lightOnPrimaryContainer};
            --md-sys-color-secondary-container: ${lightSecondaryContainer};
            --md-sys-color-background: ${lightBackground};
            --md-sys-color-surface: ${lightBackground};
            --gradient-surface: radial-gradient(circle at top right, ${lightGradientStart}, ${lightBackground} 70%);
        }
        
        body.light-mode .sidebar { background-color: ${lightSidebar} !important; }
        body.light-mode .chip-table thead th { background-color: ${lightTableHeader} !important; }
        body.light-mode .chip-table .row-header { background-color: ${lightRowHeader} !important; }
        body.light-mode .search-box { background-color: ${lightSearchBox} !important; }
    `;

    console.log('ReptDoc: Custom accent applied:', hexColor);
}

/**
 * Remove custom accent and restore default brand colors
 */
function removeCustomAccent() {
    // globalSystemAccent = null; // Removed undefined var reference
    const root = document.documentElement;

    root.style.removeProperty('--md-sys-color-primary');
    root.style.removeProperty('--md-sys-color-on-primary');
    root.style.removeProperty('--md-sys-color-primary-container');
    root.style.removeProperty('--md-sys-color-on-primary-container');
    root.style.removeProperty('--md-sys-color-surface-container');
    root.style.removeProperty('--md-sys-color-surface-container-low');
    root.style.removeProperty('--md-sys-color-surface-container-high');
    root.style.removeProperty('--md-sys-color-surface-container-highest');
    root.style.removeProperty('--md-sys-color-secondary-container');
    root.style.removeProperty('--md-sys-color-on-secondary-container');
    root.style.removeProperty('--md-sys-color-outline');
    root.style.removeProperty('--md-sys-color-outline-variant');
    root.style.removeProperty('--md-sys-color-background');
    root.style.removeProperty('--md-sys-color-surface');
    root.style.removeProperty('--gradient-surface');
    root.style.removeProperty('--md-sys-color-tertiary');

    const styleTag = document.getElementById('dynamic-theme-styles');
    if (styleTag) {
        styleTag.remove();
    }

    const metaThemeColor = document.querySelector('meta[name="theme-color"]:not([media])');
    const isLightMode = localStorage.getItem('theme') === 'light' || (document.body && document.body.classList.contains('light-mode'));
    if (metaThemeColor && !isLightMode) {
        metaThemeColor.content = '#12100E';
    }

    console.log('ReptDoc: Accent reset to default');
}

// Theme Toggle Logic
function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    const updateMetaColor = (isLight) => {
        let meta = document.querySelector('meta[name="theme-color"]:not([media])');
        if (!meta) {
            document.querySelectorAll('meta[name="theme-color"]').forEach(m => m.remove());
            meta = document.createElement('meta');
            meta.name = 'theme-color';
            document.head.appendChild(meta);
        }
        
        // If Custom Accent Enabled, don't overwrite meta for dark mode!
        const isAccentEnabled = localStorage.getItem('reptdoc_accent_enabled') === 'true';
        if (isAccentEnabled && !isLight) {
            // Already handled by applyCustomAccent
            return;
        }
        meta.content = isLight ? '#FDFBFF' : '#12100E';
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        const icon = toggle.querySelector('.material-icons-round');
        if (icon) icon.textContent = 'light_mode';
        updateMetaColor(true);
    } else {
        updateMetaColor(false);
    }

    toggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const icon = toggle.querySelector('.material-icons-round');
        const isLight = document.body.classList.contains('light-mode');

        updateMetaColor(isLight);

        if (isLight) {
            if (icon) icon.textContent = 'light_mode';
            localStorage.setItem('theme', 'light');
        } else {
            if (icon) icon.textContent = 'dark_mode';
            localStorage.setItem('theme', 'dark');
        }
    });
}

// Automatically apply Custom Accent during parsing script (in <head>)
(function() {
    const isAccentEnabled = localStorage.getItem('reptdoc_accent_enabled') === 'true';
    const savedAccent = localStorage.getItem('reptdoc_accent');
    if (isAccentEnabled && savedAccent) {
        applyCustomAccent(savedAccent);
    }
})();
