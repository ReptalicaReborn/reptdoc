function escapeHtml(str) {
    if (str == null) return '';
    const s = String(str);
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;', '/': '&#x2F;' };
    return s.replace(/[&<>"'/]/g, c => map[c]);
}









































const tableStructure = [
    {
        category: "category_basic", rows: [
            { label: "codename", key: "codename" },
            { label: "partNumber", key: "partNumber" },
            { label: "releaseDate", key: "releaseDate" },
            { label: "process", key: "process" },
            { label: "dieSize", key: "dieSize" },
        ]
    },
    {
        category: "category_benchmarks", rows: [
            { label: "geekbench6_single", key: "geekbench6.single" },
            { label: "geekbench6_multi", key: "geekbench6.multi" },
            { label: "geekbench7_single", key: "geekbench7.single" },
            { label: "geekbench7_multi", key: "geekbench7.multi" },
            { label: "wildlifeExtreme", key: "wildlifeExtreme" },
            { label: "steelNomadLite", key: "steelNomadLite" },
        ]
    },
    {
        category: "category_cpu", rows: [
            { label: "cpu_specs", key: "cpu.specs" },
            { label: "l2Cache", key: "cpu.l2Cache" },
            { label: "l3Cache", key: "cpu.l3Cache" },
            { label: "slc", key: "slc" },
        ]
    },
    {
        category: "category_gpu", rows: [
            { label: "gpu", key: "gpu" },
        ]
    },
    {
        category: "category_npu", rows: [
            { label: "npu", key: "npu" },
            { label: "dsp", key: "dsp" },
        ]
    },
    {
        category: "category_connectivity", rows: [
            { label: "modem", key: "modem" },
        ]
    },
    {
        category: "category_memory", rows: [
            { label: "memory", key: "memory" },
        ]
    },
    {
        category: "category_arch", rows: [
            { label: "architecture", key: "architecture" },
        ]
    }
];

// Helper to access nested object properties by string 'cpu.specs'
function getNestedValue(obj, path) {
    const val = path.split('.').reduce((o, p) => (o ? o[p] : undefined), obj);
    return (val !== undefined && val !== null) ? val : '-';
}

function formatValue(val) {
    if (!val) return val;
    let text = String(val);
    const lower = text.toLowerCase();
    if (lower === 'unknown') return t('value_unknown');
    if (lower === 'n/a') return t('value_na');

    // Dynamically translate the word "cluster"
    if (lower.includes('cluster')) {
        const clusterTrans = t('cluster');
        text = text.replace(/cluster/gi, clusterTrans);
    }

    return escapeHtml(text);
}

/**
 * Intelligent CPU Spec Splitter
 * Detects "+" separators and returns a clustered HTML structure
 */
function formatCpuSpecs(specString) {
    if (typeof specString !== 'string') {
        return specString;
    }

    const clusters = specString.includes('+') ? specString.split('+').map(s => s.trim()) : [specString.trim()];
    let html = '<div class="cpu-cluster-container">';

    clusters.forEach((cluster, index) => {
        // Simple numeric labeling as requested
        const label = `${t('cluster')} ${index + 1}`;
        const badgeClass = `badge-c${index + 1}`;

        html += `
            <div class="cpu-cluster">
                <span class="cluster-badge ${badgeClass}">${escapeHtml(label)}</span>
                <span class="cluster-text">${escapeHtml(cluster)}</span>
            </div>
        `;
    });

    html += '</div>';
    return html;
}

/**
 * GPU Spec Formatter
 * Wraps the GPU string in a single cluster-style box
 */
function formatGpuSpec(specString) {
    if (!specString || typeof specString !== 'string') return specString;
    return `
        <div class="cpu-cluster-container">
            <div class="cpu-cluster gpu-cluster">
                <span class="cluster-badge badge-gpu">GPU</span>
                <span class="cluster-text">${escapeHtml(specString)}</span>
            </div>
        </div>
    `;
}

// Current active series
let currentSeries = 'a-series';
let isWelcomeState = false; // Will be set to true on load if renderWelcomePage is called

// Pre-computed lowercase cache for search performance
const _lcCache = new Map();
function getLc(val) {
    if (!val) return '';
    if (_lcCache.has(val)) return _lcCache.get(val);
    const lc = val.toLowerCase();
    _lcCache.set(val, lc);
    return lc;
}

window.activeCpuBenchmark = 'geekbench6';
window.toggleCpuBenchmark = function () {
    window.activeCpuBenchmark = (window.activeCpuBenchmark === 'geekbench6') ? 'geekbench7' : 'geekbench6';
    if (document.getElementById('comparison-table-wrapper')) {
        updateComparisonTable();
    }
};

window.activeGpuBenchmark = 'wildlife';
window.toggleGpuBenchmark = function () {
    window.activeGpuBenchmark = (window.activeGpuBenchmark === 'wildlife') ? 'steel_nomad' : 'wildlife';
    if (document.getElementById('comparison-table-wrapper')) {
        updateComparisonTable();
    }
};


let _cardVariants = {};

function renderTable(dataRaw, isSearch, fullData) {
    const container = document.getElementById('soc-table-container');
    _cardVariants = {};

    const variantGroups = {};
    let renderData;
    if (isSearch) {
        // Group matches under their base chip so binned variants stay reachable
        const pool = fullData || dataRaw;
        const sameSeries = (a, b) => a.seriesKey === b.seriesKey;
        const seen = new Set();
        renderData = [];
        dataRaw.forEach(chip => {
            const base = chip.binnedOf
                ? (pool.find(c => c.name === chip.binnedOf && !c.binnedOf && sameSeries(c, chip)) || chip)
                : chip;
            if (seen.has(base)) return;
            seen.add(base);
            renderData.push(base);
            variantGroups[base.name + '\u0000' + (base.seriesKey || '')] = base.binnedOf ? [] :
                pool.filter(c => c.binnedOf === base.name && sameSeries(c, base));
        });
    } else {
        renderData = [];
        dataRaw.forEach(chip => {
            if (chip.binnedOf) {
                if (!variantGroups[chip.binnedOf]) variantGroups[chip.binnedOf] = [];
                variantGroups[chip.binnedOf].push(chip);
            } else {
                renderData.push(chip);
                if (!variantGroups[chip.name]) variantGroups[chip.name] = [];
            }
        });
    }

    // Sort the data by releaseDate descending (newest first)
    renderData.sort((a, b) => {
        const dateA = a.releaseDate || '';
        const dateB = b.releaseDate || '';

        const nullish = ['N/A', 'Unknown', ''];
        const aIsNull = nullish.includes(dateA);
        const bIsNull = nullish.includes(dateB);

        if (aIsNull && bIsNull) return 0;
        if (aIsNull) return -1;
        if (bIsNull) return 1;

        return dateB.localeCompare(dateA);
    });

    if (renderData.length === 0) {
        container.innerHTML = `
            <div style="padding: 40px; text-align: center; color: var(--md-sys-color-on-surface-variant);">
                <span class="material-icons-round" style="font-size: 48px; opacity: 0.5;">search_off</span>
                <p style="margin-top: 16px; font-size: 16px;">${t('no_chips_found')}</p>
            </div>
        `;
        return;
    }

    const getBrandLogoHtml = getBrandLogoGlobal;
    const manufacturer = seriesDataMap[currentSeries].manufacturer;

    let gridHtml = '<div class="chip-grid">';

    renderData.forEach((chip, index) => {
        const variants = isSearch ? (variantGroups[chip.name + '\u0000' + (chip.seriesKey || '')] || []) : (variantGroups[chip.name] || []);
        const allChips = [chip, ...variants];
        const hasVariants = variants.length > 0;
        _cardVariants[`card-${index}`] = allChips;
        const fileManufacturer = manufacturer === 'Global' ? chip.manufacturer : manufacturer;
        const localLogoHtml = getBrandLogoHtml(fileManufacturer);

        let iconHtml = localLogoHtml
            ? `<div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">${localLogoHtml.replace('width: 28px;', 'width: 32px;').replace('height: 28px;', 'height: 32px;')}</div>`
            : `<span class="material-icons-round">memory</span>`;

        const cpuSpec = chip.cpu ? (typeof chip.cpu === 'object' ? chip.cpu.specs : chip.cpu) : null;
        let quickSpecsHtml = '';

        const specRows = [
            { label: t('mobile_release') || 'Release', value: chip.releaseDate, isCpu: false, isGpu: false },
            { label: t('mobile_process') || 'Process', value: chip.process, isCpu: false, isGpu: false },
            { label: 'CPU', value: cpuSpec, isCpu: true, isGpu: false },
            { label: 'GPU', value: chip.gpu, isCpu: false, isGpu: true }
        ];

        let hasSpecs = false;
        specRows.forEach(row => {
            if (row.value && row.value !== 'N/A' && row.value !== 'Unknown') {
                hasSpecs = true;
                let displayValue;
                let extraClass = '';
                if (row.isCpu) {
                    displayValue = formatCpuSpecs(row.value);
                    extraClass = ' card-quick-spec-cpu';
                } else if (row.isGpu) {
                    displayValue = formatGpuSpec(row.value);
                    extraClass = ' card-quick-spec-cpu';
                } else {
                    displayValue = escapeHtml(row.value);
                }
                quickSpecsHtml += `
                    <div class="card-quick-spec-row${extraClass}">
                        <span class="card-quick-spec-label">${row.label}</span>
                        <span class="card-quick-spec-value">${displayValue}</span>
                    </div>`;
            }
        });

        let quickHtmlOut = '';
        if (hasSpecs) {
            quickHtmlOut = `<div class="card-quick-specs" id="card-quick-${index}">${quickSpecsHtml}</div>`;
        }

        let variantSwitcherHtml = '';
        if (hasVariants) {
            const variantNames = allChips.map(c => c.name);
            variantSwitcherHtml = `
                <div class="variant-switcher">
                    ${variantNames.map((vName, vi) => `
                        <button class="variant-chip${vi === 0 ? ' active' : ''}"
                                data-action="switchVariant"
                                data-card-id="card-${index}"
                                data-variant-index="${vi}"
                                title="${escapeHtml(vName)}">
                            ${escapeHtml(vName)}
                        </button>
                    `).join('')}
                </div>
            `;
        }

        const cardHtml = `
            <div class="chip-card" id="card-${index}" style="animation: fadeIn 0.4s ease both; animation-delay: ${index * 0.05}s;" data-action="toggleCard" data-index="${index}" data-variants='${JSON.stringify(allChips.map(c => c.name)).replace(/'/g, "&#39;")}'>
                <div class="chip-card-header">
                    <div class="chip-card-icon">${iconHtml}</div>
                    <div class="chip-card-title-group">
                        <div class="chip-card-title" id="card-title-${index}">${escapeHtml(chip.name)}</div>
                        <div class="chip-card-subtitle tooltip-container tooltip-bottom" style="display: inline-flex; cursor: help;" id="card-subtitle-${index}">
                            ${escapeHtml(['MediaTek', 'HiSilicon', 'Unisoc'].includes(manufacturer) ? (chip.partNumber || t('value_na')) : (chip.partNumber || chip.codename || t('value_na')))}
                            <div class="tooltip-content" style="font-weight: 400; text-transform: none;">${t('partNumber_desc')}</div>
                        </div>
                    </div>
                    <button class="chip-card-compare-btn" data-action="goToCompare" data-chip="${encodeURIComponent(chip.name)}" title="${t('compare_btn') || 'Compare'}">
                        <span class="material-icons-round">compare_arrows</span>
                    </button>
                </div>
                ${variantSwitcherHtml}
                ${quickHtmlOut}
                <div class="chip-card-action-bar">
                    <span class="view-specs-text">${t('view_full_specs') || 'View Full Specs'}</span>
                    <span class="material-icons-round expand-icon" id="icon-expand-${index}">expand_more</span>
                </div>
                <div class="chip-card-body" id="card-body-${index}">
                     ${generateMobileDetails(chip)}
                </div>
            </div>
        `;

        gridHtml += cardHtml;
    });

    gridHtml += '</div>';

    container.innerHTML = gridHtml;
    hydrateDieshots();
}

window.switchVariant = function (cardId, variantIndex) {
    const card = document.getElementById(cardId);
    if (!card) return;
    const chipIndex = parseInt(cardId.replace('card-', ''));
    const chip = (_cardVariants[cardId] || [])[variantIndex];
    if (!chip) return;

    card.querySelectorAll('.variant-chip').forEach((btn, i) => {
        btn.classList.toggle('active', i === variantIndex);
    });

    const titleEl = card.querySelector('.chip-card-title');
    if (titleEl) titleEl.textContent = chip.name;

    const manufacturer = seriesDataMap[currentSeries].manufacturer;
    const subtitleEl = card.querySelector('.chip-card-subtitle');
    if (subtitleEl) {
        const textNode = subtitleEl.childNodes[0];
        if (textNode) textNode.textContent = ['MediaTek', 'HiSilicon', 'Unisoc'].includes(manufacturer) ? (chip.partNumber || t('value_na')) : (chip.partNumber || chip.codename || t('value_na'));
    }

    const compareBtn = card.querySelector('.chip-card-compare-btn');
    if (compareBtn) compareBtn.dataset.chip = encodeURIComponent(chip.name);

    const cpuSpec = chip.cpu ? (typeof chip.cpu === 'object' ? chip.cpu.specs : chip.cpu) : null;
    let quickSpecsHtml = '';
    const specRows = [
        { label: t('mobile_release') || 'Release', value: chip.releaseDate, isCpu: false, isGpu: false },
        { label: t('mobile_process') || 'Process', value: chip.process, isCpu: false, isGpu: false },
        { label: 'CPU', value: cpuSpec, isCpu: true, isGpu: false },
        { label: 'GPU', value: chip.gpu, isCpu: false, isGpu: true }
    ];
    let hasSpecs = false;
    specRows.forEach(row => {
        if (row.value && row.value !== 'N/A' && row.value !== 'Unknown') {
            hasSpecs = true;
            let displayValue;
            let extraClass = '';
            if (row.isCpu) {
                displayValue = formatCpuSpecs(row.value);
                extraClass = ' card-quick-spec-cpu';
            } else if (row.isGpu) {
                displayValue = formatGpuSpec(row.value);
                extraClass = ' card-quick-spec-cpu';
            } else {
                displayValue = escapeHtml(row.value);
            }
            quickSpecsHtml += `
                <div class="card-quick-spec-row${extraClass}">
                    <span class="card-quick-spec-label">${row.label}</span>
                    <span class="card-quick-spec-value">${displayValue}</span>
                </div>`;
        }
    });
    const quickContainer = document.getElementById(`card-quick-${chipIndex}`);
    if (quickContainer) {
        quickContainer.innerHTML = hasSpecs ? quickSpecsHtml : '';
    }

    const bodyContainer = document.getElementById(`card-body-${chipIndex}`);
    if (bodyContainer) {
        bodyContainer.innerHTML = generateMobileDetails(chip);
        hydrateDieshots();
    }
};

// ===== Die shots =====
// Images live in assets/dieshots/<id>.webp and are described in data/dieshots.json
// (one entry per shot, listing the chips it applies to).
let dieshotIndexPromise = null;
function loadDieshots() {
    if (!dieshotIndexPromise) {
        dieshotIndexPromise = fetch('data/dieshots.json')
            .then(response => {
                if (!response.ok) throw new Error('Failed to load data/dieshots.json');
                return response.json();
            })
            .then(shots => {
                const byChip = new Map();
                const byId = new Map();
                shots.forEach(shot => {
                    byId.set(shot.id, shot);
                    shot.chips.forEach(name => {
                        if (!byChip.has(name)) byChip.set(name, []);
                        byChip.get(name).push(shot);
                    });
                });
                return { byChip, byId };
            })
            .catch(err => {
                console.error(err);
                return { byChip: new Map(), byId: new Map() };
            });
    }
    return dieshotIndexPromise;
}

// Fill every pending .dieshot-slot with thumbnails for its chip (or remove it if there are none)
async function hydrateDieshots() {
    const slots = document.querySelectorAll('.dieshot-slot:not([data-ready])');
    if (slots.length === 0) return;
    const { byChip } = await loadDieshots();
    slots.forEach(slot => {
        slot.dataset.ready = 'true';
        // Binned variants share the die of the chip they are cut from, unless they have their own shot
        const shots = byChip.get(slot.dataset.chip) || (slot.dataset.base && byChip.get(slot.dataset.base)) || [];
        const card = slot.closest('.chip-card');
        const header = card ? card.querySelector('.chip-card-header') : null;
        if (header) {
            const oldBadge = header.querySelector('.dieshot-badge');
            if (oldBadge) oldBadge.remove();
            if (shots.length > 0) {
                const compareBtn = header.querySelector('.chip-card-compare-btn');
                const badge = document.createElement('span');
                badge.className = 'material-icons-round dieshot-badge';
                badge.textContent = 'photo_camera';
                badge.title = t('dieshot_available');
                header.insertBefore(badge, compareBtn);
            }
        }
        if (shots.length === 0) {
            slot.innerHTML = '';
            return;
        }
        slot.style.gridColumn = '1 / -1';
        slot.innerHTML = `
            <h4 class="dieshot-heading">${escapeHtml(t('dieshot'))}</h4>
            <div class="dieshot-thumbs">
                ${shots.map(shot => `
                    <button type="button" class="dieshot-thumb" data-action="openDieshot" data-shot-id="${escapeHtml(shot.id)}">
                        <img src="assets/dieshots/${encodeURIComponent(shot.id)}.webp" alt="${escapeHtml(shot.title)} die shot" loading="lazy" decoding="async">
                        <span class="dieshot-thumb-label">${escapeHtml(shot.title)}</span>
                    </button>`).join('')}
            </div>`;
    });
}

// Lightbox so users can view a die shot without leaving ReptDoc
let dieshotLastFocus = null;
async function openDieshot(shotId) {
    const { byId } = await loadDieshots();
    const shot = byId.get(shotId);
    if (!shot) return;
    let box = document.getElementById('dieshot-lightbox');
    if (!box) {
        box = document.createElement('div');
        box.id = 'dieshot-lightbox';
        box.className = 'dieshot-lightbox';
        box.setAttribute('role', 'dialog');
        box.setAttribute('aria-modal', 'true');
        document.body.appendChild(box);
    }
    box.innerHTML = `
        <div class="dieshot-lightbox-backdrop" data-action="closeDieshot"></div>
        <figure class="dieshot-lightbox-figure">
            <button type="button" class="dieshot-lightbox-close" data-action="closeDieshot" aria-label="${escapeHtml(t('close'))}">
                <span class="material-icons-round">close</span>
            </button>
            <img src="assets/dieshots/${encodeURIComponent(shot.id)}.webp" alt="${escapeHtml(shot.title)} die shot">
            <figcaption>
                <div class="dieshot-lightbox-title">${escapeHtml(shot.title)}</div>
                <div class="dieshot-lightbox-brand">${escapeHtml(shot.brand)}</div>
                <p>${escapeHtml(shot.desc)}</p>
            </figcaption>
        </figure>`;
    box.setAttribute('aria-label', `${shot.title} ${t('dieshot')}`);
    dieshotLastFocus = document.activeElement;
    // Next frame so the transition runs
    requestAnimationFrame(() => box.classList.add('active'));
    box.querySelector('.dieshot-lightbox-close').focus();
}

function closeDieshot() {
    const box = document.getElementById('dieshot-lightbox');
    if (!box) return;
    box.classList.remove('active');
    if (dieshotLastFocus && dieshotLastFocus.focus) dieshotLastFocus.focus();
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDieshot();
});

function generateMobileDetails(chip) {
    // Filled in by hydrateDieshots() once data/dieshots.json has loaded
    let html = `<div class="dieshot-slot" data-chip="${escapeHtml(chip.name)}"${chip.binnedOf ? ` data-base="${escapeHtml(chip.binnedOf)}"` : ''}></div>`;
    const duplicateKeys = ['releaseDate', 'process', 'cpu.specs', 'cpu', 'gpu'];

    tableStructure.forEach(group => {
        if (group.category === "category_benchmarks") return;
        const hideConn = ['m-series', 'a-series', 'tensor', 'snapdragon-x', 'exynos-5', 'exynos-4', 'exynos-3'];
        if (group.category === "category_connectivity" && hideConn.includes(currentSeries)) return;

        const visibleRows = group.rows.filter(row => {
            const val = getNestedValue(chip, row.key);
            let activeManufacturer = seriesDataMap[currentSeries].manufacturer;
            if (activeManufacturer === 'Global') activeManufacturer = chip.manufacturer || 'Global';

            const isKirinHidden = (row.key === 'dsp' || row.key === 'codename') && activeManufacturer === 'HiSilicon';
            return val && val !== '-' && val !== 'N/A' && !duplicateKeys.includes(row.key) && !isKirinHidden;
        });

        if (visibleRows.length === 0) return;

        html += `<div style="grid-column: 1 / -1; margin-top: 12px; margin-bottom: 4px;">
            <h4 style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: var(--md-sys-color-primary);">${t(group.category)}</h4>
        </div>`;

        visibleRows.forEach(row => {
            // Exclude Part Number from expansion as it's already shown in the card subtitle/header
            if (row.key === 'partNumber') return;

            const val = getNestedValue(chip, row.key);
            const formattedVal = row.key === 'cpu.specs' ? formatCpuSpecs(val) : formatValue(val);
            const extraStyle = row.key === 'cpu.specs' ? ' style="grid-column: 1 / -1;"' : '';

            let labelHtml = t(row.label);
            html += `
                <div class="spec-item"${extraStyle}>
                    <span class="spec-label">${labelHtml}</span>
                    <span class="spec-value">${formattedVal}</span>
                </div>
            `;
        });
    });
    return html;
}

window.toggleCardDetails = function (index) {
    const card = document.getElementById(`card-${index}`);
    if (!card) return;

    const isExpanded = card.classList.contains('expanded');

    // Accordion: Close all other cards in the same grid
    const container = card.closest('.chip-grid');
    if (container) {
        container.querySelectorAll('.chip-card').forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('expanded');
            }
        });
    }

    // Toggle current card
    if (isExpanded) {
        card.classList.remove('expanded');
    } else {
        card.classList.add('expanded');
    }
};

