import styles from './letter-greeting.module.css';

export default function LetterGreeting(greeting) {
    return <section className={styles.headings}>
        {greeting.greeting?.map((entry, index) => {
            return <p key={index}>{entry}</p>
        })}
    </section>
}