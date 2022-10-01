import React from 'react';
import './Card.css';

function Card(props) {
	// console.log(props.mainImg);
	return (
		<div className="card">
			<img src={props.mainImg} alt="Place Img" className="mainImg" />

			<div className="card--data">
				<div className="location">
					<img
						src={props.logoImg}
						alt="Location Logo"
						className="location--logo"
					/>
					<p className="location--country">{props.location}</p>
					<a href={props.link} className="location--link">
						View On WikiPedia
					</a>
				</div>

				<div className="card--info">
					<h3 className="card--info-city">{props.place}</h3>
					<p className="card--info-date">{props.date}</p>
					<p className="card--info-text">{props.info}</p>
				</div>
			</div>
		</div>
	);
}

export default Card;
