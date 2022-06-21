import React from "react";

import "./Header.css";
import world from "../../assets/world.jpg";
import PolygonBanner from "../../assets/polygon-banner.png";
import Card from "../../UI/Card";
import Button from "../../UI/Button";

const Header = () => {
	return (
		<div className="header">
			<img src={world} alt="world" />
			<div className="header-details">
				<div className="container">
					<div className="info">
						<h1 className="heading">
							Spread Love, give, make someone happy
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Dolorum dolores, doloribus quasi quaerat rem
							aspernatur?
						</p>
						<div className="header-cta">
							<Button className="btn-primary">Explore</Button>
							<Button className="btn-normal">Ask For Help</Button>
						</div>
					</div>
					<div className="promotion">
						<Card className="promotion-card">
							<img src={PolygonBanner} alt="" />
							<div className="title">
								<h3 className="heading">Built with Polygon</h3>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
