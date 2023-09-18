import styles from "./article-entry.module.css";
import { Playfair_Display, Noto_Serif } from 'next/font/google'
const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700', '900']
});
const noto = Noto_Serif({
    subsets: ['latin'],
    weight: ['400']
});

export default function ArticleEntry({ entry }) {
  return (
    <article className={styles.article}>
      <h3 className={`${styles.articleHeading} ${playfair.className}`}>{entry.source}</h3>
      <section className={`${styles.articleParagraphs} ${noto.className}`}>
        {entry.entry.map((entry, index) => {
          return <p key={index}>{entry}</p>;
        })}
      </section>
    </article>
  );
}
