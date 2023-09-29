import styles from "./letter-body.module.css";

export default function LetterBody({ body, handwriting }) {
  return (
    <section
      className={`${styles.headings} ${handwriting} ${styles.xlargetext}`}
    >
      {body?.map((entry, index) => {
        return <p key={index}>{entry}</p>;
      })}
    </section>
  );
}
