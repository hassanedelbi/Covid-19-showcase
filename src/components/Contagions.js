import React from "react";
import Contagion from "./Contagion";
import './Contagions.scss'
import imageContagion1 from "../images/contagion1.png";
import imageContagion2 from "../images/contagion2.png";
import imageContagion3 from "../images/contagion3.png";

const Contagions = () => {
	return (
		<section className="contagions-container">
			<h2>Covid-19</h2>
			<h1>Contagion</h1>
			<h4>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type</h4>
			<div className="contagion-list flex-row">
				<Contagion
					image={imageContagion1}
					title={"Air Transmission"}
					description={
						"Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify"
					}
				/>
				<Contagion
					image={imageContagion2}
					title={"Human Contacts"}
					description={"Washing your hands is one of thesimplest ways you can protect"}
				/>
				<Contagion
					image={imageContagion3}
					title={"Containted Objects"}
					description={
						"Use the tissue while sneezing,In this way, you can protect your droplets."
					}
				/>
			</div>
		</section>
	);
};

export default Contagions;
