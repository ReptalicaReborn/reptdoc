// Adds per-comparison Open Graph tags to compare.html so links like
//   /compare.html?chip1=A19%20Pro&chip2=Snapdragon%208%20Elite
// get a useful embed in Discord and other chat apps. Those crawlers don't run
// JavaScript, so the tags have to be in the HTML we serve.
//
// SERIES_KEYS must match the files in /data (and the keys in seriesDataMap in script.js).
const SERIES_KEYS = [
  'a-series', 'm-series',
  'snapdragon-8', 'snapdragon-7', 'snapdragon-6', 'snapdragon-4', 'snapdragon-2', 'snapdragon-x',
  'dimensity-9000', 'dimensity-8000', 'dimensity-7000', 'dimensity-6000', 'dimensity-1000',
  'dimensity-900', 'dimensity-800', 'dimensity-700',
  'helio-g', 'helio-x', 'helio-p', 'helio-a',
  'kirin-9000', 'kirin-800', 'kirin-700', 'kirin-600', 'kirin-tablet', 'kirin-past',
  'exynos-2000', 'exynos-1000', 'exynos-900', 'exynos-800', 'exynos-9', 'exynos-8',
  'exynos-7', 'exynos-5', 'exynos-4', 'exynos-3',
  'tensor', 'loongson-3a', 'unisoc', 'xiaomi',
];

let chipIndexPromise = null;

function loadChipIndex(origin) {
  if (!chipIndexPromise) {
    chipIndexPromise = Promise.all(
      SERIES_KEYS.map(async (key) => {
        const res = await fetch(`${origin}/data/${key}.json`);
        if (!res.ok) throw new Error(`Failed to load ${key}`);
        return res.json();
      })
    ).then((lists) => {
      const index = new Map();
      for (const chip of lists.flat()) {
        if (chip.name && !index.has(chip.name.toLowerCase())) index.set(chip.name.toLowerCase(), chip);
      }
      return index;
    }).catch((err) => {
      chipIndexPromise = null; // retry on the next request
      throw err;
    });
  }
  return chipIndexPromise;
}

const escapeHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const num = (v) => (v === undefined || v === null || v === '' ? null : String(v));

const parse = (v) => {
  const n = parseInt(String(v ?? '').replace(/[^0-9]/g, ''), 10);
  return Number.isFinite(n) ? n : null;
};

// Signed % difference of the first chip relative to the second, e.g. "+24%"
function pct(x, y) {
  if (x === null || y === null || y === 0) return null;
  const p = Math.round(((x - y) / y) * 100);
  return `${p > 0 ? '+' : ''}${p}%`;
}

function scoreLines(a, b) {
  const rows = [
    ['Geekbench 7', (c) => c.geekbench7 && num(c.geekbench7.single) ? [c.geekbench7.single, c.geekbench7.multi] : null],
    ['Geekbench 6', (c) => c.geekbench6 && num(c.geekbench6.single) ? [c.geekbench6.single, c.geekbench6.multi] : null],
    ['Wild Life Extreme', (c) => num(c.wildlifeExtreme) ? [c.wildlifeExtreme] : null],
    ['Steel Nomad Lite', (c) => num(c.steelNomadLite) ? [c.steelNomadLite] : null],
  ];
  const lines = [];
  for (const [label, get] of rows) {
    const va = get(a), vb = get(b);
    if (!va && !vb) continue;
    const show = (v) => (v ? v.join(' / ') : '—');
    let line = `${label}: ${show(va)} vs ${show(vb)}`;
    if (va && vb) {
      const diffs = va.map((x, i) => pct(parse(x), parse(vb[i])));
      if (diffs.every(Boolean)) line += ` (${diffs.join(' / ')})`;
    }
    lines.push(line);
  }
  return lines;
}

export default async (request, context) => {
  const url = new URL(request.url);
  const name1 = url.searchParams.get('chip1') || url.searchParams.get('chip');
  const name2 = url.searchParams.get('chip2');
  const response = await context.next();
  if (!name1 && !name2) return response;
  if (!(response.headers.get('content-type') || '').includes('text/html')) return response;

  let a = null, b = null;
  try {
    const index = await loadChipIndex(url.origin);
    a = name1 ? index.get(name1.toLowerCase()) : null;
    b = name2 ? index.get(name2.toLowerCase()) : null;
  } catch (err) {
    console.error(err);
    return response;
  }
  if (!a && !b) return response;

  const title = a && b ? `${a.name} vs ${b.name}` : (a || b).name;
  const lines = a && b ? scoreLines(a, b) : [];
  if (a && b) lines.push(`Process: ${a.process || '—'} vs ${b.process || '—'}`);
  const description = lines.join('\n') || 'Compare SoC specs and benchmarks on ReptDoc';

  // Rendered by netlify/functions/compare-card.mjs; needs both chips, else fall back to the logo
  const image = a && b
    ? escapeHtml(`${url.origin}/og/compare.png?chip1=${encodeURIComponent(a.name)}&chip2=${encodeURIComponent(b.name)}`)
    : `${url.origin}/favicon.png`;

  const tags = [
    `<meta property="og:title" content="${escapeHtml(title)} | ReptDoc">`,
    `<meta property="og:description" content="${escapeHtml(description)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="ReptDoc">`,
    `<meta property="og:image" content="${image}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta name="twitter:card" content="${a && b ? 'summary_large_image' : 'summary'}">`,
    `<meta name="twitter:image" content="${image}">`,
  ].join('\n    ');

  const html = (await response.text()).replace('</head>', `    ${tags}\n</head>`);
  const headers = new Headers(response.headers);
  headers.delete('content-length');
  return new Response(html, { status: response.status, headers });
};

export const config = { path: ['/compare', '/compare.html'] };