// Dropdown Toggle Logic
window.toggleNavGroup = function (header) {
    const group = header.parentElement;
    group.classList.toggle('expanded');
    header.setAttribute('aria-expanded', group.classList.contains('expanded'));
};

// Update breadcrumb text
// Update breadcrumb text
function updateBreadcrumb(manufacturer, seriesName) {
    const breadcrumbs = document.querySelector('.breadcrumbs');
    if (breadcrumbs) {
        breadcrumbs.innerHTML = `
            <a href="#" data-action="renderWelcome" style="text-decoration: none; color: inherit;">${t('home')}</a>
            <span class="material-icons-round separator">chevron_right</span>
            <span>${manufacturer}</span>
            <span class="material-icons-round separator">chevron_right</span>
            <span class="current">${seriesName}</span>
        `;
    }
}





const changelogData = [
    {
        version: 'v1.1 "Seashore"',
        date: "2026-10-14",
        changes: {
            en: [
                "Binned variants: chips that are cut-down versions of another chip now share one card, with buttons to switch between variants",
                "Die shots: annotated die shots now appear on chip cards (look for the camera icon) and open in a viewer right here, no need to leave ReptDoc",
                "Link embeds: compare links now show a side-by-side card with scores and percentage differences when shared on Discord and other apps",
                "Geekbench 7 CPU scores added, with a toggle to switch back to Geekbench 6"
            ],
            vi: [
                "Biến thể binned: các chip là bản cắt giảm của chip khác giờ dùng chung một thẻ, có nút để chuyển đổi giữa các biến thể",
                "Ảnh die shot: ảnh die shot có chú thích giờ xuất hiện trên thẻ chip (tìm biểu tượng máy ảnh) và mở ngay trong ReptDoc, không cần rời trang",
                "Embed liên kết: liên kết so sánh giờ hiển thị thẻ so sánh song song với điểm số và phần trăm chênh lệch khi chia sẻ trên Discord và các ứng dụng khác",
                "Thêm điểm CPU Geekbench 7, có nút chuyển về Geekbench 6"
            ],
        }
    },
    {
        version: "stable-v1.0.0",
        date: "2026-03-31",
        changes: {
            en: [
                "WE HAVE A SHIT TON OF LANGUAGE",
            ],
            vi: [
                "CÓ MỘT ĐỐNG NGÔN NGỮ",
            ],
        }
    },
    {
        version: "Release Canidate 2",
        date: "2026-03-28",
        changes: {
            en: [
                "bug fix"
            ],
            vi: [
                "bug fix"
            ],
        }
    },
    {
        version: "Release Canidate 1",
        date: "2026-03-27",
        changes: {
            en: [
                "UI revamp babyyyyyyy"
            ],
            vi: [
                "Chỉnh sửa lại UI"
            ],
        }
    },
    {
        version: "beta-v1.4.0",
        date: "2026-03-19",
        changes: {
            en: [
                "Added Steel Nomad Lite benchmark for selected SoC"
            ],
            vi: [
                "Thêm benchmark Steel Nomad Lite cho một số chip nhất định"
            ],
        }
    },
    {
        version: "beta-v1.3.0",
        date: "2026-03-17",
        changes: {
            en: [
                "I forgot to write changelogs.",
                "Added Kirin 9030 series benchmarks, added some eggs",
                "There are definitely more changes I just can't remember it all."
            ],
            vi: [
                "Quên không ghi Changelogs.",
                "Thêm benchmarks cho Kirin 9030 và 9030 Pro",
                "Chắc là có nhiều cái đã được thay đổi nhưng tôi không nhớ được"
            ]
        }
    },
    {
        version: "beta-v1.2.0",
        date: "2026-01-31",
        changes: {
            en: [
                "nothing is changed trust",
                "general bug fix",
            ],
            vi: [
                "ko co gi thay doi ca tin toi di",
                "fix bug",

            ]
        }
    },
    {
        version: "beta-v1.1.0",
        date: "2026-01-15",
        changes: {
            en: [
                "New UI for Desktop",
                "Removed 'Samsung' prefix for Exynos SoCs.",
                "Fixed long SoC names overflowing the UI.",
                "Fixed benchmark bars clipping issues for long chip names.",
            ],
            vi: [
                "Giao diện mới cho Desktop",
                "Xóa chữ 'Samsung' cho các SoC Exynos.",
                "Sửa lỗi tên SoC dài quá làm tràn khung giao diện.",
                "Sửa lỗi thanh benchmark bị đè chữ khi tên chip quá dài.",
            ]
        }
    },
    {
        version: "beta-v1.0.0",
        date: "2026-01-13",
        changes: {
            en: [
                "MASSIVE UI update.",
                "Revamped Light Mode for better contrast and aesthetics.",
                "Added Custom Accent Color support (check Settings).",
                "Code cleanup and performance optimizations.",
            ],
            vi: [
                "UI được cải thiện đáng kể.",
                "Làm lại giao diện Sáng (Light Mode) nhìn cho đàng hoàng hơn.",
                "Thêm tính năng chỉnh màu chủ đạo (trong Cài đặt).",
                "Dọn dẹp mã nguồn giúp web chạy mượt hơn.",
            ]
        }
    },
    {
        version: "alpha-v1.4.0",
        date: "2026-01-09",
        changes: {
            en: [
                "Replaced 'Chipset' with 'SoC' cause I am fucking dumb.",
                "Added a small easter egg. Try to find it!",
            ],
            vi: [
                "Thay thế toàn bộ 'Chipset' bằng 'SoC' cho nó chuẩn xác (và nghe ngầu hơn).",
                "Thêm một cái easter egg nhỏ. Thử tìm xem!",
            ]
        }
    },
    {
        version: "alpha-v1.3.2.hotfix",
        date: "2026-01-08",
        changes: {
            en: [
                "Fixed VN translation",
            ],
            vi: [
                "Sửa lỗi dịch thuật tiếng Việt",
            ]
        }
    },
    {
        version: "alpha-v1.3.1.hotfix",
        date: "2026-01-08",
        changes: {
            en: [
                "Fixed SoC search suggestions clipping through other elements on mobile.",
                "Improved search box visibility on mobile (font size and padding adjustments).",
                "Fixed Vietnamese placeholder text truncation in comparison search.",
                "Added smooth text truncation for long SoC names in search results.",
                "Optimized mobile stacking context for search dropdowns,ugh, too serious."
            ],
            vi: [
                "Sửa lỗi gợi ý tìm kiếm SoC bị đè bởi các thành phần khác trên điện thoại.",
                "Cải thiện hiển thị thanh tìm kiếm trên điện thoại (chỉnh kích thước chữ và padding).",
                "Sửa lỗi mất chữ trong ô tìm kiếm khi dùng tiếng Việt ở trang so sánh.",
                "Thêm hiệu ứng cắt chữ cho các SoC có tên dài trong kết quả tìm kiếm.",
                "Tối ưu hóa thứ tự hiển thị của các bảng gợi ý trên điện thoại, mé, lâu lâu làm căng một tí."
            ]
        }
    },
    {
        version: "alpha-v1.3.0",
        date: "2026-01-07",
        changes: {
            en: [
                "UI, UI, UI, UI, UI.",
                "something is added and it isnt the home button.",
                "fixed a shit ton of bugs on mobile.",
                "animations, yay",
                "added a favicon and embed"
            ],
            vi: [
                "UI, UI, UI, UI, UI.",
                "tui thêm cái gì quên mẹ r chắc ko phải cái nút trang chủ đâu ha",
                "sửa cả đống lỗi trên trang web cho điện thoại, hehehee.",
                "thêm hoạt ảnh, yay",
                "thêm một cái favicon và embed"
            ]
        }
    },
    {
        version: "alpha-v1.2.0",
        date: "2026-01-06",
        changes: {
            en: [
                "Added Mediatek 9500s and 8500 SoC details.",
                "Added Xiaomi XRing o1 and Surge S1 SoC details.",
                "Added the Xiaomi logo.",
                "Added Changelog section.",
                "Added Snapdragon 675 benchmarks (requested)"
            ],
            vi: [
                "Thêm chi tiết SoC Mediatek 9500s và 8500.",
                "Thêm chi tiết SoC Xiaomi XRing o1 và Surge S1.",
                "Thêm logo Xiaomi.",
                "Thêm mục Nhật ký thay đổi (rất quan trọng).",
                "Thêm benchmarks cho Snapdragon 675 (theo yêu cầu)"
            ]
        }
    },
    {
        version: "alpha-v1.0.0",
        date: "2026-01-04",
        changes: {
            en: [
                "First alpha release",
                "Added Comparison page with Geekbench 6 as CPU bench and 3DMark Wildlife Extreme as GPU bench.",
                "Renamed to ReptDoc."
            ],
            vi: [
                "Bản đầu tiên mà trang web này chấp nhận được",
                "Thêm trang So sánh với Geekbench 6 (CPU) và 3DMark Wildlife Extreme (GPU).",
                "Đổi tên thành ReptDoc."
            ]
        }
    },
    {
        version: "pre-Alpha v0.1",
        date: "2025-12-28",
        changes: {
            en: [
                "Initial release with Apple, Qualcomm, MediaTek, Exynos SoCs.",
                "Dark/Light mode support.",
                "Search functionality."
            ],
            vi: [
                "Bản PoC với các SoC từ Apple, Qualcomm, MediaTek, Samsung.",
                "Hỗ trợ chế độ Sáng/Tối.",
                "Tìm kiếm (rất quan trọng)."
            ]
        }
    }
];

