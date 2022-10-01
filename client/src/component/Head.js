import React from 'react';
import './Head.css';
import pic from "../img/logo512.png"

function Head() {
	return (
		<nav className="head">
			<img
				// src={require('../img/logo512.png')}
        src = {pic}
				className="head--logo"
				alt="Logo"
			/>
			<p className="head--title">My Travel Journal.</p>
		</nav>
	);
}

export default Head;
