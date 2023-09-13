import JournalEntry from "./journal-entry"
import LetterEntry from "./letter-entry"
import TelegramEntry from "./telegram-entry"

export default function EntryText({ entry }) {
  if (entry.sourceType === "Letter") {
    console.log("Letter",entry);
    return <LetterEntry entry={entry} />
  }
  
  if (entry.sourceType === "Telegram") {
    console.log("Telegram", entry);
    return <TelegramEntry entry={entry} />
  }

  console.log("Journal", entry);
  return <JournalEntry entry={entry} />

}