let currentLang = localStorage.getItem('reptdoc_lang');
if (!currentLang) {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith('vi')) currentLang = 'vi';
    else if (userLang.startsWith('tl') || userLang.startsWith('fil')) currentLang = 'tl';
    else if (userLang.startsWith('id')) currentLang = 'id';
    else if (userLang.startsWith('hu')) currentLang = 'hu';
    else if (userLang.startsWith('zh')) currentLang = 'zh_MO';
    else if (userLang.startsWith('hi')) currentLang = 'hi';
    else if (userLang.startsWith('tr')) currentLang = 'tr';
    else if (userLang.startsWith('ml')) currentLang = 'ml';
    else currentLang = 'en';
}

let loadedTranslations = {};

async function loadLocales() {
    // Always load English as the base so untranslated keys fall back to it
    // instead of showing the raw key.
    let base = {};
    try {
        const enResponse = await fetch('locales/en.json');
        if (enResponse.ok) base = await enResponse.json();
    } catch (e) {
        console.error('Failed to load fallback locale:', e);
    }
    loadedTranslations = base;
    if (currentLang === 'en') return;
    try {
        const response = await fetch(`locales/${currentLang}.json`);
        if (!response.ok) throw new Error('Locale not found');
        loadedTranslations = Object.assign({}, base, await response.json());
    } catch (e) {
        console.error('Failed to load locale:', e);
    }
}

function t(key) {
    return loadedTranslations[key] || key;
}
window.t = t;


const seriesDataMap = {
    'a-series': { data: [], manufacturer: 'Apple Silicon', label: 'A Series' },
    'm-series': { data: [], manufacturer: 'Apple Silicon', label: 'M Series' },
    'snapdragon-8': { data: [], manufacturer: 'Qualcomm', label: 'Snapdragon 8 Series' },
    'snapdragon-7': { data: [], manufacturer: 'Qualcomm', label: 'Snapdragon 7 Series' },
    'snapdragon-6': { data: [], manufacturer: 'Qualcomm', label: 'Snapdragon 6 Series' },
    'snapdragon-4': { data: [], manufacturer: 'Qualcomm', label: 'Snapdragon 4 Series' },
    'snapdragon-2': { data: [], manufacturer: 'Qualcomm', label: 'Snapdragon 2 Series' },
    'snapdragon-x': { data: [], manufacturer: 'Qualcomm', label: 'Snapdragon X Series' },
    'dimensity-9000': { data: [], manufacturer: 'MediaTek', label: 'Dimensity 9000 Series' },
    'dimensity-8000': { data: [], manufacturer: 'MediaTek', label: 'Dimensity 8000 Series' },
    'dimensity-7000': { data: [], manufacturer: 'MediaTek', label: 'Dimensity 7000 Series' },
    'dimensity-6000': { data: [], manufacturer: 'MediaTek', label: 'Dimensity 6000 Series' },
    'dimensity-1000': { data: [], manufacturer: 'MediaTek', label: 'Dimensity 1000 Series' },
    'dimensity-900': { data: [], manufacturer: 'MediaTek', label: 'Dimensity 900 series' },
    'dimensity-800': { data: [], manufacturer: 'MediaTek', label: 'Dimensity 800 series' },
    'dimensity-700': { data: [], manufacturer: 'MediaTek', label: 'Dimensity 700 series' },
    'helio-g': { data: [], manufacturer: 'MediaTek', label: 'Helio G Series' },
    'helio-x': { data: [], manufacturer: 'MediaTek', label: 'Helio X Series' },
    'helio-p': { data: [], manufacturer: 'MediaTek', label: 'Helio P Series' },
    'helio-a': { data: [], manufacturer: 'MediaTek', label: 'Helio A Series' },
    'kirin-9000': { data: [], manufacturer: 'HiSilicon', label: 'Kirin 9 series' },
    'kirin-800': { data: [], manufacturer: 'HiSilicon', label: 'Kirin 8 series' },
    'kirin-700': { data: [], manufacturer: 'HiSilicon', label: 'Kirin 7 series' },
    'kirin-600': { data: [], manufacturer: 'HiSilicon', label: 'Kirin 6 series' },
    'kirin-tablet': { data: [], manufacturer: 'HiSilicon', label: 'Tablet-only SoCs' },
    'kirin-past': { data: [], manufacturer: 'HiSilicon', label: 'pre-Kirins' },
    'exynos-2000': { data: [], manufacturer: 'Exynos', label: 'Exynos 2000 series' },
    'exynos-1000': { data: [], manufacturer: 'Exynos', label: 'Exynos 1000 series' },
    'exynos-900': { data: [], manufacturer: 'Exynos', label: 'Exynos 900 series' },
    'exynos-800': { data: [], manufacturer: 'Exynos', label: 'Exynos 800 series' },
    'exynos-9': { data: [], manufacturer: 'Exynos', label: 'Exynos 9 series' },
    'exynos-8': { data: [], manufacturer: 'Exynos', label: 'Exynos 8 series' },
    'exynos-7': { data: [], manufacturer: 'Exynos', label: 'Exynos 7 series' },
    'exynos-5': { data: [], manufacturer: 'Exynos', label: 'Exynos 5 series' },
    'exynos-4': { data: [], manufacturer: 'Exynos', label: 'Exynos 4 series' },
    'exynos-3': { data: [], manufacturer: 'Exynos', label: 'Exynos 3 series' },
    'tensor': { data: [], manufacturer: 'Google', label: 'Google Tensors' },
    'loongson-3a': { data: [], manufacturer: 'Loongson', label: '3A Series' },
    'unisoc': { data: [], manufacturer: 'Unisoc', label: 'Unisoc' },
    'xiaomi': { data: [], manufacturer: 'Xiaomi', label: 'Xiaomi' },
    'global': { data: [], manufacturer: 'Global', label: 'Search Results' }
};

