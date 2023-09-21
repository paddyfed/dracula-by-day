import styles from "./letter-body.module.css";

export default function LetterBody({ body }) {
  return (
    <section className={styles.headings}>
      {body?.map((entry, index) => {
        return <p key={index}>{entry}</p>;
      })}
    </section>
  );
}
