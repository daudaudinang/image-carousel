/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    imageSizes: [80, 128, 225, 320, 480, 720, 1080, 1280, 1920],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizePackageImports: ["react-dom", "react", "react-icons"],
  },
  productionBrowserSourceMaps: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: false,
  },
  compress: false
};

export default nextConfig;
