import React from "react";

import "./Card.css";

const Card = (props) => {
	return (
		<div onClick={props.onClick} className={`${props.className} card`}>
			{props.children}
		</div>
	);
};

export default Card;
