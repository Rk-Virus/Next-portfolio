import { useState, useEffect } from 'react';
import Link from 'next/link';

function Navbar({ showProfile }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 550) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light py-4 ${isScrolled ? 'sticky-top bg-white shadow-sm' : ''}`}
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`navbar-collapse ${isOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
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
            <li className="nav-item">
              <Link href="/blogs" className="nav-link">
                Blogs
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav brand">
            {!isScrolled ? (
              <img src="/imgs/avatar.jpg" className="brand-img" alt="profile img" />
            ) : <li className="brand-txt">
              <h5 className="brand-title">Rk Virus</h5>
              <div className="brand-subtitle">Developer</div>
            </li>}
          </ul>
          <ul className="navbar-nav ms-auto">
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

export default Navbar;