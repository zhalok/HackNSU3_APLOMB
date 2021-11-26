import React from 'react'

export default function Contagion() {
    return (
        <section className="container text-center my-5" id="Contagion">
                <h4 className="h3-color">Covid-19
                </h4>
                <h1 className="h1-color">Contagion
                </h1>
                <p>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type</p>
                <div className="row row-cols-1 row-cols-md-3 g-4 border-0 my-5">
                    <div className="col">
                      <div className="card h-100 border-0 shadow-lg p-2 itemCard">
                        <img src="images/contagion/Group 18544air.png" className="card-img-top" alt="..."/>
                      
                        <div className="card-body">
                          <h4 className="card-title h2-color">Air Transmission
                        </h4>
                          <p className="card-text py-5">Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify
                        </p>
                        </div>
                        <div className="">
                            <button className="btn btn-danger w-100">Learn more</button>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card h-100 border-0 shadow-lg p-2 itemCard">
                        <img src="images/contagion/Group 18542hmm2.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h4 className="card-title h2-color">Human Contacts
                        </h4>
                          <p className="card-text py-5">Washing your hands is one of thesimplest ways you can protect
                        </p>
                        </div>
                        <div className="">
                           <button className="btn btn-danger w-100">Learn more</button>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card h-100 border-0 shadow-lg p-2 itemCard">
                        <img src="images/contagion/Group 18540object2.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h4 className="card-title h2-color">Containted Objects
                        </h4>
                          <p className="card-text py-5">Use the tissue while sneezing,In this way, you can protect your droplets.
                        </p>
                        </div>
                        <div className="">
                            <button className="btn btn-danger w-100">Learn more</button>
                        </div>
                      </div>
                    </div>
                  </div>
                
            </section>
    )
}
