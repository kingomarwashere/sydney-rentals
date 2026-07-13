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

function extractPrice(display) {
  if (!display) return 9999;
  const m = display.replace(/,/g, "").match(/\$?([\d]+)/);
  return m ? parseInt(m[1]) : 9999;
}

// Domain.com.au API — POST /v1/listings/residential/_search
// Supports multiple locations in one request; free tier = 100 req/day
async function searchDomain(suburbs, maxPrice, minBeds, apiKey) {
  const byPostcode = {};
  const byName = {};
  for (const s of suburbs) {
    byPostcode[s.postcode] = s;
    byName[s.name.toLowerCase()] = s;
  }

  // Batch into groups of 20 locations to stay under URL/body limits
  const BATCH = 20;
  const batches = [];
  for (let i = 0; i < suburbs.length; i += BATCH) {
    batches.push(suburbs.slice(i, i + BATCH));
  }

  const settled = await Promise.allSettled(
    batches.map((batch) =>
      fetch("https://api.domain.com.au/v1/listings/residential/_search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Api-Key": apiKey,
        },
        body: JSON.stringify({
          listingType: "Rent",
          minBedrooms: minBeds > 0 ? minBeds : undefined,
          maxPrice,
          locations: batch.map((s) => ({
            state: "NSW",
            suburb: s.name,
            postCode: s.postcode,
          })),
          pageSize: 200,
          page: 1,
          sort: { sortKey: "Price", direction: "Ascending" },
        }),
      }).then((r) => {
        if (!r.ok) throw new Error(`Domain API ${r.status}`);
        return r.json();
      })
    )
  );

  const all = [];
  let anyBatchOk = false;
  for (const result of settled) {
    if (result.status === "rejected") continue;
    anyBatchOk = true;
    for (const item of result.value || []) {
      const listing = item.listing || item;
      const pd = listing.propertyDetails || {};
      const price = listing.priceDetails?.displayPrice || "";
      const postcode = pd.postCode || "";
      const suburb = (pd.suburb || "").toLowerCase();
      const info = byPostcode[postcode] || byName[suburb];

      // First non-floor-plan photo
      let image = null;
      for (const m of listing.media || []) {
        if (m.category === "Image") {
          image = m.url;
          break;
        }
      }

      all.push({
        id: String(listing.id || ""),
        url: listing.propertyUrl
          ? `https://www.domain.com.au${listing.propertyUrl}`
          : `https://www.domain.com.au/${listing.id}`,
        address:
          listing.displayableAddress ||
          pd.displayableAddress ||
          `${pd.suburb}, NSW`,
        suburb: pd.suburb || "",
        postcode,
        price,
        priceValue: extractPrice(price),
        bedrooms: pd.bedrooms ?? null,
        bathrooms: pd.bathrooms ?? null,
        parking: pd.carspaces ?? null,
        propertyType: pd.propertyType || "",
        image,
        cbdMin: info?.cbdMin ?? null,
        line: info?.line ?? null,
      });
    }
  }

  all.sort((a, b) => a.priceValue - b.priceValue);
  return { listings: all, anyBatchOk };
}

// ─── HTML ─────────────────────────────────────────────────────────────────────

const SETUP_HTML = (apiKey) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Sydney Train Rentals — Setup</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{background:#0d1117;color:#e6edf3;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
     display:flex;align-items:center;justify-content:center;min-height:100vh;padding:2rem}
