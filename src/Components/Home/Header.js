import React from 'react'

export default function Header() {
    return (
        <nav className="fixed-top bg-primary text-light navbar navbar-expand-lg navbar-light ">
                <div className="container d-flex align-items-center">
                  <a className="navbar-brand text-white fw-normal fs-4" href="#"> E-Health Care</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse d-flex align-items-center" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item mx-lg-2 itemCard">
                        <a className="nav-link text-white active " aria-current="page" href="/Covid-care">Covid Care</a>
                      </li>
                      <li className="nav-item mx-lg-2 itemCard">
                        <a className="nav-link text-white active " aria-current="page" href="#">About us</a>
                      </li>
                      <li className="nav-item mx-lg-2 itemCard">
                        <a className="nav-link text-white " href="#about">FAQs</a>
                      </li>
                      
                      <li className="nav-item mx-lg-2 itemCard">
                        <a className="nav-link text-white " href="#">Hotline</a>
                      </li>
                      <li className="nav-item mx-lg-2 itemCard">
                        <a className="nav-link text-white " href="#">Sign In as Doctor</a>
                      </li>
                      <li className="nav-item mx-lg-2 itemCard">
                        <a className="nav-link text-white " href="#">Sign In</a>
                      </li>
                      
                      
                    </ul>
                    
                  </div>
                </div>
              </nav>
    )
}
