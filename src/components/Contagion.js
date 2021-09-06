import React from "react";
import './Contagion.scss'

const Contagion = ({ image, title, description }) => {
	return (
		<div className="contagion">
			<img src={image} alt="" />
			<h2>{title}</h2>
			<h4>{description}</h4>
		</div>
	);
};

export default Contagion;
