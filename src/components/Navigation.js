import React from "react";
import covidLogo from "../images/covid19Logo.png";
import "./Navigation.scss";

const Navigation = () => {

	return (
		<nav className="nav">
			<div className="left-nav">
				<img src={covidLogo} alt="" /> <span>COVID-19</span>
			</div>
			<div className="right-nav">
				<ul>
					<li>Overview</li>
					<li>Contagion</li>
					<li>Symptoms</li>
					<li>Prevention</li>
					<li>Contact</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
