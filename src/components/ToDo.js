import React from "react";
import "./ToDo.scss";

const ToDo = ({ image, num, title, description }) => {
	const isEven = (num) => {
		return num % 2 === 0;
	};
	return (
		<div
			className={`to-do flex-row ${isEven(parseInt(num)) && "flex-reverse"}`}
		>
			<div className="to-do-right flex-row">
				<div className="right-right">
					<h1>{num}</h1>
				</div>
				<div className="right-left">
					<h1> {title}</h1>
					<h4>{description}</h4>
				</div>
			</div>
			<div className="to-do-left">
				<img src={image} alt="" />
			</div>
		</div>
	);
};
// + isEven(parseInt(num)) ? "reverse": ""
export default ToDo;
