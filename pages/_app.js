import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import "../public/assets/vendors/themify-icons/css/themify-icons.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Decode with Rk</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="This is my tech portfolio to showcase my skills and make you aware about what's going around the world through our blogs."
        />
        <meta name="author" content="Rk Virus" />
        <meta name="keywords" content="tech, blogs, rkvirus, tech updates" />
        <link rel="icon" href="/favicon128.png" />
      </Head>
      <Component {...pageProps} />
      {/* <!-- JavaScript Bundle with Popper --> */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossOrigin="anonymous"
      ></Script>
    </>
  );
}

export default MyApp;
