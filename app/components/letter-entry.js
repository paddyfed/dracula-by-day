import LetterHeading from "./letter-heading"
import LetterBody from "./letter-body"
import LetterGreeting from "./letter-greeting"
import LetterSignature from "./letter-signature"
import LetterClosing from "./letter-closing"
import styles from "./letter-entry.module.css"


export default function LetterEntry(entry) {
    return (
        <article className={styles.letter}>
            <h3 className={styles.letterHeading}>{entry.entry.source}</h3>

            <LetterHeading heading={entry.entry.entry.heading} />
            <LetterGreeting greeting={entry.entry.entry.greeting} />
            <LetterBody body={entry.entry.entry.body} />
            <LetterClosing closing={entry.entry.entry.closing} />
            <LetterSignature signature={entry.entry.entry.signature} />
        </article>
    )
}