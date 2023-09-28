import LetterHeading from "./letter-heading";
import LetterBody from "./letter-body";
import styles from "./letter-entry.module.css";
import { getHandwriting } from "../utils/writingHelpers";

export default function LetterEntry({ entry }) {
  const handwriting = getHandwriting(entry);
  // console.log(handwriting);
  return (
    <article className={styles.letter}>
      <h3 className={styles.letterHeading}>{entry.source}</h3>

      <LetterHeading heading={entry.entry.heading} handwriting={handwriting} />
      <LetterBody body={entry.entry.body} handwriting={handwriting} />
    </article>
  );
}
