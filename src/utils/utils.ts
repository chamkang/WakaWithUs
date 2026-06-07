// On Vercel the site is served from the domain root (no basePath), so assets
// referenced from plain <video>/<source> tags just use a leading slash.
const getImagePrefix = () => {
  return "";
};

export { getImagePrefix };
