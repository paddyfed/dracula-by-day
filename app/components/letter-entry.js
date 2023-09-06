import LetterHeading from "./letter-heading"
import styles from "./letter-entry.module.css"


export default function LetterEntry(entry) {
    return (
        <article className={styles.letter}>
            <h3 className={styles.letterHeading}>{entry.entry.source}</h3>

            <LetterHeading heading={entry.entry.entry.heading} />            
            
            {entry.entry.entry.greeting?.map((entry, index) => {
                return <p key={index}>{entry}</p>
            })}
            {entry.entry.entry.body?.map((entry, index) => {
                return <p key={index}>{entry}</p>
            })}
            {entry.entry.entry.closing?.map((entry, index) => {
                return <p key={index}>{entry}</p>
            })}
            {entry.entry.entry.signature?.map((entry, index) => {
                return <p key={index}>{entry}</p>
            })}
        </article>
    )
}