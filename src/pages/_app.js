import "@/styles/globals.css";


export const metadata = {
  title: "Nuno Santos Portfolio",
  description: "PWA Portfolio",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#262626" }],
  authors: [
    { name: "Nuno Santos" },
    {
      name: "Nuno Santos",
      url: "https://www.linkedin.com/in/nunosantoss/",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/128.png" },
    { rel: "icon", url: "icons/128.png" },
  ],
};

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
