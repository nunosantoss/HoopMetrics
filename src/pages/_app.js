import "@/styles/globals.css";

export const metadata = {
  title: "HoopMetrics",
  description: "NBA Statistics App",
  generator: "Next.js",
  manifest: "manifest.json",
  keywords: ["nba", "statistics", "hoopmetrics", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#dc2626" }],
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
    { rel: "apple-touch-icon", url: "ios/128.png" },
    { rel: "icon", url: "ios/128.png" },
  ],
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
