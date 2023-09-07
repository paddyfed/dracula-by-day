import styles from './letter-heading.module.css';

export default function LetterHeading({heading}) {
    console.log(heading);

    return <section className={styles.headings}>
        {heading?.map((entry, index) => {
            return <p key={index}>{entry}</p>
        })}
    </section>
}