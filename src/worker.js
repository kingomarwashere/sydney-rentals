// Greater Sydney suburbs — all transport modes — filtered by CBD travel time.
// Approximate times via public transport to Town Hall/Central.
const SUBURBS = [
  // ── T2 Inner West Line ──
  { name: "Redfern",          postcode: "2016", cbdMin: 3,  line: "T2",    lat: -33.8929, lon: 151.2022 },
  { name: "Newtown",          postcode: "2042", cbdMin: 7,  line: "T2",    lat: -33.8966, lon: 151.1779 },
  { name: "Stanmore",         postcode: "2048", cbdMin: 9,  line: "T2",    lat: -33.8966, lon: 151.1651 },
  { name: "Petersham",        postcode: "2049", cbdMin: 11, line: "T2",    lat: -33.8987, lon: 151.1565 },
  { name: "Lewisham",         postcode: "2049", cbdMin: 13, line: "T2",    lat: -33.9001, lon: 151.1497 },
  { name: "Summer Hill",      postcode: "2130", cbdMin: 15, line: "T2",    lat: -33.8968, lon: 151.1398 },
  { name: "Ashfield",         postcode: "2131", cbdMin: 17, line: "T2",    lat: -33.8885, lon: 151.1244 },
  { name: "Croydon",          postcode: "2132", cbdMin: 19, line: "T2",    lat: -33.8839, lon: 151.1078 },
  { name: "Burwood",          postcode: "2134", cbdMin: 21, line: "T2",    lat: -33.8775, lon: 151.1038 },
  { name: "Strathfield",      postcode: "2135", cbdMin: 24, line: "T1/T2", lat: -33.8747, lon: 151.0947 },

  // ── T3 Bankstown Line ──
  { name: "Erskineville",     postcode: "2043", cbdMin: 8,  line: "T3",    lat: -33.9026, lon: 151.1898 },
  { name: "St Peters",        postcode: "2044", cbdMin: 10, line: "T3",    lat: -33.9107, lon: 151.1886 },
  { name: "Sydenham",         postcode: "2044", cbdMin: 12, line: "T3",    lat: -33.9145, lon: 151.1757 },
  { name: "Marrickville",     postcode: "2204", cbdMin: 14, line: "T3",    lat: -33.9122, lon: 151.1571 },
  { name: "Dulwich Hill",     postcode: "2203", cbdMin: 16, line: "T3",    lat: -33.9147, lon: 151.1389 },
  { name: "Hurlstone Park",   postcode: "2193", cbdMin: 18, line: "T3",    lat: -33.9094, lon: 151.1247 },
  { name: "Canterbury",       postcode: "2193", cbdMin: 20, line: "T3",    lat: -33.9134, lon: 151.1179 },
  { name: "Campsie",          postcode: "2194", cbdMin: 22, line: "T3",    lat: -33.9103, lon: 151.1030 },
  { name: "Lakemba",          postcode: "2195", cbdMin: 24, line: "T3",    lat: -33.9179, lon: 151.0784 },
  { name: "Wiley Park",       postcode: "2195", cbdMin: 26, line: "T3",    lat: -33.9215, lon: 151.0680 },
  { name: "Punchbowl",        postcode: "2196", cbdMin: 28, line: "T3",    lat: -33.9271, lon: 151.0558 },
  { name: "Bankstown",        postcode: "2200", cbdMin: 32, line: "T3",    lat: -33.9178, lon: 151.0349 },

  // ── T4 Eastern Suburbs & Illawarra Line ──
  { name: "Kings Cross",      postcode: "2011", cbdMin: 10, line: "T4",    lat: -33.8737, lon: 151.2254 },
  { name: "Edgecliff",        postcode: "2027", cbdMin: 13, line: "T4",    lat: -33.8758, lon: 151.2350 },
  { name: "Bondi Junction",   postcode: "2022", cbdMin: 18, line: "T4",    lat: -33.8916, lon: 151.2474 },
  { name: "Kingsford",        postcode: "2032", cbdMin: 27, line: "T4/Bus" },

  // ── T8 Airport & South Line ──
  { name: "Mascot",           postcode: "2020", cbdMin: 13, line: "T8",    lat: -33.9201, lon: 151.1958 },
  { name: "Wolli Creek",      postcode: "2205", cbdMin: 18, line: "T8",    lat: -33.9484, lon: 151.1623 },
  { name: "Arncliffe",        postcode: "2205", cbdMin: 20, line: "T8",    lat: -33.9411, lon: 151.1462 },
  { name: "Banksia",          postcode: "2216", cbdMin: 22, line: "T8",    lat: -33.9488, lon: 151.1296 },
  { name: "Rockdale",         postcode: "2216", cbdMin: 23, line: "T8",    lat: -33.9519, lon: 151.1349 },
  { name: "Kogarah",          postcode: "2217", cbdMin: 28, line: "T8",    lat: -33.9636, lon: 151.1336 },
  { name: "Hurstville",       postcode: "2220", cbdMin: 33, line: "T8",    lat: -33.9662, lon: 151.1023 },
  { name: "Penshurst",        postcode: "2222", cbdMin: 36, line: "T8",    lat: -33.9668, lon: 151.0797 },
  { name: "Mortdale",         postcode: "2223", cbdMin: 38, line: "T8",    lat: -33.9666, lon: 151.0714 },
  { name: "Oatley",           postcode: "2223", cbdMin: 39, line: "T8",    lat: -33.9741, lon: 151.0674 },

  // ── T1 North Shore Line ──
  { name: "Milsons Point",    postcode: "2061", cbdMin: 6,  line: "T1",    lat: -33.8494, lon: 151.2113 },
  { name: "North Sydney",     postcode: "2060", cbdMin: 8,  line: "T1",    lat: -33.8400, lon: 151.2080 },
  { name: "Waverton",         postcode: "2060", cbdMin: 10, line: "T1",    lat: -33.8321, lon: 151.2028 },
  { name: "Wollstonecraft",   postcode: "2065", cbdMin: 12, line: "T1",    lat: -33.8254, lon: 151.2046 },
  { name: "St Leonards",      postcode: "2065", cbdMin: 14, line: "T1",    lat: -33.8233, lon: 151.1968 },
  { name: "Artarmon",         postcode: "2064", cbdMin: 17, line: "T1",    lat: -33.8147, lon: 151.1936 },
  { name: "Chatswood",        postcode: "2067", cbdMin: 20, line: "T1",    lat: -33.7978, lon: 151.1853 },
  { name: "Roseville",        postcode: "2069", cbdMin: 23, line: "T1",    lat: -33.7829, lon: 151.1767 },
  { name: "Lindfield",        postcode: "2070", cbdMin: 26, line: "T1",    lat: -33.7754, lon: 151.1706 },
  { name: "Killara",          postcode: "2071", cbdMin: 28, line: "T1",    lat: -33.7666, lon: 151.1671 },
  { name: "Gordon",           postcode: "2072", cbdMin: 30, line: "T1",    lat: -33.7545, lon: 151.1531 },
  { name: "Pymble",           postcode: "2073", cbdMin: 33, line: "T1",    lat: -33.7432, lon: 151.1404 },
  { name: "Turramurra",       postcode: "2074", cbdMin: 36, line: "T1",    lat: -33.7280, lon: 151.1298 },
  { name: "Warrawee",         postcode: "2074", cbdMin: 38, line: "T1",    lat: -33.7186, lon: 151.1218 },
  { name: "Wahroonga",        postcode: "2076", cbdMin: 39, line: "T1",    lat: -33.7147, lon: 151.1193 },
  { name: "Hornsby",          postcode: "2077", cbdMin: 45, line: "T1",    lat: -33.7034, lon: 151.0993 },

  // ── T1 Western Line ──
  { name: "Rhodes",           postcode: "2138", cbdMin: 29, line: "T1",    lat: -33.8265, lon: 151.0889 },
  { name: "Meadowbank",       postcode: "2114", cbdMin: 31, line: "T1",    lat: -33.8226, lon: 151.0838 },
  { name: "West Ryde",        postcode: "2114", cbdMin: 34, line: "T1",    lat: -33.8127, lon: 151.0906 },
  { name: "Eastwood",         postcode: "2122", cbdMin: 37, line: "T1",    lat: -33.7919, lon: 151.0824 },
  { name: "Epping",           postcode: "2121", cbdMin: 40, line: "T1",    lat: -33.7727, lon: 151.0818 },

  // ── T5 Cumberland Line ──
  { name: "Auburn",           postcode: "2144", cbdMin: 28, line: "T5",    lat: -33.8487, lon: 151.0332 },
  { name: "Lidcombe",         postcode: "2141", cbdMin: 31, line: "T2/T5", lat: -33.8641, lon: 151.0442 },
  { name: "Granville",        postcode: "2142", cbdMin: 32, line: "T5",    lat: -33.8325, lon: 150.9996 },
  { name: "Harris Park",      postcode: "2150", cbdMin: 34, line: "T5",    lat: -33.8213, lon: 151.0050 },
  { name: "Parramatta",       postcode: "2150", cbdMin: 36, line: "T1/T5", lat: -33.8151, lon: 151.0015 },
  { name: "Wentworthville",   postcode: "2145", cbdMin: 39, line: "T5",    lat: -33.8108, lon: 150.9754 },

  // ── Sydney Metro Northwest & City Southwest ──
  { name: "Victoria Cross",   postcode: "2060", cbdMin: 12, line: "Metro", lat: -33.8382, lon: 151.2068 },
  { name: "Crows Nest",       postcode: "2065", cbdMin: 14, line: "Metro", lat: -33.8279, lon: 151.2029 },
  { name: "Norwest",          postcode: "2153", cbdMin: 35, line: "Metro NW", lat: -33.7227, lon: 150.9694 },
  { name: "Hills Showground", postcode: "2154", cbdMin: 38, line: "Metro NW", lat: -33.7293, lon: 150.9988 },
  { name: "Castle Hill",      postcode: "2154", cbdMin: 40, line: "Metro NW", lat: -33.7273, lon: 150.9812 },
  { name: "Cherrybrook",      postcode: "2126", cbdMin: 43, line: "Metro NW", lat: -33.7350, lon: 151.0372 },
  { name: "Macquarie Park",   postcode: "2113", cbdMin: 28, line: "Metro", lat: -33.7759, lon: 151.1183 },
  { name: "Ryde",             postcode: "2112", cbdMin: 32, line: "Metro", lat: -33.8109, lon: 151.1013 },
  { name: "Waterloo",         postcode: "2017", cbdMin: 8,  line: "Metro SW", lat: -33.8957, lon: 151.2048 },
  { name: "Green Square",     postcode: "2017", cbdMin: 8,  line: "T4/Metro", lat: -33.9104, lon: 151.2017 },
  { name: "Beaconsfield",     postcode: "2015", cbdMin: 10, line: "Metro SW" },
  { name: "Alexandria",       postcode: "2015", cbdMin: 10, line: "T8/Metro" },

  // ── Light Rail (L1/L2/L3) ──
  { name: "Pyrmont",          postcode: "2009", cbdMin: 5,  line: "LR/Bus", lat: -33.8710, lon: 151.1925 },
  { name: "Ultimo",           postcode: "2007", cbdMin: 6,  line: "LR/Bus", lat: -33.8773, lon: 151.1987 },
  { name: "Chippendale",      postcode: "2008", cbdMin: 8,  line: "LR/Bus" },
  { name: "Rozelle",          postcode: "2039", cbdMin: 15, line: "LR",    lat: -33.8646, lon: 151.1679 },
  { name: "Lilyfield",        postcode: "2040", cbdMin: 18, line: "LR",    lat: -33.8686, lon: 151.1540 },
  { name: "Lewisham West",    postcode: "2049", cbdMin: 20, line: "LR",    lat: -33.8946, lon: 151.1488 },
  { name: "Randwick",         postcode: "2031", cbdMin: 22, line: "LR/Bus", lat: -33.9143, lon: 151.2342 },
  { name: "Kensington",       postcode: "2033", cbdMin: 25, line: "LR/Bus", lat: -33.9043, lon: 151.2241 },

  // ── Inner City — Bus / Walk ──
  { name: "Surry Hills",      postcode: "2010", cbdMin: 10, line: "Bus" },
  { name: "Darlinghurst",     postcode: "2010", cbdMin: 8,  line: "Bus/Walk" },
  { name: "Woolloomooloo",    postcode: "2011", cbdMin: 8,  line: "Bus/Walk" },
  { name: "Potts Point",      postcode: "2011", cbdMin: 12, line: "Bus" },
  { name: "Elizabeth Bay",    postcode: "2011", cbdMin: 12, line: "Bus" },
  { name: "Glebe",            postcode: "2037", cbdMin: 12, line: "Bus" },
  { name: "Forest Lodge",     postcode: "2037", cbdMin: 14, line: "Bus" },
  { name: "Annandale",        postcode: "2038", cbdMin: 15, line: "Bus" },
  { name: "Tempe",            postcode: "2044", cbdMin: 14, line: "Bus" },
  { name: "Eveleigh",         postcode: "2015", cbdMin: 7,  line: "T2/Walk" },

  // ── Inner West — Bus / Ferry ──
  { name: "Leichhardt",       postcode: "2040", cbdMin: 18, line: "Bus" },
  { name: "Balmain",          postcode: "2041", cbdMin: 22, line: "Ferry/Bus" },
  { name: "Balmain East",     postcode: "2041", cbdMin: 18, line: "Ferry" },
  { name: "Haberfield",       postcode: "2045", cbdMin: 22, line: "Bus" },
  { name: "Abbotsford",       postcode: "2046", cbdMin: 28, line: "Bus" },
  { name: "Five Dock",        postcode: "2046", cbdMin: 30, line: "Bus" },
  { name: "Drummoyne",        postcode: "2047", cbdMin: 22, line: "Ferry/Bus" },
  { name: "Concord",          postcode: "2137", cbdMin: 30, line: "Bus" },
  { name: "North Strathfield",postcode: "2137", cbdMin: 26, line: "T1" },
  { name: "Homebush",         postcode: "2140", cbdMin: 27, line: "T1/T2" },
  { name: "Homebush West",    postcode: "2140", cbdMin: 27, line: "Bus" },
  { name: "Croydon Park",     postcode: "2133", cbdMin: 22, line: "Bus" },

  // ── Eastern Suburbs — Bus / T4 ──
  { name: "Paddington",       postcode: "2021", cbdMin: 15, line: "Bus" },
  { name: "Woollahra",        postcode: "2025", cbdMin: 18, line: "Bus" },
  { name: "Bondi",            postcode: "2026", cbdMin: 28, line: "Bus" },
  { name: "Double Bay",       postcode: "2028", cbdMin: 22, line: "Bus/Ferry" },
  { name: "Rose Bay",         postcode: "2029", cbdMin: 25, line: "Bus/Ferry" },
  { name: "Vaucluse",         postcode: "2030", cbdMin: 35, line: "Bus" },
  { name: "Coogee",           postcode: "2034", cbdMin: 35, line: "Bus" },
  { name: "Maroubra",         postcode: "2035", cbdMin: 35, line: "Bus" },
  { name: "Matraville",       postcode: "2036", cbdMin: 28, line: "Bus" },

  // ── Lower North Shore — Bus / Ferry ──
  { name: "Kirribilli",       postcode: "2061", cbdMin: 10, line: "Ferry/Bus" },
  { name: "McMahons Point",   postcode: "2060", cbdMin: 10, line: "Ferry" },
  { name: "Neutral Bay",      postcode: "2089", cbdMin: 18, line: "Bus/Ferry" },
  { name: "Cremorne",         postcode: "2090", cbdMin: 22, line: "Bus" },
  { name: "Mosman",           postcode: "2088", cbdMin: 30, line: "Bus/Ferry" },
  { name: "Cremorne Point",   postcode: "2090", cbdMin: 20, line: "Ferry" },
  { name: "Balmoral",         postcode: "2088", cbdMin: 32, line: "Bus" },
  { name: "Willoughby",       postcode: "2068", cbdMin: 25, line: "Bus" },
  { name: "Naremburn",        postcode: "2065", cbdMin: 18, line: "Bus" },
  { name: "Cammeray",         postcode: "2062", cbdMin: 20, line: "Bus" },

  // ── Northern Beaches — Ferry / Bus ──
  { name: "Manly",            postcode: "2095", cbdMin: 30, line: "Ferry" },
  { name: "Freshwater",       postcode: "2096", cbdMin: 40, line: "Bus" },
  { name: "Dee Why",          postcode: "2099", cbdMin: 45, line: "Bus" },
  { name: "Collaroy",         postcode: "2097", cbdMin: 50, line: "Bus" },
  { name: "Narrabeen",        postcode: "2101", cbdMin: 55, line: "Bus" },
  { name: "Mona Vale",        postcode: "2103", cbdMin: 60, line: "Bus" },

  // ── South & South West ──
  { name: "Kingsgrove",       postcode: "2208", cbdMin: 32, line: "T8/Bus" },
  { name: "Beverly Hills",    postcode: "2209", cbdMin: 35, line: "Bus" },
  { name: "Narwee",           postcode: "2209", cbdMin: 36, line: "T8" },
  { name: "Bexley",           postcode: "2207", cbdMin: 30, line: "Bus" },
  { name: "Bardwell Park",    postcode: "2207", cbdMin: 28, line: "T8" },
  { name: "Turrella",         postcode: "2205", cbdMin: 19, line: "T8" },
  { name: "Lakemba",          postcode: "2195", cbdMin: 24, line: "T3" },
  { name: "Riverwood",        postcode: "2210", cbdMin: 38, line: "T8" },
  { name: "Peakhurst",        postcode: "2210", cbdMin: 40, line: "Bus" },

  // ── Hills District & Western Sydney ──
  { name: "Bella Vista",      postcode: "2153", cbdMin: 40, line: "Metro NW" },
  { name: "Baulkham Hills",   postcode: "2153", cbdMin: 42, line: "Bus" },
  { name: "Winston Hills",    postcode: "2153", cbdMin: 45, line: "Bus" },
  { name: "Blacktown",        postcode: "2148", cbdMin: 47, line: "T1" },
  { name: "Seven Hills",      postcode: "2147", cbdMin: 43, line: "T1" },
  { name: "Pendle Hill",      postcode: "2145", cbdMin: 40, line: "T1" },
  { name: "Toongabbie",       postcode: "2146", cbdMin: 42, line: "T1" },
  { name: "Merrylands",       postcode: "2160", cbdMin: 38, line: "T5" },
  { name: "Guildford",        postcode: "2161", cbdMin: 38, line: "T5" },
  { name: "Fairfield",        postcode: "2165", cbdMin: 45, line: "T5" },
  { name: "Cabramatta",       postcode: "2166", cbdMin: 48, line: "T5" },
  { name: "Liverpool",        postcode: "2170", cbdMin: 55, line: "T5" },
  { name: "Campbelltown",     postcode: "2560", cbdMin: 65, line: "T8" },

  // ── South West Corridor ──
  { name: "Revesby",          postcode: "2212", cbdMin: 38, line: "T8" },
  { name: "Padstow",          postcode: "2211", cbdMin: 36, line: "T8" },
  { name: "Panania",          postcode: "2213", cbdMin: 40, line: "T8" },
  { name: "East Hills",       postcode: "2213", cbdMin: 42, line: "T8" },
];

