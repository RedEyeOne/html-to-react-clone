import React, { Component } from "react";
import "/src/css/Cards.css";

interface CardProps {
	name: string;
	nickname?: string;
	personImg: string;
	description: string;
	personIndex: number;
}

export class Card extends Component<CardProps> {
	render() {
		const { name, nickname, personImg, description, personIndex } =
			this.props; // destructure props
		return (
			<div className={`card card-${personIndex}`}>
				{personImg !== "" ? <img src={personImg} alt="empty" /> : null}
				<div className="name-box">
					<h3>{name}</h3>
					{nickname && <h4>{nickname}</h4>}
				</div>
				<p className="description">{description}</p>
			</div>
		);
	}
}
