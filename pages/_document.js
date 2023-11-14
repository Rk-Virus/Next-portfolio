// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link rel="stylesheet" href="" /> */}
        {/* <!-- CSS only --> */}
      </Head>
      <body id="home">
        <div id="fb-root"></div>
        <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v16.0" nonce="3xFCs171"></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
