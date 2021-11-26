import React from 'react'
import About from '../Components/Home/About'
import Footer from '../Components/Home/Footer'
import Header from '../Components/Home/Header'
import Intoduction from '../Components/Home/IntroDuction'
import Service from '../Components/Home/Services'

export default function Home() {
    return (
        <div>
        <Header />
        <Intoduction />
        <Service />
        <About />
        <Footer />
            
        </div>
    )
}
