// Sydney suburbs with heavy-rail stations within 40 min of CBD (Central Station)
const SUBURBS = [
  // T2 Inner West Line
  { name: "Redfern",        postcode: "2016", cbdMin: 3,  line: "T2" },
  { name: "Newtown",        postcode: "2042", cbdMin: 7,  line: "T2" },
  { name: "Stanmore",       postcode: "2048", cbdMin: 9,  line: "T2" },
  { name: "Petersham",      postcode: "2049", cbdMin: 11, line: "T2" },
  { name: "Lewisham",       postcode: "2049", cbdMin: 13, line: "T2" },
  { name: "Summer Hill",    postcode: "2130", cbdMin: 15, line: "T2" },
  { name: "Ashfield",       postcode: "2131", cbdMin: 17, line: "T2" },
  { name: "Croydon",        postcode: "2132", cbdMin: 19, line: "T2" },
  { name: "Burwood",        postcode: "2134", cbdMin: 21, line: "T2" },
  { name: "Strathfield",    postcode: "2135", cbdMin: 24, line: "T1/T2" },

  // T3 Bankstown Line
  { name: "Erskineville",   postcode: "2043", cbdMin: 8,  line: "T3" },
  { name: "St Peters",      postcode: "2044", cbdMin: 10, line: "T3" },
  { name: "Sydenham",       postcode: "2044", cbdMin: 12, line: "T3" },
  { name: "Marrickville",   postcode: "2204", cbdMin: 14, line: "T3" },
  { name: "Dulwich Hill",   postcode: "2203", cbdMin: 16, line: "T3" },
  { name: "Hurlstone Park", postcode: "2193", cbdMin: 18, line: "T3" },
  { name: "Canterbury",     postcode: "2193", cbdMin: 20, line: "T3" },
  { name: "Campsie",        postcode: "2194", cbdMin: 22, line: "T3" },
  { name: "Lakemba",        postcode: "2195", cbdMin: 24, line: "T3" },
  { name: "Wiley Park",     postcode: "2195", cbdMin: 26, line: "T3" },
  { name: "Punchbowl",      postcode: "2196", cbdMin: 28, line: "T3" },
  { name: "Bankstown",      postcode: "2200", cbdMin: 32, line: "T3" },

  // T8 Airport & South Line
  { name: "Mascot",         postcode: "2020", cbdMin: 13, line: "T8" },
  { name: "Wolli Creek",    postcode: "2205", cbdMin: 18, line: "T8" },
  { name: "Arncliffe",      postcode: "2205", cbdMin: 20, line: "T8" },
  { name: "Banksia",        postcode: "2216", cbdMin: 22, line: "T8" },
  { name: "Rockdale",       postcode: "2216", cbdMin: 23, line: "T8" },
  { name: "Kogarah",        postcode: "2217", cbdMin: 28, line: "T8" },
  { name: "Hurstville",     postcode: "2220", cbdMin: 33, line: "T8" },
  { name: "Penshurst",      postcode: "2222", cbdMin: 36, line: "T8" },
  { name: "Mortdale",       postcode: "2223", cbdMin: 38, line: "T8" },
  { name: "Oatley",         postcode: "2223", cbdMin: 39, line: "T8" },

  // T1 North Shore Line
  { name: "North Sydney",   postcode: "2060", cbdMin: 8,  line: "T1" },
  { name: "Waverton",       postcode: "2060", cbdMin: 10, line: "T1" },
  { name: "Wollstonecraft", postcode: "2065", cbdMin: 12, line: "T1" },
  { name: "St Leonards",    postcode: "2065", cbdMin: 14, line: "T1" },
  { name: "Artarmon",       postcode: "2064", cbdMin: 17, line: "T1" },
  { name: "Chatswood",      postcode: "2067", cbdMin: 20, line: "T1" },
  { name: "Roseville",      postcode: "2069", cbdMin: 23, line: "T1" },
  { name: "Lindfield",      postcode: "2070", cbdMin: 26, line: "T1" },
  { name: "Killara",        postcode: "2071", cbdMin: 28, line: "T1" },
  { name: "Gordon",         postcode: "2072", cbdMin: 30, line: "T1" },
  { name: "Pymble",         postcode: "2073", cbdMin: 33, line: "T1" },
  { name: "Turramurra",     postcode: "2074", cbdMin: 36, line: "T1" },
  { name: "Warrawee",       postcode: "2074", cbdMin: 38, line: "T1" },
  { name: "Wahroonga",      postcode: "2076", cbdMin: 39, line: "T1" },

  // T1 Western Line
  { name: "Rhodes",         postcode: "2138", cbdMin: 29, line: "T1" },
  { name: "Meadowbank",     postcode: "2114", cbdMin: 31, line: "T1" },
  { name: "West Ryde",      postcode: "2114", cbdMin: 34, line: "T1" },
  { name: "Eastwood",       postcode: "2122", cbdMin: 37, line: "T1" },
  { name: "Epping",         postcode: "2121", cbdMin: 40, line: "T1" },

  // T5 Cumberland Line
  { name: "Auburn",         postcode: "2144", cbdMin: 28, line: "T5" },
  { name: "Lidcombe",       postcode: "2141", cbdMin: 31, line: "T2/T5" },
  { name: "Granville",      postcode: "2142", cbdMin: 32, line: "T5" },
  { name: "Harris Park",    postcode: "2150", cbdMin: 34, line: "T5" },
  { name: "Parramatta",     postcode: "2150", cbdMin: 36, line: "T1/T5" },
  { name: "Wentworthville", postcode: "2145", cbdMin: 39, line: "T5" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function priceVal(str) {
  if (!str) return 9999;
  const m = String(str).replace(/,/g, '').match(/\$?([\d]+)/);
  return m ? parseInt(m[1]) : 9999;
}

function matchSuburb(address, suburbs) {
  if (!address) return null;
  const addr = String(address);
  // Use the LAST 4-digit number — Australian postcodes always appear at the end.
  // Using the first match would incorrectly grab unit/street numbers like "1034/1 Smith St".
  const allPc = addr.match(/\b\d{4}\b/g);
  const postcode = allPc ? allPc[allPc.length - 1] : null;
  if (postcode) {
    for (const s of suburbs) {
      if (s.postcode === postcode) return s;
    }
  }
  // Fallback: suburb name surrounded by punctuation/word boundaries
  const lower = addr.toLowerCase();
  for (const s of suburbs) {
    const n = s.name.toLowerCase();
    if (lower.includes(`, ${n},`) || lower.includes(`, ${n} nsw`) || lower.endsWith(`, ${n}`)) {
      return s;
    }
  }
  return null;
}

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'Accept-Language': 'en-AU,en-US;q=0.9,en;q=0.8',
};

// ─── Elders Real Estate ───────────────────────────────────────────────────────
// Server-rendered HTML — confirmed no bot protection.

async function scrapeEldersPage(url, qualifying, maxPrice, minBeds) {
  const resp = await fetch(url, {
    headers: { ...HEADERS, Referer: 'https://www.eldersrealestate.com.au/' },
  });
  if (!resp.ok) return [];

  const results = [];
  let cur = null;
  let fld = '';

  await new HTMLRewriter()
    .on('.property-card', {
      element(el) {
        cur = {
          id: el.getAttribute('data-listing-id') || '',
          price: '', address: '', url: '',
          image: null, bedrooms: null, bathrooms: null, parking: null,
        };
        fld = '';
        el.onEndTag(() => {
          const c = cur; cur = null; fld = '';
          if (!c?.price || !c?.address) return;
          if (priceVal(c.price) > maxPrice) return;
          if (minBeds > 0 && c.bedrooms !== null && c.bedrooms < minBeds) return;
          const info = matchSuburb(c.address, qualifying);
          if (!info) return;
          results.push({
            id: `elders-${c.id || encodeURIComponent(c.url)}`,
            url: c.url || 'https://www.eldersrealestate.com.au/residential/rent/',
            address: c.address.trim(),
            suburb: info.name,
            postcode: info.postcode,
            price: c.price.trim(),
            priceValue: priceVal(c.price),
            bedrooms: c.bedrooms,
            bathrooms: c.bathrooms,
            parking: c.parking,
            propertyType: '',
            image: c.image,
            cbdMin: info.cbdMin,
            line: info.line,
            source: 'Elders',
          });
        });
      },
    })
    .on('a.property-card__link', {
      element(el) {
        if (!cur) return;
        const h = el.getAttribute('href') || '';
        cur.url = h.startsWith('http') ? h : `https://www.eldersrealestate.com.au${h}`;
      },
    })
    .on('.property-card__price', {
      element() { fld = 'price'; },
      text(c) { if (cur && fld === 'price') cur.price += c.text; },
    })
    .on('.property-card__address', {
      element() { fld = 'address'; },
      text(c) { if (cur && fld === 'address') cur.address += c.text; },
    })
    .on('.property-card__key-feature--bed', {
      text(c) { if (cur && c.text.trim()) cur.bedrooms = parseInt(c.text) || null; },
    })
    .on('.property-card__key-feature--bath', {
      text(c) { if (cur && c.text.trim()) cur.bathrooms = parseInt(c.text) || null; },
    })
    .on('.property-card__key-feature--car', {
      text(c) { if (cur && c.text.trim()) cur.parking = parseInt(c.text) || null; },
    })
    .on('.property-card__images img', {
      element(el) {
        if (cur && !cur.image) {
          cur.image = el.getAttribute('src') || el.getAttribute('data-flickity-lazyload') || null;
        }
      },
    })
    .transform(resp)
    .arrayBuffer();

  return results;
}

async function scrapeElders() {
  // Elders ignores all suburb/state URL params and returns only rural/regional AU stock.
  // Zero Sydney metro results confirmed — skip to keep within CF 6-connection limit.
  return [];
}

// ─── Next.js __NEXT_DATA__ extractor ─────────────────────────────────────────
// Ray White and LJ Hooker both use Next.js. Their SSR payload often includes
// listing data in the <script id="__NEXT_DATA__"> JSON blob.

function tryListing(obj, qualifying, source, baseUrl) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return null;

  // Try many field name conventions used by Australian real estate platforms
  const price =
    obj.rent ?? obj.price ?? obj.displayPrice ?? obj.rentPrice ?? obj.weeklyRent ??
    obj.priceDetails?.displayPrice ?? obj.priceDetails?.rent ??
    obj.pricing?.display ?? obj.pricing?.rent;

  const addressRaw =
    obj.address ?? obj.displayAddress ?? obj.streetAddress ?? obj.fullAddress ??
    obj.location?.address ?? obj.location?.displayAddress ??
    obj.property?.address ?? obj.propertyAddress;

  if (!price || !addressRaw) return null;

  const address = typeof addressRaw === 'string'
    ? addressRaw
    : [addressRaw.streetAddress, addressRaw.suburb, addressRaw.state, addressRaw.postcode]
        .filter(Boolean).join(', ');

  const info = matchSuburb(address, qualifying);
  if (!info) return null;

  const priceStr = typeof price === 'string' ? price : `$${price}`;
  const rawUrl = obj.url ?? obj.listingUrl ?? obj.propertyUrl ?? obj.href ?? obj.slug ?? '';
  const fullUrl = rawUrl
    ? (rawUrl.startsWith('http') ? rawUrl : `${baseUrl}${rawUrl}`)
    : baseUrl;

  const imageRaw =
    obj.mainImage ?? obj.heroImage ?? obj.thumbnailUrl ?? obj.image ??
    obj.images?.[0]?.url ?? obj.images?.[0]?.src ?? obj.media?.[0]?.url;

  return {
    id: `${source.replace(/\s+/g, '-').toLowerCase()}-${obj.id ?? obj.listingId ?? fullUrl}`,
    url: fullUrl,
    address,
    suburb: info.name,
    postcode: info.postcode,
    price: priceStr,
    priceValue: priceVal(priceStr),
    bedrooms: obj.bedrooms ?? obj.beds ?? obj.features?.bedrooms ?? null,
    bathrooms: obj.bathrooms ?? obj.baths ?? obj.features?.bathrooms ?? null,
    parking: obj.carSpaces ?? obj.parking ?? obj.carparks ?? obj.features?.carSpaces ?? null,
    propertyType: obj.propertyType ?? obj.type ?? '',
    image: typeof imageRaw === 'string' ? imageRaw : null,
    cbdMin: info.cbdMin,
    line: info.line,
    source,
  };
}

