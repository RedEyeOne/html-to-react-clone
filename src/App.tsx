import { NavTab } from "./componant library/NavTab.jsx";
import { TopCharacterTable } from "./componant library/TopCharacterTable.jsx";
import { people } from "./assets/people";
import { Card } from "./componant library/Card";
import { Person } from "./assets/people";
import "./css/App.css";

function App() {
	return (
		<>
			<nav>
				<h1>Fullmetal Alchemist</h1>
				<div className="button-container">
					<NavTab text={"about us"} />
					<NavTab text="info" />
					<NavTab text={"support us"} />
				</div>
			</nav>
			<section className="table-container">
				<h4>Top Characters</h4>
				<TopCharacterTable people={people} />
			</section>

			{/* loop over people and create cards dynamicly  */}
			<section className="cards-container">
				{people.map((person: Person, index: number) => (
					<Card
						key={index}
						personIndex={index}
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
