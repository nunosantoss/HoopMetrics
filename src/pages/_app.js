import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"], // Square brackets instead of parentheses
});

const LoadingSpinner = () => {
  return (
    <section className="flex justify-center items-center h-screen z-[9999998] backdrop-blur-sm">
      <div className="">
        <div className="flex">
          <BounceLoader color="#e76f51" size={80} />
        </div>
      </div>
    </section>
  );
};

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
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);
    const timeout = setTimeout(handleComplete, 1000);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", { handleComplete });

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
      clearTimeout(timeout);
    };
  }, [router.events]);

  return (
    <>
      <main className={`${poppins.className} `}>
        <Head>
          <title>Hoop Metrics 🏀</title>
        </Head>
        {loading ? <LoadingSpinner /> : <Component {...pageProps} />}
      </main>
    </>
  );
}
