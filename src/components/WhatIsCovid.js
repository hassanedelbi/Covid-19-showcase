import React from 'react'
import './WhatIsCovid.scss'

import imageCovidDef from '../images/whatIsCovid.png'

const WhatIsCovid = () => {
    return (
        <section className="definition-container flex-row">
            <div className="definition-left">
                <img src={imageCovidDef} width="900px" height="900px" alt="" />
            </div>
            <div className="definition-right">
                <h2>What Is Covid-19</h2>
                <h1>Coronavirus</h1>
                <h4>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory illness now called COVID-19.Lauren Sauer, M.S., the director of operations with the Johns Hopkins Office of Critical Event Preparedness and Response </h4>
                <input type="button" value="Learn More"/>
            </div>
        </section>
    )
}

export default WhatIsCovid
