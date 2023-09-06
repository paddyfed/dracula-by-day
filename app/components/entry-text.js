import JournalEntry from "./journal-entry"
import LetterEntry from "./letter-entry"

export default function EntryText({ entry }) {

  if (entry.sourceType === "Letter") {
    return <LetterEntry entry={entry} />
  }

  return <JournalEntry entry={entry} />

}