function parseNextData(json, qualifying, source, baseUrl) {
  try {
    const root = JSON.parse(json);
    const found = [];
    const seen = new Set();

    function walk(node, depth) {
      if (depth > 10 || !node || typeof node !== 'object') return;
      if (Array.isArray(node)) {
        for (const item of node) {
          const listing = tryListing(item, qualifying, source, baseUrl);
          if (listing && !seen.has(listing.id)) {
            seen.add(listing.id);
            found.push(listing);
          }
          walk(item, depth + 1);
        }
      } else {
        for (const v of Object.values(node)) walk(v, depth + 1);
      }
    }

    walk(root, 0);
    return found;
  } catch {
    return [];
  }
}

async function fetchNextJs(url, referer, source, baseUrl, qualifying) {
  const resp = await fetch(url, {
    headers: { ...HEADERS, Referer: referer },
  });
  if (!resp.ok) return [];

  let nextData = '';
  await new HTMLRewriter()
    .on('script#__NEXT_DATA__', {
      text(c) { nextData += c.text; },
    })
    .transform(resp)
    .arrayBuffer();

  return nextData ? parseNextData(nextData, qualifying, source, baseUrl) : [];
}

// ─── Ray White ────────────────────────────────────────────────────────────────

async function scrapeRayWhite() {
  // Ray White and LJ Hooker are both protected by CloudFront WAF — all requests return 403.
  // Stub out to avoid consuming the CF 6-connection subrequest limit.
  return [];
}