// Postcode-indexed map for O(1) lookups
const _suburbByPostcode = new Map();
const _suburbByName = new Map();
for (const s of SUBURBS) {
  if (!_suburbByPostcode.has(s.postcode)) _suburbByPostcode.set(s.postcode, s);
  _suburbByName.set(s.name.toLowerCase(), s);
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function priceVal(str) {
  if (!str) return 9999;
  const m = String(str).replace(/,/g, '').match(/\$?([\d]+)/);
  return m ? parseInt(m[1]) : 9999;
}

function matchSuburb(address, qualifying) {
  if (!address) return null;
  const addr = String(address);
  // Postcode first — use the LAST 4-digit number (avoids unit numbers like "1034/1 Smith St")
  const allPc = addr.match(/\b\d{4}\b/g);
  const postcode = allPc ? allPc[allPc.length - 1] : null;
  if (postcode) {
    const s = _suburbByPostcode.get(postcode);
    if (s && qualifying.includes(s)) return s;
  }
  // Fallback: suburb name surrounded by punctuation/word boundaries
  const lower = addr.toLowerCase();
  for (const s of qualifying) {
    const n = s.name.toLowerCase();
    if (lower.includes(`, ${n},`) || lower.includes(`, ${n} nsw`) || lower.endsWith(`, ${n}`)) {
      return s;
    }
  }
  return null;
}

// For agencies that only supply a suburb name (no postcode).
function matchSuburbName(name, qualifying) {
  if (!name) return null;
  const s = _suburbByName.get(name.toLowerCase().trim());
  return (s && qualifying.includes(s)) ? s : null;
}

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'Accept-Language': 'en-AU,en-US;q=0.9,en;q=0.8',
};

