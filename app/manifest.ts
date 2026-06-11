import type { MetadataRoute } from "next";
import { siteDescription, siteName } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Next Level",
    description: siteDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#030405",
    theme_color: "#00cfe6",
    lang: "he",
    dir: "rtl",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
