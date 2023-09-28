import styles from "./journal-entry.module.css";

export default function JournalEntry({ entry }) {
  return (
    <article className={styles.journal}>
      <h3 className={styles.journalHeading}>{entry.source}</h3>
      {entry.entry.map((entry, index) => {
        return <p key={index}>{entry}</p>;
      })}
    </article>
  );
}