// Chip data lives in data/<series>.json and is fetched on demand.
const seriesLoadPromises = {};
function loadSeries(key) {
    const info = seriesDataMap[key];
    if (!info || key === 'global' || info.loaded) return Promise.resolve();
    if (!seriesLoadPromises[key]) {
        seriesLoadPromises[key] = fetch(`data/${key}.json`)
            .then(response => {
                if (!response.ok) throw new Error(`Failed to load data/${key}.json`);
                return response.json();
            })
            .then(chips => {
                info.data = chips;
                info.loaded = true;
                if (window._invalidateGlobalSearchCache) window._invalidateGlobalSearchCache();
            })
            .catch(err => {
                delete seriesLoadPromises[key];
                throw err;
            });
    }
    return seriesLoadPromises[key];
}

function loadAllSeries() {
    return Promise.all(Object.keys(seriesDataMap).map(loadSeries));
}

// Language Initialization
function initLang() {
    // Apply Language-Specific Classes for Smart Typography (e.g. Inter for RU/ARZ)
    document.body.className = document.body.className.replace(/\blang-\S+/g, '');
    document.body.classList.add(`lang-${currentLang}`);
    document.documentElement.lang = currentLang;

    // Translate Page Title
    if (document.title.includes('Compare') || document.title.includes('So sánh')) {
        document.title = `ReptDoc - ${t('compare_breadcrumb')}`;
    } else {
        document.title = t('welcome_title');
    }

    // Translate All Search Placeholders
    document.querySelectorAll('input[placeholder]').forEach(input => {
        const ph = input.placeholder.toLowerCase();
        if (ph.includes('search chips')) input.placeholder = t('search_placeholder');
        if (ph.includes('first soc')) input.placeholder = t('search_first');
        if (ph.includes('second soc')) input.placeholder = t('search_second');
    });

    // Translate Search Filter Dropdown
    const searchFilter = document.getElementById('search-filter');
    if (searchFilter) {
        const savedVal = searchFilter.value;
        searchFilter.querySelectorAll('option').forEach(opt => {
            const key = 'filter_' + opt.value;
            opt.textContent = t(key);
        });
        searchFilter.value = savedVal;
    }

    // Translate Compare Button in Top Bar
    document.querySelectorAll('.top-bar button').forEach(btn => {
        const text = btn.textContent.trim().toLowerCase();
        if (text === 'compare' || text === 'so sánh') {
            btn.textContent = t('compare_btn');
        }
    });


    const settingsLabel = document.querySelector('.settings-label');
    if (settingsLabel) settingsLabel.textContent = t('settings');

    const homeLabel = document.querySelector('.home-label');
    if (homeLabel) homeLabel.textContent = t('back_to_home');

    const changelogLabel = document.querySelector('.changelog-label');
    if (changelogLabel) changelogLabel.textContent = t('changelog');

    // Compare Page Statics
    const compareTitle = document.querySelector('.compare-header h1');
    if (compareTitle) compareTitle.textContent = t('compare_socs');
    const compareDesc = document.querySelector('.compare-header p');
    if (compareDesc) compareDesc.textContent = t('compare_desc');

    // Breadcrumbs on compare page
    const breadcrumbCurrent = document.querySelector('.breadcrumbs .current');
    if (breadcrumbCurrent && document.getElementById('comparison-container')) {
        breadcrumbCurrent.textContent = t('compare_breadcrumb');
    }

    document.querySelectorAll('.remove-chip-btn').forEach(btn => btn.textContent = t('remove'));

    const langThemeLabel = document.querySelector('.lang-theme-btn-label');
    if (langThemeLabel) langThemeLabel.textContent = t('lang_theme_btn');

    const shareBtnText = document.getElementById('share-comparison');
    if (shareBtnText) {
        // The button has an icon and text, we only want to translate the text node
        const textNode = Array.from(shareBtnText.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '');
        if (textNode) {
            textNode.textContent = ' ' + (t('compare_share') || 'Share') + ' ';
        }
    }
}

window.changeLanguage = function (newLang) {
    if (newLang !== currentLang) {
        currentLang = newLang;
        localStorage.setItem('reptdoc_lang', currentLang);
        location.reload();
    }
};

function initSettings() {
    const settingsBtn = document.getElementById('nav-settings');
    if (!settingsBtn) return;

    settingsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showSettingsModal();
    });
}

