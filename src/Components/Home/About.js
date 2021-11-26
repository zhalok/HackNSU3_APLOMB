import React from 'react'

export default function About() {
    return (
        <section id="about" className="py-md-5">
         <div>
           <h1 className="text-center my-5 text-primary fw-bold">About us</h1>
           <hr/>
         </div>
         <div className="d-flex container my-5">
           <div className="text w-50 my-auto">
              <h3 className="text-primary fw-bold">Let's Know About Us</h3>
              <p>eHealth is a relatively recent healthcare practice supported by electronic processes and communication, dating back to at least 1999. Usage of the term varies as it covers not just "Internet medicine" as it was conceived during that time, but also "virtually everything related to computers and medicine"</p>
           </div>
           <div className="text w-50 p-md-5">
             <img width="100%" src="images/about-icon-leaders-01.png" alt=""/>
           </div>
         </div>
       </section>
    )
}
