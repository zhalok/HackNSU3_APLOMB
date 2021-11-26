import React from 'react'

export default function Introduction() {
    return (
        <section className="container my-5" >
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-lg-6 ">
                        <h3 className="h3-color">COVID-19 ALERT</h3>
                         <h1 className="h1-color">Stay at Home quarantine To stop Corona virus
                        </h1>
                        <p>There is no specific medicine to prevent or treat coronavirus disease (COVID-19). People may need supportive care to .
                        </p>
                        <button className="btn btn-color text-white rounded-pill">LET US HELP</button>
                    </div>
                    <div className="col-12 col-lg-6">
                        <img className="img-fluid my-5" src="images/hero (1).png" alt=""/>
                    </div>
                </div>
            </section>
    )
}
