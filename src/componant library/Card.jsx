import React, { Component } from "react";

export class Card extends Component {
	render() {
		const { name, nickname, personImg, description } = this.props; // destructure props
		return (
			<div className="card">
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

export default Card;