async function scrapeLJHooker() {
  return [];
}

// ─── Harris Tripp ─────────────────────────────────────────────────────────────
// Small Inner West Sydney agency using WordPress + Easy Property Listings plugin.

async function scrapeHarrisTripp(qualifying, maxPrice, minBeds) {
  // Harris Tripp WordPress REST API. Without a suburb param it returns all 8500+ listings
  // sorted newest-first, 8 per page. ~75% are active rentals in our suburbs.
  // 5 parallel pages = ~30 fresh listings in ~1s instead of 55 suburb requests in 12s.
  const BASE = 'https://www.harristripp.com.au';
  const htHeaders = { ...HEADERS, 'PageFrom': 'archive', 'Referer': `${BASE}/properties-for-rent/` };

  const settled = await Promise.allSettled(
    [1, 2, 3, 4, 5].map(async page => {
      const resp = await fetch(`${BASE}/wp-json/api/listings/all?paged=${page}`, { headers: htHeaders });
      if (!resp.ok) return [];
      const data = await resp.json();
      if (!data.results || !Array.isArray(data.results)) return [];

      const results = [];
      for (const item of data.results) {
        if (item.type !== 'rental') continue;
        if (item.statusCaption !== 'For Rent') continue;
        if (item.propertyStatus !== 'current') continue;

        const address = item.address?.fullAddress || '';
        const info = matchSuburb(address, qualifying);
        if (!info) continue;

        const priceStr = item.propertyPricing?.value || '';
        const pv = priceVal(priceStr);
        if (pv > maxPrice) continue;

        const beds = item.propertyBed ?? null;
        if (minBeds > 0 && beds !== null && beds < minBeds) continue;

        results.push({
          id: `harris-${item.uniqueID || item.id}`,
          url: item.link || `${BASE}/properties-for-rent/`,
          address,
          suburb: info.name,
          postcode: info.postcode,
          price: priceStr,
          priceValue: pv,
          bedrooms: beds,
          bathrooms: item.propertyBath ?? null,
          parking: item.propertyParking ?? null,
          propertyType: item.propertyCategory || '',
          image: item.propertyImage?.featured || null,
          cbdMin: info.cbdMin,
          line: info.line,
          source: 'Harris Tripp',
        });
      }
      return results;
    })
  );
  return settled.flatMap(r => r.status === 'fulfilled' ? r.value : []);
}

