import React, { useEffect, useState } from 'react'

const reachCount = (counter) =>{
    if(counter.innerText < counter.dataset.count){
        setInterval(() => {
            reachCount();
        }, 1000);
    }
}

function Counter() {
    // const [finals, setFinals] = useState([500, 5, 2, 0])
    // const [reach, setReach] = useState([0, 0, 0, 0])

    //reach number function
    // const reachNums = () => {
    //     reach.forEach((num,i) => {
    //         if(num < finals[i]){
    //             // setInterval(() => {
    //             //     // setReach()
    //             // }, 1000);
    //         }
    //     });
    // }

    useEffect(() => {
        const counters = document.getElementsByClassName("number")
        console.log(counters)
        counters.forEach(counter => {
            reachCount(counter)
        });
    }
        , [])


    return (
        <>

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
                                    <h1 className="text-danger font-weight-bold font40  number" data-count='100'>
                                        {/* 500+ */}
                                        0+
                                    </h1>
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
                                    <h1 className="text-danger font-weight-bold font40 number" data-count='100'>
                                        {/* 5+ */}
                                        0+
                                    </h1>
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
                                    <h1 className="text-danger font-weight-bold font40 number" data-count='100'>
                                        {/* 2 */}
                                        0+
                                    </h1>
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
                                    <h1 className="text-danger font-weight-bold font40 number" data-count='100'>
                                        {/* 0 */}
                                        0
                                    </h1>
                                    <p className="text-light mb-1">Coffee Drinked</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Counter