// ─── Walk-to-station helpers ──────────────────────────────────────────────────
// Haversine distance in metres between two lat/lon points.
function haversineM(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const φ1 = lat1 * Math.PI / 180, φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(Δφ/2)**2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}
// Average walking speed ≈ 80 m/min.
function walkMin(lat1, lon1, lat2, lon2) {
  return Math.round(haversineM(lat1, lon1, lat2, lon2) / 80);
}

// Find nearest station to a listing (only for suburbs with known station coords).
function nearestStation(listingLat, listingLon) {
  let best = null, bestM = Infinity;
  for (const s of SUBURBS) {
    if (s.lat == null) continue;
    const m = haversineM(listingLat, listingLon, s.lat, s.lon);
    if (m < bestM) { bestM = m; best = s; }
  }
  if (!best || bestM > 2500) return null; // >2.5 km is not walkable
  return { station: best.name, walkMin: Math.round(bestM / 80), line: best.line };
}

// ─── Harcourts ────────────────────────────────────────────────────────────────
// Server-rendered HTML on cloudhi.io platform. Paginated national feed;
// we scrape 10 pages in parallel and filter by postcode.
// Card structure: .property-item.card > .price / .address / img.property-thumbnail
// ul.summary li span → beds, baths, parking (in order).

async function scrapeHarcourtsPage(url, qualifying, maxPrice, minBeds) {
  const resp = await fetch(url, {
    headers: { ...HEADERS, Referer: 'https://harcourts.net/', Accept: 'text/html' },
  });
  if (!resp.ok) return [];

  const results = [];
  let cur = null;

  await new HTMLRewriter()
    .on('.property-item', {
      element(el) {
        cur = { price: '', address: '', url: '', image: null, bedrooms: null, bathrooms: null, parking: null };
        el.onEndTag(() => {
          const c = cur; cur = null;
          if (!c?.price || !c?.address) return;
          if (priceVal(c.price) > maxPrice) return;
          if (minBeds > 0 && c.bedrooms !== null && c.bedrooms < minBeds) return;
          const info = matchSuburb(c.address.trim(), qualifying);
          if (!info) return;
          results.push({
            id: `harcourts-${encodeURIComponent(c.url)}`,
            url: c.url || 'https://harcourts.net/au/listings/rent',
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
            source: 'Harcourts',
          });
        });
      },
    })
    .on('a.card-link-url', {
      element(el) {
        if (!cur || cur.url) return;
        const h = el.getAttribute('href') || '';
        cur.url = h.startsWith('http') ? h : `https://harcourts.net${h}`;
      },
    })
    .on('.price', {
      text(c) { if (cur) cur.price += c.text; },
    })
    .on('.address', {
      text(c) { if (cur) cur.address += c.text; },
    })
    .on('img.property-thumbnail', {
      element(el) {
        if (cur && !cur.image) {
          cur.image = el.getAttribute('src') || el.getAttribute('data-src') || null;
        }
      },
    })
    .on('ul.summary li span', {
      text(c) {
        if (!cur) return;
        const n = parseInt(c.text.trim());
        if (isNaN(n)) return;
        if (cur.bedrooms === null) cur.bedrooms = n;
        else if (cur.bathrooms === null) cur.bathrooms = n;
        else if (cur.parking === null) cur.parking = n;
      },
    })
    .transform(resp)
    .arrayBuffer();

  return results;
}

