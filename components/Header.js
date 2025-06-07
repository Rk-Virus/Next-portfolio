import React from 'react'
import Link from "next/link";
//components
import SocialHandles from "../components/SocialHandles";

function Header() {
  return (
    <header className="header">
        <div className="container">
          {/* <SocialHandles /> */}
          <div className="header-content mx-5">
            <h4 className="header-subtitle pb-1 pl-1">Hello, I am</h4>
            <h1 className="header-title">Rk Virus</h1>
            <h6 className="header-mono">An Unofficial Developer | Blogger</h6>
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
  )
}

export default Header