import styles from "./telegram-entry.module.css";
import { Roboto_Mono } from "next/font/google";
const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function TelegramEntry({ entry }) {
  return (
    <article className={styles.telegram}>
      <h3 className={styles.telegramHeading}>{entry.source}</h3>
      {entry.entry?.map((entry, index) => {
        return (
          <p key={index} className={roboto.className}>
            {entry}
          </p>
        );
      })}
    </article>
  );
}
