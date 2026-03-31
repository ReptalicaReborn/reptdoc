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
    const body = document.body;
    if (body) {
        const isLightMode = body.classList.contains('light-mode');
        const metaThemeColor = document.querySelector('meta[name="theme-color"]:not([media])');
        if (metaThemeColor) {
            metaThemeColor.content = isLightMode ? lightBackground : tintedBackgroundDark;
        }
    }

    // console.log('ReptDoc: Custom accent applied:', hexColor);
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
        const icon = toggle.querySelector('.material-icons-round');
        window.toggleTheme(icon);
    });
}

window.toggleTheme = function (clickedElement) {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');

    // Update all theme-related icons in the app (header and settings modal)
    document.querySelectorAll('#theme-toggle .material-icons-round, #modal-theme-toggle .material-icons-round').forEach(i => {
        i.textContent = isLight ? 'light_mode' : 'dark_mode';
    });

    // Update text label in settings modal if it exists
    const modalToggleLabel = document.querySelector('#modal-theme-toggle span:not(.material-icons-round)');
    if (modalToggleLabel && typeof window.t === 'function') {
        modalToggleLabel.textContent = isLight ? (window.t('light_mode') || 'Light') : (window.t('dark_mode') || 'Dark');
    }

    // Update Meta
    const updateMetaColor = (isLight) => {
        let meta = document.querySelector('meta[name="theme-color"]:not([media])');
        if (!meta) {
            document.querySelectorAll('meta[name="theme-color"]').forEach(m => m.remove());
            meta = document.createElement('meta');
            meta.name = 'theme-color';
            document.head.appendChild(meta);
        }

        const isAccentEnabled = localStorage.getItem('reptdoc_accent_enabled') === 'true';
        if (isAccentEnabled && !isLight) {
            // Apply accent-based dark background if accent is enabled
            const savedAccent = localStorage.getItem('reptdoc_accent');
            if (savedAccent) {
                // Approximate the tinted background logic
                meta.content = '#1C1915'; // Fallback to a dark-tinted neutral
            } else {
                meta.content = '#12100E';
            }
        } else {
            meta.content = isLight ? '#FDFBFF' : '#12100E';
        }
    };
    updateMetaColor(isLight);

    if (isLight) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }

    // Re-apply Trans Pride or Accent if enabled (handles variable updates for the new mode)
    const isTransPride = localStorage.getItem('reptdoc_trans_pride') === 'true' ||
        (localStorage.getItem('reptdoc_trans_pride') !== 'false' && isTransAwarenessDate());

    if (isTransPride) {
        applyTransPrideTheme();
    } else {
        const isAccentEnabled = localStorage.getItem('reptdoc_accent_enabled') === 'true';
        if (isAccentEnabled) {
            const savedAccent = localStorage.getItem('reptdoc_accent');
            if (savedAccent) applyCustomAccent(savedAccent);
        }
    }
}

/**
 * Apply special Trans Pride multi-color theme
 * Uses the transgender flag colors: Light Blue (#55CDFC), Pink (#F7A8B8), White (#FFFFFF)
 */
