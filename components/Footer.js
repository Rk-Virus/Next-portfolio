import React from 'react'

function Footer() {
  return (
    <footer className="footer py-3">
        <div className="container">
          <p className="small mb-0 text-light">
            &copy; {
                new Date().getFullYear()
            } Created With <i className="ti-heart text-danger"></i>
            &nbsp; By{" "}
            <a href="#" target="_blank">
              <span
                className="text-danger"
                title="I'm a Developer"
              >
                RkVirus
              </span>
            </a>
          </p>
        </div>
      </footer>
  )
}

export default Footer