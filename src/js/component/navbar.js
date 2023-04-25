import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1" style={{ display: "flex", alignItems: "center" }}>
					<img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Google_Contacts_logo.png"/>
					<h5 className="navbar-title mb-0">Contact List</h5>
					</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Rellena el formulario</button>
				</Link>
			</div>
		</nav>
	);
};
