import "/src/css/TopCharacterTable.css"

export function TopCharacterTable() {

    const people = [
        { name: "Alfonse Elrich", skillset: "Being Loveable, Alchemy", votes: 110 },
        { name: 'Edward Elrich "Full Metal Alchemist"', skillset: "Alchemy, Human Transmutation", votes: 100 },
        { name: "Hawkeye", skillset: "Sniper, Loyal AF", votes: 95 },
        { name: "Mj. Armstrong", skillset: "Alchemy, Muscles", votes: 94 },
        { name: "Nina", skillset: "Loving Dogs, Being Adorable", votes: 93 },
    ];

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
                {people.map((person, index) => (
                <tr key={index}>
                    <td>{person.name}</td>
                    <td>{person.skillset}</td>
                    <td>{person.votes}</td>
                </tr>
                ))}
            </tbody>
        </table>
        
    )
    
}