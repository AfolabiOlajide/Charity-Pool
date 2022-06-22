import React from "react";

import Header from "../components/header/Header";
import TopDonations from "../components/top-donations/TopDonations";

const Home = () => {
	return (
		<div className="home">
			<Header />
			<TopDonations />
		</div>
	);
};

export default Home;
