import JournalEntry from "./journal-entry";
import LetterEntry from "./letter-entry";
import TelegramEntry from "./telegram-entry";
import ArticleEntry from "./article-entry";

export default function EntryText({ entry }) {
  if (entry.sourceType === "Letter") {
    return <LetterEntry entry={entry} />;
  }

  if (entry.sourceType === "Telegram") {
    return <TelegramEntry entry={entry} />;
  }

  if (entry.sourceType === "Article" || entry.sourceType === "Cutting") {
    return <ArticleEntry entry={entry} />;
  }

  return <JournalEntry entry={entry} />;
}
