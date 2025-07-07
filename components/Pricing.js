import React from 'react'

const Pricing = () => {
    return (
        <>
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
        </>
    )
}

export default Pricing