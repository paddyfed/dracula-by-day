import styles from "./letter-heading.module.css";

export default function LetterHeading({ heading, handwriting }) {
  return (
    <section
      className={`${styles.headings} ${handwriting} ${styles.xxlargetext}`}
    >
      {heading?.map((entry, index) => {
        return <p key={index}>{entry}</p>;
      })}
    </section>
  );
}
