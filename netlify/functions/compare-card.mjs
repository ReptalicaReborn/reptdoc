// Renders a 1200x630 PNG comparing two chips, used as og:image for compare links
// (see netlify/edge-functions/compare-og.js). Data, fonts and the resvg wasm are
// fetched from the site itself, so nothing needs bundling beyond satori/resvg.
import satori from 'satori';
import { initWasm, Resvg } from '@resvg/resvg-wasm';

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

const DEFAULT_COLORS = { bg: '#12100E', text: '#EDE0D4', muted: '#9C9387', accent: '#E6C275', bar: '#3A342C', pride: null };
const TRANS_BLUE = '#55CDFC', TRANS_PINK = '#F7A8B8', TRANS_WHITE = '#FFFFFF';
const NB_YELLOW = '#FCF434', NB_PURPLE = '#9C59D1';
const NB_GRADIENT = `linear-gradient(90deg, ${NB_YELLOW}, ${NB_PURPLE})`;
const NB_FLAG = `linear-gradient(90deg, ${NB_YELLOW} 0%, ${NB_YELLOW} 25%, #FFFFFF 25%, #FFFFFF 50%, ${NB_PURPLE} 50%, ${NB_PURPLE} 75%, #2C2C2C 75%, #2C2C2C 100%)`;
const TRANS_GRADIENT = `linear-gradient(90deg, ${TRANS_BLUE}, ${TRANS_PINK})`;
const TRANS_FLAG = `linear-gradient(90deg, ${TRANS_BLUE} 0%, ${TRANS_BLUE} 20%, ${TRANS_PINK} 20%, ${TRANS_PINK} 40%, ${TRANS_WHITE} 40%, ${TRANS_WHITE} 60%, ${TRANS_PINK} 60%, ${TRANS_PINK} 80%, ${TRANS_BLUE} 80%, ${TRANS_BLUE} 100%)`;
let COLORS = DEFAULT_COLORS;

// "bg.text.muted.accent.bar[.trans|.nb]" as 6-digit hex; anything malformed falls back to the default look
function parseTheme(param) {
  if (!/^([0-9a-f]{6}\.){4}[0-9a-f]{6}(\.(trans|nb))?$/i.test(param || '')) return DEFAULT_COLORS;
  const parts = param.split('.');
  const [bg, text, muted, accent, bar] = parts.slice(0, 5).map((c) => `#${c}`);
  return { bg, text, muted, accent, bar, pride: parts[5] || null };
}

let assetsPromise = null;
let indexPromise = null;
let wasmReady = null;

async function getAssets(origin) {
  if (!assetsPromise) {
    assetsPromise = (async () => {
      const get = async (p) => {
        const res = await fetch(`${origin}/assets/og/${p}`);
        if (!res.ok) throw new Error(`Failed to load ${p}`);
        return res.arrayBuffer();
      };
      const [regular, bold, wasm] = await Promise.all([get('inter-400.woff'), get('inter-700.woff'), get('resvg.wasm')]);
      if (!wasmReady) wasmReady = initWasm(wasm);
      await wasmReady;
      return {
        fonts: [
          { name: 'Inter', data: regular, weight: 400, style: 'normal' },
          { name: 'Inter', data: bold, weight: 700, style: 'normal' },
        ],
      };
    })().catch((e) => { assetsPromise = null; throw e; });
  }
  return assetsPromise;
}

function getIndex(origin) {
  if (!indexPromise) {
    indexPromise = Promise.all(SERIES_KEYS.map(async (key) => {
      const res = await fetch(`${origin}/data/${key}.json`);
      if (!res.ok) throw new Error(`Failed to load ${key}`);
      return res.json();
    })).then((lists) => {
      const index = new Map();
      for (const chip of lists.flat()) if (chip.name && !index.has(chip.name.toLowerCase())) index.set(chip.name.toLowerCase(), chip);
      return index;
    }).catch((e) => { indexPromise = null; throw e; });
  }
  return indexPromise;
}

const toNum = (v) => {
  const n = parseInt(String(v ?? '').replace(/[^0-9]/g, ''), 10);
  return Number.isFinite(n) ? n : null;
};

function buildRows(a, b) {
  const bothHave = (get) => get(a) !== null && get(b) !== null;
  const gb7 = (k) => (c) => toNum(c.geekbench7?.[k]);
  const gb6 = (k) => (c) => toNum(c.geekbench6?.[k]);
  const useGb7 = bothHave(gb7('single')) || bothHave(gb7('multi'));
  const gb = useGb7 ? ['Geekbench 7', gb7] : ['Geekbench 6', gb6];
  const defs = [
    [`${gb[0]} single-core`, gb[1]('single')],
    [`${gb[0]} multi-core`, gb[1]('multi')],
    ['3DMark Wild Life Extreme', (c) => toNum(c.wildlifeExtreme)],
    ['Steel Nomad Lite', (c) => toNum(c.steelNomadLite)],
  ];
  return defs
    .map(([label, get]) => ({ label, a: get(a), b: get(b) }))
    .filter((r) => r.a !== null || r.b !== null);
}

// Solid accent, or the flag gradient for a pride theme
const fill = (color) => (COLORS.pride === 'trans' ? { backgroundImage: TRANS_GRADIENT }
  : COLORS.pride === 'nb' ? { backgroundImage: NB_GRADIENT } : { backgroundColor: color });

const h = (type, style, children) => ({ type, props: { style, children } });

