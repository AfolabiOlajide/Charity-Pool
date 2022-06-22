import React from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";

import "./Charity.css";

const Charity = (props) => {
	return (
		<Card className="charity">
			<div className="top">
				<h2 className="heading">{props.name}</h2>
				<span>#{props.id}</span>
			</div>
			<Button className="btn-red">Donate</Button>
		</Card>
	);
};

export default Charity;