async function scrapeHarcourts(qualifying, maxPrice, minBeds) {
  const base = 'https://harcourts.net/au/listings/rent';
  const p = new URLSearchParams({ minPrice: '0', maxPrice: String(maxPrice) });
  const settled = await Promise.allSettled(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(page =>
      scrapeHarcourtsPage(`${base}?${p}&page=${page}`, qualifying, maxPrice, minBeds)
    )
  );
  return settled.flatMap(r => r.status === 'fulfilled' ? r.value : []);
}

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

async function scrapeElders(qualifying, maxPrice, minBeds) {
  // Elders WP REST API doesn't expose listings. Their visible search page is server-rendered
  // but ignores suburb/state URL params and serves all-AU stock. However, page 1 does
  // occasionally contain a Sydney suburb — cheapest approach is still 3 broad pages.
  const p = new URLSearchParams({ state: 'NSW' });
  if (maxPrice < 5000) p.set('maxRent', maxPrice);
  if (minBeds > 0) p.set('minBedrooms', minBeds);
  const base = 'https://www.eldersrealestate.com.au/residential/rent/';
  const settled = await Promise.allSettled(
    [1, 2, 3].map(page =>
      scrapeEldersPage(`${base}?${p}&page=${page}`, qualifying, maxPrice, minBeds)
    )
  );
  return settled.flatMap(r => r.status === 'fulfilled' ? r.value : []);
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
// API discovered via browser network tab: POST https://raywhiteapi.ep.dynamics.net/v1/listings
// apiKey is a public search key embedded in their frontend.
// typeCode "REN" = Home For Rent (1942 NSW listings).
// Sort by distance from Sydney CBD so inner suburbs appear first.

async function scrapeRayWhite(qualifying, maxPrice, minBeds) {
  const API = 'https://raywhiteapi.ep.dynamics.net/v1/listings?apiKey=6625c417-067a-4a8e-8c1d-85c812d0fb25';
  const rwHeaders = {
    'Content-Type': 'application/json',
    'Origin': 'https://www.raywhite.com',
    'Referer': 'https://www.raywhite.com/',
    'User-Agent': HEADERS['User-Agent'],
    'sec-fetch-site': 'cross-site',
    'sec-fetch-mode': 'cors',
  };

  const baseBody = {
    stateCode: 'NSW',
    countryCode: ['AU'],
    typeCode: { in: ['REN'] },
    statusCode: { in: ['CUR'] },
    // Sort by proximity to inner-west (Newtown/Marrickville area) so target suburbs appear first
    sort: [{ field: 'location', lat: -33.9050, lon: 151.1700, order: 'asc' }],
    size: 50,
  };

  const settled = await Promise.allSettled(
    [0, 50, 100, 150, 200].map(async from => {
      const resp = await fetch(API, {
        method: 'POST',
        headers: rwHeaders,
        body: JSON.stringify({ ...baseBody, from }),
      });
      if (!resp.ok) return [];
      const data = await resp.json();

      const results = [];
      for (const item of data.data || []) {
        const v = item.value || {};
        const addr = v.address || {};
        const postcode = addr.postCode || '';
        const info = qualifying.find(s => s.postcode === postcode);
        if (!info) continue;

        const priceStr = v.displayPrice || '';
        const pv = priceVal(priceStr);
        if (pv > maxPrice) continue;

        const beds = v.bedrooms ?? null;
        if (minBeds > 0 && (beds === null || beds < minBeds)) continue;

        const address = [
          `${addr.streetNumber || ''} ${addr.streetName || ''}`.trim(),
          addr.suburb, addr.stateCode, addr.postCode,
        ].filter(Boolean).join(', ');

        const prlLink = (v.links || []).find(l => l.code === 'PRL');
        const image = v.images?.[0]?.url || null;

        results.push({
          id: `rw-${v.id || v.sourceId}`,
          url: prlLink?.url || 'https://www.raywhite.com',
          address,
          suburb: info.name,
          postcode,
          price: priceStr,
          priceValue: pv,
          bedrooms: beds,
          bathrooms: v.bathrooms ?? null,
          parking: v.carSpaces ?? null,
          propertyType: v.categories?.[0]?.category || '',
          image,
          cbdMin: info.cbdMin,
          line: info.line,
          source: 'Ray White',
        });
      }
      return results;
    })
  );

  return settled.flatMap(r => r.status === 'fulfilled' ? r.value : []);
}

// ─── LJ Hooker ────────────────────────────────────────────────────────────────
// API discovered by reading their AgentPoint JS bundle (assets.ljhooker.com).
// Real endpoint: GET https://api01.ljx.com.au/website/search-v1
// No auth required, CORS open. No working suburb filter → paginate + filter by postcode.

async function scrapeLJHooker(qualifying, maxPrice, minBeds) {
  const BASE = 'https://api01.ljx.com.au';
  const ljhHeaders = {
    'User-Agent': 'OpenAPI-Generator/prod/Javascript',
    'Origin': 'https://www.ljhooker.com.au',
  };

  const settled = await Promise.allSettled(
    [1, 2, 3, 4, 5].map(async page => {
      const url = `${BASE}/website/search-v1?searchOrigin=residential-au&searchProfile=rent&state=nsw&orderBy=date-desc&limit=50&page=${page}`;
      const resp = await fetch(url, { headers: ljhHeaders });
      if (!resp.ok) return [];
      const data = await resp.json();
      if (!data.properties || !Array.isArray(data.properties)) return [];

      const results = [];
      for (const item of data.properties) {
        const addr = item.address || {};
        const postcode = addr.postcode || '';
        const info = qualifying.find(s => s.postcode === postcode);
        if (!info) continue;

        const priceStr = item.priceDisplay || '';
        const pv = priceVal(priceStr);
        if (pv > maxPrice) continue;

        const beds = item.bedrooms ?? null;
        // Exclude non-residential (garages, parking) when a bedroom count is required
        if (minBeds > 0 && (beds === null || beds < minBeds)) continue;

        const address = [addr.address1, addr.suburb || info.name, `${addr.state || 'NSW'} ${postcode}`]
          .filter(Boolean).join(', ');

        results.push({
          id: `ljh-${item.linkUrl || postcode + address}`,
          url: item.linkUrl || 'https://www.ljhooker.com.au',
          address,
          suburb: info.name,
          postcode,
          price: priceStr,
          priceValue: pv,
          bedrooms: beds,
          bathrooms: item.bathrooms ?? null,
          parking: item.carspaces ?? item.parking ?? null,
          propertyType: item.propertyType || '',
          image: item.imageUrl || null,
          cbdMin: info.cbdMin,
          line: info.line,
          source: 'LJ Hooker',
        });
      }
      return results;
    })
  );
  return settled.flatMap(r => r.status === 'fulfilled' ? r.value : []);
}

// ─── The Agency ───────────────────────────────────────────────────────────────
// Server-rendered HTML (Agentbox/inspectre platform). No API needed.
// 72 listings/page sorted A-Z by suburb. 3 pages = 216 listings covering all NSW.
// Address: suburb + street separate spans → concatenated for matchSuburbName lookup.

async function scrapeTheAgencyPage(url, qualifying, maxPrice, minBeds) {
  const resp = await fetch(url, {
    headers: { ...HEADERS, Referer: 'https://theagency.com.au/' },
  });
  if (!resp.ok) return [];

  const results = [];
  let cur = null;

  await new HTMLRewriter()
    .on('.propertyTile', {
      element(el) {
        if (el.getAttribute('data-property-category') !== 'residential') return;
        cur = { url: '', suburb: '', street: '', price: '', image: null, bedrooms: null, bathrooms: null, parking: null };
        el.onEndTag(() => {
          const c = cur; cur = null;
          if (!c?.price || !c?.suburb) return;
          if (priceVal(c.price) > maxPrice) return;
          if (minBeds > 0 && c.bedrooms !== null && c.bedrooms < minBeds) return;
          const info = matchSuburbName(c.suburb, qualifying);
          if (!info) return;
          const address = [c.street.trim(), c.suburb.trim()].filter(Boolean).join(', ');
          results.push({
            id: `theagency-${encodeURIComponent(c.url)}`,
            url: c.url || 'https://theagency.com.au/properties-for-lease',
            address,
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
            source: 'The Agency',
          });
        });
      },
    })
    .on('a.propertyTile-anchor', {
      element(el) { if (cur) cur.url = el.getAttribute('href') || ''; },
    })
    .on('.propertyTile-image', {
      element(el) { if (cur && !cur.image) cur.image = el.getAttribute('data-bg-src') || null; },
    })
    .on('.propertyTile-address-suburb', {
      text(c) { if (cur) cur.suburb += c.text; },
    })
    .on('.propertyTile-address-streetaddress', {
      text(c) { if (cur) cur.street += c.text; },
    })
    .on('.propertyTile-pricetext', {
      text(c) { if (cur) cur.price += c.text; },
    })
    .on('.propertyTile-icons-bed', {
      text(c) {
        if (!cur || cur.bedrooms !== null) return;
        const m = c.text.match(/\d+/);
        if (m) cur.bedrooms = parseInt(m[0]);
      },
    })
    .on('.propertyTile-icons-bath', {
      text(c) {
        if (!cur || cur.bathrooms !== null) return;
        const m = c.text.match(/\d+/);
        if (m) cur.bathrooms = parseInt(m[0]);
      },
    })
    .on('.propertyTile-icons-car', {
      text(c) {
        if (!cur || cur.parking !== null) return;
        const m = c.text.match(/\d+/);
        if (m) cur.parking = parseInt(m[0]);
      },
    })
    .transform(resp)
    .arrayBuffer();

  return results;
}

async function scrapeTheAgency(qualifying, maxPrice, minBeds) {
  const base = 'https://theagency.com.au/properties-for-lease?orderby=suburb';
  const settled = await Promise.allSettled(
    [1, 2, 3].map(page =>
      scrapeTheAgencyPage(`${base}&page=${page}`, qualifying, maxPrice, minBeds)
    )
  );
  return settled.flatMap(r => r.status === 'fulfilled' ? r.value : []);
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

// ─── Shared CF bypass UA ─────────────────────────────────────────────────────
// CF clearance cookies are tied to this User-Agent and expire July 2027.
const CF_UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36';
const UPSTATE_CF  = 'YoF8eEHLqENTCsTmvLpKaw3UizCwGk4CSXls6KSc8_Y-1784041529-1.2.1.1-q1TI9Y_xgmq3cOuCTX7aLfT1.oxbyjmOhkPJTAq4S9xp8KTWFPxkcYQwN8igytyZPxjmxSLJTK55B4uUA72GPX_IlRaKukF9ScfDiNuWLFOY.i_12rAec3aQ1EevWIsuYuIkV.XnuWE31dkH_fNboc7b1TYyThUZinf_aTQNGyGO2LUwrxa5bTMX.wvsRjlMB.AyGwvLtMS70bgyVOOBH7U0ynWnOh8LITpTWm0HDrk6w5fCAL9iG5widnxTATL5V4y0iNO0DsNX7xercKl81WdSWsElnlJSlKirQpM1cxTgbwQkKtm2djSCU_yfYu0CkR6CCVEpXHI8TCt8LakjQg';
const BELLE_CF    = 'hQzUtsiUViWWgP8q8G8hbtx6RwrdSCo2ZKMgHuKNsSQ-1784041572-1.2.1.1-_AGPTvLeDuN2NDySyRl21l0yMQwch2OJTJy5n5Vy5DFB9uV3Eh9Pg9EDRkXIzDZCE.00BEq1sRld5pimNyyPzXTr4_Y7gtvjg3p2fvAXfFLfvqOcnJjS8UBukPXY5exbZrwm1g1uvc.kSipuEP8phAHXZqHXin7e687qJJG42tx7gnDiAT3t6wx9eq1U.TabexSRh.aI6QiKEc72B21j2IR9cban_qc8OMWLalSXOcSQq3ODldT4R2K400WAqDLJTse8W4uadXHzAm3O2Stq5u2fTDUUj9r_pU9wrfRXbwpIflyQfpGjE7UK4qkL_0z9zRFw';

// ─── Upstate ──────────────────────────────────────────────────────────────────
// Northern Beaches agency (Manly, Dee Why, Collaroy etc).
// WordPress + HiCaliber LaunchPad platform (WP REST API).
// CF clearance obtained via Playwright — expires July 2027.
// POST body captured exactly from browser network tab.

async function scrapeUpstate(qualifying, maxPrice, minBeds) {
  const body = JSON.stringify({
    options: {
      contentToDisplay: 'property_attributes,address,price,next_listing_event',
      searchCategories: 'residential-lease',
      order: 'desc',
      orderby: 'price',
      maxChars: 200,
      postsPerPage: 50,
      showSearchCount: 1,
      paginationType: 'loadmore',
      columns: 3,
      layout: 1,
      archive: 1,
      ajax: 1,
      id: 'propertylisting',
      contentType: 'listing',
    },
    request: {},
  });

  const resp = await fetch('https://upstate.com.au/wp-json/rep/v1/listings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': CF_UA,
      'Referer': 'https://upstate.com.au/residential/rent/',
      'Origin': 'https://upstate.com.au',
      'Cookie': `cf_clearance=${UPSTATE_CF}`,
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json, */*',
    },
    body,
  });

  if (!resp.ok) return [];

  let data;
  try { data = await resp.json(); } catch { return []; }
  const htmlCards = data.data?.html || [];

  const results = [];
  for (const html of htmlCards) {
    if (!html.includes('rep-is-lease')) continue;

    // URL contains postcode in slug: /listing/address-suburb-nsw-XXXX-id/
    const urlM = html.match(/href="(https:\/\/upstate\.com\.au\/listing\/[^"]+)"/);
    if (!urlM) continue;
    const url = urlM[1];

    const pcM = url.match(/-nsw-(\d{4})-/);
    if (!pcM) continue;
    const postcode = pcM[1];
    const info = qualifying.find(s => s.postcode === postcode);
    if (!info) continue;

    const addrM = html.match(/class="rep-property-address">([^<]+)</);
    const priceM = html.match(/class="[^"]*lp-price[^"]*">\s*([^<]+)<\/div>/);
    if (!priceM) continue;

    const price = priceM[1].trim();
    const pv = priceVal(price);
    if (pv > maxPrice) continue;

    // Beds/baths from attribute divs
    const bedsM = html.match(/rep-bedroom[^>]*>\s*(\d+)/i);
    const bathM = html.match(/rep-bathroom[^>]*>\s*(\d+)/i);
    const carsM = html.match(/rep-carpark[^>]*>\s*(\d+)/i);
    const beds = bedsM ? parseInt(bedsM[1]) : null;
    if (minBeds > 0 && beds !== null && beds < minBeds) continue;

    const imgM = html.match(/url\(([^)]+)\)/);

    results.push({
      id: `upstate-${url.split('/').filter(Boolean).pop()}`,
      url,
      address: (addrM ? addrM[1].trim() : '') + ', NSW ' + postcode,
      suburb: info.name,
      postcode,
      price,
      priceValue: pv,
      bedrooms: beds,
      bathrooms: bathM ? parseInt(bathM[1]) : null,
      parking: carsM ? parseInt(carsM[1]) : null,
      propertyType: '',
      image: imgM ? imgM[1] : null,
      cbdMin: info.cbdMin,
      line: info.line,
      source: 'Upstate',
    });
  }
  return results;
}

// ─── Belle Property ───────────────────────────────────────────────────────────
// Umbraco/4thMode PropVue platform. CF protected but clearance obtained via
// Playwright (expires July 2027). /data/featured-listings returns HTML partials
// with property cards. Postcode extracted from listing URL slug.

async function scrapeBelleProperty(qualifying, maxPrice, minBeds) {
  const body = JSON.stringify({
    title: 'Properties available for rent.',
    officeId: '', agentId: '',
    switchTabOrder: false,
    tabOrder: 'rent,rented',
    viewAll: '',
    featuredListingsExist: false,
    currentSite: 'Belle Property',
    SwiperDisplayType: null,
    ListingUrlHref: null,
    ImageLarge: null,
    OffMarket: false,
    IsAuthenticated: false,
  });

  const resp = await fetch('https://www.belleproperty.com/data/featured-listings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': CF_UA,
      'Referer': 'https://www.belleproperty.com/rent/',
      'Origin': 'https://www.belleproperty.com',
      'Cookie': `cf_clearance=${BELLE_CF}`,
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': '*/*',
    },
    body,
  });

  if (!resp.ok) return [];

  const results = [];
  let cur = null;

  await new HTMLRewriter()
    .on('.property', {
      element(el) {
        cur = { url: '', postcode: '', image: null, suburb: '', address: '', price: '', bedrooms: null, bathrooms: null };
        el.onEndTag(() => {
          const c = cur; cur = null;
          if (!c?.price || !c?.postcode) return;
          const pv = priceVal(c.price);
          if (pv > maxPrice) return;
          if (minBeds > 0 && c.bedrooms !== null && c.bedrooms < minBeds) return;
          const info = qualifying.find(s => s.postcode === c.postcode);
          if (!info) return;
          const address = [c.address.trim(), c.suburb.trim()].filter(Boolean).join(', ');
          results.push({
            id: `belle-${encodeURIComponent(c.url)}`,
            url: c.url || 'https://www.belleproperty.com/rent/',
            address,
            suburb: info.name,
            postcode: c.postcode,
            price: c.price.trim(),
            priceValue: pv,
            bedrooms: c.bedrooms,
            bathrooms: c.bathrooms,
            parking: null,
            propertyType: '',
            image: c.image,
            cbdMin: info.cbdMin,
            line: info.line,
            source: 'Belle Property',
          });
        });
      },
    })
    .on('.property .image a', {
      element(el) {
        if (!cur) return;
        const h = el.getAttribute('href') || '';
        cur.url = h;
        // Extract postcode from URL: /listings/15-364-bay-street-suburb-nsw-2216-id
        const m = h.match(/-nsw-(\d{4})-/);
        if (m) cur.postcode = m[1];
      },
    })
    .on('.property .image', {
      element(el) {
        if (cur && !cur.image) {
          const img = el.getAttribute('data-swiper-image') || '';
          if (img) cur.image = img;
        }
      },
    })
    .on('.property .suburb a', {
      text(c) { if (cur) cur.suburb += c.text; },
    })
    .on('.property .address', {
      text(c) { if (cur) cur.address += c.text; },
    })
    .on('.property .price', {
      text(c) { if (cur) cur.price += c.text; },
    })
    .on('.property .feature.bed', {
      text(c) {
        if (!cur) return;
        const m = c.text.match(/\d+/);
        if (m && cur.bedrooms === null) cur.bedrooms = parseInt(m[0]);
      },
    })
    .on('.property .feature.bath', {
      text(c) {
        if (!cur) return;
        const m = c.text.match(/\d+/);
        if (m && cur.bathrooms === null) cur.bathrooms = parseInt(m[0]);
      },
    })
    .transform(resp)
    .arrayBuffer();

  return results;
}

