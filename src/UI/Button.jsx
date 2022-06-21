import React from "react";

import "./Button.css";

const Button = (props) => {
	return (
		<button
			onClick={props.onClick}
			className={`btn normal-font ${props.className}`}
		>
			{props.children}
		</button>
	);
};

export default Button;
