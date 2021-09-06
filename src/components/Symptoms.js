import React from 'react'
import './Symptoms.scss'

import symptomImage from '../images/symptoms.png'

const Symptoms = () => {
    return (
        <section className="symptoms-container">
            <h2>Covid-19</h2>
			<h1>Symptoms</h1>
			<h4>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type</h4>
            <img src={symptomImage} alt="" />
        </section>
    )
}

export default Symptoms
