import React from "react";
import "./Footer.scss";
import covidLogo from "../images/covid19Logo.png";
import imageFacebook from '../images/facebook.png'
import imageYouTube from '../images/youtube.png'
import imageVimeo from '../images/vimeo.png'
import imageTwitter from '../images/twitter.png'

const Footer = () => {
	return (
		<section className="footer-container">
			<div className="top-footer flex-row">
				<div className="footer-right flex-row">
					<img src={covidLogo} alt="" /> <span>COVID-19</span>
				</div>
				<div className="footer-center">
					<ul className="flex-row">
						<li>Overview</li>
						<li>Symptoms</li>
						<li>Prevention</li>
						<li>Treatment</li>
					</ul>
				</div>
				<div className="footer-right">
					<ul className="flex-row">
						<li><img src={imageFacebook} alt="" /></li>
						<li><img src={imageYouTube} alt="" /></li>
						<li><img src={imageVimeo} alt="" /></li>
						<li><img src={imageTwitter} alt="" /></li>
					</ul>
				</div>
			</div>
			<div className="bot-footer">
				<p>2021 @ All rights reserved by <a href="https://github.com/hassanedelbi"> Hassan Edelbi</a></p>
			</div>
		</section>
	);
};

export default Footer;