function showSettingsModal() {
    // Create modal if it doesn't exist
    let modal = document.getElementById('settings-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'settings-modal';
        modal.className = 'modal-overlay';
        document.body.appendChild(modal);
    }

    // Get saved accent color or default
    const savedAccent = localStorage.getItem('reptdoc_accent') || '#E6C275';
    const isAccentEnabled = localStorage.getItem('reptdoc_accent_enabled') === 'true';
    const isLightMode = document.body.classList.contains('light-mode');

    let displaySavedAccent = savedAccent;
    if (savedAccent === 'trans-pride') {
        displaySavedAccent = 'linear-gradient(to bottom, #55CDFC 0%, #55CDFC 20%, #F7A8B8 20%, #F7A8B8 40%, #FFFFFF 40%, #FFFFFF 60%, #F7A8B8 60%, #F7A8B8 80%, #55CDFC 80%, #55CDFC 100%)';
    } else if (savedAccent === 'nonbinary-pride') {
        displaySavedAccent = 'linear-gradient(to bottom, #FCF434 0%, #FCF434 25%, #FFFFFF 25%, #FFFFFF 50%, #9C59D1 50%, #9C59D1 75%, #2C2C2C 75%, #2C2C2C 100%)';
    } else if (isLightMode && savedAccent.toUpperCase() === '#FFFFFF') {
        displaySavedAccent = '#000000';
    } else if (!isLightMode && savedAccent === '#000000') {
        displaySavedAccent = '#FFFFFF';
    }

    // Determine the trans awareness date label (display-only decorative)
    let transDateLabel = '';
    if (typeof isTransAwarenessDate === 'function' && isTransAwarenessDate()) {
        const now = new Date();
        const month = now.getMonth();
        const day = now.getDate();
        if (month === 2) transDateLabel = 'Happy Trans Day of Visibility! 🏳️‍⚧️';
        else if (day === 20) transDateLabel = 'Transgender Day of Remembrance 🕯️';
        else transDateLabel = 'Transgender Awareness Week 🏳️‍⚧️';
    }

    modal.innerHTML = `
        <div class="modal-content settings-content">
            <div class="modal-header">
                <h2>${t('settings')}</h2>
                <button class="btn-icon modal-close-btn" data-action="closeSettings">
                    <span class="material-icons-round">close</span>
                </button>
            </div>
            <div class="modal-body" style="padding-top: 8px;">
                ${transDateLabel ? `<div style="text-align: center; padding: 10px 16px; background: linear-gradient(135deg, rgba(85, 205, 252, 0.12), rgba(247, 168, 184, 0.12)); border-radius: 14px; font-size: 14px; font-weight: 600; color: var(--md-sys-color-on-surface); margin-bottom: 16px; display: flex; align-items: center; justify-content: center; gap: 8px;"><span style="display: inline-block; width: 22px; height: 14px; border-radius: 3px; background: linear-gradient(to bottom, #55CDFC 0%, #55CDFC 20%, #F7A8B8 20%, #F7A8B8 40%, #FFFFFF 40%, #FFFFFF 60%, #F7A8B8 60%, #F7A8B8 80%, #55CDFC 80%, #55CDFC 100%); flex-shrink: 0; box-shadow: 0 1px 3px rgba(0,0,0,0.2);"></span>${transDateLabel}</div>` : ''}
                <div class="setting-item">
                    <div class="setting-info">
                        <h3>${t('theme_title') || 'Theme'}</h3>
                    </div>
                    <div class="setting-control">
                        <button class="btn-tonal" id="modal-theme-toggle" data-action="toggleTheme" style="height: 36px; padding: 0 20px; border-radius: 999px; background: var(--md-sys-color-secondary-container); color: var(--md-sys-color-on-secondary-container); display: flex; align-items: center; gap: 8px; border: none; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                            <span class="material-icons-round" style="font-size: 20px;">${isLightMode ? 'light_mode' : 'dark_mode'}</span>
                            <span style="font-size: 14px;">${isLightMode ? (t('light_mode') || 'Light') : (t('dark_mode') || 'Dark')}</span>
                        </button>
                    </div>
                </div>
                <div class="setting-item">
                    <div class="setting-info">
                        <h3 style="margin-bottom: 0;">${t('language')}</h3>
                    </div>
                    <div class="setting-control">
                        <select id="lang-select" style="background-color: var(--md-sys-color-surface-container-low); color: var(--md-sys-color-on-surface); border: 1px solid var(--md-sys-color-outline-variant); border-radius: 8px; padding: 6px 12px; font-weight: 500; font-family: inherit; cursor: pointer; outline: none; transition: border-color 0.2s;">
                            <option value="en" ${currentLang === 'en' ? 'selected' : ''}>English</option>
                            <option value="vi" ${currentLang === 'vi' ? 'selected' : ''}>Tiếng Việt</option>
                            <option value="id" ${currentLang === 'id' ? 'selected' : ''}>Bahasa Indonesia</option>
                            <option value="tl" ${currentLang === 'tl' ? 'selected' : ''}>Tagalog</option>
                            <option value="km" ${currentLang === 'km' ? 'selected' : ''}>ភាសាខ្មែរ</option>
                            <option value="ru" ${currentLang === 'ru' ? 'selected' : ''}>Русский</option>
                            <option value="ro" ${currentLang === 'ro' ? 'selected' : ''}>Română</option>
                            <option value="de" ${currentLang === 'de' ? 'selected' : ''}>Deutsch</option>
                            <option value="hu" ${currentLang === 'hu' ? 'selected' : ''}>Magyar</option>
                            <option value="zh_MO" ${currentLang === 'zh_MO' ? 'selected' : ''}>简体中文</option>
                            <option value="hi" ${currentLang === 'hi' ? 'selected' : ''}>हिन्दी</option>
                            <option value="arz" ${currentLang === 'arz' ? 'selected' : ''}>العربية (مصر)</option>
                            <option value="ar_SA" ${currentLang === 'ar_SA' ? 'selected' : ''}>العربية (السعودية)</option>
                            <option value="bg" ${currentLang === 'bg' ? 'selected' : ''}>Български</option>
                            <option value="tr" ${currentLang === 'tr' ? 'selected' : ''}>Türkçe</option>
                            <option value="ml" ${currentLang === 'ml' ? 'selected' : ''}>മലയാളം</option>
                            <option value="pl" ${currentLang === 'pl' ? 'selected' : ''}>Polski</option>
                            ${currentLang === 'de@informal' ? `<option value="de@informal" selected>Bayerisch</option>` : ''}
                        </select>
                    </div>
                </div>
                <div class="setting-item">
                    <div class="setting-info">
                        <h3>${t('accent_color') || 'Accent Color'}</h3>
                        <p class="setting-desc" style="margin-top: 2px;">${t('accent_color_desc') || 'Customize the primary color to match your style'}</p>
                    </div>
                    <div class="setting-control">
                        <label class="toggle-switch">
                            <input type="checkbox" id="accent-toggle" ${isAccentEnabled ? 'checked' : ''}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
                <div class="setting-item accent-presets" style="display: flex; flex-wrap: wrap; gap: 14px; padding: 12px 16px 20px 16px; justify-content: center; align-items: center; opacity: ${isAccentEnabled ? '1' : '0.4'}; pointer-events: ${isAccentEnabled ? 'auto' : 'none'}; transition: opacity 0.3s; margin-top: -12px;">
                    <div class="custom-color-picker" title="Pick a custom color">
                        <div id="accent-preview" style="background: ${displaySavedAccent.startsWith('linear-gradient') ? displaySavedAccent : displaySavedAccent}; background-color: ${displaySavedAccent.startsWith('linear-gradient') ? 'transparent' : displaySavedAccent};"></div>
                        <input type="color" id="accent-picker" value="${savedAccent === 'trans-pride' || savedAccent === 'nonbinary-pride' ? '#55CDFC' : (displaySavedAccent.startsWith('linear-gradient') ? '#55CDFC' : displaySavedAccent)}" ${!isAccentEnabled ? 'disabled' : ''}>
                        <span class="material-icons-round picker-icon" style="font-size: 16px;">palette</span>
                    </div>
                    <button class="accent-preset" data-color="#4CAF50" style="background: #4CAF50; flex-shrink: 0;" title="Green"></button>
                    <button class="accent-preset" data-color="#2196F3" style="background: #2196F3; flex-shrink: 0;" title="Blue"></button>
                    <button class="accent-preset" data-color="#9C27B0" style="background: #9C27B0; flex-shrink: 0;" title="Purple"></button>
                    <button class="accent-preset" data-color="#FF5722" style="background: #FF5722; flex-shrink: 0;" title="Deep Orange"></button>
                    <button class="accent-preset" data-color="#FFFFFF" style="background: #FFFFFF; flex-shrink: 0; border: 1px solid rgba(255,255,255,0.3);" title="White"></button>
                    <button class="accent-preset" data-color="#E91E63" style="background: #E91E63; flex-shrink: 0;" title="Pink"></button>
                    <button class="accent-preset" data-color="#FFEB3B" style="background: #FFEB3B; flex-shrink: 0;" title="Yellow"></button>
                    <button class="accent-preset" data-color="#B71C1C" style="background: linear-gradient(135deg, #C62828, #B71C1C); flex-shrink: 0;" title="Deep Red"></button>
                    <button class="accent-preset" data-color="trans-pride" style="background: linear-gradient(to bottom, #55CDFC 0%, #55CDFC 20%, #F7A8B8 20%, #F7A8B8 40%, #FFFFFF 40%, #FFFFFF 60%, #F7A8B8 60%, #F7A8B8 80%, #55CDFC 80%, #55CDFC 100%); flex-shrink: 0; border: 1px solid rgba(255,255,255,0.2);" title="Trans Pride Theme 🏳️‍⚧️"></button>
                    <button class="accent-preset" data-color="nonbinary-pride" style="background: linear-gradient(to bottom, #FCF434 0%, #FCF434 25%, #FFFFFF 25%, #FFFFFF 50%, #9C59D1 50%, #9C59D1 75%, #2C2C2C 75%, #2C2C2C 100%); flex-shrink: 0; border: 1px solid rgba(255,255,255,0.2);" title="Non-binary Pride Theme"></button>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');

    // Handle language change
    const langSelect = document.getElementById('lang-select');
    langSelect.addEventListener('change', (e) => window.changeLanguage(e.target.value));

    // Handle accent toggle
    const accentToggle = document.getElementById('accent-toggle');
    const accentPicker = document.getElementById('accent-picker');
    const accentPreview = document.getElementById('accent-preview');
    const accentPresets = modal.querySelector('.accent-presets');

    accentToggle.addEventListener('change', (e) => {
        const enabled = e.target.checked;
        localStorage.setItem('reptdoc_accent_enabled', enabled);

        accentPicker.disabled = !enabled;
        accentPresets.style.opacity = enabled ? '1' : '0.4';
        accentPresets.style.pointerEvents = enabled ? 'auto' : 'none';

        if (enabled) {
            const saved = localStorage.getItem('reptdoc_accent');
            if (saved === 'trans-pride') {
                applyTransPrideTheme();
                localStorage.setItem('reptdoc_trans_pride', 'true');
            } else if (saved === 'nonbinary-pride') {
                applyNonbinaryPrideTheme();
                localStorage.setItem('reptdoc_trans_pride', 'false');
            } else {
                applyCustomAccent(accentPicker.value);
                localStorage.setItem('reptdoc_trans_pride', 'false');
            }
        } else {
            removeCustomAccent();
            removeTransPrideTheme();
            localStorage.setItem('reptdoc_trans_pride', 'false');
        }
    });

    // Handle color picker change
    accentPicker.addEventListener('input', (e) => {
        const color = e.target.value;
        localStorage.setItem('reptdoc_accent', color);
        localStorage.setItem('reptdoc_trans_pride', 'false');
        accentPreview.style.background = 'none';
        accentPreview.style.backgroundColor = color;
        removeTransPrideTheme();
        applyCustomAccent(color);
    });

    // Handle preset buttons
    modal.querySelectorAll('.accent-preset').forEach(btn => {
        btn.addEventListener('click', () => {
            const color = btn.dataset.color;
            localStorage.setItem('reptdoc_accent', color);

            if (color === 'trans-pride') {
                localStorage.setItem('reptdoc_trans_pride', 'true');
                accentPreview.style.background = 'linear-gradient(to bottom, #55CDFC 0%, #55CDFC 20%, #F7A8B8 20%, #F7A8B8 40%, #FFFFFF 40%, #FFFFFF 60%, #F7A8B8 60%, #F7A8B8 80%, #55CDFC 80%, #55CDFC 100%)';
                applyTransPrideTheme();
            } else if (color === 'nonbinary-pride') {
                localStorage.setItem('reptdoc_trans_pride', 'false');
                accentPreview.style.background = 'linear-gradient(to bottom, #FCF434 0%, #FCF434 25%, #FFFFFF 25%, #FFFFFF 50%, #9C59D1 50%, #9C59D1 75%, #2C2C2C 75%, #2C2C2C 100%)';
                removeTransPrideTheme();
                applyNonbinaryPrideTheme();
            } else {
                localStorage.setItem('reptdoc_trans_pride', 'false');
                const isLight = document.body.classList.contains('light-mode');
                let displayColor = color;
                if (isLight && color.toUpperCase() === '#FFFFFF') displayColor = '#000000';
                else if (!isLight && color === '#000000') displayColor = '#FFFFFF';

                accentPicker.value = (color === '#FFFFFF' || color === '#000000') ? displayColor : color;
                accentPreview.style.background = 'none';
                accentPreview.style.backgroundColor = displayColor;
                removeTransPrideTheme();
                applyCustomAccent(color);
            }
        });
    });

    // Close on overlay click
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    };
}

function initChangelog() {
    const changelogBtn = document.getElementById('nav-changelog');
    if (!changelogBtn) return;

    changelogBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showChangelogModal();
    });
}

function showChangelogModal() {
    let modal = document.getElementById('changelog-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'changelog-modal';
        modal.className = 'modal-overlay';
        document.body.appendChild(modal);
    }

    let changelogHtml = '<div class="changelog-timeline">';
    changelogData.forEach(item => {
        changelogHtml += `
            <div class="changelog-item">
                <div class="changelog-marker"></div>
                <div class="changelog-content-wrap">
                    <div class="changelog-header">
                        <span class="changelog-version-badge">${item.version}</span>
                        <span class="changelog-date">${item.date}</span>
                    </div>
                    <ul class="changelog-list">
                        ${(item.changes[currentLang] || item.changes['en']).map(change => `<li>${change}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    });
    changelogHtml += '</div>';

    modal.innerHTML = `
        <div class="modal-content settings-content">
            <div class="modal-header">
                <h2>${t('changelog')}</h2>
                <button class="btn-icon modal-close-btn" data-action="closeChangelog">
                    <span class="material-icons-round">close</span>
                </button>
            </div>
            <div class="modal-body">
                ${changelogHtml}
            </div>
        </div>
    `;

    modal.classList.add('active');

    // Close on overlay click
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    };
}

// Render Welcome Page
function renderWelcomePage() {
    isWelcomeState = true;
    const container = document.getElementById('soc-table-container');

    // Clear Active Nav State
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

    // Update Breadcrumbs
    const breadcrumbs = document.querySelector('.breadcrumbs');
    if (breadcrumbs) {
        breadcrumbs.innerHTML = `
            <span>${t('home')}</span>
            <span class="material-icons-round separator">chevron_right</span>
            <span class="current">${t('welcome')}</span>
        `;
    }

    container.innerHTML = `
        <div class="welcome-container">
            <div class="welcome-hero">
                <h1 class="welcome-title">${t('welcome_title')}</h1>
                <p class="welcome-subtitle">${t('welcome_subtitle')}</p>
            </div>
            
            <div class="welcome-actions" style="display: flex; justify-content: center; gap: 12px; margin-bottom: 32px; flex-wrap: wrap; padding: 0 16px;">
                <button class="btn-contained" data-action="goToComparePage" style="display: flex; align-items: center; gap: 8px; padding: 10px 24px; min-height: 44px; height: auto; border-radius: 999px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); white-space: normal; text-align: center; justify-content: center; flex: 0 1 auto; max-width: 100%;">
                    <span class="material-icons-round" style="font-size: 20px; flex-shrink: 0;">compare_arrows</span>
                    <span style="font-weight: 600;">${t('compare_btn') || 'Compare'}</span>
                </button>
                <button class="btn-contained" data-action="openSettings" style="display: flex; align-items: center; gap: 8px; padding: 10px 24px; min-height: 44px; height: auto; border-radius: 999px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); white-space: normal; text-align: center; justify-content: center; flex: 0 1 auto; max-width: 100%;">
                    <div style="display: flex; gap: 2px; flex-shrink: 0;">
                        <span class="material-icons-round" style="font-size: 20px;">translate</span>
                        <span class="material-icons-round" style="font-size: 20px;">dark_mode</span>
                    </div>
                    <span style="font-weight: 600;">${t('lang_theme_btn') || 'Language & Theme'}</span>
                </button>
                <button class="btn-contained" data-action="openChangelog" style="display: flex; align-items: center; gap: 8px; padding: 10px 24px; min-height: 44px; height: auto; border-radius: 999px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); white-space: normal; text-align: center; justify-content: center; flex: 0 1 auto; max-width: 100%;">
                    <span class="material-icons-round" style="font-size: 20px; flex-shrink: 0;">history</span>
                    <span style="font-weight: 600;">${t('changelog') || 'Changelog'}</span>
                </button>
            </div>

            <div class="welcome-credits" style="margin: 0 auto 48px; padding: 24px 32px; background: var(--md-sys-color-surface-variant); border: 2px solid var(--md-sys-color-primary); border-radius: 24px; text-align: center; max-width: 800px; box-shadow: 0 16px 40px -8px rgba(0,0,0,0.15);">
                <h3 style="display: flex; align-items: center; justify-content: center; gap: 12px; font-size: 22px; font-weight: 700; margin-bottom: 12px; color: var(--md-sys-color-on-surface);">
                    <span class="material-icons-round" style="color: var(--md-sys-color-primary); font-size: 28px;">volunteer_activism</span> 
                    ${t('translation_credits') || 'Translation Credits 💖'}
                </h3>
                <p style="color: var(--md-sys-color-on-surface-variant); margin-bottom: 24px; font-size: 16px;">
                    ${t('translation_desc') || 'Massive thanks to our community translators! Want to help translate ReptDoc into your language?'}
                </p>
                <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-bottom: 28px;">
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/hu.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="Magyar">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">Magyar</span>
                        <span style="color: var(--md-sys-color-on-surface-variant);">mackovaok (Kris)</span>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/in.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="हिन्दी">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">हिन्दी</span>
                        <a href="https://github.com/Egapboi" target="_blank" style="color: var(--md-sys-color-on-surface-variant); text-decoration: none; display: flex; align-items: center; gap: 4px;">egapboi <svg style="width: 14px; height: 14px; fill: currentColor;" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/cn.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="简体中文">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">简体中文</span>
                        <span style="color: var(--md-sys-color-on-surface-variant);">syobe</span>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/kh.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="ភាសាខ្មែر">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">ភាសាខ្មែរ</span>
                        <span style="color: var(--md-sys-color-on-surface-variant);">Kenzi</span>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/ph.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="Tagalog">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">Tagalog</span>
                        <span style="color: var(--md-sys-color-on-surface-variant);">Riley</span>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px; cursor: pointer;" data-action="toggleBayerisch">
                        ${currentLang === 'de@informal' ?
            `<svg viewBox="0 0 72 72" style="width: 28px; height: 22px; border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="color"><rect x="5" y="17" width="62" height="38" fill="#fff"/><path transform="translate(6,18)" fill="#61B2E4" d="M 57.81375,0 L 44.5425,0 60,34.2 60,36 47.5425,36 31.27125,0 18,0 34.27125,36 21,36 9,9.45 0,7.155 0,18.9 7.72875,36 21,36 0,30.645 0,18.9 60,34.2 60,22.455 9,9.45 4.72875,0 18,0 60,10.71 60,4.8375 z"/></g>
                                <g id="line"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M67 17H5V55H67V17Z"/></g>
                            </svg>` :
            `<img src="https://flagcdn.com/w40/de.png" width="28" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="Deutsch">`
        }
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">${currentLang === 'de@informal' ? 'Bayerisch' : 'Deutsch'}</span>
                        <span style="color: var(--md-sys-color-on-surface-variant);">SnitchPikachu</span>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/ro.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="Română">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">Română</span>
                        <span style="color: var(--md-sys-color-on-surface-variant);">fro0st</span>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/ru.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="Русский">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">Русский</span>
                        <span style="color: var(--md-sys-color-on-surface-variant);">fro0st, MaxSpec</span>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/id.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="Bahasa Indonesia">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">Bahasa Indonesia</span>
                        <a href="https://bsky.app/profile/edibletomb.bsky.social" target="_blank" style="color: var(--md-sys-color-on-surface-variant); text-decoration: none; display: flex; align-items: center; gap: 4px;">edibletomb <svg style="width: 14px; height: 14px; fill: currentColor;" viewBox="0 0 600 531"><path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"/></svg></a>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/eg.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="العربية (مصر)">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">العربية (مصر)</span>
                        <span style="color: var(--md-sys-color-on-surface-variant);">1x0</span>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/sa.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="العربية (السعودية)">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">العربية (السعودية)</span>
                        <a href="https://www.instagram.com/1gzzt/" target="_blank" style="color: var(--md-sys-color-on-surface-variant); text-decoration: none; display: flex; align-items: center; gap: 4px;">ryan<svg style="width: 14px; height: 14px; fill: currentColor;" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/bg.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="Български">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">Български</span>
                        <span style="color: var(--md-sys-color-on-surface-variant); cursor: pointer; display: flex; align-items: center; gap: 4px; transition: color 0.2s;" class="hoverable-link" data-action="copyText" data-copy="dumbass.cat" data-toast="Discord copied: dumbass.cat">Lyuuu <svg style="width: 14px; height: 14px; fill: currentColor;" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.29a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .077.01c.12.098.246.196.373.29a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.874.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .031-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.156 2.419 0 1.334-.945 2.419-2.156 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/></svg></span>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/tr.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="Türkçe">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">Türkçe</span>
                        <span style="color: var(--md-sys-color-on-surface-variant); cursor: pointer; display: flex; align-items: center; gap: 4px; transition: color 0.2s;" class="hoverable-link" data-action="copyText" data-copy="emitra" data-toast="Discord copied: emitra">emitra <svg style="width: 14px; height: 14px; fill: currentColor;" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.29a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .077.01c.12.098.246.196.373.29a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.874.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .031-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.156 2.419 0 1.334-.945 2.419-2.156 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/></svg></span>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/in.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="മലയാളം">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">മലയാളം</span>
                        <span style="color: var(--md-sys-color-on-surface-variant); cursor: pointer; display: flex; align-items: center; gap: 4px; transition: color 0.2s;" class="hoverable-link" data-action="copyText" data-copy="daemonxyz" data-toast="Discord copied: daemonxyz">Junkler <svg style="width: 14px; height: 14px; fill: currentColor;" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.29a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .077.01c.12.098.246.196.373.29a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.874.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .031-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.156 2.419 0 1.334-.945 2.419-2.156 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/></svg></span>
                    </div>
                    <div style="background: rgba(128, 128, 128, 0.1); border: 1px solid rgba(128, 128, 128, 0.2); padding: 8px 16px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
                        <img src="https://flagcdn.com/w40/pl.png" width="20" style="border-radius: 2px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));" alt="Polski">
                        <span style="font-weight: 600; color: var(--md-sys-color-primary);">Polski</span>
                        <span style="color: var(--md-sys-color-on-surface-variant);">abys</span>
                    </div>
                </div>
                <button class="btn-contained" data-action="openExternal" data-url="https://hosted.weblate.org/projects/reptdoc/" style="margin: 0 auto; display: inline-flex; align-items: center; gap: 8px; font-size: 15px; padding: 10px 24px; border-radius: 999px;">
                    ${t('translation_join') || 'Join us on Weblate'}
                    <span class="material-icons-round" style="font-size: 18px;">open_in_new</span>
                </button>
            </div>
        </div>
    `;
}

// Switch series and re-render table
async function switchSeries(series) {
    isWelcomeState = false;
    currentSeries = series;

    // Update nav item active state
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    const activeItem = document.querySelector(`.nav-item[data-series="${series}"]`);
    if (activeItem) activeItem.classList.add('active');

    // Clear search input
    const searchInput = document.getElementById('chip-search');
    if (searchInput) searchInput.value = '';

    const seriesInfo = seriesDataMap[series];
    if (seriesInfo) {
        updateBreadcrumb(seriesInfo.manufacturer, seriesInfo.label);
        try {
            await loadSeries(series);
        } catch (e) {
            console.error(e);
            if (currentSeries === series) {
                document.getElementById('soc-table-container').textContent = 'Failed to load chip data. Please try again.';
            }
            return;
        }
        // The user may have navigated elsewhere while the data was loading
        if (currentSeries !== series || isWelcomeState) return;
        renderTable(seriesInfo.data);
    }
}

// Code extracted to theme.js

// Initialize navigation
function initNavigation() {
    document.querySelectorAll('.nav-item[data-series]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            switchSeries(item.getAttribute('data-series'));
        });
    });

    // Nav group header toggle (replaces inline onclick="toggleNavGroup(this)")
    document.querySelectorAll('.nav-group-header').forEach(header => {
        header.addEventListener('click', () => {
            toggleNavGroup(header);
        });
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleNavGroup(header);
            }
        });
    });

    // Make logo click go to welcome page
    const logoArea = document.querySelector('.logo-area');
    if (logoArea) {
        logoArea.style.cursor = 'pointer';
        logoArea.addEventListener('click', () => {
            renderWelcomePage();
        });
    }
}


// Navigation and Menu Toggle Logic
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    if (!menuBtn || !sidebar) return;

    function toggleMenu() {
        if (window.innerWidth <= 768) {
            // Mobile behavior: toggle 'open' class to slide in
            sidebar.classList.toggle('open');
            if (overlay) overlay.classList.toggle('active');
        } else {
            // Desktop behavior: toggle 'collapsed' class to hide sidebar
            sidebar.classList.toggle('collapsed');
        }
    }

    function closeMenu() {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
            if (overlay) overlay.classList.remove('active');
        }
    }

    menuBtn.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    // Close sidebar when clicking any nav item (mobile UX)
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });
}

// Search Logic
function initSearch() {
    const searchInput = document.getElementById('chip-search');
    if (!searchInput) return;

    // Cache for pre-built global data (rebuilt only when series data changes)
    let _globalDataCache = null;
    function getGlobalData() {
        if (_globalDataCache) return _globalDataCache;
        const result = [];
        Object.keys(seriesDataMap).forEach(key => {
            if (key === 'global') return;
            const info = seriesDataMap[key];
            info.data.forEach(chip => {
                result.push({ ...chip, manufacturer: info.manufacturer, seriesKey: key });
            });
        });
        _globalDataCache = result;
        return result;
    }
    // Invalidate global cache if series data ever changes
    window._invalidateGlobalSearchCache = function () { _globalDataCache = null; };

    let _lastQuery = '';
    let _lastFilter = '';
    let _lastResults = null;
    let _debounceTimer = null;

    async function doSearch() {
        const query = searchInput.value.toLowerCase().trim();

        if (isWelcomeState) {
            if (currentSeries !== 'global') {
                currentSeries = 'global';
                updateBreadcrumb("ReptDoc", t('search_results'));
                document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
            }
        }

        if (!query) {
            _lastQuery = '';
            _lastFilter = '';
            _lastResults = null;
            if (isWelcomeState) {
                renderWelcomePage();
            } else {
                const seriesInfo = seriesDataMap[currentSeries];
                if (seriesInfo) renderTable(seriesInfo.data);
            }
            return;
        }

        const searchFilter = document.getElementById('search-filter');
        const filterBy = searchFilter ? searchFilter.value : 'name';

        // Skip re-render if query + filter unchanged
        if (query === _lastQuery && filterBy === _lastFilter) return;

        if (currentSeries === 'global') {
            try { await loadAllSeries(); } catch (e) { console.error(e); return; }
            // Ignore stale results if the query changed while loading
            if (searchInput.value.toLowerCase().trim() !== query || currentSeries !== 'global') return;
        }

        const dataToFilter = currentSeries === 'global' ? getGlobalData() : (seriesDataMap[currentSeries]?.data || []);

        const filteredData = dataToFilter.filter(chip => {
            const nameMatch = chip.name && getLc(chip.name).includes(query);
            if (filterBy === 'name') return nameMatch || (chip.codename && getLc(chip.codename).includes(query));
            if (filterBy === 'cpu') {
                const cpuSpecs = chip.cpu ? (typeof chip.cpu === 'object' ? chip.cpu.specs : chip.cpu) : '';
                return cpuSpecs && getLc(cpuSpecs).includes(query);
            }
            if (filterBy === 'gpu') return chip.gpu && getLc(chip.gpu).includes(query);
            const cpuSpecs = chip.cpu ? (typeof chip.cpu === 'object' ? chip.cpu.specs : chip.cpu) : '';
            return nameMatch || (chip.codename && getLc(chip.codename).includes(query)) ||
                (cpuSpecs && getLc(cpuSpecs).includes(query)) ||
                (chip.gpu && getLc(chip.gpu).includes(query));
        });

        // Sort by relevance
        filteredData.sort((a, b) => {
            const aName = getLc(a.name);
            const bName = getLc(b.name);
            if (aName === query) return -1;
            if (bName === query) return 1;
            const aStarts = aName.startsWith(query);
            const bStarts = bName.startsWith(query);
            if (aStarts && !bStarts) return -1;
            if (bStarts && !aStarts) return 1;
            return aName.length - bName.length;
        });

        // Skip re-render if results are identical
        const resultKey = filteredData.map(c => c.name).join(',');
        if (_lastResults === resultKey) return;

        _lastQuery = query;
        _lastFilter = filterBy;
        _lastResults = resultKey;

        renderTable(filteredData, true, dataToFilter);
    }

    searchInput.addEventListener('input', () => {
        clearTimeout(_debounceTimer);
        _debounceTimer = setTimeout(doSearch, 100);
    });

    const searchFilter = document.getElementById('search-filter');
    if (searchFilter) {
        searchFilter.addEventListener('change', () => {
            _lastQuery = '';
            doSearch();
        });
    }
}

/* Comparison Logic */
let comparisonState = { 1: null, 2: null };
window.allChipsFlat = null; // Prepare variable

// Global helper for logos using high-fidelity brand icons
function getBrandLogoGlobal(manufacturer, size) {
    const iconSize = size || "28px";
    if (!manufacturer) return `<span class="material-icons-round" style="font-size: ${iconSize}; color: var(--md-sys-color-primary);">memory</span>`;

    const m = manufacturer.toLowerCase().trim();
    const simpleIconsBase = "https://cdn.simpleicons.org";
    const imgStyle = `width: ${iconSize}; height: ${iconSize}; object-fit: contain;`;

    // Logos mapped to official Simple Icons / Local files
    const logos = {
        'apple silicon': `<img src="${simpleIconsBase}/apple/white" alt="Apple" style="${imgStyle}" class="brand-logo-apple">`,
        'qualcomm': `<img src="${simpleIconsBase}/qualcomm/E2E2E2" alt="Qualcomm" style="${imgStyle}">`,
        'mediatek': `<img src="${simpleIconsBase}/mediatek/color" alt="MediaTek" style="${imgStyle}">`,
        'exynos': `<img src="${simpleIconsBase}/samsung/1428A0" alt="Samsung" style="${imgStyle}">`,
        'google': `<svg viewBox="0 0 24 24" style="width: ${iconSize}; height: ${iconSize};" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>`,
        'unisoc': `<img src="unisoc-logo.png" alt="Unisoc" style="${imgStyle}">`,
        'xiaomi': `<img src="${simpleIconsBase}/xiaomi/FF6900" alt="Xiaomi" style="${imgStyle}">`,
        'hisilicon': `<img src="${simpleIconsBase}/huawei/C20E1A" alt="HiSilicon" style="${imgStyle}">`
    };

    return logos[m] || `<span class="material-icons-round" style="font-size: ${iconSize}; color: var(--md-sys-color-primary);">memory</span>`;
}


function goToCompare(chipName) {
    window.location.href = `compare.html?chip=${chipName}`;
}

function initComparison() {
    initCompareSearch(1);
    initCompareSearch(2);

    // Sidebar home link override for compare page
    const logoLink = document.getElementById('logo-home-link');
    if (logoLink) logoLink.onclick = (e) => {
        e.preventDefault();
        window.location.href = 'index.html';
    };

    // Initialize Share Button
    const shareBtn = document.getElementById('share-comparison');
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            copyComparisonLink();
        });
    }

    // Auto-select chips from URL params
    const params = new URLSearchParams(window.location.search);
    const preselect1 = params.get('chip1') || params.get('chip');
    const preselect2 = params.get('chip2');

    const waitForDataAndSelect = (slot, chipName) => {
        if (!chipName) return;
        const checkData = () => {
            if (window.allChipsFlat && window.allChipsFlat.length > 0) {
                const name = decodeURIComponent(chipName).toLowerCase();
                const chipIndex = window.allChipsFlat.findIndex(c => c.name.toLowerCase() === name);
                if (chipIndex !== -1) {
                    selectChip(slot, chipIndex, false);
                }
            } else {
                setTimeout(checkData, 50);
            }
        };
        checkData();
    };

    waitForDataAndSelect(1, preselect1);
    waitForDataAndSelect(2, preselect2);
}

function syncURLWithState() {
    const params = new URLSearchParams();
    if (comparisonState[1]) params.set('chip1', comparisonState[1].name);
    if (comparisonState[2]) params.set('chip2', comparisonState[2].name);

    const qs = params.toString();
    const newURL = window.location.pathname + (qs ? '?' + qs : '');
    window.history.replaceState({ path: newURL }, '', newURL);
}

// Snapshot of the active theme as "bg.text.muted.accent.bar" (hex, no #), so the
// server-rendered embed card (netlify/functions/compare-card.mjs) can match it
function getThemeParam() {
    const probe = document.createElement('span');
    probe.style.display = 'none';
    document.body.appendChild(probe);
    const hex = (cssVar) => {
        probe.style.color = `var(${cssVar})`;
        const m = getComputedStyle(probe).color.match(/\d+(\.\d+)?/g);
        if (!m || m.length < 3) return null;
        return m.slice(0, 3).map(n => Math.round(parseFloat(n)).toString(16).padStart(2, '0')).join('');
    };
    const parts = ['--md-sys-color-background', '--md-sys-color-on-surface', '--md-sys-color-on-surface-variant',
        '--md-sys-color-primary', '--md-sys-color-surface-container-highest'].map(hex);
    probe.remove();
    if (!parts.every(Boolean)) return null;
    // Pride themes get the flag gradients on the card
    const root = document.documentElement.classList;
    return parts.join('.') + (root.contains('trans-pride-theme') ? '.trans' : root.contains('nonbinary-pride-theme') ? '.nb' : '');
}

function copyComparisonLink() {
    // Current URL is kept in sync with state; the theme is only added to the copied link
    const shareUrl = new URL(window.location.href);
    const theme = getThemeParam();
    if (theme) shareUrl.searchParams.set('theme', theme);
    const url = shareUrl.toString();
    const btn = document.getElementById('share-comparison');
    const icon = btn ? btn.querySelector('.material-icons-round') : null;

    navigator.clipboard.writeText(url).then(() => {
        if (icon) {
            const originalIcon = icon.textContent;
            icon.textContent = 'check';
            setTimeout(() => {
                icon.textContent = originalIcon;
            }, 2000);
        }
    }).catch(err => {
        console.error('Failed to copy link:', err);
        // Fallback or legacy copy method could go here
    });
}

function initCompareSearch(id) {
    const input = document.getElementById(`input-chip-${id}`);
    const results = document.getElementById(`results-chip-${id}`);

    // Prepare flattened data (cached)
    if (!window._allChipsPromise) {
        window._allChipsPromise = loadAllSeries().then(() => {
            window.allChipsFlat = [];
            Object.keys(seriesDataMap).forEach(key => {
                if (key === 'global') return;
                const info = seriesDataMap[key];
                const chipsWithMeta = info.data.map(chip => ({
                    ...chip,
                    manufacturer: info.manufacturer, // Ensure manufacturer is set
                    seriesLabel: info.label
                }));
                window.allChipsFlat = window.allChipsFlat.concat(chipsWithMeta);
            });
        });
    }
    window._allChipsPromise.catch(err => console.error('Failed to load chip data:', err));

    input.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase().trim();

        if (val === 'kenzi') {
            alert("are u a gay furry");
        }
        if (val === 'bdtech') {
            alert("boodoo galala s25 ultra");
        }
        if (val === 'bojangles') {
            alert("u suck");
        }
        if (val === 'synz') {
            alert("synz synz synz synz synz synz synz synz");
        }
        if (val === 'yeetdom') {
            alert("yeetdom is the best");
        }
        if (val === 'bluein') {
            alert("blublublublublublublublu");
        }
        if (val === 'val') {
            alert("valvalvalvalvalvalvalvalvalvalval");
        }
        if (val === 'riley') {
            alert("riley riley riley riley riley riley riley riley");
        }
        if (val === 'inf') {
            alert("honesly i think you should go touch some grass");
        }
        if (val === 'nagara') {
            alert("nagara nagara nagara nagara nagara nagara nagara nagara");
        }
        if (val === 'kietlak') {
            alert("kietlak l?c dít di");
        }
        if (val === 'wil') {
            alert("pls maid");
        }
        if (val === 'mortician') {
            alert("u are such a nerd i love it")
        }

        if (!val) {
            results.classList.remove('active');
            return;
        }

        if (!window.allChipsFlat) return; // data still loading
        const matches = window.allChipsFlat.filter(chip =>
            (chip.name && chip.name.toLowerCase().includes(val)) ||
            (chip.codename && chip.codename.toLowerCase().includes(val))
        ).slice(0, 10); // Limit to 10

        if (matches.length > 0) {
            results.innerHTML = matches.map((chip, idx) => `
                <div class="result-item" data-action="selectChip" data-slot="${id}" data-index="${window.allChipsFlat.indexOf(chip)}">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div class="result-item-icon" style="flex-shrink: 0; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.05); border-radius: 8px;">
                            ${getBrandLogoGlobal(chip.manufacturer).replace('width: 28px; height: 28px;', 'width: 20px; height: 20px;')}
                        </div>
                        <div style="display: flex; flex-direction: column;">
                            <strong>${escapeHtml(chip.name)}</strong>
                            <small>${escapeHtml(chip.manufacturer)} - ${escapeHtml(chip.releaseDate) || ''}</small>
                        </div>
                    </div>
                </div>
            `).join('');
            results.classList.add('active');
            // Ensure card is on top when active
            document.getElementById(`selector-${id}`).style.zIndex = '1000';
        } else {
            results.classList.remove('active');
            document.getElementById(`selector-${id}`).style.zIndex = '';
        }
    });

    // Hide results on click outside
    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !results.contains(e.target)) {
            results.classList.remove('active');
            document.getElementById(`selector-${id}`).style.zIndex = '';
        }
    });
}

window.selectChip = function (slot, chipIndex, updateURL = true) {
    const chip = window.allChipsFlat[chipIndex];
    comparisonState[slot] = chip;

    // Update UI
    document.getElementById(`selector-${slot}`).querySelector('.selector-search-box').style.display = 'none';
    document.getElementById(`results-chip-${slot}`).classList.remove('active');

    const display = document.getElementById(`display-chip-${slot}`);
    display.classList.add('active');

    // Set Icon
    const displayIcon = getBrandLogoGlobal(chip.manufacturer, "64px");

    document.getElementById(`icon-chip-${slot}`).innerHTML = displayIcon;
    document.getElementById(`name-chip-${slot}`).textContent = chip.name;
    document.getElementById(`detail-chip-${slot}`).textContent = chip.partNumber || chip.codename || '';

    // Update URL if needed
    if (updateURL) {
        syncURLWithState();
    }

    // Defer table update to next animation frame to prevent layout thrashing/jitter
    requestAnimationFrame(() => {
        updateComparisonTable();
    });
}


window.clearChip = function (slot) {
    comparisonState[slot] = null;
    document.getElementById(`selector-${slot}`).querySelector('.selector-search-box').style.display = 'flex';
    document.getElementById(`input-chip-${slot}`).value = '';
    document.getElementById(`display-chip-${slot}`).classList.remove('active');

    syncURLWithState();

    // Defer update to smooth out removal animation
    requestAnimationFrame(() => {
        updateComparisonTable();
    });
}


function updateComparisonTable() {
    const container = document.getElementById('comparison-table-wrapper');
    const chip1 = comparisonState[1];
    const chip2 = comparisonState[2];

    if (!chip1 && !chip2) {
        container.innerHTML = '';
        return;
    }

    let html = '<table class="comparison-table">';
    html += `<thead><tr><th>${t('specs')}</th>`;
    html += `<th>${chip1 ? escapeHtml(chip1.name) : t('select_soc')}</th>`;
    html += `<th>${chip2 ? escapeHtml(chip2.name) : t('select_soc')}</th>`;
    html += '</tr></thead><tbody>';

    tableStructure.forEach(group => {
        // Skip benchmarks in table - we'll render them separately
        if (group.category === "category_benchmarks") return;

        html += `<tr><td colspan="3" class="comparison-category">${t(group.category)}</td></tr>`;

        group.rows.forEach(row => {
            let v1 = chip1 ? getNestedValue(chip1, row.key) : '-';
            let v2 = chip2 ? getNestedValue(chip2, row.key) : '-';

            if (v1 === undefined || v1 === 'undefined') v1 = 'unknown';
            if (v2 === undefined || v2 === 'undefined') v2 = 'unknown';

            if ((!v1 || v1 === '-' || v1 === 'N/A' || v1 === 'unknown') && (!v2 || v2 === '-' || v2 === 'N/A' || v2 === 'unknown')) return;

            let labelHtml = t(row.label);

            html += `<tr>`;
            html += `<td class="feature-label">${labelHtml}</td>`;
            html += `<td class="val-col">${row.key === 'cpu.specs' ? formatCpuSpecs(v1) : formatValue(v1)}</td>`;
            html += `<td class="val-col">${row.key === 'cpu.specs' ? formatCpuSpecs(v2) : formatValue(v2)}</td>`;
            html += `</tr>`;
        });
    });

    html += '</tbody></table>';

    // Add visual benchmark comparison at the TOP
    const benchmarkHtml = renderBenchmarkComparison(chip1, chip2);

    container.innerHTML = benchmarkHtml + html;
}

function renderBenchmarkComparison(chip1, chip2) {
    const name1 = chip1 ? escapeHtml(chip1.name) : 'Chip 1';
    const name2 = chip2 ? escapeHtml(chip2.name) : 'Chip 2';

    // Get CPU benchmark values
    const gb6Single1 = chip1 && chip1.geekbench6 ? parseInt(chip1.geekbench6.single) || 0 : 0;
    const gb6Single2 = chip2 && chip2.geekbench6 ? parseInt(chip2.geekbench6.single) || 0 : 0;
    const gb6Multi1 = chip1 && chip1.geekbench6 ? parseInt(chip1.geekbench6.multi) || 0 : 0;
    const gb6Multi2 = chip2 && chip2.geekbench6 ? parseInt(chip2.geekbench6.multi) || 0 : 0;
    const gb7Single1 = chip1 && chip1.geekbench7 ? parseInt(chip1.geekbench7.single) || 0 : 0;
    const gb7Single2 = chip2 && chip2.geekbench7 ? parseInt(chip2.geekbench7.single) || 0 : 0;
    const gb7Multi1 = chip1 && chip1.geekbench7 ? parseInt(chip1.geekbench7.multi) || 0 : 0;
    const gb7Multi2 = chip2 && chip2.geekbench7 ? parseInt(chip2.geekbench7.multi) || 0 : 0;

    const cpuMode = window.activeCpuBenchmark || 'geekbench6';
    const hasGb6 = gb6Single1 || gb6Single2 || gb6Multi1 || gb6Multi2;
    const hasGb7 = gb7Single1 || gb7Single2 || gb7Multi1 || gb7Multi2;
    const canToggleCpu = hasGb6 && hasGb7;
    const showGb7 = (cpuMode === 'geekbench7' && hasGb7) || (hasGb7 && !hasGb6);
    const cpuSingle1 = showGb7 ? gb7Single1 : gb6Single1;
    const cpuSingle2 = showGb7 ? gb7Single2 : gb6Single2;
    const cpuMulti1 = showGb7 ? gb7Multi1 : gb6Multi1;
    const cpuMulti2 = showGb7 ? gb7Multi2 : gb6Multi2;

    // Get GPU benchmark values
    const wildlife1 = chip1 ? parseInt(chip1.wildlifeExtreme) || 0 : 0;
    const wildlife2 = chip2 ? parseInt(chip2.wildlifeExtreme) || 0 : 0;
    const steelNomad1 = chip1 ? parseInt(chip1.steelNomadLite) || 0 : 0;
    const steelNomad2 = chip2 ? parseInt(chip2.steelNomadLite) || 0 : 0;

    const gpuMode = window.activeGpuBenchmark || 'wildlife';
    const hasSteel = steelNomad1 || steelNomad2;
    const hasWildlife = wildlife1 || wildlife2;
    const canToggleGpu = hasSteel && hasWildlife;

    // Check if we have any benchmark data
    if (!hasGb6 && !hasGb7 && !hasWildlife && !hasSteel) {
        return '';
    }

    let html = '<div class="benchmark-comparison">';

    // Geekbench CPU Section (6 or 7, switchable when both are available)
    if (hasGb6 || hasGb7) {
        const cpuTitle = showGb7 ? t('geekbench7_title') : t('geekbench_title');
        const cpuDesc = showGb7 ? t('geekbench7_desc') : t('geekbench_desc');
        const toggleCpuHtml = canToggleCpu ?
            `<button class="btn-text tooltip" data-action="toggleCpuBenchmark" style="display: inline-flex !important; align-items: center; justify-content: center; padding: 4px 8px; font-size: 13px; align-self: flex-start;">
                 <span class="material-icons-round" style="font-size: 16px; margin-right: 4px;">swap_horiz</span>
                 ${showGb7 ? t('switch_to_geekbench6') : t('switch_to_geekbench7')}
             </button>` : '';

        html += `
        <div class="benchmark-section">
            <div class="benchmark-header" style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px;">
                <div style="display: flex; align-items: center;">
                    <span class="material-icons-round" style="color: var(--md-sys-color-primary); margin-right: 8px;">speed</span>
                    <h3>${cpuTitle}</h3>
                </div>
                ${toggleCpuHtml}
            </div>
            <p class="benchmark-desc">${cpuDesc}</p>
            <div class="benchmark-grid">
                <div class="benchmark-column">
                    <h4>${t('single_core')}</h4>
                    ${renderBenchmarkBar(name1, cpuSingle1, name2, cpuSingle2)}
                </div>
                <div class="benchmark-column">
                    <h4>${t('multi_core')}</h4>
                    ${renderBenchmarkBar(name1, cpuMulti1, name2, cpuMulti2)}
                </div>
            </div>
        </div>`;
    }

    // Determine which GPU benchmark to show based on toggle and availability
    const showSteelNomad = (gpuMode === 'steel_nomad' && hasSteel) || (hasSteel && !hasWildlife);
    const activeGpu1 = showSteelNomad ? steelNomad1 : wildlife1;
    const activeGpu2 = showSteelNomad ? steelNomad2 : wildlife2;

    if (activeGpu1 || activeGpu2 || canToggleGpu) {
        const toggleLabel = showSteelNomad ? t('switch_to_wildlife') : t('switch_to_steel');
        const toggleHtml = canToggleGpu ?
            `<button class="btn-text tooltip" data-action="toggleGpuBenchmark" style="display: inline-flex !important; align-items: center; justify-content: center; padding: 4px 8px; font-size: 13px; align-self: flex-start;">
                 <span class="material-icons-round" style="font-size: 16px; margin-right: 4px;">swap_horiz</span>
                 ${toggleLabel}
             </button>` : '';

        const curGpuTitle = showSteelNomad ? t('steel_nomad_title') : t('wildlife_title');

        html += `
        <div class="benchmark-section">
            <div class="benchmark-header" style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px;">
                <div style="display: flex; align-items: center;">
                    <span class="material-icons-round" style="color: var(--md-sys-color-primary); margin-right: 8px;">videogame_asset</span>
                    <h3>${curGpuTitle}</h3>
                </div>
                ${toggleHtml}
            </div>
            <p class="benchmark-desc">${t('wildlife_desc')}</p>
            <div class="benchmark-grid single">
                <div class="benchmark-column">
                    <h4>${t('graphics_score')}</h4>
                    ${renderBenchmarkBar(name1, activeGpu1, name2, activeGpu2)}
                </div>
            </div>
        </div>`;
    }

    html += '</div>';
    return html;
}

function renderBenchmarkBar(name1, val1, name2, val2) {
    const maxVal = Math.max(val1, val2);
    const pct1 = maxVal > 0 ? (val1 / maxVal) * 100 : 0;
    const pct2 = maxVal > 0 ? (val2 / maxVal) * 100 : 0;

    // Calculate percentage difference
    let diff1 = '', diff2 = '';
    if (val1 > 0 && val2 > 0) {
        if (val1 > val2) {
            const pctDiff = Math.round(((val1 - val2) / val2) * 100);
            diff1 = `<span class="benchmark-diff positive">+${pctDiff}%</span>`;
        } else if (val2 > val1) {
            const pctDiff = Math.round(((val2 - val1) / val1) * 100);
            diff2 = `<span class="benchmark-diff positive">+${pctDiff}%</span>`;
        }
    }

    // Determine bar colors based on win/loss
    const color1 = val1 >= val2 ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-outline)';
    const color2 = val2 >= val1 ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-outline)';

    return `
        <div class="benchmark-bar-group">
            <div class="benchmark-bar-row">
                <div class="benchmark-bar-label"><span class="chip-name-text">${name1}</span> ${diff1}</div>
                <div class="benchmark-bar-value">${val1 > 0 ? val1.toLocaleString() : '-'}</div>
            </div>
            <div class="benchmark-bar-container">
                <div class="benchmark-bar" style="width: ${pct1}%; background-color: ${color1};"></div>
            </div>
            <div class="benchmark-bar-row" style="margin-top: 16px;">
                <div class="benchmark-bar-label"><span class="chip-name-text">${name2}</span> ${diff2}</div>
                <div class="benchmark-bar-value">${val2 > 0 ? val2.toLocaleString() : '-'}</div>
            </div>
            <div class="benchmark-bar-container">
                <div class="benchmark-bar" style="width: ${pct2}%; background-color: ${color2};"></div>
            </div>
        </div>
    `;
}

// Toast Notification
function showToast(message) {
    let toast = document.getElementById('toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notification';
        toast.className = 'toast-container';
        toast.innerHTML = `
            <span class="material-icons-round toast-icon">check_circle</span>
            <span class="toast-message"></span>
        `;
        document.body.appendChild(toast);
    }

    toast.querySelector('.toast-message').textContent = message;
    toast.classList.add('active');

    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// ===== SECURITY PATCH: Event Delegation (replaces all inline onclick handlers) =====
document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) return;

    const action = target.dataset.action;

    switch (action) {
        case 'openDieshot':
            e.stopPropagation();
            openDieshot(target.dataset.shotId);
            break;
        case 'closeDieshot':
            closeDieshot();
            break;
        case 'toggleCard':
            e.stopPropagation();
            toggleCardDetails(parseInt(target.dataset.index));
            break;
        case 'switchVariant':
            e.stopPropagation();
            e.preventDefault();
            window.switchVariant(target.dataset.cardId, parseInt(target.dataset.variantIndex));
            break;
        case 'goToCompare':
            e.stopPropagation();
            goToCompare(decodeURIComponent(target.dataset.chip));
            break;
        case 'renderWelcome':
            e.preventDefault();
            renderWelcomePage();
            break;
        case 'closeSettings':
            document.getElementById('settings-modal').classList.remove('active');
            break;
        case 'toggleTheme':
            window.toggleTheme(target);
            break;
        case 'closeChangelog':
            document.getElementById('changelog-modal').classList.remove('active');
            break;
        case 'goToComparePage':
            window.location.href = 'compare.html';
            break;
        case 'openSettings':
            showSettingsModal();
            break;
        case 'openChangelog':
            showChangelogModal();
            break;
        case 'toggleBayerisch':
            window.changeLanguage(currentLang === 'de@informal' ? 'de' : 'de@informal');
            break;
        case 'copyText':
            navigator.clipboard.writeText(target.dataset.copy);
            showToast(target.dataset.toast);
            break;
        case 'openExternal':
            window.open(target.dataset.url, '_blank');
            break;
        case 'selectChip':
            selectChip(parseInt(target.dataset.slot), parseInt(target.dataset.index));
            break;
        case 'toggleCpuBenchmark':
            toggleCpuBenchmark();
            break;
        case 'toggleGpuBenchmark':
            toggleGpuBenchmark();
            break;
        case 'clearChip':
            clearChip(parseInt(target.dataset.slot));
            break;
        default:
            break;
    }
});

// Event delegation for change events (language select)
document.addEventListener('change', (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) return;

    if (target.dataset.action === 'changeLanguage') {
        window.changeLanguage(target.value);
    }
});

// CSS hover effect for .hoverable-link (replaces onmouseover/onmouseout)
const hoverStyle = document.createElement('style');
hoverStyle.textContent = `.hoverable-link:hover { color: var(--md-sys-color-primary) !important; }`;
document.head.appendChild(hoverStyle);

// Init
document.addEventListener('DOMContentLoaded', async () => {
    await loadLocales();
    initLang();
    initTheme();

    initMobileMenu();
    initSettings();
    initChangelog();

    if (document.getElementById('comparison-container')) {
        initComparison();
    } else {
        renderWelcomePage();
        initNavigation();
        initSearch();
    }
});
