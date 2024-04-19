import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Main */}
        <meta charSet="utf-8" />
        <meta name="description" content="HoopMetrics" />
        <meta
          name="keywords"
          content="nba, statistics, hoop, nunosantos, metrics"
        />

        {/* Android */}
        <meta name="theme-color" content="#dc2626" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* iOS */}
        <meta name="apple-mobile-web-app-title" content="HoopMetrics" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Windows */}
        <meta name="msapplication-navbutton-color" content="#dc2626" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        {/* <meta name="msapplication-TileImage" content="ms-icon-144x144.png" /> */}
        <meta name="msapplication-config" content="browserconfig.xml" />

        {/* Pinned Sites */}
        <meta name="application-name" content="HoopMetrics" />
        <meta name="msapplication-tooltip" content="NBA Statistics App" />
        <meta name="msapplication-starturl" content="/" />

        {/* Pinned Sites */}
        <meta name="msapplication-tap-highlight" content="no" />

        {/* UC Mobile Browser */}
        <meta name="full-screen" content="yes" />
        <meta name="browsermode" content="application" />

        {/* Orientation */}
        <meta name="screen-orientation" content="portrait" />

        {/* Main Link Tags  */}
        <link
          href="favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link
          href="android/android-launchericon-48-48.png"
          rel="icon"
          type="image/png"
          sizes="48x48"
        />

        {/* Android  */}
        <link
          href="android/android-chrome-192x192.png"
          rel="icon"
          sizes="192x192"
        />
        <link href="ios/128.png" rel="icon" sizes="128x128" />

        {/* UC Browser  */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="ios/apple-touch-icon.png"
        />
        <link
          rel="mask-icon"
          href="ios/safari-pinned-tab.svg"
          color="#dc2626"
        />

	<title>Hoop Metrics 🏀</title>

        {/* Manifest.json  */}
        <link rel="manifest" href="manifest.json" />
      </Head>
      <body className="bg-white dark:bg-neutral-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
