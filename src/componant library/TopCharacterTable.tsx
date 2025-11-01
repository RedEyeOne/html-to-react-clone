import "/src/css/TopCharacterTable.css";
import { Person } from "../assets/people";
interface TableProps {
	people: Person[];
}

export function TopCharacterTable({ people }: TableProps) {
	const topFivePeople = people
		.filter((p) => p.votes != null && p.votes > 0)
		.sort((a, b) => (b.votes ?? 0) - (a.votes ?? 0))
		.slice(0, 5);
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
				{topFivePeople.map((person, index) => (
					<tr
						key={person.id}
						className={index % 2 === 0 ? "dark" : "light"}
					>
						<td>{person.leaderboardName}</td>
						<td>{person.skillset}</td>
						<td>{person.votes}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
