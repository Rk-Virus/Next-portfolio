import Link from "next/link";
import Script from "next/script";
import PortableText from "react-portable-text";
import imageUrlBuilder from "@sanity/image-url";
import myConfiguredSanityClient from "../client";

//components
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import SocialHandles from "../components/SocialHandles";
import Portfolio from "../components/Portfolio";
import Counter from "../components/Counter";


// sanity image builder
const builder = imageUrlBuilder(myConfiguredSanityClient);
function urlFor(source) {
  const url =
    source == undefined
      ? (source = "/imgs/blog1.jpg")
      : (source = builder.image(source).width(650).url());
  return url;
}
const Home = ({ posts }) => {
  // console.log(posts);
  return (
    <>
      <style jsx>{`
        .w1 {
          width: 97%;
        }
        .w2 {
          width: 85%;
        }
        .w3 {
          width: 80%;
        }
        .w4 {
          width: 90%;
        }
        .w5 {
          width: 45%;
        }
        .w6 {
          width: 67%;
        }
      `}</style>

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
            <button className="btn btn-outline-danger">
              <a target="_blank" href="/my-resume.pdf" rel="noopener noreferrer" style={{ color: "black" }} >
                Download My Resume
              </a>
            </button>
          </div>
          <div className="col-lg-4 about-card">
            <h3 className="font-weight-light header-title">Personal Info</h3>
            <span className="line mb-5"></span>
            <ul className="mt40 info list-unstyled">
              <li>
                <span>Birthdate</span> : 10/03/2003
              </li>
              <li>
                <span>Email</span> : Ravim70655@gmail.com
              </li>
              <li>
                <span>Phone</span> : +91 9625686379
              </li>
              <li>
                <span>Real Name</span> : Ravi Mishra{" "}
              </li>
              <li>
                <span>Address</span> : Uttam Nagar, New Delhi, India
              </li>
            </ul>

            <SocialHandles />
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
                  <h6 className="title text-danger">Past - 2020</h6>
                  <p>Science Student</p>
                  <p className="subtitle">
                    I learnt science i.e. chemistry, physics and mathmatics. I
                    performed experiments, derived equations and still applying
                    the theories and logic in real life.
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
                  <h6>C/C++ and Others</h6>
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

            {/* <div className="col-md-3 col-sm-6">
              <div className="card mb-5">
                <div className="card-header has-icon">
                  <i className="ti-map-alt text-danger" aria-hidden="true"></i>
                </div>
                <div className="card-body px-4 py-3">
                  <h5 className="mb-3 card-title text-dark">Mentor</h5>
                  <p className="subtitle">
                    I can guide you if are lost in life, if you think me as a good example. From studies to having fun in life. It's my free time while telling people - why am I persuing Chemisty Hons degree?
                  </p>
                </div>
              </div>
            </div> */}
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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/4 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Projects</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-3/4 w-full leading-relaxed text-gray-500">Embark on a global digital journey with our streamlined projects, blending React.js, Next.js, Django, React Native, and Sanity. From redefining user experiences to optimizing content management, we prioritize innovation, security, and global collaboration for an elevated digital presence. Contact us for efficient and impactful solutions.</p>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className="xl:w-full md:w-1/2">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Link href={"https://www.ekonopro.com/"}>
                <img className="h-80 rounded w-full object-cover object-center mb-6" src="/imgs/ekonopro.png" alt="content" /></Link>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">NEXT+Sanity</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Ekonopro.com</h2>
                <p className="leading-relaxed text-base">Discover economics effortlessly with our Next.js and Sanity.io-powered learning site. Engage in interactive lessons, real-world case studies, and seamless navigation for a dynamic educational experience. Elevate your understanding of economic principles with us!</p>
                <h6> <Link href={"https://github.com/trg-projects/Economics-Site"}> Checkout GitHub Repo </Link> </h6>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* pricing section  */}
      <section className="section bg-custom-gray" id="price">
        <div className="container">
          <h1 className="mb-2 header-title">
            <span className="text-danger">Average</span> Pricing
          </h1>
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-4">
              <div className="price-card text-left mb-4">
                <h3 className="price-card-title">Basic Project</h3>
                <div className="price-card-cost">
                  <sup className="ti-money"></sup>
                  <span className="num">150-200</span>
                  <span className="date">1 MO</span>
                </div>
                <ul className="list">
                  <li className="list-item">
                    Example: <span className="text-muted">Portfolio or Blog</span>
                  </li>
                  <li className="list-item">
                    Includes: <span className="text-muted">Frontend, Admin Page</span>
                  </li>
                  <li className="list-item">
                    Tech-Stack: <span className="text-muted">Next.js, any CMS (Strapi or Sanity.io)</span>
                  </li>
                </ul>
                <a href="#contact">
                  <button className="btn btn-primary btn-rounded w-lg">
                    Contact Now
                  </button>
                </a>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="price-card text-left mb-4">
                <h3 className="price-card-title">Dynamic Project</h3>
                <div className="price-card-cost">
                  <sup className="ti-money"></sup>
                  <span className="num">250-300</span>
                  <span className="date">2 MO</span>
                </div>
                <ul className="list">
                  <li className="list-item">
                    Example: <span className="text-muted">E-Commerce or Ed-Tech</span>
                  </li>
                  <li className="list-item">
                    Includes: <span className="text-muted">Basic + Authentication and Database</span>
                  </li>
                  <li className="list-item">
                    Tech-Stack: <span className="text-muted">MERN or FARM</span>
                  </li>
                </ul>
                <a href="#contact">
                  <button className="btn btn-primary btn-rounded w-lg">
                    Contact Now
                  </button>
                </a>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="price-card text-center price-card-requried mb-4">
                <h3 className="price-card-title">Exclusive</h3>
                <div className="price-card-cost">
                  <sup className="ti-money"></sup>
                  <span className="num">400</span>
                  <span className="date">2 MO</span>
                </div>
                <ul className="list">
                  <li className="list-item">
                    Any <span className="text-muted">Full Stack Project</span>
                  </li>
                  <li className="list-item">
                  </li>
                  <li className="list-item">
                    Includes: <span className="text-muted"> All above + Deployement</span>
                  </li>
                  <li className="list-item">
                    Any Stack:<span className="text-muted">MERN, MEAN or FARM + Paid Hoisting and Domain</span>
                  </li>
                </ul>
                <a href="#contact">
                  <button className="btn btn-primary btn-rounded w-lg">
                    Contact
                  </button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section bg-dark py-5">
        <div className="container text-center">
          <h2 className="text-light mb-5 font-weight-normal">
            I am Available for Freelance
          </h2>
          <button className="btn btn-primary w-lg "><a href="https://forms.gle/gFHydLJcn6zgxhWs5" className="text-white"> Hire me</a></button>
        </div>
      </section>

      {/* <!-- Portfolio Section --> */}
      {/* <Portfolio /> */}

      <section className="section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-form-card">
                <h4 className="contact-title">Send a message</h4>

                <form action="https://formspree.io/f/xayzeprr" method="post">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Name *"
                      name="name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email *"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Message "
                      rows="7"
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <div className="form-group ">
                    <button
                      type="submit"
                      className="form-control btn btn-outline-primary"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-card">
                <h4 className="contact-title">Get in touch</h4>
                <div className="row mb-2">
                  <div className="col-1 pt-1 mr-1">
                    <i className="ti-mobile icon-md"></i>
                  </div>
                  <div className="col-10 ">
                    <h6 className="d-inline">
                      Phone : <br />
                      <span className="text-muted">+91 9625686379</span>
                    </h6>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-1 pt-1 mr-1">
                    <i className="ti-map-alt icon-md"></i>
                  </div>
                  <div className="col-10">
                    <h6 className="d-inline">
                      Address :<br />{" "}
                      <span className="text-muted">Uttam Nagar, New Delhi</span>
                    </h6>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-1 pt-1 mr-1">
                    <i className="ti-envelope icon-md"></i>
                  </div>
                  <div className="col-10">
                    <h6 className="d-inline">
                      Email :<br />{" "}
                      <span className="text-muted">ravim70655@gmail.com</span>
                    </h6>
                  </div>
                </div>

                <SocialHandles />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* scripts...  */}
      <Script
        src="https://code.jquery.com/jquery-3.6.1.min.js"
        integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
        crossOrigin="anonymous"
      ></Script>
      {/* <!-- core  --> */}
      <Script src="/assets/vendors/jquery/jquery-3.4.1.js"></Script>

      <Script src="/assets/vendors/bootstrap/bootstrap.bundle.js"></Script>

      {/* <!-- bootstrap 3 affix --> */}
      <Script src="/assets/vendors/bootstrap/bootstrap.affix.js"></Script>

      {/* <!-- Google tag (gtag.js) --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11103724885"></script>


      {/* <!-- Event snippet for Outbound click conversion page --> */}

    </>
  );
};
export default Home;

export async function getServerSideProps() {
  const client = myConfiguredSanityClient;

  const query = `*[_type == "post"][0..3] | order(publishedAt desc)`;
  const posts = await client.fetch(query);

  return {
    props: { posts },
  };
}
