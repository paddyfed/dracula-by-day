import LetterHeading from "./letter-heading";
import LetterBody from "./letter-body";
import styles from "./letter-entry.module.css";

export default function LetterEntry({ entry }) {
  return (
    <article className={styles.letter}>
      <h3 className={styles.letterHeading}>{entry.source}</h3>

      <LetterHeading heading={entry.entry.heading} />
      <LetterBody body={entry.entry.body} />
    </article>
  );
}
