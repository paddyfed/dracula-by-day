import styles from './letter-signature.module.css';

export default function LetterSignature(signature) {
    return <section className={styles.headings}>
        {signature.signature?.map((entry, index) => {
            return <p key={index}>{entry}</p>
        })}
    </section>
}