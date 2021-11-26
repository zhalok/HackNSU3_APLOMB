import React from 'react'

export default function Service() {
    return (
        <section className="container">
        <div className="text-center">
          <h1 className="fw-bold my-5 text-primary">Our Services</h1>
          <p className="my-3">We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health

          </p>
        </div>
       
        <div className="container">
          <div className="card mx-3 shadow-lg border-0 mt-5 itemCard">
            <div className="row g-0">
              <div className="col-md-8">
                <img src="images/24393.jpg" className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-4">
                <div className="card-body text-center">
                  <h2 className="card-title text-danger text-center my-5 fw-bolder">Covid Care </h2>
                  <p className="card-text my-3">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <button className="btn btn-danger px-5 mt-3"><a className="text-decoration-none text-light" href="covid.html">For Details</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className="card-deck d-flex w-100 my-5">
            <div className="card w-50 m-md-3 shadow-lg border-0 text-center itemCard">
              <img height="120px" className=" mx-auto my-5" src="images/Groupserach.png" alt=""/>

              <div className="card-body">
                <h3 className="card-title text-primary fw-bold">Search doctor</h3>
                <p>Choose your doctor from thousands of specialist, general, and trusted hospitals. Get qualified doctors.
                </p>
              </div>
            </div>
            <div className="card w-50 m-md-3 shadow-lg border-0 text-center itemCard">
              <img  height="120px" className=" mx-auto my-5" src="images/Framebottol.png" alt=""/>
              <div className="card-body">
                <h3 className="card-title text-primary fw-bold">Online pharmacy
                </h3>
                <p>Choose your doctor from thousands of specialist, general, and trusted hospitals. Get qualified doctors.
                </p>
                
              </div>
            </div>
            <div className="card w-50 m-md-3 shadow-lg border-0 text-center itemCard">
              <img  height="120px" className=" mx-auto my-5" src="images/a.png" alt=""/>
              <div className="card-body">
                <h3 className="card-title text-primary fw-bold">Ambulance</h3>
                <p>Choose your doctor from thousands of specialist, general, and trusted hospitals. Get qualified doctors.
                </p>
                
              </div>
            </div>
          </div>
          <div className="card-deck d-flex w-100">
            <div className="card w-50 m-md-3 shadow-lg border-0 text-center itemCard">
              <img  height="120px" className=" mx-auto my-5" src="images/Framedetals.png" alt=""/>
              <div className="card-body">
                <h3 className="card-title text-primary fw-bold">Health Blog
                </h3>
                <p>Choose your doctor from thousands of specialist, general, and trusted hospitals. Get qualified doctors.
                </p>
                
              </div>
            </div>
            <div className="card w-50 m-md-3 shadow-lg border-0 text-center itemCard">
              <img  height="120px"  className=" mx-auto my-5 px-3" src="images/Frameemergency.png" alt=""/>

              <div className="card-body">
                <h3 className="card-title text-primary fw-bold">Emergency care</h3>
                <p>Choose your doctor from thousands of specialist, general, and trusted hospitals. Get qualified doctors.
                </p>
              </div>
            </div>
            <div className="card w-50 m-md-3 shadow-lg border-0 text-center itemCard">
              <img   height="120px" className=" mx-auto my-5 fw-bold" src="images/Frametrocking.png" alt=""/>

              <div className="card-body">
                <h3 className="card-title text-primary fw-bold">Health Tips</h3>
                <p>Choose your doctor from thousands of specialist, general, and trusted hospitals. Get qualified doctors.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    )
}
