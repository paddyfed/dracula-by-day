import styles from './letter-closing.module.css';

export default function LetterClosing(closing) {
    return <section className={styles.headings}>
        {closing.closing?.map((entry, index) => {
            return <p key={index}>{entry}</p>
        })}
    </section>
}