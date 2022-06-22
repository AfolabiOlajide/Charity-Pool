import React from "react";

import "./TopDonations.css";
import CharityList from "../../charity";
import Charity from "../charity/Charity";

const TopDonations = () => {
	return (
		<div className="top-donations container">
			<div className="top-donations-heading">
				<h2 className="heading">Top Donations</h2>
			</div>
			<div className="top-donations-list">
				{CharityList.map((charity, index) => (
					<Charity
						key={charity.id}
						id={charity.id}
						name={charity.name}
					/>
				))}
			</div>
		</div>
	);
};

export default TopDonations;
