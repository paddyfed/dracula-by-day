import JournalEntry from "./journal-entry"
import LetterEntry from "./letter-entry"

export default function EntryText({ entry }) {

  if (entry.sourceType === "Letter") {
    return <LetterEntry entry={entry} />
  }

  return <JournalEntry entry={entry} />
  
  
  // <>
  //   <h3>{entry.source}</h3>
  //   <p>"Journal"</p>
  //   {entry.entry.map((entry, index) => {
  //     return <p key={index}>{entry}</p>
  //   })}
  // </>
}