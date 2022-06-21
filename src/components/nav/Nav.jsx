import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../assets/logo1.png";
import Button from "../../UI/Button";
import "./Nav.css";

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	if (isOpen === true) {
		document.querySelector("body").style.overflow = "hidden";
	} else {
		document.querySelector("body").style.overflow = "auto";
	}

	const menuToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="nav">
			<div className="logo">
				<img src={logo} alt="" />
				<h2 className="heading">Charity Pool</h2>
			</div>
			<div className="search">
				<div className="form-control">
					<BsSearch className="btn-search" />
					<input type="text" placeholder="Search Charities..." />
				</div>
			</div>
			<div className="open-btn">
				<HiMenuAlt4 onClick={menuToggle} />
			</div>
			<div className={`cta ${isOpen ? "active" : ""}`}>
				<AiOutlineClose onClick={menuToggle} className="close-btn" />
				<div className="nav-links">
					<Link to="/" className="anchor" onClick={menuToggle}>
						Home
					</Link>
					<Link
						to="/charities"
						className="anchor"
						onClick={menuToggle}
					>
						Charities
					</Link>
					<Link
						to="/dashboard"
						className="anchor"
						onClick={menuToggle}
					>
						Dashboard
					</Link>
				</div>
				<div className="connect">
					<Button className="btn-primary">Connect</Button>
				</div>
			</div>
		</div>
	);
};

export default Nav;