// Signed % difference of `value` relative to `other`, e.g. "+24%"; null if not comparable
function pctDiff(value, other) {
  if (value === null || other === null || other === 0) return null;
  const pct = Math.round(((value - other) / other) * 100);
  return pct === 0 ? null : `${pct > 0 ? '+' : ''}${pct}%`;
}

function valueCell(value, other, align) {
  const win = value !== null && (other === null || value > other);
  const pct = win ? pctDiff(value, other) : null;
  const number = h('div', { display: 'flex', fontSize: 40, fontWeight: 700, color: win ? COLORS.accent : COLORS.muted },
    value === null ? '—' : value.toLocaleString('en-US'));
  const badge = pct && h('div', { display: 'flex', fontSize: 22, fontWeight: 700, color: COLORS.pride ? '#1A1A2E' : COLORS.bg, ...fill(COLORS.accent),
    borderRadius: 14, padding: '2px 10px', margin: align === 'left' ? '0 0 0 12px' : '0 12px 0 0' }, pct);
  const parts = align === 'left' ? [number, badge] : [badge, number];
  return h('div', { display: 'flex', alignItems: 'center', width: 290, justifyContent: align === 'left' ? 'flex-start' : 'flex-end' },
    parts.filter(Boolean));
}

function row(r) {
  const max = Math.max(r.a || 0, r.b || 0);
  const aWins = r.a !== null && (r.b === null || r.a > r.b);
  const bWins = r.b !== null && (r.a === null || r.b > r.a);
  const bar = (value, wins, align) => {
    const pct = value && max ? Math.max(4, Math.round((value / max) * 100)) : 0;
    return h('div', { display: 'flex', flex: 1, height: 14, borderRadius: 7, backgroundColor: COLORS.bar,
      justifyContent: align === 'left' ? 'flex-end' : 'flex-start' },
      h('div', { width: `${pct}%`, height: 14, borderRadius: 7, ...(wins ? fill(COLORS.accent) : { backgroundColor: COLORS.muted }) }));
  };
  return h('div', { display: 'flex', flexDirection: 'column', marginTop: 14 }, [
    h('div', { display: 'flex', justifyContent: 'center', fontSize: 22, color: COLORS.muted, marginBottom: 6 }, r.label),
    h('div', { display: 'flex', alignItems: 'center' }, [
      valueCell(r.a, r.b, 'left'),
      h('div', { display: 'flex', flex: 1, alignItems: 'center', gap: 12, margin: '0 16px' }, [bar(r.a, aWins, 'left'), bar(r.b, bWins, 'right')]),
      valueCell(r.b, r.a, 'right'),
    ]),
  ]);
}

function chipHeader(chip, align) {
  const size = chip.name.length > 20 ? 40 : chip.name.length > 14 ? 48 : 56;
  return h('div', { display: 'flex', flexDirection: 'column', flex: '1 1 0', alignItems: align === 'left' ? 'flex-start' : 'flex-end' }, [
    h('div', { display: 'flex', fontSize: size, fontWeight: 700, color: COLORS.text, lineHeight: 1.1 }, chip.name),
    h('div', { display: 'flex', fontSize: 24, color: COLORS.muted, marginTop: 8 }, chip.process || ''),
  ]);
}

function card(a, b) {
  const rows = buildRows(a, b).slice(0, 4);
  return h('div', { display: 'flex', flexDirection: 'column', width: 1200, height: 630, padding: '44px 56px', boxSizing: 'border-box',
    backgroundColor: COLORS.bg, fontFamily: 'Inter', color: COLORS.text }, [
    h('div', { display: 'flex', alignItems: 'center', justifyContent: 'space-between' }, [
      chipHeader(a, 'left'),
      h('div', { display: 'flex', fontSize: 28, fontWeight: 700, color: COLORS.accent, margin: '0 28px' }, 'VS'),
      chipHeader(b, 'right'),
    ]),
    h('div', { display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' },
      rows.length ? rows.map(row) : h('div', { display: 'flex', justifyContent: 'center', fontSize: 30, color: COLORS.muted }, 'No benchmark data yet')),
    h('div', { display: 'flex', justifyContent: 'space-between', fontSize: 22, color: COLORS.muted }, [
      h('div', { display: 'flex', fontWeight: 700, color: COLORS.accent }, 'ReptDoc'),
      h('div', { display: 'flex' }, 'reptdoc.netlify.app'),
    ]),
    COLORS.pride && h('div', { display: 'flex', position: 'absolute', left: 0, right: 0, bottom: 0, height: 10, backgroundImage: COLORS.pride === 'nb' ? NB_FLAG : TRANS_FLAG }, ''),
  ]);
}

export default async (request) => {
  const url = new URL(request.url);
  const name1 = url.searchParams.get('chip1') || url.searchParams.get('chip');
  const name2 = url.searchParams.get('chip2');
  try {
    const [index, assets] = await Promise.all([getIndex(url.origin), getAssets(url.origin)]);
    const a = name1 && index.get(name1.toLowerCase());
    const b = name2 && index.get(name2.toLowerCase());
    if (!a || !b) return new Response('Unknown chip', { status: 404 });
    COLORS = parseTheme(url.searchParams.get('theme'));
    const svg = await satori(card(a, b), { width: 1200, height: 630, fonts: assets.fonts });
    const png = new Resvg(svg).render().asPng();
    return new Response(png, {
      headers: { 'content-type': 'image/png', 'cache-control': 'public, max-age=3600, s-maxage=86400' },
    });
  } catch (err) {
    console.error(err);
    return new Response('Failed to render card', { status: 500 });
  }
};

export const config = { path: '/og/compare.png' };