// ─── HTML ─────────────────────────────────────────────────────────────────────

const APP_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Find Me A Place — Sydney Train Rentals</title>
<style>
:root{
  --bg:#0d1117;--surface:#161b22;--card:#1c2128;--border:#30363d;
  --green:#2ea043;--green-dim:rgba(46,160,67,.15);
  --amber:#d29922;--amber-dim:rgba(210,153,34,.15);
  --blue:#58a6ff;--blue-dim:rgba(88,166,255,.15);
  --text:#e6edf3;--muted:#8b949e;--link:#58a6ff;
}
*{box-sizing:border-box;margin:0;padding:0}
body{background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;min-height:100vh}

.topbar{
  background:var(--surface);border-bottom:1px solid var(--border);
  padding:.85rem 1.25rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap;
  position:sticky;top:0;z-index:10;
}
.brand{font-weight:700;font-size:1.1rem;white-space:nowrap;flex-shrink:0}
.brand span{color:var(--green)}
.filters{display:flex;gap:.55rem;flex-wrap:wrap;align-items:flex-end;flex:1}
.fg{display:flex;flex-direction:column;gap:.2rem}
.fg label{font-size:.63rem;color:var(--muted);text-transform:uppercase;letter-spacing:.07em;white-space:nowrap}
select,input[type=number]{
  background:var(--bg);border:1px solid var(--border);color:var(--text);
  padding:.36rem .55rem;border-radius:6px;font-size:.84rem;width:130px;
}
.btn{
  background:var(--green);color:#fff;border:none;padding:.4rem 1rem;
  border-radius:6px;font-weight:600;cursor:pointer;font-size:.84rem;
  transition:opacity .15s;white-space:nowrap;
}
.btn:hover{opacity:.85}
.btn:disabled{opacity:.45;cursor:default}

