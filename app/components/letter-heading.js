import styles from "./letter-heading.module.css";

export default function LetterHeading({ heading, handwriting }) {
  return (
    <section
      className={`${styles.headings} ${handwriting} ${styles.xlargetext}`}
    >
      {heading?.map((entry, index) => {
        return <p key={index}>{entry}</p>;
      })}
    </section>
  );
}
