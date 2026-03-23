import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ansaf Akhtar Portfolio",
    short_name: "Ansaf Akhtar",
    description: "A portfolio built by Ansaf Akhtar",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/Pwa-logos/logo-white.png",
        sizes: "1667x1667",
        type: "image/png",
        purpose: "any",
      },
    ],
    screenshots: [
      {
        src: "/Pwa-logos/logo-white.png",
        sizes: "1667x1667",
        type: "image/png",
        form_factor: "wide",
      },
    ],
  };
}