.notice{
  background:var(--blue-dim);border-bottom:1px solid var(--border);
  padding:.5rem 1.25rem;font-size:.77rem;color:var(--blue);
}
.meta{
  padding:.55rem 1.25rem;font-size:.79rem;color:var(--muted);
  border-bottom:1px solid var(--border);display:flex;gap:.65rem;align-items:center;flex-wrap:wrap;
}
.pill{display:inline-flex;align-items:center;gap:.22rem;padding:.13rem .5rem;border-radius:999px;font-size:.72rem;font-weight:600}
.pill-green{background:var(--green-dim);color:var(--green)}
.pill-amber{background:var(--amber-dim);color:var(--amber)}
.pill-blue{background:var(--blue-dim);color:var(--blue)}

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(285px,1fr));
  gap:1rem;padding:1.2rem;
}
.card{
  background:var(--card);border:1px solid var(--border);border-radius:10px;
  overflow:hidden;display:flex;flex-direction:column;
  transition:border-color .2s,transform .15s;
}
.card:hover{transform:translateY(-2px);border-color:var(--link)}
.card.ideal{border-color:rgba(46,160,67,.5)}
.card.ideal:hover{border-color:var(--green)}

.thumb{width:100%;height:172px;background:var(--surface);overflow:hidden;
  display:flex;align-items:center;justify-content:center;flex-shrink:0}
.thumb img{width:100%;height:100%;object-fit:cover;display:block}
.thumb-ph{color:var(--muted);font-size:.78rem}

.body{padding:.8rem;display:flex;flex-direction:column;gap:.42rem;flex:1}
.price-row{display:flex;align-items:center;gap:.45rem;flex-wrap:wrap}
.price{font-size:1.18rem;font-weight:700}
.price.green{color:var(--green)}
.price.amber{color:var(--amber)}
.feats{font-size:.8rem;color:var(--muted)}
.addr{font-size:.79rem;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.transit{
  display:flex;align-items:center;gap:.35rem;
  background:var(--bg);border-radius:6px;padding:.32rem .55rem;
  font-size:.76rem;color:var(--muted);margin-top:auto;
}
.transit strong{color:var(--text)}
.view{
  display:block;text-align:center;border:1px solid var(--border);
  color:var(--link);text-decoration:none;border-radius:6px;padding:.42rem;
  font-size:.81rem;font-weight:600;transition:background .15s,border-color .15s;
}
.view:hover{background:rgba(88,166,255,.08);border-color:var(--link)}

.state{grid-column:1/-1;text-align:center;padding:3.5rem 1rem;color:var(--muted)}
.spinner{
  width:34px;height:34px;border:3px solid var(--border);border-top-color:var(--green);
  border-radius:50%;animation:spin .7s linear infinite;margin:0 auto .65rem;
}
@keyframes spin{to{transform:rotate(360deg)}}

.err{
  margin:.9rem 1.25rem;padding:.8rem 1rem;
  background:rgba(248,81,73,.1);border:1px solid rgba(248,81,73,.3);
  border-radius:8px;font-size:.82rem;color:#ffa198;display:none;
}

.suburb-grid{
  display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));
  gap:.45rem;padding:1.2rem;
}
.suburb-card{
  background:var(--card);border:1px solid var(--border);border-radius:8px;
  padding:.55rem .75rem;display:flex;justify-content:space-between;align-items:center;
  text-decoration:none;color:var(--text);font-size:.82rem;
  transition:border-color .15s;
}
.suburb-card:hover{border-color:var(--link)}
.suburb-card .sn{font-weight:500}
.suburb-card .sm{color:var(--muted);font-size:.72rem;text-align:right}
</style>
</head>
<body>

