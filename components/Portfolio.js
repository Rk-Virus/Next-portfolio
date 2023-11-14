import React from 'react'

function Portfolio() {
  return (
    <>
        
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio

