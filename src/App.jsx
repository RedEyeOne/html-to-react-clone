import { NavTab } from "./componant library/NavTab";
import { TopCharacterTable } from "./componant library/TopCharacterTable";
import { people } from "./../people.js";
import { Card } from "./componant library/Card.jsx";
import "./css/App.css";
import "./css/Cards.css";

function App() {
	return (
		<>
			<nav>
				<h1>Fullmetal Alchemist</h1>
				<div>
					<NavTab text="about us" />
					<NavTab text="info" />
					<NavTab text="support us" />
				</div>
			</nav>
			<sectoin className="table-container">
				<h4>Top Characters</h4>
				<TopCharacterTable />
			</sectoin>

			<section className="cards-container">
				{people.map((person) => (
					<Card
						key={person.id}
						id={person.id}
						name={person.name}
						nickname={person.nickname}
						personImg={person.personImg}
						description={person.description}
					/>
				))}
			</section>
		</>
	);
}

export default App;