<div class="topbar">
  <div class="brand">🚂 <span>Find Me A Place</span></div>
  <div class="filters">
    <div class="fg">
      <label>Max rent / week</label>
      <input type="number" id="maxPrice" value="900" step="50" min="200" max="3000">
    </div>
    <div class="fg">
      <label>Min bedrooms</label>
      <select id="minBeds">
        <option value="0">Studio / any</option>
        <option value="1" selected>1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
      </select>
    </div>
    <div class="fg">
      <label>Max CBD by train</label>
      <select id="maxCbd">
        <option value="20">20 min</option>
        <option value="30">30 min</option>
        <option value="40" selected>40 min</option>
      </select>
    </div>
    <button class="btn" id="searchBtn" onclick="doSearch()">Search</button>
  </div>
</div>

<div class="notice">
  ⚡ Live listings from <strong>Harris Tripp</strong> (Ray White / Elders / LJ Hooker block automated access).
  Only suburbs with heavy-rail within your chosen CBD time. Properties <strong>under $700/wk</strong> highlighted green.
</div>

<div class="err" id="errBox"></div>
<div class="meta" id="meta" style="display:none"></div>
<div class="grid" id="grid">
  <div class="state"><div class="spinner"></div>Searching across Sydney…</div>
</div>

<script data-cfasync="false">
const IDEAL = 700;

async function doSearch() {
  const btn = document.getElementById('searchBtn');
  const maxPrice = +document.getElementById('maxPrice').value || 600;
  const minBeds  = +document.getElementById('minBeds').value;
  const maxCbd   = +document.getElementById('maxCbd').value;

  btn.disabled = true;
  setGrid('<div class="state"><div class="spinner"></div>Scraping Ray White, Elders, LJ Hooker &amp; Harris Tripp…</div>');
  document.getElementById('meta').style.display = 'none';
  document.getElementById('errBox').style.display = 'none';

  try {
    const res  = await fetch('/api/search?maxPrice=' + maxPrice + '&minBeds=' + minBeds + '&maxCbd=' + maxCbd);
    const data = await res.json();

    if (data.fallback) {
      renderFallback(data.suburbs || [], maxPrice, minBeds);
    } else {
      renderCards(data.listings || [], maxPrice);
    }
  } catch(e) {
    showErr('Network error — could not reach the search API.');
  } finally {
    btn.disabled = false;
  }
}

function setGrid(html) {
  const g = document.getElementById('grid');
  g.className = 'grid';
  g.innerHTML = html;
}

function showErr(msg) {
  const b = document.getElementById('errBox');
  b.textContent = '⚠ ' + msg;
  b.style.display = 'block';
  setGrid('');
}

function setMeta(html) {
  const m = document.getElementById('meta');
  m.style.display = 'flex';
  m.innerHTML = html;
}

function renderCards(listings, maxPrice) {
  if (!listings.length) {
    setGrid('<div class="state">🏠 No listings found — scrapers may be blocked or no matches exist. Try relaxing your filters.</div>');
    document.getElementById('meta').style.display = 'none';
    return;
  }

  const ideal   = listings.filter(l => l.priceValue <= IDEAL).length;
  const suburbs = new Set(listings.map(l => l.suburb)).size;
  const sources = [...new Set(listings.map(l => l.source))].join(' · ');

  setMeta(
    '<span>' + listings.length + ' listings across ' + suburbs + ' suburbs</span>' +
    (ideal ? '<span class="pill pill-green">⭐ ' + ideal + ' under $700/wk</span>' : '') +
    '<span class="pill pill-amber">Max $' + maxPrice + '/wk</span>' +
    '<span class="pill pill-blue">' + sources + '</span>'
  );

  setGrid(listings.map(l => {
    const isIdeal    = l.priceValue <= IDEAL;
    const priceClass = isIdeal ? 'price green' : 'price amber';
    const badge      = isIdeal ? '<span class="pill pill-green">⭐ Under $700</span>' : '';
    const srcBadge   = '<span class="pill pill-blue">' + (l.source || '') + '</span>';

    const beds  = l.bedrooms === 0 ? 'Studio' : l.bedrooms ? l.bedrooms + ' bed' : '? bed';
    const baths = l.bathrooms ? ' · ' + l.bathrooms + ' bath' : '';
    const park  = l.parking   ? ' · ' + l.parking + ' park'  : '';

    const img = l.image
      ? '<img src="' + l.image + '" alt="" loading="lazy" onerror="this.parentElement.innerHTML=\'<div class=thumb-ph>No photo</div>\'">'
      : '<div class="thumb-ph">🏠</div>';

    const transit = l.cbdMin
      ? '🚉 <strong>' + l.cbdMin + ' min</strong> to CBD · ' + l.line
      : '🚉 Train accessible';

    return '<div class="card' + (isIdeal ? ' ideal' : '') + '">' +
      '<div class="thumb">' + img + '</div>' +
      '<div class="body">' +
        '<div class="price-row"><span class="' + priceClass + '">' + l.price + '</span>' + badge + srcBadge + '</div>' +
        '<div class="feats">' + beds + baths + park + '</div>' +
        '<div class="addr" title="' + l.address + '">' + l.address + '</div>' +
        '<div class="transit">' + transit + '</div>' +
        '<a class="view" href="' + l.url + '" target="_blank" rel="noopener">View on ' + (l.source || 'listing') + ' →</a>' +
      '</div></div>';
  }).join(''));
}