// ─── DiJones ──────────────────────────────────────────────────────────────────
// Typesense search API discovered via browser network tab.
// 569 NSW listings, includes lat/lng for walk-to-station calculation.
// API key: public read-only key embedded in their Nuxt frontend.

async function scrapeDiJones(qualifying, maxPrice, minBeds) {
  const TS_URL = 'https://qt4boz9gv2hfa1kyp-1.a1.typesense.net/collections/listings/documents/search';
  const TS_KEY = 'mnQJXe4UamfykRYdzVAVlr92WPYstsq8';
  const headers = { 'x-typesense-api-key': TS_KEY, 'Content-Type': 'application/json' };

  const settled = await Promise.allSettled(
    [1, 2, 3, 4].map(async page => {
      const params = new URLSearchParams({
        q: '',
        query_by: 'id_search',
        filter_by: 'marketingStatus:Available',
        per_page: '150',
        page: String(page),
      });
      const resp = await fetch(`${TS_URL}?${params}`, { headers });
      if (!resp.ok) return [];
      const data = await resp.json();

      const results = [];
      for (const hit of data.hits || []) {
        const doc = hit.document || {};
        if (doc.type !== 'Lease') continue;
        const pa = doc.propertyAddress || {};
        if (pa.state !== 'NSW') continue;

        const priceStr = doc.displayPrice || '';
        const pv = doc.searchPrice || priceVal(priceStr);
        if (pv > maxPrice) continue;

        const beds = doc.beds ?? null;
        if (minBeds > 0 && beds !== null && beds < minBeds) continue;

        const address = [pa.streetAddress, pa.suburb || '', `NSW ${pa.postcode}`].filter(Boolean).join(', ');
        const info = matchSuburb(address, qualifying);
        if (!info) continue;

        const geo = doc._geoloc;
        let walkData = null;
        if (geo?.lat && geo?.lng) walkData = nearestStation(geo.lat, geo.lng);

        results.push({
          id: `dijones-${doc.id || doc.slug}`,
          url: `https://www.dijones.com.au/${doc.slug || ''}`,
          address,
          suburb: info.name,
          postcode: pa.postcode,
          price: priceStr,
          priceValue: pv,
          bedrooms: beds,
          bathrooms: doc.bath ?? null,
          parking: doc.cars ?? null,
          propertyType: doc.propertyCategory || '',
          image: doc.image || null,
          cbdMin: info.cbdMin,
          line: info.line,
          source: 'DiJones',
          walkMin: walkData?.walkMin ?? null,
          walkStation: walkData?.station ?? null,
        });
      }
      return results;
    })
  );
  return settled.flatMap(r => r.status === 'fulfilled' ? r.value : []);
}

