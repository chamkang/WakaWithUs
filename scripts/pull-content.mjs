/* Build-time content sync.
   Before each `next build`, pull the latest content from Supabase into
   src/content/site.json. Any fields added to the bundled content but missing
   from Supabase (older data) are filled in from the bundled defaults — so new
   fields work without a manual re-save. If Supabase isn't configured (no env),
   the bundled content is used as-is, so local builds always work. */
import fs from "fs";
import path from "path";

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
const out = path.join(process.cwd(), "src", "content", "site.json");

// Fill keys present in `seed` but missing in `data` (never overwrites real values).
function withDefaults(seed, data) {
  if (Array.isArray(seed)) {
    if (!Array.isArray(data)) return data;
    const template = seed[0];
    return data.map((item, i) => withDefaults(seed[i] !== undefined ? seed[i] : template, item));
  }
  if (seed && typeof seed === "object") {
    if (!data || typeof data !== "object") return data;
    const o = { ...data };
    for (const k of Object.keys(seed)) o[k] = k in o ? withDefaults(seed[k], o[k]) : seed[k];
    return o;
  }
  return data;
}

if (!url || !key) {
  console.log("[pull-content] No Supabase env set — using bundled site.json.");
  process.exit(0);
}

try {
  const bundled = JSON.parse(fs.readFileSync(out, "utf8"));
  const r = await fetch(`${url}/rest/v1/site_content?id=eq.1&select=data`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
  });
  if (!r.ok) {
    console.log(`[pull-content] Supabase responded ${r.status} — keeping bundled content.`);
    process.exit(0);
  }
  const rows = await r.json();
  if (rows && rows[0] && rows[0].data) {
    const merged = withDefaults(bundled, rows[0].data);
    fs.writeFileSync(out, JSON.stringify(merged, null, 2) + "\n", "utf8");
    console.log("[pull-content] ✓ Content pulled from Supabase (with default fields filled).");
  } else {
    console.log("[pull-content] No content row yet — keeping bundled content.");
  }
} catch (e) {
  console.log("[pull-content] Error (non-fatal): " + e.message);
  process.exit(0);
}