function renderFallback(suburbs, maxPrice, minBeds) {
  setMeta('<span>' + suburbs.length + ' qualifying suburbs</span><span class="pill pill-amber">Scrapers unavailable — browse direct links</span>');
  const bedsQ = minBeds > 0 ? '&minBedrooms=' + minBeds : '';
  document.getElementById('grid').className = 'suburb-grid';
  document.getElementById('grid').innerHTML = suburbs.map(s => {
    const url = 'https://www.realestate.com.au/rent/in-' + s.slug + '/list-1?maxPrice=' + maxPrice + bedsQ + '&sortType=price-asc';
    return '<a class="suburb-card" href="' + url + '" target="_blank" rel="noopener">' +
      '<span class="sn">' + s.name + '</span>' +
      '<span class="sm">' + s.cbdMin + ' min · ' + s.line + '</span>' +
    '</a>';
  }).join('');
}

doSearch();
</script>
</body>
</html>`;

// ─── Worker ───────────────────────────────────────────────────────────────────

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === '/api/search') {
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      };

      const maxPrice = Math.min(Math.max(parseInt(url.searchParams.get('maxPrice') || '600'), 100), 5000);
      const minBeds  = Math.max(parseInt(url.searchParams.get('minBeds') || '0'), 0);
      const maxCbd   = Math.min(parseInt(url.searchParams.get('maxCbd') || '40'), 60);

      const qualifying = SUBURBS.filter(s => s.cbdMin <= maxCbd);

      const [eldersR, rwR, ljhR, htR] = await Promise.allSettled([
        scrapeElders(qualifying, maxPrice, minBeds),
        scrapeRayWhite(qualifying, maxPrice, minBeds),
        scrapeLJHooker(qualifying, maxPrice, minBeds),
        scrapeHarrisTripp(qualifying, maxPrice, minBeds),
      ]);

      const all = [
        ...(eldersR.status === 'fulfilled'  ? eldersR.value : []),
        ...(rwR.status    === 'fulfilled'   ? rwR.value     : []),
        ...(ljhR.status   === 'fulfilled'   ? ljhR.value    : []),
        ...(htR.status    === 'fulfilled'   ? htR.value     : []),
      ];

      // Deduplicate by URL
      const seen = new Set();
      const listings = all.filter(l => {
        if (!l.url || seen.has(l.url)) return false;
        seen.add(l.url);
        return true;
      });

      listings.sort((a, b) => a.priceValue - b.priceValue);

      if (listings.length === 0) {
        const suburbs = qualifying.map(s => ({
          name: s.name, cbdMin: s.cbdMin, line: s.line,
          slug: `${s.name.toLowerCase().replace(/ /g, '-')}-nsw-${s.postcode}`,
        }));
        return new Response(JSON.stringify({ fallback: true, suburbs }), { headers });
      }

      return new Response(JSON.stringify({ listings }), { headers });
    }

    return new Response(APP_HTML, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-transform',
        // Block externally-injected scripts (Cloudflare Rocket Loader etc.)
        // that cause "Unexpected token 'class'" in Brave.
        'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src * data: blob:; connect-src *; font-src *;",
      },
    });
  },
};
