import React from "react";
import {Link}  from "react-router-dom"
import logo from "../../assets/images/logo.png";
import Navigation from "./navigation"



export default () => (
	<header className="header">
		<div className="logo-box">
				<Link to = "/">
					<img src= {logo} className = "logo" alt="logo"/>
				</Link>
			</div>
			<Navigation/>
	</header>
);

