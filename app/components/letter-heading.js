import styles from './letter-heading.module.css';

export default function LetterHeading(heading) {
    return <section className={styles.headings}>
        {heading.heading?.map((entry, index) => {
            return <p key={index}>{entry}</p>
        })}
    </section>
}