.box{background:#161b22;border:1px solid #30363d;border-radius:12px;padding:2.5rem;max-width:560px;width:100%}
h1{font-size:1.4rem;margin-bottom:.5rem}h1 span{color:#2ea043}
p{color:#8b949e;font-size:.9rem;margin:.75rem 0;line-height:1.6}
ol{color:#8b949e;font-size:.9rem;padding-left:1.4rem;line-height:2}
ol li a{color:#58a6ff}
code{background:#0d1117;border:1px solid #30363d;padding:.15rem .45rem;border-radius:4px;font-size:.82rem;color:#e6edf3}
.cmd{background:#0d1117;border:1px solid #30363d;border-radius:8px;padding:1rem;margin:.5rem 0;
     font-family:monospace;font-size:.83rem;color:#79c0ff;word-break:break-all}
</style>
</head>
<body><div class="box">
<h1>🚂 <span>Sydney</span> Rentals — One-time setup</h1>
<p>This app uses the <strong>Domain.com.au API</strong> (free, 100 req/day) to fetch live rental listings.
You need a free API key to activate it.</p>
<ol>
  <li>Register at <a href="https://developer.domain.com.au" target="_blank">developer.domain.com.au</a></li>
  <li>Create a project → copy the <strong>Client ID</strong> (this is your API key)</li>
  <li>In your terminal, inside <code>~/sydney-rentals/</code>, run:</li>
</ol>
<div class="cmd">npx wrangler secret put DOMAIN_API_KEY</div>
<p>Paste the key when prompted, then redeploy with:</p>
<div class="cmd">npm run deploy</div>
<p>For local dev, create <code>.dev.vars</code> containing:</p>
<div class="cmd">DOMAIN_API_KEY=your_key_here</div>
<p>Then <code>npm run dev</code> and refresh this page.</p>
</div></body></html>`;

const APP_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Sydney Train Rentals</title>
<style>
:root{
  --bg:#0d1117;--surface:#161b22;--card:#1c2128;--border:#30363d;
  --green:#2ea043;--green-dim:rgba(46,160,67,.15);
  --amber:#d29922;--amber-dim:rgba(210,153,34,.15);
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
  background:var(--amber-dim);border-bottom:1px solid var(--border);
  padding:.5rem 1.25rem;font-size:.77rem;color:var(--amber);
}
.meta{
  padding:.55rem 1.25rem;font-size:.79rem;color:var(--muted);
  border-bottom:1px solid var(--border);display:flex;gap:.65rem;align-items:center;flex-wrap:wrap;
}
.pill{display:inline-flex;align-items:center;gap:.22rem;padding:.13rem .5rem;border-radius:999px;font-size:.72rem;font-weight:600}
.pill-green{background:var(--green-dim);color:var(--green)}
.pill-amber{background:var(--amber-dim);color:var(--amber)}

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

/* Suburb fallback list */
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
  <div class="brand">🚂 <span>Sydney</span> Rentals</div>
  <div class="filters">
    <div class="fg">
      <label>Max rent / week</label>
      <input type="number" id="maxPrice" value="600" step="50" min="200" max="2000">
    </div>
    <div class="fg">
      <label>Min bedrooms</label>
      <select id="minBeds">
        <option value="0">Studio / any</option>
        <option value="1">1+</option>
        <option value="2" selected>2+</option>
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
  ⚡ Only suburbs with their own heavy-rail station within your chosen CBD time.
  Properties <strong>under $450/wk</strong> are highlighted green.
  Verify walking distance to station on Google Maps before applying.
</div>

<div class="err" id="errBox"></div>
<div class="meta" id="meta" style="display:none"></div>
<div class="grid" id="grid">
  <div class="state"><div class="spinner"></div>Searching across Sydney…</div>
</div>

<script>
const IDEAL = 450;

async function doSearch() {
  const btn = document.getElementById('searchBtn');
  const maxPrice = +document.getElementById('maxPrice').value || 600;
  const minBeds  = +document.getElementById('minBeds').value;
  const maxCbd   = +document.getElementById('maxCbd').value;

  btn.disabled = true;
  setGrid('<div class="state"><div class="spinner"></div>Searching across Sydney…</div>');
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
    setGrid('<div class="state">🏠 No listings found — try relaxing your filters.</div>');
    document.getElementById('meta').style.display = 'none';
    return;
  }

  const ideal   = listings.filter(l => l.priceValue <= IDEAL).length;
  const suburbs = new Set(listings.map(l => l.suburb)).size;

  setMeta(
    '<span>' + listings.length + ' listings across ' + suburbs + ' suburbs</span>' +
    (ideal ? '<span class="pill pill-green">⭐ ' + ideal + ' under $' + IDEAL + '/wk</span>' : '') +
    '<span class="pill pill-amber">Max $' + maxPrice + '/wk · domain.com.au</span>'
  );

  setGrid(listings.map(l => {
    const isIdeal    = l.priceValue <= IDEAL;
    const priceClass = isIdeal ? 'price green' : 'price amber';
    const badge      = isIdeal ? '<span class="pill pill-green">⭐ Under $450</span>' : '';

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
        '<div class="price-row"><span class="' + priceClass + '">' + l.price + '</span>' + badge + '</div>' +
        '<div class="feats">' + beds + baths + park + '</div>' +
        '<div class="addr" title="' + l.address + '">' + l.address + '</div>' +
        '<div class="transit">' + transit + '</div>' +
        '<a class="view" href="' + l.url + '" target="_blank" rel="noopener">View on domain.com.au →</a>' +
      '</div></div>';
  }).join(''));
}

function renderFallback(suburbs, maxPrice, minBeds) {
  setMeta('<span>' + suburbs.length + ' qualifying suburbs</span><span class="pill pill-amber">Browse direct links on realestate.com.au</span>');
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
  async fetch(request, env) {
    const url = new URL(request.url);
    const apiKey = env.DOMAIN_API_KEY || "";

    // Show setup instructions if no API key configured
    if (!apiKey && url.pathname !== "/api/search") {
      // Still serve the app — it will fall back to suburb links
    }

    if (url.pathname === "/api/search") {
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };

      const maxPrice = Math.min(
        Math.max(parseInt(url.searchParams.get("maxPrice") || "600"), 100),
        5000
      );
      const minBeds = Math.max(
        parseInt(url.searchParams.get("minBeds") || "1"),
        0
      );
      const maxCbd = Math.min(
        parseInt(url.searchParams.get("maxCbd") || "40"),
        60
      );

      const qualifying = SUBURBS.filter((s) => s.cbdMin <= maxCbd);

      // No API key → return suburb fallback links
      if (!apiKey) {
        const suburbs = qualifying.map((s) => ({
          name: s.name,
          cbdMin: s.cbdMin,
          line: s.line,
          slug: `${s.name.toLowerCase().replace(/ /g, "-")}-nsw-${s.postcode}`,
        }));
        return new Response(JSON.stringify({ fallback: true, suburbs }), {
          headers,
        });
      }

      try {
        const { listings, anyBatchOk } = await searchDomain(
          qualifying,
          maxPrice,
          minBeds,
          apiKey
        );

        // If all batches failed (e.g. 401 invalid key), serve fallback
        if (!anyBatchOk) throw new Error("All Domain API batches failed");

        return new Response(JSON.stringify({ listings }), { headers });
      } catch (e) {
        // On error, still return suburb fallback
        const suburbs = qualifying.map((s) => ({
          name: s.name,
          cbdMin: s.cbdMin,
          line: s.line,
          slug: `${s.name.toLowerCase().replace(/ /g, "-")}-nsw-${s.postcode}`,
        }));
        return new Response(
          JSON.stringify({
            fallback: true,
            suburbs,
            error: String(e),
          }),
          { headers }
        );
      }
    }

    // Serve setup page if no API key, otherwise app
    if (!apiKey) {
      return new Response(SETUP_HTML(), {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    return new Response(APP_HTML, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  },
};
