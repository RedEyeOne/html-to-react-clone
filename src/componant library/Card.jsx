import React, { Component } from "react";
import "/src/css/Cards.css";

export class Card extends Component {
	render() {
		const { name, nickname, personImg, description, personIndex } =
			this.props; // destructure props
		return (
			<div className="card" id={personIndex}>
				<img src={personImg} />
				<div className="name-box">
					<h3>{name}</h3>
					{nickname && <h4>{nickname}</h4>}
				</div>
				<p className="description">{description}</p>
			</div>
		);
	}
}
