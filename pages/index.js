import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import { createClient } from "next-sanity";

export default function Home() {
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
              <a className="social-link text-light" href="#">
                <i className="ti-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-item">
              <a className="social-link text-light" href="#">
                <i className="ti-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-item">
              <a className="social-link text-light" href="#">
                <i className="ti-google" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-item">
              <a className="social-link text-light" href="#">
                <i className="ti-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-item">
              <a className="social-link text-light" href="#">
                <i className="ti-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <div className="header-content">
            <h4 className="header-subtitle">Hello, I am</h4>
            <h1 className="header-title">Rk Virus</h1>
            <h6 className="header-mono">An Unofficial Developer</h6>
            <button className="btn btn-primary btn-rounded">
              <i className="ti-printer pr-2"></i>Download Resume
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
                <a href="#home" className="nav-link">
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
              <img src="/imgs/avatar.jpg" className="brand-img" />
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
            <h3 className="font-weight-light">Who am I ?</h3>
            <span className="line mb-5"></span>
            <h5 className="mb-3">
              A Web Designer / Developer Located In Our Lovely Earth
            </h5>
            <p className="mt-20">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.sit amet,
              Qui deserunt consequatur fugit repellendusillo voluptas?
            </p>
            <button className="btn btn-outline-danger">
              <i className="icon-down-circled2 "></i>Download My CV
            </button>
          </div>
          <div className="col-lg-4 about-card">
            <h3 className="font-weight-light">Personal Info</h3>
            <span className="line mb-5"></span>
            <ul className="mt40 info list-unstyled">
              <li>
                <span>Birthdate</span> : 09/13/1996
              </li>
              <li>
                <span>Email</span> : info@website.com
              </li>
              <li>
                <span>Phone</span> : + (123) 456-7890
              </li>
              <li>
                <span>Skype</span> : John_Doe{" "}
              </li>
              <li>
                <span>Address</span> : 12345 Fake ST NoWhere AB Country.
              </li>
            </ul>
            <ul className="social-icons pt-3">
              <li className="social-item">
                <a className="social-link" href="#">
                  <i className="ti-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social-item">
                <a className="social-link" href="#">
                  <i className="ti-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social-item">
                <a className="social-link" href="#">
                  <i className="ti-google" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social-item">
                <a className="social-link" href="#">
                  <i className="ti-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social-item">
                <a className="social-link" href="#">
                  <i className="ti-github" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 about-card">
            <h3 className="font-weight-light">My Expertise</h3>
            <span className="line mb-5"></span>
            <div className="row">
              <div className="col-1 text-danger pt-1">
                <i className="ti-widget icon-lg"></i>
              </div>
              <div className="col-10 ml-auto mr-3">
                <h6>UX Design</h6>
                <p className="subtitle"> exercitat Repellendus, corrupt.</p>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-1 text-danger pt-1">
                <i className="ti-paint-bucket icon-lg"></i>
              </div>
              <div className="col-10 ml-auto mr-3">
                <h6>Web Development</h6>
                <p className="subtitle">Lorem ipsum dolor sit consectetur.</p>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-1 text-danger pt-1">
                <i className="ti-stats-up icon-lg"></i>
              </div>
              <div className="col-10 ml-auto mr-3">
                <h6>Digital Marketing</h6>
                <p className="subtitle">voluptate commodi illo voluptatib.</p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Resume Section--> */}
      <section className="section" id="resume">
        <div className="container">
          <h2 className="mb-5">
            <span className="text-danger">My</span> Resume
          </h2>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-header">
                  <div className="mt-2">
                    <h4>Expertise</h4>
                    <span className="line"></span>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="title text-danger">2017 - Present</h6>
                  <p>UX Developer</p>
                  <p className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum recusandae, cupiditate ullam dolor ratione
                    repellendus.aliquid repudiandae saepe!.
                  </p>
                  <hr />
                  <h6 className="title text-danger">2016 - 2017</h6>
                  <p>Front-end Developer</p>
                  <p className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum recusandae, cupiditate ullam dolor ratione
                    repellendus.aliquid repudiandae saepe!.
                  </p>
                  <hr />
                  <h6 className="title text-danger">2015 - 2016</h6>
                  <p>UX Designer</p>
                  <p className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum recusandae, cupiditate ullam dolor ratione
                    repellendus.aliquid repudiandae saepe!.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-header">
                  <div className="mt-2">
                    <h4>Education</h4>
                    <span className="line"></span>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="title text-danger">2017 - Present</h6>
                  <p>B.E Computer Engineering</p>
                  <p className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error corrupti recusandae obcaecati odit repellat ducimus
                    cum, minus tempora aperiam at.
                  </p>
                  <hr />
                  <h6 className="title text-danger">2016 - 2017</h6>
                  <p>Diploma in Computer Engineering</p>
                  <p className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eos, id officiis quas placeat quia voluptas dolorum rem
                    animi nostrum quae.aliquid repudiandae saepe!.
                  </p>
                  <hr />
                  <h6 className="title text-danger">2015 - 2016</h6>
                  <p>High School Degree</p>
                  <p className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum recusandae, cupiditate ullam dolor ratione
                    repellendus.aliquid repudiandae saepe!.
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
                  <h6>hTL5 &amp; CSS3</h6>
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
                  <h6>PHP</h6>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-danger w3"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6>SQL</h6>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-danger w4"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6>Laborum</h6>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-danger w4"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6>Tempora</h6>
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
                      className="progress-bar bg-danger w3"
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
                  <h6>Spanish</h6>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-danger w6"
                      role="progressbar"
                      aria-valuenow="50"
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
                  <h1 className="text-danger font-weight-bold font40">500</h1>
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
                  <h1 className="text-danger font-weight-bold font40">50K</h1>
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
                  <h1 className="text-danger font-weight-bold font40">200K</h1>
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
                  <h1 className="text-danger font-weight-bold font40">2k</h1>
                  <p className="text-light mb-1">Coffee Drinked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="service">
        <div className="container">
          <h2 className="mb-5 pb-4">
            <span className="text-danger">My</span> Services
          </h2>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="card mb-5">
                <div className="card-header has-icon">
                  <i className="ti-vector text-danger" aria-hidden="true"></i>
                </div>
                <div className="card-body px-4 py-3">
                  <h5 className="mb-3 card-title text-dark">Ullam</h5>
                  <p className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ullam commodi provident, dolores reiciendis enim pariatur
                    error optio, tempora ex, nihil nesciunt! In praesentium sunt
                    commodi, unde ipsam ex veritatis laboriosam dolor asperiores
                    suscipit blanditiis, dignissimos quos nesciunt nulla aperiam
                    officia.
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
                  <h5 className="mb-3 card-title text-dark">Asperiores</h5>
                  <p className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ullam commodi provident, dolores reiciendis enim pariatur
                    error optio, tempora ex, nihil nesciunt! In praesentium sunt
                    commodi, unde ipsam ex veritatis laboriosam dolor asperiores
                    suscipit blanditiis, dignissimos quos nesciunt nulla aperiam
                    officia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card mb-5">
                <div className="card-header has-icon">
                  <i className="ti-package text-danger" aria-hidden="true"></i>
                </div>
                <div className="card-body px-4 py-3">
                  <h5 className="mb-3 card-title text-dark">Tempora</h5>
                  <p className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ullam commodi provident, dolores reiciendis enim pariatur
                    error optio, tempora ex, nihil nesciunt! In praesentium sunt
                    commodi, unde ipsam ex veritatis laboriosam dolor asperiores
                    suscipit blanditiis, dignissimos quos nesciunt nulla aperiam
                    officia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card mb-5">
                <div className="card-header has-icon">
                  <i className="ti-map-alt text-danger" aria-hidden="true"></i>
                </div>
                <div className="card-body px-4 py-3">
                  <h5 className="mb-3 card-title text-dark">Provident</h5>
                  <p className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ullam commodi provident, dolores reiciendis enim pariatur
                    error optio, tempora ex, nihil nesciunt! In praesentium sunt
                    commodi, unde ipsam ex veritatis laboriosam dolor asperiores
                    suscipit blanditiis, dignissimos quos nesciunt nulla aperiam
                    officia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card mb-5">
                <div className="card-header has-icon">
                  <i
                    className="ti-bar-chart text-danger"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="card-body px-4 py-3">
                  <h5 className="mb-3 card-title text-dark">Consectetur</h5>
                  <p className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ullam commodi provident, dolores reiciendis enim pariatur
                    error optio, tempora ex, nihil nesciunt! In praesentium sunt
                    commodi, unde ipsam ex veritatis laboriosam dolor asperiores
                    suscipit blanditiis, dignissimos quos nesciunt nulla aperiam
                    officia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card mb-5">
                <div className="card-header has-icon">
                  <i className="ti-support text-danger" aria-hidden="true"></i>
                </div>
                <div className="card-body px-4 py-3">
                  <h5 className="mb-3 card-title text-dark">Veritatis</h5>
                  <p className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ullam commodi provident, dolores reiciendis enim pariatur
                    error optio, tempora ex, nihil nesciunt! In praesentium sunt
                    commodi, unde ipsam ex veritatis laboriosam dolor asperiores
                    suscipit blanditiis, dignissimos quos nesciunt nulla aperiam
                    officia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-custom-gray" id="price">
        <div className="container">
          <h1 className="mb-5">
            <span className="text-danger">Packs</span> Pricing
          </h1>
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-3">
              <div className="price-card text-center mb-4">
                <h3 className="price-card-title">Free</h3>
                <div className="price-card-cost">
                  <sup className="ti-money"></sup>
                  <span className="num">0</span>
                  <span className="date">MO</span>
                </div>
                <ul className="list">
                  <li className="list-item">
                    5 <span className="text-muted">Project</span>
                  </li>
                  <li className="list-item">
                    1GB <span className="text-muted">Storage</span>
                  </li>
                  <li className="list-item">
                    <span className="text-muted">No Domain</span>
                  </li>
                  <li className="list-item">
                    1 <span className="text-muted">User</span>
                  </li>
                </ul>
                <button className="btn btn-primary btn-rounded w-lg">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="price-card text-center mb-4">
                <h3 className="price-card-title">Basic</h3>
                <div className="price-card-cost">
                  <sup className="ti-money"></sup>
                  <span className="num">10</span>
                  <span className="date">MO</span>
                </div>
                <ul className="list">
                  <li className="list-item">
                    50 <span className="text-muted">Project</span>
                  </li>
                  <li className="list-item">
                    10GB <span className="text-muted">Storage</span>
                  </li>
                  <li className="list-item">
                    1<span className="text-muted">Domain</span>
                  </li>
                  <li className="list-item">
                    5 <span className="text-muted">User</span>
                  </li>
                </ul>
                <button className="btn btn-primary btn-rounded w-lg">
                  Subscribe
                </button>
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
                    15GB <span className="text-muted">Storage</span>
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
            <div className="col-md-6 col-lg-3">
              <div className="price-card text-center mb-4">
                <h3 className="price-card-title">Pro</h3>
                <div className="price-card-cost">
                  <sup className="ti-money"></sup>
                  <span className="num">99</span>
                  <span className="date">MO</span>
                </div>
                <ul className="list">
                  <li className="list-item">
                    500 <span className="text-muted">Project</span>
                  </li>
                  <li className="list-item">
                    1000GB <span className="text-muted">Storage</span>
                  </li>
                  <li className="list-item">
                    10<span className="text-muted"> Domain</span>
                  </li>
                  <li className="list-item">
                    Unlimite<span className="text-muted">User</span>
                  </li>
                </ul>
                <button className="btn btn-primary btn-rounded w-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-dark py-5">
        <div className="container text-center">
          <h2 className="text-light mb-5 font-weight-normal">
            I Am Available For FreeLance
          </h2>
          <button className="btn bg-primary w-lg">Hire me</button>
        </div>
      </section>

      {/* <!-- Portfolio Section --> */}
      <section className="section bg-custom-gray" id="portfolio">
        <div className="container">
          <h1 className="mb-5">
            <span className="text-danger">My</span> Portfolio
          </h1>

          <div className="portfolio">
            <div className="filters">
              <a href="#" className="active">
                New
              </a>
              <a href="#">Advertising</a>
              <a href="#">Branding</a>
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

                <div className="col-md-6 col-lg-4 advertising">
                  <div className="portfolio-item">
                    <img
                      src="/imgs/advertising-1.jpg"
                      className="img-fluid"
                      alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                    />
                    <div className="content-holder">
                      <a
                        className="img-popup"
                        href="/imgs/advertising-1.jpg"
                      ></a>
                      <div className="text-holder">
                        <h6 className="title">ADVERSITING</h6>
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

                <div className="col-md-6 col-lg-4 branding">
                  <div className="portfolio-item">
                    <img
                      src="/imgs/branding-5.jpg"
                      className="img-fluid"
                      alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
                    />
                    <div className="content-holder">
                      <a className="img-popup" href="/imgs/branding-5.jpg"></a>
                      <div className="text-holder">
                        <h6 className="title">BRANDING</h6>
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
          <h2 className="mb-5">
            Latest <span className="text-danger">News</span>
          </h2>
          <div className="row">
            <div className="blog-card">
              <div className="img-holder">
                <img
                  src="/imgs/blog1.jpg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                />
              </div>
              <div className="content-holder">
                <h6 className="title">Consectetur adipisicing elit</h6>

                <p className="post-details">
                  <a href="#">By: Admin</a>
                  <a href="#">
                    <i className="ti-heart text-danger"></i> 234
                  </a>
                  <a href="#">
                    <i className="ti-comment"></i> 123
                  </a>
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  nesciunt qui sit velit delectus voluptates, repellat ipsum
                  culpa id deleniti. Rerum debitis facilis accusantium neque
                  numquam mollitia modi quasi distinctio.
                </p>

                <p>
                  <b>
                    Necessitatibus nihil impedit! Ex nisi eveniet, dolor aliquid
                    consequuntur repudiandae.
                  </b>
                </p>
                <p>
                  Magnam in repellat enim harum omnis aperiam! Explicabo illo,
                  commodi, dolor blanditiis cupiditate harum nisi vero accusamus
                  laudantium voluptatibus dolores quae obcaecati.
                </p>

                <a href="#" className="read-more">
                  Read more <i className="ti-angle-double-right"></i>
                </a>
              </div>
            </div>
            {/* <!-- end of blog wrapper --> */}

            {/* <!-- blog-card --> */}
            <div className="blog-card">
              <div className="img-holder">
                <img
                  src="/imgs/blog2.jpg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                />
              </div>
              <div className="content-holder">
                <h6 className="title">Explicabo illo</h6>

                <p className="post-details">
                  <a href="#">By: Admin</a>
                  <a href="#">
                    <i className="ti-heart text-danger"></i> 456
                  </a>
                  <a href="#">
                    <i className="ti-comment"></i> 264
                  </a>
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Impedit excepturi laborum enim, vitae ipsam atque eum, ad
                  iusto consequuntur voluptas, esse doloribus. Perferendis
                  commodi soluta distinctio sit repudiandae possimus sunt.
                  Ipsum, rem.
                </p>

                <a href="#" className="read-more">
                  Read more <i className="ti-angle-double-right"></i>
                </a>
              </div>
            </div>
            {/* <!-- end of blog wrapper --> */}

            {/* <!-- blog-card --> */}
            <div className="blog-card">
              <div className="img-holder">
                <img
                  src="/imgs/blog3.jpg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                />
              </div>
              <div className="content-holder">
                <h4 className="title">Porro Quisqua</h4>

                <p className="post-details">
                  <a href="#">By: Admin</a>
                  <a href="#">
                    <i className="ti-heart text-danger"></i> 431
                  </a>
                  <a href="#">
                    <i className="ti-comment"></i> 312
                  </a>
                </p>

                <p>
                  doloribus. Esse vitae earum architecto nulla non dolores illum
                  at perspiciatis quod, et deleniti cupiditate reiciendis harum
                  facere, delectus eum commodi soluta distinctio sit repudiandae
                  possimus sunt. Ipsum, rem.
                </p>

                <a href="#" className="read-more">
                  Read more <i className="ti-angle-double-right"></i>
                </a>
              </div>
            </div>
            {/* <!-- end of blog wrapper --> */}
          </div>
        </div>
      </section>

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
                    className="text-dark form-control btn btn-primary"
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
                    Phone : <br />{" "}
                    <span className="text-muted">+ (123) 456-789</span>
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
                    <span className="text-muted">
                      12345 Fake ST NoWhere AB Country.
                    </span>
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
                    <span className="text-muted">info@website.com</span>
                  </h6>
                </div>
              </div>
              <ul className="social-icons pt-4">
                <li className="social-item">
                  <a className="social-link text-dark" href="#">
                    <i className="ti-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="social-item">
                  <a className="social-link text-dark" href="#">
                    <i className="ti-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="social-item">
                  <a className="social-link text-dark" href="#">
                    <i className="ti-google" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="social-item">
                  <a className="social-link text-dark" href="#">
                    <i className="ti-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="social-item">
                  <a className="social-link text-dark" href="#">
                    <i className="ti-github" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer py-3">
        <div className="container">
          <p className="small mb-0 text-light">
            &copy; 2022 Created With <i className="ti-heart text-danger"></i> By{" "}
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
      <script
        src="https://code.jquery.com/jquery-3.6.1.min.js"
        integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
        crossOrigin="anonymous"
      ></script>
      {/* <!-- core  --> */}
      <Script src="/assets/vendors/jquery/jquery-3.4.1.js"></Script>

      <Script src="/assets/vendors/bootstrap/bootstrap.bundle.js"></Script>

      {/* <!-- bootstrap 3 affix --> */}
      <Script src="/assets/vendors/bootstrap/bootstrap.affix.js"></Script>
    </>
  );
}

export async function getStaticProps() {
  const animals = [
    {
      _createdAt: "2022-03-08T09:28:00Z",
      _id: "1f69c53d-418a-452f-849a-e92466bb9c75",
      _rev: "xnBg0xhUDzo561jnWODd5e",
      _type: "animal",
      _updatedAt: "2022-03-08T09:28:00Z",
      name: "Capybara",
    },
  ];

  return {
    props: {
      animals,
    },
  };
}