// ─── BresicWhitney ────────────────────────────────────────────────────────────
// Gatsby/DatoCMS site. Listing data is embedded as double-encoded JSON in
// window.__routerData inside <script> tags. We extract it via regex on raw HTML.
// 85 inner-west/eastern suburbs properties.

async function scrapeBresicWhitneyPage(url, qualifying, maxPrice, minBeds) {
  const resp = await fetch(url, {
    headers: { ...HEADERS, Referer: 'https://bresicwhitney.com.au/' },
  });
  if (!resp.ok) return [];

  const text = await resp.text();
  const results = [];

  // The data is embedded as: \"address\":\"...\",\"slug\":\"...\",\"permalink\":\"...\",
  // \"price\":\"...\",\"priceSearch\":N,...\"for\":\"lease\",\"beds\":N,\"baths\":N,\"allCarSpaces\":N
  // In raw HTML bytes the escaped-JSON uses \" for every double-quote.
  const re = /\\"address\\":\\"([^"\\]+)\\",\\"slug\\":\\"[^"\\]+\\",\\"permalink\\":\\"(\/rent\/[^"\\]+)\\",\\"price\\":\\"([^"\\]+)\\",\\"priceSearch\\":(\d+),\\"for\\":\\"([^"\\]+)\\"(?:[^}]*?)\\"beds\\":(\d+),\\"baths\\":(\d+),\\"allCarSpaces\\":(\d+)/g;

  let m;
  while ((m = re.exec(text)) !== null) {
    const [, address, permalink, price, priceSearch, forType, bedsStr, bathsStr, carsStr] = m;
    if (forType !== 'lease') continue;

    const pv = parseInt(priceSearch, 10) || priceVal(price);
    if (pv > maxPrice) continue;

    const beds = parseInt(bedsStr, 10);
    if (minBeds > 0 && !isNaN(beds) && beds < minBeds) continue;

    const info = matchSuburb(address, qualifying);
    if (!info) continue;

    results.push({
      id: `bw-${permalink.replace(/\//g, '-')}`,
      url: `https://bresicwhitney.com.au${permalink}`,
      address,
      suburb: info.name,
      postcode: info.postcode,
      price,
      priceValue: pv,
      bedrooms: isNaN(beds) ? null : beds,
      bathrooms: parseInt(bathsStr, 10) || null,
      parking: parseInt(carsStr, 10) || null,
      propertyType: '',
      image: null,
      cbdMin: info.cbdMin,
      line: info.line,
      source: 'BresicWhitney',
    });
  }
  return results;
}

