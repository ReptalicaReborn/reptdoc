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
    if (!hexColor) return;
    
    // Normalize hexColor
    const hex = hexColor.toUpperCase();
    
    // Determine colors for both modes independently
    // This prevents "locking" the theme into one color scheme
    let darkThemeHex = hex;
    let lightThemeHex = hex;

    // Intelligent High-Contrast Monochrome for both modes
    if (hex === '#FFFFFF') {
        lightThemeHex = '#1A1C1E'; // Use dark gray instead of pure black for better look
    }
    if (hex === '#000000') {
        darkThemeHex = '#E6C275'; // Fallback to brand gold for dark mode if black picked
    }

    const root = document.documentElement;
    const mixBaseDark = '#050505'; 
    const mixBaseLight = '#ffffff';

    // 1. Apply Dark Mode Colors (to :root)
    const rD = parseInt(darkThemeHex.slice(1, 3), 16);
    const gD = parseInt(darkThemeHex.slice(3, 5), 16);
    const bD = parseInt(darkThemeHex.slice(5, 7), 16);
    const rgbDark = `rgb(${rD}, ${gD}, ${bD})`;
    const contrastDark = getContrastColor(darkThemeHex);

    root.style.setProperty('--md-sys-color-primary', rgbDark);
    root.style.setProperty('--md-sys-color-on-primary', contrastDark);
    root.style.setProperty('--md-sys-color-primary-container', mixColors(rgbDark, 30, mixBaseDark));
    root.style.setProperty('--md-sys-color-on-primary-container', mixColors(rgbDark, 90, '#ffffff'));
    root.style.setProperty('--md-sys-color-surface-container', mixColors(rgbDark, 12, mixBaseDark));
    root.style.setProperty('--md-sys-color-surface-container-low', mixColors(rgbDark, 8, mixBaseDark));
    root.style.setProperty('--md-sys-color-surface-container-high', mixColors(rgbDark, 16, mixBaseDark));
    root.style.setProperty('--md-sys-color-surface-container-highest', mixColors(rgbDark, 22, mixBaseDark));
    root.style.setProperty('--md-sys-color-secondary-container', mixColors(rgbDark, 25, mixBaseDark));
    root.style.setProperty('--md-sys-color-on-secondary-container', mixColors(rgbDark, 90, '#FFFFFF'));
    root.style.setProperty('--md-sys-color-outline', mixColors(rgbDark, 30, '#938F99'));
    root.style.setProperty('--md-sys-color-outline-variant', mixColors(rgbDark, 20, '#49454F'));

    const tintedBackgroundDark = mixColors(rgbDark, 6, mixBaseDark);
    const darkGradientStart = mixColors(rgbDark, 20, mixBaseDark);
    root.style.setProperty('--md-sys-color-background', tintedBackgroundDark);
    root.style.setProperty('--md-sys-color-surface', tintedBackgroundDark);
    root.style.setProperty('--gradient-surface', `radial-gradient(circle at top right, ${darkGradientStart}, ${tintedBackgroundDark} 70%)`);
    root.style.setProperty('--md-sys-color-tertiary', mixColors(rgbDark, 50, '#A6C8FF'));

    // 2. Apply Light Mode Colors (via dynamic <style> tag)
    const rL = parseInt(lightThemeHex.slice(1, 3), 16);
    const gL = parseInt(lightThemeHex.slice(3, 5), 16);
    const bL = parseInt(lightThemeHex.slice(5, 7), 16);
    const rgbLight = `rgb(${rL}, ${gL}, ${bL})`;
    const contrastLight = getContrastColor(lightThemeHex);

    let styleTag = document.getElementById('dynamic-theme-styles');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'dynamic-theme-styles';
        (document.head || document.documentElement).appendChild(styleTag);
    }

    const lightPrimary = rgbLight;
    const lightOnPrimary = contrastLight; 
    const lightPrimaryContainer = mixColors(rgbLight, 25, '#ffffff');
    const lightOnPrimaryContainer = mixColors(rgbLight, 90, '#000000');
    const lightSecondaryContainer = mixColors(rgbLight, 15, '#E1E3E8');
    const lightBackground = mixColors(rgbLight, 12, '#FDFBFF');
    const lightSidebar = mixColors(rgbLight, 8, '#F6F8FC');
    const lightTableHeader = mixColors(rgbLight, 15, '#F0F4F9');
    const lightRowHeader = mixColors(rgbLight, 10, '#F6F8FC');
    const lightSearchBox = mixColors(rgbLight, 18, '#F5F5F5');
    const lightGradientStart = mixColors(rgbLight, 28, '#EBF0F8');

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

        /* Fix for breadcrumbs and other light-mode hardcoded items */
        body.light-mode .breadcrumbs { background: ${mixColors(rgbLight, 5, '#FFFFFF')} !important; }
    `;

    // 3. Update Meta Theme Color
    const isLightMode = document.body.classList.contains('light-mode');
    const metaThemeColor = document.querySelector('meta[name="theme-color"]:not([media])');
    if (metaThemeColor) {
        metaThemeColor.content = isLightMode ? lightBackground : tintedBackgroundDark;
    }

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

        // Re-apply Accent if enabled to update meta-tag and any dynamic tints
        const isAccentEnabled = localStorage.getItem('reptdoc_accent_enabled') === 'true';
        if (isAccentEnabled) {
            const savedAccent = localStorage.getItem('reptdoc_accent');
            if (savedAccent) applyCustomAccent(savedAccent);
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
