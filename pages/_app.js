import Head from "next/head";
import "../styles/globals.css";
import "../public/assets/vendors/themify-icons/css/themify-icons.css";

//components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>RkVirus</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="This is my tech portfolio to showcase skills and personal blogs of my life experiences."
        />
        <meta name="author" content="Rk Virus" />
        <meta name="keywords" content="tech, blogs, rkvirus, tech updates, e-diary, rk virus blogs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      {/* <!-- JavaScript Bundle with Popper --> */}
      <Footer />
    </>
  );
}

export default MyApp;
