import JournalEntry from "./journal-entry"
import LetterEntry from "./letter-entry"
import TelegramEntry from "./telegram-entry"

export default function EntryText({ entry }) {

  if (entry.sourceType === "Letter") {
    return <LetterEntry entry={entry} />
  }

  if(entry.sourceType === "Telegram") {
    return <TelegramEntry entry={entry} />
  }

  return <JournalEntry entry={entry} />

}