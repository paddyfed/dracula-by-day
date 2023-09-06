
export default function JournalEntry(entry) {
    return (
        <>
            <h3>{entry.entry.source}</h3>
            {entry.entry.entry.map((entry, index) => {
                return <p key={index}>{entry}</p>
            })}
        </>
    );

}