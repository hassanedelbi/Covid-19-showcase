import React from "react";
import "./Main.scss";

import mainImage from "../images/SectionOneImage.png";

const Main = (props) => {
	return (
		<section className="main-container">
			<div className="main-left">
				<h2>COVID-19 Alert</h2>
				<h1>Stay At Home Quarantine To Stop Corona Virus</h1>
				<h4>
					There is no specific medicine to prevent or treat coronavirus disease
					(COVID-19). People may need supportive care to .
				</h4>
				<input type="button" value="Let Us Help" />
			</div>

			<div className="main-right">
				<img src={mainImage} alt="mainImage" />
			</div>
		</section>
	);
};

export default Main;
