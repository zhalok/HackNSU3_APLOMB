import React from 'react'
import MetaData from '../../MetaData/MetaData'
import Contagion from './Components/Contagion'
import Corona from './Components/Corona'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Introduction from './Components/Introduction'
import Prevension from './Components/Prevension'
import Symptoms from './Components/Symptoms'

export default function Covid() {
    return (
        <div>
        <MetaData title={"Covid Care"} />
        <Header />
        <Introduction />
        <Corona />
        <Contagion />
        <Symptoms />
        <Prevension />
        <Footer />
            
        </div>
    )
}
