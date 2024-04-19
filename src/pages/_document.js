import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>

{/* Main */}
<meta charSet="utf-8"/>
<meta name="description" content="Nuno Santos Portfolio" />
<meta name="keywords" content="portfolio, pwa, nextjs, nunosantos, cv" />

{/* Android */}
<meta name="theme-color" content="#171717"/>
<meta name="mobile-web-app-capable" content="yes"/>

{/* iOS */}
<meta name="apple-mobile-web-app-title" content="Nuno Santos "/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-status-bar-style" content="default"/>

{/* Windows */}
<meta name="msapplication-navbutton-color" content="red"/>
<meta name="msapplication-TileColor" content="#171717"/>
<meta name="msapplication-TileImage" content="ms-icon-144x144.png"/>
<meta name="msapplication-config" content="browserconfig.xml"/>

{/* Pinned Sites */}
<meta name="application-name" content="Nuno Santos"/>
<meta name="msapplication-tooltip" content="Tooltip Text"/>
<meta name="msapplication-starturl" content="/"/>

{/* Pinned Sites */}
<meta name="msapplication-tap-highlight" content="no"/>

{/* UC Mobile Browser */}
<meta name="full-screen" content="yes"/>
<meta name="browsermode" content="application"/>

{/* Orientation */}
<meta name="screen-orientation" content="portrait"/>


{/* Main Link Tags  */}
<link href="favicon-16x16.png" rel="icon" type="image/png" sizes="16x16"/>
<link href="favicon-32x32.png" rel="icon" type="image/png" sizes="32x32"/>
<link href="android/android-launchericon-48-48.png" rel="icon" type="image/png" sizes="48x48"/>

{/* Android  */}
<link href="android-chrome-192x192.png" rel="icon" sizes="192x192"/>
<link href="android/128.png" rel="icon" sizes="128x128"/>


{/* UC Browser  */}
<link rel="apple-touch-icon" sizes="ios/180x180" href="apple-touch-icon.png"/>
<link rel="mask-icon" href="safari-pinned-tab.svg" color="#171717"/>


{/* Manifest.json  */}
<link rel="manifest" href="manifest.json" />



</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