function applyTransPrideTheme() {
    const root = document.documentElement;
    const isLight = localStorage.getItem('theme') === 'light';

    // Trans flag colors
    const transBlue = '#55CDFC';
    const transPink = '#F7A8B8';
    const transWhite = '#FFFFFF';

    // Add the class for CSS animations and decorations
    document.documentElement.classList.add('trans-pride-theme');

    if (!isLight) {
        // --- DARK MODE ---
        const mixBaseDark = '#050505';
        const rgbPink = `rgb(247, 168, 184)`;
        const rgbBlue = `rgb(85, 205, 252)`;

        root.style.setProperty('--md-sys-color-primary', rgbPink);
        root.style.setProperty('--md-sys-color-on-primary', '#3D0A15');
        root.style.setProperty('--md-sys-color-primary-container', mixColors(rgbPink, 30, mixBaseDark));
        root.style.setProperty('--md-sys-color-on-primary-container', mixColors(rgbPink, 90, '#ffffff'));
        root.style.setProperty('--md-sys-color-surface-container', mixColors(rgbBlue, 8, mixBaseDark));
        root.style.setProperty('--md-sys-color-surface-container-low', mixColors(rgbBlue, 5, mixBaseDark));
        root.style.setProperty('--md-sys-color-surface-container-high', mixColors(rgbBlue, 12, mixBaseDark));
        root.style.setProperty('--md-sys-color-surface-container-highest', mixColors(rgbBlue, 18, mixBaseDark));
        root.style.setProperty('--md-sys-color-secondary-container', mixColors(rgbBlue, 20, mixBaseDark));
        root.style.setProperty('--md-sys-color-on-secondary-container', mixColors(rgbBlue, 90, '#FFFFFF'));
        root.style.setProperty('--md-sys-color-outline', mixColors(rgbPink, 25, '#938F99'));
        root.style.setProperty('--md-sys-color-outline-variant', mixColors(rgbBlue, 15, '#49454F'));

        const tintedBg = mixColors(rgbBlue, 4, mixBaseDark);
        root.style.setProperty('--md-sys-color-background', tintedBg);
        root.style.setProperty('--md-sys-color-surface', tintedBg);
        root.style.setProperty('--gradient-surface', `radial-gradient(circle at top left, ${mixColors(rgbPink, 15, mixBaseDark)}, ${tintedBg} 50%, ${mixColors(rgbBlue, 12, mixBaseDark)} 100%)`);
        root.style.setProperty('--md-sys-color-tertiary', rgbBlue);

        // Trans-specific custom properties for CSS decorations
        root.style.setProperty('--trans-pink', transPink);
        root.style.setProperty('--trans-blue', transBlue);
        root.style.setProperty('--trans-white', transWhite);
    }

    // Light Mode via dynamic style tag
    let styleTag = document.getElementById('dynamic-theme-styles');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'dynamic-theme-styles';
        (document.head || document.documentElement).appendChild(styleTag);
    }

    styleTag.innerHTML = `
        /* Trans Pride Light Mode */
        body.light-mode {
            --md-sys-color-primary: #C74B7A;
            --md-sys-color-on-primary: #FFFFFF;
            --md-sys-color-primary-container: #FFD9E4;
            --md-sys-color-on-primary-container: #3E0021;
            --md-sys-color-secondary-container: #D0E8F8;
            --md-sys-color-background: #FFF5F8;
            --md-sys-color-surface: #FFF5F8;
            --gradient-surface: radial-gradient(circle at top left, #FFE4EC, #FFF5F8 50%, #E4F4FF 100%);
            --md-sys-color-tertiary: #2C8BC7;
        }
        body.light-mode .sidebar { background-color: #F8F0F5 !important; }
        body.light-mode .chip-table thead th { background-color: #F0EBF4 !important; }
        body.light-mode .chip-table .row-header { background-color: #F5F0F8 !important; }
        body.light-mode .breadcrumbs { background: #FFF0F5 !important; }

        /* Trans Pride Flag Stripe on Sidebar */
        .trans-pride-theme .sidebar::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 5px;
            background: linear-gradient(to right, ${transBlue} 0%, ${transBlue} 20%, ${transPink} 20%, ${transPink} 40%, ${transWhite} 40%, ${transWhite} 60%, ${transPink} 60%, ${transPink} 80%, ${transBlue} 80%, ${transBlue} 100%);
            border-radius: 0 0 var(--shape-corner-xl) 0;
            z-index: 10;
        }

        /* Animated gradient on logo text */
        .trans-pride-theme .logo-area h2 {
            background: linear-gradient(135deg, ${transBlue}, ${transPink}, ${transWhite}, ${transPink}, ${transBlue}) !important;
            background-size: 300% 300% !important;
            -webkit-background-clip: text !important;
            background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            animation: transGradientShift 6s ease-in-out infinite !important;
        }

        /* Welcome title gradient */
        .trans-pride-theme .welcome-title {
            background: linear-gradient(135deg, ${transBlue}, ${transPink}, ${transWhite}, ${transPink}, ${transBlue}) !important;
            background-size: 300% 300% !important;
            -webkit-background-clip: text !important;
            background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            animation: transGradientShift 6s ease-in-out infinite !important;
        }

        /* Benchmark bars with trans colors */
        .trans-pride-theme .benchmark-bar {
            background: linear-gradient(90deg, ${transBlue}, ${transPink}) !important;
        }

        /* Nav active item with trans accent */
        .trans-pride-theme .nav-item.active {
            background: linear-gradient(135deg, rgba(85, 205, 252, 0.15), rgba(247, 168, 184, 0.15)) !important;
        }

        /* btn-contained trans gradient */
        .trans-pride-theme .btn-contained {
            background: linear-gradient(135deg, ${transPink}, ${transBlue}) !important;
            color: #1A1A2E !important;
        }
        .trans-pride-theme .btn-contained:hover {
            box-shadow: 0 8px 24px rgba(85, 205, 252, 0.3), 0 4px 12px rgba(247, 168, 184, 0.3) !important;
        }

        /* Welcome credits border gradient */
        .trans-pride-theme .welcome-credits {
            border-image: linear-gradient(135deg, ${transBlue}, ${transPink}, ${transWhite}, ${transPink}, ${transBlue}) 1 !important;
            border-style: solid !important;
            border-width: 2px !important;
            border-radius: 0 !important;
        }

        /* Comparison header gradient */
        .trans-pride-theme .compare-header h1 {
            background: linear-gradient(135deg, ${transBlue}, ${transPink}) !important;
            -webkit-background-clip: text !important;
            background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
        }

        /* Scrollbar trans colors */
        .trans-pride-theme ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(${transPink}, ${transBlue}) !important;
        }

        @keyframes transGradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    `;

    // Meta theme color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]:not([media])');
    if (metaThemeColor) {
        metaThemeColor.content = isLight ? '#FFF5F8' : '#08080C';
    }
}

