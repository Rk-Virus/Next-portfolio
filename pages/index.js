import Link from "next/link";
import Script from "next/script";
import PortableText from "react-portable-text";
import imageUrlBuilder from "@sanity/image-url";
import myConfiguredSanityClient from "../client";
import React, { useEffect } from 'react'
import { getCookie, setCookie } from '../utils/cookies'

//components
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SocialHandles from "../components/SocialHandles";
import Counter from "../components/Counter";
import Feedback from "../components/Feedback";
import Pricing from "../components/Pricing";

// sanity image builder
// const builder = imageUrlBuilder(myConfiguredSanityClient);
// function urlFor(source) {
//   const url =
//     source == undefined
//       ? (source = "/imgs/blog1.jpg")
//       : (source = builder.image(source).width(650).url());
//   return url;
// }

const Home = ({ posts }) => {
  let newUser = false;

  useEffect(() => {
    if (!getCookie('isVisited')) {
      newUser = true;
      setCookie('isVisited', true, 7);
      alert('What\'s New?\n1. Our NextPortfolio upgraded to v2.2 i.e. Next v15 and React v18 and Bootstrap v5. \n\n Welcome <_> (click ok)')
    }
    else {
      console.log(document.cookie)
    }
  }, [])


  return <>

    <Header />

    <Navbar showProfile={true} />

    <div className="container-fluid">
      <div id="about" className="row about-section">
        <div className="col-lg-4 about-card">
          <h3 className="font-weight-light header-title">Who am I ?</h3>
          <span className="line mb-5"></span>
          <h5 className="mb-3">
            A Web Developer & Chemistry Student Located In Our Lovely Earth
          </h5>
          <p className="mt-10">
            I work for the world to make it better, and in between I am
            getting better. Download my Resume to know my current version...
          </p>
          <br />
          <button className="btn btn-outline-danger">
            <Link href="/my-resume.pdf" scroll={false}>
              <i className="icon-down-circled2"></i>Download My Resume
            </Link>
          </button>
          {/* <h4>[Adding soon...]</h4> */}
        </div>
        <div className="col-lg-4 about-card">
          <h3 className="font-weight-light header-title">Personal Info</h3>
          <span className="line mb-5"></span>
          <ul className="mt40 info list-unstyled">
            <li>
              <span>Real Name</span> : Ravi Mishra{" "}
            </li>
            <li>
              <span>Email</span> : Ravim70655@gmail.com
            </li>
            <li>
              <span>Birthdate</span> : __/__/2003
            </li>
            <li>
              <span>Address</span> : India
            </li>
          </ul>

          {/* <SocialHandles /> */}
        </div>
        <div className="col-lg-4 about-card">
          <h3 className="font-weight-light header-title">My Expertise</h3>
          <span className="line mb-5"></span>
          <div className="row">
            <div className="col-1 text-danger pt-1">
              <i className="ti-widget icon-lg"></i>
            </div>
            <div className="col-10 ml-auto mr-3">
              <h6>UX Design</h6>
              <p className="subtitle">
                {" "}
                I design frontend for web, apps and softwares
              </p>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-1 text-danger pt-1">
              <i className="ti-paint-bucket icon-lg"></i>
            </div>
            <div className="col-10 ml-auto mr-3">
              <h6>Web Development</h6>
              <p className="subtitle">
                I work most as front end but can work as fullstack developer
              </p>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-1 text-danger pt-1">
              <i className="ti-stats-up icon-lg"></i>
            </div>
            <div className="col-10 ml-auto mr-3">
              <h6>Digital Marketing</h6>
              <p className="subtitle">
                SEO, google console, keywords, listing, and all...
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!--Resume Section--> */}
    <section className="section" id="resume">
      <div className="container">
        <h2 className="mb-5 header-title">
          <span className="text-danger">More</span> About Me
        </h2>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <div className="mt-2 font-weight-bold">
                  <h4>My Timeline</h4>
                  <span className="line"></span>
                </div>
              </div>
              <div className="card-body">
                <h6 className="title text-danger">2021 - Present</h6>
                <p>Full Stack Developer</p>
                <p className="subtitle">
                  I work using MERN, MEAN, FARM, etc. stacks to develop blog, ecommerce, ed-tech and other full stack projects.
                </p>
                <hr />
                <br />
                <h6 className="title text-danger">2020 - 2021</h6>
                <p>Front-End Developer</p>
                <p className="subtitle">
                  Learned some HTML, CSS and JS to create some basic login
                  forms, landing pages, etc.
                </p>
                <hr />
                <br />
                <h6 className="title text-danger">Past - 2020</h6>
                <p>Student</p>
                <p className="subtitle">
                  A science student, interested in, Does it work? if it works
                  how it works? Still Learning chemistry as to persue my
                  research carrier in science.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <div className="mt-2 font-weight-bold">
                  <h4>Education</h4>
                  <span className="line"></span>
                </div>
              </div>
              <div className="card-body">
                <h6 className="title text-danger">2023 - Present</h6>
                <p>MCA (Master of Computer Applications)</p>
                <p className="subtitle">
                  Just persuing this to enhance my tech. skills. Just started...
                </p>
                <hr />
                <br />
                <h6 className="title text-danger">2020 - 2023</h6>
                <p>B.Sc. (H) Chemisty</p>
                <p className="subtitle">
                  I love chemisty! Although there are a lot of exceptions but
                  there is a reason behind every exception. In my words -
                  &quot;Chemisty is the mystery of electrons.&quot;
                </p>
                <hr />
                <br />
                <h6 className="title text-danger">2018 - 2020</h6>
                <p>Science Student</p>
                <p className="subtitle">
                  I learnt science i.e. chemistry, physics and mathmatics. I
                  performed experiments, derived equations and still applying
                  the theories and logic in real life.
                </p>
                <hr />
                <br />
                <h6 className="title text-danger">Past - 2018</h6>
                <p>Senior Secondry School</p>
                <p className="subtitle">
                  Learnt general subjects like general science, social
                  science, etc. and participated in many competitions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header">
                <div className="pull-left">
                  <h4 className="mt-2">Skills</h4>
                  <span className="line"></span>
                </div>
              </div>
              <div className="card-body pb-2">
                <h6>HTML5 &amp; CSS3 &amp; JS</h6>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-danger w1"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>

                <h6>React with Next.js</h6>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-danger w3"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h6>Vue.js with Nuxt.js</h6>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-danger w3"
                    role="progressbar"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="50"
                  ></div>
                </div>
                <h6>Python with Django</h6>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-danger w4"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h6>Node with Nest.js</h6>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-danger w4"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="pull-left">
                  <h4 className="mt-2">Languages</h4>
                  <span className="line"></span>
                </div>
              </div>
              <div className="card-body pb-2">
                <h6>English</h6>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-danger w2"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h6>Hindi</h6>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-danger w6"
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h6>Urdu</h6>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-danger w6"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h6>French</h6>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-danger w5"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <Counter/> */}

    <section className="section" id="service">
      <div className="container">
        <h2 className="mb-5 pb-4 header-title">
          <span className="text-danger">My</span> Services
        </h2>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="card mb-5">
              <div className="card-header has-icon">
                <i className="ti-vector text-danger" aria-hidden="true"></i>
              </div>
              <div className="card-body px-4 py-3">
                <h5 className="mb-3 card-title text-dark">Developer</h5>
                <p className="subtitle">
                  I am always available to work in a team or handle the
                  project alone irrespective of technology used. Due to my
                  fast and ever-learning attitude, I never face problems . Can
                  work as developer/manager.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card mb-5">
              <div className="card-header has-icon">
                <i className="ti-write text-danger" aria-hidden="true"></i>
              </div>
              <div className="card-body px-4 py-3">
                <h5 className="mb-3 card-title text-dark">Content Writing</h5>
                <p className="subtitle">
                  With vast knowledge in Technology and Chemisty, it is my
                  habbit to research and write my perspective or stories that
                  are fun to read. You can explore my blogs in the blogs
                  section.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card mb-5">
              <div className="card-header has-icon">
                <i
                  className="ti-bar-chart text-danger"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="card-body px-4 py-3">
                <h5 className="mb-3 card-title text-dark">
                  Digital Marketing
                </h5>
                <p className="subtitle">
                  I learnt digital marketing through my internship
                  @MR-marketer and also applied/applying SEO and listing
                  techniques on every project onwards...
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card mb-5">
              <div className="card-header has-icon">
                <i
                  className="ti-bar-chart text-danger"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="card-body px-4 py-3">
                <h5 className="mb-3 card-title text-dark">
                  Tuition Teacher
                </h5>
                <p className="subtitle">
                  I teach Maths, Chemistry, Physics and computer related subjects, clearing all concepts with best examples and real world problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* project section  */}
    <section className="text-gray-600 body-font" id="projects" style={{ background: "#f8f9fa", padding: "40px 0" }}>
      <div className="container px-3 mx-auto">
        <div className="flex flex-wrap w-full mb-10">
          <div className="lg:w-1/4 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Projects</h1>
            <div className="h-1 w-20 bg-red-400 rounded"></div>
          </div>
          <p className="lg:w-3/4 w-full leading-relaxed text-black-500 blockquote">
            Modern projects of Web, Mobile App and Desktop Development. I deliver secure, innovative, and user-friendly solutions. Contact me for results.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-6 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-sm project-card h-100">
              <Link href={"https://www.ekonopro.com/"} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid rounded w-100 mb-4" style={{ maxHeight: "320px", objectFit: "cover" }} src="/imgs/ekonopro.png" alt="Ekonopro" />
                </a>
              </Link>
              <div className="d-flex align-items-center mb-2">
                <span className="badge bg-primary me-2">Client</span>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mb-0">NEXT+Sanity</h3>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Ekonopro.com</h2>
              <p className="leading-relaxed text-base">Discover economics effortlessly with our Next.js and Sanity.io-powered learning site.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-sm project-card h-100">
              <Link href={"https://aksar.org.in/"} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid rounded w-100 mb-4" style={{ maxHeight: "320px", objectFit: "cover" }} src="/imgs/Aksar.png" alt="Aksar" />
                </a>
              </Link>
              <div className="d-flex align-items-center mb-2">
                <span className="badge bg-primary me-2">Client</span>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mb-0">Django Project</h3>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Aksar.org.in</h2>
              <p className="leading-relaxed text-base">Aksar is counselling plateform to provide you aid from minute issues to serious health problems.</p>
            </div>
          </div>

          <div className="col-12 col-md-6 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-sm project-card h-100">
              <Link href={"https://rk-virus.github.io/Weather-App/"} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid rounded w-100 mb-4" style={{ maxHeight: "320px", objectFit: "cover" }} src="/imgs/WeatherApp.png" alt="Weather App" />
                </a>
              </Link>
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">HTML, CSS, JS & Rest API</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Weather App</h2>
              <p className="leading-relaxed text-base">A simple weather forecast application that fetches current weather data.</p>
            </div>
          </div>

          <div className="col-12 col-md-6 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-sm project-card h-100">
              <Link href={"https://github.com/Rk-Virus/Save-the-dragonfly"} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid rounded w-100 mb-4" style={{ maxHeight: "320px", objectFit: "cover" }} src="/imgs/dragonflygame.png" alt="Aksar" />
                </a>
              </Link>
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Pygame Project</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Game: Save the dragonfly</h2>
              <p className="leading-relaxed text-base">A simple and fun Pygame project where you help a dragonfly escape dangers and stay alive!</p>
            </div>
          </div>

          <div className="col-12 col-md-6 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-sm project-card h-100">
              <Link href={"https://rk-virus.github.io/JS-Notes-App/"} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid rounded w-100 mb-4" style={{ maxHeight: "320px", objectFit: "cover" }} src="/imgs/JS Notes App.png" alt="Aksar" />
                </a>
              </Link>
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">HTML, CSS and JavaScript</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">JS Notes Taking App</h2>
              <p className="leading-relaxed text-base">A lightweight and intuitive note-taking application built with JavaScript.
                Create, update, search, and delete your notes effortlessly.

              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-sm project-card h-100">
              <Link href={"https://ai-blog-generator-7h2r.onrender.com/"} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid rounded w-100 mb-4" style={{ maxHeight: "320px", objectFit: "cover" }} src="/imgs/aigenerator.png" alt="Aksar" />
                </a>
              </Link>
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Flask, Tailwind and Langchain</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">AI Blog Generator</h2>
              <p className="leading-relaxed text-base">A simple AI-powered blog generator.</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .project-card {
          transition: box-shadow 0.2s;
        }
        .project-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          transform: translateY(-2px) scale(1.01);
        }
        @media (max-width: 767px) {
          #projects .container {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          .project-card img {
            max-height: 200px !important;
          }
        }
        .btn, button.btn {
          border-radius: 30px;
          font-weight: 500;
        }
      `}</style>
    </section>

    <section className="section bg-dark py-5">
      <div className="container text-center">
        <h2 className="text-light mb-5 font-weight-normal">
          I am Available for Freelance
        </h2>
        <button className="btn btn-primary w-lg"><a href="https://forms.gle/gFHydLJcn6zgxhWs5"> Hire me</a></button>
      </div>
    </section>

    <Pricing />

    <Feedback />

    {/* <!-- Google tag (gtag.js) --> */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11103724885"></script>


    {/* <!-- Event snippet for Outbound click conversion page --> */}
    <script src="https://cdn.botpress.cloud/webchat/v3.3/inject.js" defer></script>
    <script src="https://files.bpcontent.cloud/2025/10/16/10/20251016100456-WIGKZENN.js" defer></script>

  </>;
};
export default Home;

// export async function getServerSideProps() {
//   const client = myConfiguredSanityClient;

//   const query = `*[_type == "post"][0..3] | order(publishedAt desc)`;
//   const posts = await client.fetch(query);

//   return {
//     props: { posts },
//   };
// }
