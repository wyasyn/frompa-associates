import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FROMPA & ASSOCIATES",
    short_name: "F&A",
    description:
      '"Frompa & Associates – Certified Public Accountants in Mukono, Uganda. We offer partner-led accounting, audit & assurance, corporate tax, trade finance, CFO advisory and ESG reporting services."',
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/x-icon",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/x-icon",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/x-icon",
      },
    ],
  };
}
