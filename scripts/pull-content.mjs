/* Build-time content sync.
   Before each `next build`, pull the latest content from Supabase into
   src/content/site.json. If Supabase isn't configured (no env vars), the
   bundled content is used as-is — so local builds always work. */
import fs from "fs";
import path from "path";

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
const out = path.join(process.cwd(), "src", "content", "site.json");

if (!url || !key) {
  console.log("[pull-content] No Supabase env set — using bundled site.json.");
  process.exit(0);
}

try {
  const r = await fetch(`${url}/rest/v1/site_content?id=eq.1&select=data`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
  });
  if (!r.ok) {
    console.log(`[pull-content] Supabase responded ${r.status} — keeping bundled content.`);
    process.exit(0);
  }
  const rows = await r.json();
  if (rows && rows[0] && rows[0].data) {
    fs.writeFileSync(out, JSON.stringify(rows[0].data, null, 2) + "\n", "utf8");
    console.log("[pull-content] ✓ Content pulled from Supabase.");
  } else {
    console.log("[pull-content] No content row yet — keeping bundled content.");
  }
} catch (e) {
  console.log("[pull-content] Error (non-fatal): " + e.message);
  process.exit(0);
}
