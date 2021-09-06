import React from "react";
import "./WhatToDo.scss";
import ToDo from "./ToDo";

import image1 from "../images/whatWeDo1.png";
import image2 from "../images/whatWeDo2.png";
import image3 from "../images/whatWeDo3.png";
import image4 from "../images/whatWeDo4.png";

const WhatToDo = () => {
	return (
		<section className="what-container">
			<h2>Covid-19</h2>
			<h1>What should we do</h1>
			<h4 className="what-title">
				Corona viruses are a type of virus. There are many different kinds, and
				some cause disease. A newly identified type has caused
			</h4>
			<div className="to-do-list">
				<ToDo
					image={image1}
					num="01"
					title="Wear Masks"
					description="Continually seize impactful portals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic outside the box thinking. Objectively"
				/>
				<ToDo
					image={image2}
					num="02"
					title="Wash Your Hands"
					description="Continually seize impactful portals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic outside the box thinking. Objectively"
				/>
				<ToDo
					image={image3}
					num="03"
					title="Use nose -  Rag"
					description="Continually seize impactful portals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic outside the box thinking. Objectively"
				/>
				<ToDo
					image={image4}
					num="04"
					title="Avoid Contacts"
					description="Continually seize impactful portals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic outside the box thinking. Objectively"
				/>
			</div>
		</section>
	);
};

export default WhatToDo;
