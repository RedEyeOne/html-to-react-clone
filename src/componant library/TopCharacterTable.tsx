import "/src/css/TopCharacterTable.css";
import { people } from "../assets/people";

const peopleWithVotes = people
	.filter((person) => person.votes != null && person.votes > 0)
	.sort((a, b) => (b.votes ?? 0) - (a.votes ?? 0));

console.log(peopleWithVotes);
export function TopCharacterTable() {
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Skillset</th>
					<th>Votes</th>
				</tr>
			</thead>
			<tbody>
				{peopleWithVotes.map((person, index) => (
					<tr key={index}>
						<td>{person.name}</td>
						<td>{person.skillset}</td>
						<td>{person.votes}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