async function scrapeBresicWhitney(qualifying, maxPrice, minBeds) {
  const base = 'https://bresicwhitney.com.au/lease?type=lease&sort=_createdAt_DESC';
  const settled = await Promise.allSettled(
    [1, 2, 3, 4, 5].map(page =>
      scrapeBresicWhitneyPage(`${base}&page=${page}`, qualifying, maxPrice, minBeds)
    )
  );
  return settled.flatMap(r => r.status === 'fulfilled' ? r.value : []);
}

// ─── First National ───────────────────────────────────────────────────────────
// Zenu platform — server-rendered, no bot protection.
// 94 listings/page, NSW-wide, we filter by postcode.
// Card: .card.listing-card > a.card-wrapper (href has slug with postcode)
//        .address.street-address | .address.suburb (text: "Suburb NSW POSTCODE")
//        .property-attribute spans (bed, bath, car in DOM order) | .price | img.listing-image

async function scrapeFirstNationalPage(url, qualifying, maxPrice, minBeds) {
  const resp = await fetch(url, {
    headers: {
      'User-Agent': HEADERS['User-Agent'],
      'Accept': 'text/html',
      'Accept-Language': 'en-AU,en;q=0.9',
      'Referer': 'https://www.firstnational.com.au/',
    },
  });
  if (!resp.ok) return [];

  const results = [];
  let cur = null;
  let attrIdx = 0;

  await new HTMLRewriter()
    .on('.listing-card', {
      element(el) {
        cur = { url: '', street: '', suburb: '', price: '', image: null, bedrooms: null, bathrooms: null, parking: null };
        attrIdx = 0;
        el.onEndTag(() => {
          const c = cur; cur = null; attrIdx = 0;
          if (!c?.price || !c?.suburb) return;
          const pv = priceVal(c.price);
          if (pv > maxPrice) return;
          if (minBeds > 0 && c.bedrooms !== null && c.bedrooms < minBeds) return;

          // Suburb div text: "Forster NSW 2428" or "Forster, NSW 2428"
          const pcM = c.suburb.match(/\b(\d{4})\b/);
          if (!pcM) return;
          const postcode = pcM[1];
          const info = qualifying.find(s => s.postcode === postcode);
          if (!info) return;

          results.push({
            id: `fn-${encodeURIComponent(c.url || c.street)}`,
            url: c.url ? `https://www.firstnational.com.au${c.url}` : 'https://www.firstnational.com.au',
            address: [c.street.trim(), info.name, `NSW ${postcode}`].filter(Boolean).join(', '),
            suburb: info.name,
            postcode,
            price: c.price.trim(),
            priceValue: pv,
            bedrooms: c.bedrooms,
            bathrooms: c.bathrooms,
            parking: c.parking,
            propertyType: '',
            image: c.image,
            cbdMin: info.cbdMin,
            line: info.line,
            source: 'First National',
          });
        });
      },
    })
    .on('a.card-wrapper', {
      element(el) {
        if (cur && !cur.url) cur.url = el.getAttribute('href') || '';
      },
    })
    .on('img.listing-image', {
      element(el) {
        if (cur && !cur.image) cur.image = el.getAttribute('src') || null;
      },
    })
    .on('.address.street-address', {
      text(c) { if (cur) cur.street += c.text; },
    })
    .on('.address.suburb', {
      text(c) { if (cur) cur.suburb += c.text; },
    })
    .on('.property-attribute', {
      text(c) {
        if (!cur) return;
        const n = parseInt(c.text.trim());
        if (isNaN(n)) return;
        if (attrIdx === 0) cur.bedrooms = n;
        else if (attrIdx === 1) cur.bathrooms = n;
        else if (attrIdx === 2) cur.parking = n;
        attrIdx++;
      },
    })
    .on('.price', {
      text(c) { if (cur) cur.price += c.text; },
    })
    .transform(resp)
    .arrayBuffer();

  return results;
}

async function scrapeFirstNational(qualifying, maxPrice, minBeds) {
  const base = 'https://www.firstnational.com.au/pages/real-estate/results?listing_sale_method=rent&listing_category=residential&state=nsw';
  const settled = await Promise.allSettled(
    [1, 2, 3, 4, 5].map(page =>
      scrapeFirstNationalPage(`${base}&page=${page}`, qualifying, maxPrice, minBeds)
    )
  );
  return settled.flatMap(r => r.status === 'fulfilled' ? r.value : []);
}

// ─── PRD ──────────────────────────────────────────────────────────────────────
// Listonce platform — server-rendered, no bot protection.
// 16 listings/page, NSW-wide with all office types.
// Card: article.property-card with data-url (contains NSWpostcode slug), data-bedrooms/bathrooms/parking/img
//        .property-card__price | .property-card__address | .property-card__suburb

async function scrapePRDPage(url, qualifying, maxPrice, minBeds) {
  const resp = await fetch(url, {
    headers: {
      'User-Agent': HEADERS['User-Agent'],
      'Accept': 'text/html',
      'Referer': 'https://www.prd.com.au/',
    },
  });
  if (!resp.ok) return [];

  const results = [];
  let cur = null;

  await new HTMLRewriter()
    .on('article.property-card', {
      element(el) {
        const dataUrl = el.getAttribute('data-url') || '';
        const pcM = dataUrl.match(/-nsw-(\d{4})-/i);
        if (!pcM) { cur = null; return; }
        const postcode = pcM[1];
        const info = qualifying.find(s => s.postcode === postcode);
        if (!info) { cur = null; return; }

        cur = {
          url: dataUrl,
          postcode,
          info,
          bedrooms: parseInt(el.getAttribute('data-bedrooms') || '') || null,
          bathrooms: parseInt(el.getAttribute('data-bathrooms') || '') || null,
          parking: parseInt(el.getAttribute('data-parking') || '') || null,
          image: el.getAttribute('data-img') || null,
          price: '', address: '', suburb: '',
        };
        el.onEndTag(() => {
          const c = cur; cur = null;
          if (!c?.price || !c?.url) return;
          const pv = priceVal(c.price);
          if (pv > maxPrice) return;
          if (minBeds > 0 && c.bedrooms !== null && c.bedrooms < minBeds) return;
          const address = [c.address.replace(/\s+/g, ' ').trim(), c.info.name, `NSW ${c.postcode}`].filter(Boolean).join(', ');
          results.push({
            id: `prd-${encodeURIComponent(c.url)}`,
            url: c.url,
            address,
            suburb: c.info.name,
            postcode: c.postcode,
            price: c.price.trim(),
            priceValue: pv,
            bedrooms: c.bedrooms,
            bathrooms: c.bathrooms,
            parking: c.parking,
            propertyType: '',
            image: c.image,
            cbdMin: c.info.cbdMin,
            line: c.info.line,
            source: 'PRD',
          });
        });
      },
    })
    .on('.property-card__price', {
      text(c) { if (cur) cur.price += c.text; },
    })
    .on('.property-card__address', {
      text(c) { if (cur) cur.address += c.text + ' '; },
    })
    .transform(resp)
    .arrayBuffer();

  return results;
}

async function scrapePRD(qualifying, maxPrice, minBeds) {
  const base = 'https://www.prd.com.au/corporate-search/?property_type_toggle=Residential&listing_type=Lease&property_status=Available&property_type=Residential';
  const settled = await Promise.allSettled(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(page =>
      scrapePRDPage(`${base}&page=${page}`, qualifying, maxPrice, minBeds)
    )
  );
  return settled.flatMap(r => r.status === 'fulfilled' ? r.value : []);
}

// ─── Morton (KV-backed) ───────────────────────────────────────────────────────
// Morton is CF-protected — direct Worker fetch blocked.
// Playwright scraper (morton-scrape.cjs) runs locally and uploads to KV.
// Key: "morton" in MCGRATH_CACHE namespace.

