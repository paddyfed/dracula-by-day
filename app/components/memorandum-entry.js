import styles from "./memorandum-entry.module.css";
import { Courier_Prime } from "next/font/google";

const default_typewriter = Courier_Prime({
  subsets: ["latin"],
  weight: ["400"],
});

export default function MemorandumEntry({ entry }) {
  return (
    <article className={styles.memorandumentry}>
      <h3 className={styles.memorandumHeading}>{entry.source}</h3>
      {entry.entry.map((entry, index) => {
        return (
          <p key={index} className={default_typewriter.className}>
            {entry}
          </p>
        );
      })}
    </article>
  );
}
