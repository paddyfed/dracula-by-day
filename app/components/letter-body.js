import styles from "./letter-body.module.css";

export default function LetterBody({ body, handwriting }) {
  return (
    <section
      className={`${styles.headings} ${handwriting} ${styles.xxlargetext}`}
    >
      {body?.map((entry, index) => {
        return <p key={index}>{entry}</p>;
      })}
    </section>
  );
}
