import React from 'react'

const Feedback = ({blogTitle}) => {
  return (
    <section className="section" id="contact" style={{marginBottom:-100}}>
      <div className="container">
        <div className="row">
          <div className='col-lg-2'></div>
          <div className="col-lg-8">
            <div className="contact-form-card">
              <h4 className="contact-title">Have a feedback?</h4>

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
                    placeholder="Email (optional)"
                    name="email"
                  />
                </div>
                <div className="form-group" style={{display:'none'}}>
                  <input
                    className="form-control"
                    type="text"
                    name="blog"
                    value={blogTitle}
                    onChange={()=>{}}
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


          {/* <div className="col-lg-4">
            <div className="contact-info-card">
              <h4 className="contact-title">Get in touch</h4>
              <div className="row mb-2">
                <div className="col-1 pt-1 mr-1">
                  <i className="ti-mobile icon-md"></i>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-1 pt-1 mr-1">
                  <i className="ti-map-alt icon-md"></i>
                </div>
                <div className="col-10">
                  <h6 className="d-inline">
                    Address :<br />{" "}
                    <span className="text-muted">India</span>
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
          </div> */}
        </div>
      </div>
    </section>

  )
}

export default Feedback