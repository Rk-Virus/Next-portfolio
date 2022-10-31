import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import PortableText from "react-portable-text";
import imageUrlBuilder from "@sanity/image-url";
import myConfiguredSanityClient from "../client";

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
      <header className="header">
        <div className="container">
          <ul className="social-icons pt-3">
            <li className="social-item">
              <a
                className="social-link text-light"
                href="https://www.facebook.com/profile.php?id=100013192479846"
              >
                <i className="ti-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-item">
              <a
                className="social-link text-light"
                href="https://twitter.com/rkmishra2003"
              >
                <i className="ti-twitter" aria-hidden="true"></i>
              </a>
            </li>

            <li className="social-item">
              <a
                className="social-link text-light"
                href="https://instagram.com/ravi.m2003"
              >
                <i className="ti-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-item">
              <a
                className="social-link text-light"
                href="https://linkedin.com/in/ravi-mishra-135b681a5/"
              >
                <i className="ti-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <div className="header-content mx-5">
            <h4 className="header-subtitle pb-1 pl-1">Hello, I am</h4>
            <h1 className="header-title">Rk Virus</h1>
            <h6 className="header-mono">An Unofficial Developer</h6>
            <button className="btn btn-primary btn-rounded">
              <Link href="https://github.com/Rk-Virus">
                <div>
                  <i className="ti-new-window pr-2"></i>Visit my GitHub Profile
                </div>
              </Link>
            </button>
          </div>
        </div>
      </header>

      <nav
        className="navbar sticky-top navbar-expand-lg navbar-light bg-white"
        data-spy="affix"
        data-offset-top="510"
      >
        <div className="container">
          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse mt-sm-20 navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#resume" className="nav-link">
                  Resume
                </a>
              </li>
            </ul>
            <ul className="navbar-nav brand">
              <img src="/imgs/avatar.jpg" className="brand-img" alt="" />
              <li className="brand-txt">
                <h5 className="brand-title">Rk Virus</h5>
                <div className="brand-subtitle">Developer</div>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#portfolio" className="nav-link">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="#blog" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item last-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div id="about" className="row about-section">
          <div className="col-lg-4 about-card">
            <h3 className="font-weight-light header-title">Who am I ?</h3>
            <span className="line mb-5"></span>
            <h5 className="mb-3">
              A Web Designer / Developer Located In Our Lovely Earth
            </h5>
            <p className="mt-10">
              I work for the world to make it better, and in between I am
              getting better. Download my Resume to know my current version...
            </p>
            <button className="btn btn-outline-danger">
              <Link href="/my-resume.pdf" scroll={false}>
                <a target="_blank">
                  <i className="icon-down-circled2"></i>Download My Resume
                </a>
              </Link>
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

            <ul className="social-icons pt-3">
              <li className="social-item">
                <a
                  className="social-link"
                  href="https://www.facebook.com/profile.php?id=100013192479846"
                >
                  <i className="ti-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social-item">
                <a
                  className="social-link"
                  href="https://twitter.com/rkmishra2003"
                >
                  <i className="ti-twitter" aria-hidden="true"></i>
                </a>
              </li>

              <li className="social-item">
                <a
                  className="social-link"
                  href="https://instagram.com/ravi.m2003"
                >
                  <i className="ti-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social-item">
                <a
                  className="social-link"
                  href="https://linkedin.com/in/ravi-mishra-135b681a5/"
                >
                  <i className="ti-linkedin" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
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
                  SEO, google console, keywords, listing, and all are point of
                  concert for my projects
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
            <span className="text-danger">My</span> Resume
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
                  <p>UX Developer</p>
                  <p className="subtitle">
                    I work as a UX, enhancing interactivity with buttons,
                    animations, and more fun with JavaScript on the web and
                    apps.
                  </p>
                  <hr />
                  <br />
                  <h6 className="title text-danger">2020 - 2021</h6>
                  <p>Front-end Developer</p>
                  <p className="subtitle">
                    Learned some HTML, CSS and JS to create some basic login
                    forms, landing pages, etc.
                  </p>
                  <hr />
                  <br />
                  <h6 className="title text-danger">past - 2020</h6>
                  <p>Student</p>
                  <p className="subtitle">
                    A science student, interested in Does it work? if it works
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
                  <h6 className="title text-danger">2020 - Present</h6>
                  <p>B.Sc. (H) Chemisty</p>
                  <p className="subtitle">
                    I love chemisty! Although there are a lot of exceptions but
                    there a reason behind every exception. In my words -
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
                  <h6 className="title text-danger">past - 2018</h6>
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
                  <h6>HTML5 &amp; CSS3</h6>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-danger w1"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6>JavaScript</h6>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-danger w2"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6>React</h6>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-danger w3"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6>Python</h6>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-danger w4"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6>C/C++</h6>
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
                  <h6>Hindi</h6>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-danger w2"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6>English</h6>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-danger w6"
                      role="progressbar"
                      aria-valuenow="50"
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

      <section className="section bg-dark text-center">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6 col-lg-3">
              <div className="row ">
                <div className="col-5 text-right text-light border-right py-3">
                  <div className="m-auto">
                    <i className="ti-alarm-clock icon-xl"></i>
                  </div>
                </div>
                <div className="col-7 text-left py-3">
                  <h1 className="text-danger font-weight-bold font40">500+</h1>
                  <p className="text-light mb-1">Hours Worked</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="row">
                <div className="col-5 text-right text-light border-right py-3">
                  <div className="m-auto">
                    <i className="ti-layers-alt icon-xl"></i>
                  </div>
                </div>
                <div className="col-7 text-left py-3">
                  <h1 className="text-danger font-weight-bold font40">50+</h1>
                  <p className="text-light mb-1">Project Finished</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="row">
                <div className="col-5 text-right text-light border-right py-3">
                  <div className="m-auto">
                    <i className="ti-face-smile icon-xl"></i>
                  </div>
                </div>
                <div className="col-7 text-left py-3">
                  <h1 className="text-danger font-weight-bold font40">2+</h1>
                  <p className="text-light mb-1">Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="row">
                <div className="col-5 text-right text-light border-right py-3">
                  <div className="m-auto">
                    <i className="ti-heart-broken icon-xl"></i>
                  </div>
                </div>
                <div className="col-7 text-left py-3">
                  <h1 className="text-danger font-weight-bold font40">0</h1>
                  <p className="text-light mb-1">Coffee Drinked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="service">
        <div className="container">
          <h2 className="mb-5 pb-4 header-title">
            <span className="text-danger">My</span> Services
          </h2>
          <div className="row">
            <div className="col-md-4 col-sm-6">
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
            <div className="col-md-4 col-sm-6">
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

            {/* <div className="col-md-4 col-sm-6">
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
            <div className="col-md-4 col-sm-6">
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
          </div>
        </div>
      </section>
      {/* 
      <section className="section bg-custom-gray" id="price">
        <div className="container">
          <h1 className="mb-5 header-title">
            <span className="text-danger">Average</span> Pricing
          </h1>
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-3">
              <div className="price-card text-center mb-4">
                <h3 className="price-card-title">Advice</h3>
                <div className="price-card-cost">
                  <sup className="ti-money"></sup>
                  <span className="num">0</span>
                  <span className="date">MO</span>
                </div>
                <ul className="list">
                  <li className="list-item">
                    Any <span className="text-muted">Project</span>
                  </li>
                  <li className="list-item">
                    Any <span className="text-muted">Question</span>
                  </li>
                  <li className="list-item">
                    Any <span className="text-muted">User</span>
                  </li>
                </ul>
                <a href="#contact">
                  <button className="btn btn-primary btn-rounded w-lg">
                    Ask Now
                  </button>
                </a>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="price-card text-center price-card-requried mb-4">
                <h3 className="price-card-title">Exclusive</h3>
                <div className="price-card-cost">
                  <sup className="ti-money"></sup>
                  <span className="num">25</span>
                  <span className="date">MO</span>
                </div>
                <ul className="list">
                  <li className="list-item">
                    150 <span className="text-muted">Project</span>
                  </li>
                  <li className="list-item">
                  </li>
                  <li className="list-item">
                    5<span className="text-muted"> Domain</span>
                  </li>
                  <li className="list-item">
                    15<span className="text-muted">User</span>
                  </li>
                </ul>
                <button className="btn btn-primary btn-rounded w-lg">
                  Subscribe
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </section> */}

      <section className="section bg-dark py-5">
        <div className="container text-center">
          <h2 className="text-light mb-5 font-weight-normal">
            I am Available aor Freelance
          </h2>
          <button className="btn btn-primary w-lg">Hire me</button>
        </div>
      </section>

      {/* <!-- Portfolio Section --> */}
      <section className="section bg-custom-gray" id="portfolio">
        <div className="container header-title">
          <h1 className="mb-5">
            <span className="text-danger">My</span> Portfolio
          </h1>

          <div className="portfolio">
            <div className="filters">
              <a href="#" className="active">
                New
              </a>
              <a href="#">Apps</a>
              <a href="#">Web</a>
            </div>
            <div className="portfolio-container">
              <div className="row">
                <div className="col-md-6 col-lg-4 web new">
                  <div className="portfolio-item">
                    <img
                      src="/imgs/web-2.jpg"
                      className="img-fluid"
                      alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                    />
                    <div className="content-holder">
                      <a className="img-popup" href="/imgs/web-2.jpg"></a>
                      <div className="text-holder">
                        <h6 className="title">WEB</h6>
                        <p className="subtitle">
                          Expedita corporis doloremque velit in totam!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 web new">
                  <div className="portfolio-item">
                    <img
                      src="/imgs/web-3.jpg"
                      className="img-fluid"
                      alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                    />
                    <div className="content-holder">
                      <a className="img-popup" href="/imgs/web-3.jpg"></a>
                      <div className="text-holder">
                        <h6 className="title">WEB</h6>
                        <p className="subtitle">
                          Expedita corporis doloremque velit in totam!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 web new">
                  <div className="portfolio-item">
                    <img
                      src="/imgs/web-3.jpg"
                      className="img-fluid"
                      alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                    />
                    <div className="content-holder">
                      <a className="img-popup" href="/imgs/web-3.jpg"></a>
                      <div className="text-holder">
                        <h6 className="title">WEB</h6>
                        <p className="subtitle">
                          Expedita corporis doloremque velit in totam!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of portfolio section --> */}

      <section className="section" id="blog">
        <div className="container">
          <h2 className="mb-5 title header-title">
            Latest <span className="text-danger">Blogs</span>
          </h2>

          <div className="row">
            {posts.map((post) => {
              return (
                <div className="blog-card" key={post.slug.current}>
                  <div className="img-holder">
                    <img
                      // src="/imgs/blog1.jpg"
                      src={urlFor(post.mainImage)}
                      alt="content writing blog image"
                    />
                  </div>
                  <div className="content-holder">
                    <h6 className="title">{post.title}</h6>

                    <p className="post-details">
                      <a href="#">by me</a>
                      <a href="#">
                        <i className="ti-heart text-danger"></i> 2
                      </a>
                      <a href="#">
                        <i className="ti-comment"></i> 1
                      </a>
                    </p>

                    {/* <p>
                  {post.body[0].children[0].text}
                </p> */}
                    {/* alternative  */}
                    <PortableText
                      // Pass in block content straight from Sanity.io
                      content={post.body}
                      // Optionally override marks, decorators, blocks, etc. in a flat
                      // structure without doing any gymnastics
                      serializers={{
                        h1: (props) => (
                          <h1 style={{ color: "red" }} {...props} />
                        ),
                        li: ({ children }) => (
                          <li className="special-list-item">{children}</li>
                        ),
                      }}
                    />

                    <a href="#" className="read-more">
                      Read more <i className="ti-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <hr />

      <section className="section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-form-card">
                <h4 className="contact-title">Send a message</h4>
                <form action="">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Name *"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email *"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Message "
                      rows="7"
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

                <ul className="social-icons pt-4">
                  <li className="social-item">
                    <a
                      className="social-link text-dark"
                      href="https://www.facebook.com/profile.php?id=100013192479846"
                    >
                      <i className="ti-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="social-item">
                    <a
                      className="social-link text-dark"
                      href="https://twitter.com/rkmishra2003"
                    >
                      <i className="ti-twitter" aria-hidden="true"></i>
                    </a>
                  </li>

                  <li className="social-item">
                    <a
                      className="social-link text-dark"
                      href="https://instagram.com/ravi.m2003"
                    >
                      <i className="ti-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="social-item">
                    <a
                      className="social-link text-dark"
                      href="https://linkedin.com/in/ravi-mishra-135b681a5/"
                    >
                      <i className="ti-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer py-3">
        <div className="container">
          <p className="small mb-0 text-light">
            &copy; 2022 Created With <i className="ti-heart text-danger"></i>
            &nbsp; By{" "}
            <a href="#" target="_blank">
              <span
                className="text-danger"
                title="Bootstrap 4 Themes and Dashboards"
              >
                RkVirus
              </span>
            </a>
          </p>
        </div>
      </footer>

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
    </>
  );
};
export default Home;

export async function getServerSideProps() {
  const client = myConfiguredSanityClient;

  const query = `*[_type == "post"] | order(publishedAt desc)`;
  const posts = await client.fetch(query);

  return {
    props: { posts },
  };
}
