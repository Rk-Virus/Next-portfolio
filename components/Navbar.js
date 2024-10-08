import React from 'react'
import Link from 'next/link'

function Navbar({showProfile}) {
  return (
    <nav
        className="navbar sticky-top navbar-expand-lg navbar-light bg-white py-4"
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
                <Link href="/" className="nav-link">
                
                  Home
                
                </Link>
              </li>
              <li className="nav-item">
              <Link href="/#about" className="nav-link">
                
                  About
                
                </Link>
              </li>
              {/* <li className="nav-item">
              <Link href="/#resume">
                <a className="nav-link">
                  Resume
                </a>
                </Link>
              </li> */}

              <li className="nav-item">
              <Link href="/blogs" className="nav-link">
                
                  Blogs
                
                </Link>
              </li>
            </ul>
            {showProfile && (
            <ul className="navbar-nav brand">
              <img src="/imgs/avatar.jpg" className="brand-img" alt="profile img" />
              <li className="brand-txt">
                <h5 className="brand-title">Rk Virus</h5>
                <div className="brand-subtitle">Developer</div>
              </li>
            </ul>
            )}
            <ul className="navbar-nav ml-auto">
              
            <li className="nav-item">
              <Link href="/#projects" className="nav-link">
                
                  Projects
                
                </Link>
              </li>
              
              <li className="nav-item">
              <Link href="/#price" className="nav-link">
                
                  Pricing
                
                </Link>
              </li>
              <li className="nav-item last-item">
              <Link href="/#contact" className="nav-link">
                
                  Contact
                
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navbar