// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

// schema for crawlers to show when searched on google
const schemaObject = {
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Ravi Mishra",
  "url": "https://rkvirus.vercel.app",
  "image": "https://rkvirus.vercel.app/imgs/avatar.jpg",
  "sameAs": [
    "https://www.instagram.com/itz_rkvirus",
    "https://www.linkedin.com/in/rkvirus/",
    ""
  ],
  "jobTitle": "Full Stack Developer"
}

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link rel="stylesheet" href="" /> */}
        {/* <!-- CSS only --> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaObject),
          }}
        />
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