/**
 * Remove trans pride theme and restore defaults
 */
function removeTransPrideTheme() {
    document.documentElement.classList.remove('trans-pride-theme');

    // Remove inline style properties
    const root = document.documentElement;
    root.style.removeProperty('--trans-pink');
    root.style.removeProperty('--trans-blue');
    root.style.removeProperty('--trans-white');

    // Call existing remove logic
    removeCustomAccent();
}

/**
 * Check if today is a trans awareness date
 * March 31 = International Transgender Day of Visibility
 * November 13-19 = Transgender Awareness Week
 * November 20 = Transgender Day of Remembrance
 */
function isTransAwarenessDate() {
    const now = new Date();
    const month = now.getMonth(); // 0-indexed
    const day = now.getDate();

    // March 31 - Trans Day of Visibility
    if (month === 2 && day === 31) return true;

    // November 13-20 - Awareness Week + Day of Remembrance
    if (month === 10 && day >= 13 && day <= 20) return true;

    return false;
}

// Automatically apply Custom Accent or Bavarian Theme during parsing script (in <head>)
(function () {
    // Only run if we are in the head (initial parse) or DOM not fully ready
    if (!document.body) {
        // Wait for body to be available if needed, but for accent we can just apply variables to :root
        // Special case: we can't check body class yet, so we assume dark or check localStorage directly
        const savedTheme = localStorage.getItem('theme');
        const isLight = savedTheme === 'light';
        // We skip meta-tag updates during head-parse as they'll be handled in initTheme
    }

    const lang = localStorage.getItem('reptdoc_lang') || 'en';
    if (lang === 'de@informal') {
        applyCustomAccent('#61B2E4');
        return;
    }

    // Apply Trans Pride theme if explicitly enabled OR if it's an awareness date and not explicitly disabled
    const isTransPride = localStorage.getItem('reptdoc_trans_pride') === 'true' ||
        (localStorage.getItem('reptdoc_trans_pride') !== 'false' && isTransAwarenessDate());

    if (isTransPride) {
        applyTransPrideTheme();
        return;
    }

    const isAccentEnabled = localStorage.getItem('reptdoc_accent_enabled') === 'true';
    const savedAccent = localStorage.getItem('reptdoc_accent');
    if (isAccentEnabled && savedAccent) {
        applyCustomAccent(savedAccent);
    }
})();
