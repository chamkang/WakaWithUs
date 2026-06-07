/** @type {import('next').NextConfig} */
// Deployed as a normal Next.js app on Vercel (server-rendered so content can be
// read live from Supabase). No basePath / no static export.
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "*.supabase.co" },
    ],
  },
};

export default nextConfig;