async function scrapeMorton(qualifying, maxPrice, minBeds, env) {
  if (!env?.MCGRATH_CACHE) return [];
  const raw = await env.MCGRATH_CACHE.get('morton');
  if (!raw) return [];

  let data;
  try { data = JSON.parse(raw); } catch { return []; }

  const results = [];
  for (const p of data.listings || []) {
    const info = qualifying.find(s =>
      s.postcode === p.postcode ||
      s.name.toLowerCase() === (p.suburb || '').toLowerCase()
    );
    if (!info) continue;

    const pv = p.priceValue || priceVal(p.price);
    if (pv > maxPrice) continue;

    const beds = p.bedrooms ?? null;
    if (minBeds > 0 && beds !== null && beds < minBeds) continue;

    const geo = (p.lat && p.lng) ? nearestStation(p.lat, p.lng) : null;

    results.push({
      id: p.id,
      url: p.url || 'https://www.morton.com.au/rent/properties-for-rent/',
      address: p.address || '',
      suburb: info.name,
      postcode: info.postcode,
      price: p.price || '',
      priceValue: pv,
      bedrooms: beds,
      bathrooms: p.bathrooms ?? null,
      parking: p.parking ?? null,
      propertyType: p.propertyType || '',
      image: p.image || null,
      cbdMin: info.cbdMin,
      line: info.line,
      source: 'Morton',
      walkMin: geo?.walkMin ?? null,
      walkStation: geo?.station ?? null,
    });
  }
  return results;
}

// ─── McGrath (KV-backed) ──────────────────────────────────────────────────────
// McGrath uses Vercel with TLS fingerprint validation — direct fetch from a CF
// Worker gets 429. Instead we run mcgrath-v2.cjs (Playwright/Chromium) locally
// and upload the result to KV. This function reads that cache and applies filters.

async function scrapeMcGrath(qualifying, maxPrice, minBeds, env) {
  if (!env?.MCGRATH_CACHE) return [];
  const raw = await env.MCGRATH_CACHE.get('listings');
  if (!raw) return [];

  let data;
  try { data = JSON.parse(raw); } catch { return []; }

  const qualSet = new Set(qualifying.map(s => s.postcode));
  const results = [];

  for (const p of data.listings || []) {
    const info = qualifying.find(s =>
      s.postcode === p.postcode ||
      s.name.toLowerCase() === (p.suburb || '').toLowerCase()
    );
    if (!info) continue;

    const pv = p.priceValue || priceVal(p.price);
    if (pv > maxPrice) continue;

    const beds = p.bedrooms ?? null;
    if (minBeds > 0 && beds !== null && beds < minBeds) continue;

    const geo = (p.lat && p.lng) ? nearestStation(p.lat, p.lng) : null;

    results.push({
      id: p.id,
      url: p.url || 'https://www.mcgrath.com.au/rent',
      address: p.address || '',
      suburb: info.name,
      postcode: info.postcode,
      price: p.price || '',
      priceValue: pv,
      bedrooms: beds,
      bathrooms: p.bathrooms ?? null,
      parking: p.parking ?? null,
      propertyType: p.propertyType || '',
      image: p.image || null,
      cbdMin: info.cbdMin,
      line: info.line,
      source: 'McGrath',
      walkMin: geo?.walkMin ?? null,
      walkStation: geo?.station ?? null,
    });
  }
  return results;
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
      <label>Max commute to CBD</label>
      <select id="maxCbd">
        <option value="20">20 min</option>
        <option value="30">30 min</option>
        <option value="40" selected>40 min</option>
        <option value="60">60 min</option>
      </select>
    </div>
    <button class="btn" id="searchBtn" onclick="doSearch()">Search</button>
  </div>
</div>

<div class="notice">
  ⚡ Live from <strong>Ray White · LJ Hooker · Elders · Harris Tripp · Harcourts · The Agency · DiJones · BresicWhitney · Upstate · Belle Property · McGrath · First National · PRD · Morton</strong>.
  All Greater Sydney — filter by commute time. Walk time to nearest station shown where available. Properties <strong>under $700/wk</strong> highlighted green.
</div>

<div class="err" id="errBox"></div>
<div class="meta" id="meta" style="display:none"></div>
<div class="grid" id="grid">
  <div class="state"><div class="spinner"></div>Searching across Sydney…</div>
</div>

<script data-cfasync="false">
const IDEAL = 700;

function imgErr(el){el.parentElement.innerHTML='<div class=thumb-ph>No photo</div>'}

async function doSearch() {
  const btn = document.getElementById('searchBtn');
  const maxPrice = +document.getElementById('maxPrice').value || 600;
  const minBeds  = +document.getElementById('minBeds').value;
  const maxCbd   = +document.getElementById('maxCbd').value;

  btn.disabled = true;
  setGrid('<div class="state"><div class="spinner"></div>Searching Ray White · LJ Hooker · Elders · Harris Tripp · Harcourts · The Agency · DiJones · BresicWhitney · McGrath…</div>');
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
      ? '<img src="' + l.image + '" alt="" loading="lazy" onerror="imgErr(this)">'
      : '<div class="thumb-ph">🏠</div>';

    const walkBadge = l.walkMin != null
      ? ' · <span style="color:var(--muted)">🚶 ' + l.walkMin + ' min to ' + (l.walkStation || 'stn') + '</span>'
      : '';
    const transit = l.cbdMin
      ? '🚉 <strong>' + l.cbdMin + ' min</strong> to CBD · ' + l.line + walkBadge
      : '🚉 ' + (l.line || 'Transit accessible') + walkBadge;

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
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/search') {
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      };

      const maxPrice = Math.min(Math.max(parseInt(url.searchParams.get('maxPrice') || '600'), 100), 5000);
      const minBeds  = Math.max(parseInt(url.searchParams.get('minBeds') || '0'), 0);
      const maxCbd   = Math.min(parseInt(url.searchParams.get('maxCbd') || '40'), 90);

      const qualifying = SUBURBS.filter(s => s.cbdMin <= maxCbd);

      const [eldersR, rwR, ljhR, htR, harcourtsR, theAgencyR, diJonesR, bwR, upstateR, belleR, mcgrathR, fnR, prdR, mortonR] = await Promise.allSettled([
        scrapeElders(qualifying, maxPrice, minBeds),
        scrapeRayWhite(qualifying, maxPrice, minBeds),
        scrapeLJHooker(qualifying, maxPrice, minBeds),
        scrapeHarrisTripp(qualifying, maxPrice, minBeds),
        scrapeHarcourts(qualifying, maxPrice, minBeds),
        scrapeTheAgency(qualifying, maxPrice, minBeds),
        scrapeDiJones(qualifying, maxPrice, minBeds),
        scrapeBresicWhitney(qualifying, maxPrice, minBeds),
        scrapeUpstate(qualifying, maxPrice, minBeds),
        scrapeBelleProperty(qualifying, maxPrice, minBeds),
        scrapeMcGrath(qualifying, maxPrice, minBeds, env),
        scrapeFirstNational(qualifying, maxPrice, minBeds),
        scrapePRD(qualifying, maxPrice, minBeds),
        scrapeMorton(qualifying, maxPrice, minBeds, env),
      ]);

      const all = [
        ...(eldersR.status     === 'fulfilled' ? eldersR.value     : []),
        ...(rwR.status         === 'fulfilled' ? rwR.value         : []),
        ...(ljhR.status        === 'fulfilled' ? ljhR.value        : []),
        ...(htR.status         === 'fulfilled' ? htR.value         : []),
        ...(harcourtsR.status  === 'fulfilled' ? harcourtsR.value  : []),
        ...(theAgencyR.status  === 'fulfilled' ? theAgencyR.value  : []),
        ...(diJonesR.status    === 'fulfilled' ? diJonesR.value    : []),
        ...(bwR.status         === 'fulfilled' ? bwR.value         : []),
        ...(upstateR.status    === 'fulfilled' ? upstateR.value    : []),
        ...(belleR.status      === 'fulfilled' ? belleR.value      : []),
        ...(mcgrathR.status    === 'fulfilled' ? mcgrathR.value    : []),
        ...(fnR.status         === 'fulfilled' ? fnR.value         : []),
        ...(prdR.status        === 'fulfilled' ? prdR.value        : []),
        ...(mortonR.status     === 'fulfilled' ? mortonR.value     : []),
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
