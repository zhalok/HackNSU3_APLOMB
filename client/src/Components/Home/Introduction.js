import React from 'react'

export default function Intoduction() {
    return (
        <section className="container my-5">
        <div className="row d-flex align-items-center my-5">
          <div className="col-12 col-lg-6">
             <h1 className="fw-bold">Virtual healthcare for you
            </h1>
            <p className="py-3 fs-5">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
            </p>
            <button className="btn btn-primary px-5 py-3 rounded-pill">Search Doctor</button>
          </div>
          <div className="col-12 col-lg-6">
            <img className="my-5" src="images/illustrationhero.png" alt="" width="95%"/>
          </div>
        </div>
      </section>
    )
}

