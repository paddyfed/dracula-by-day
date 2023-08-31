export default function EntryText({ entry }) {
    return <>
        <h3>{entry.source}</h3>

        {entry.entry.map((entry, index) => {
          return <p key={index}>{entry}</p>
        })}
    </>
}