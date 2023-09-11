import styles from './telegram-entry.module.css'

export default function TelegramEntry({ entry }) {
    return <article className={styles.telegram}>
        <h3 className={styles.telegramHeading}>{entry.source}</h3><p>{entry.entry}</p>
    </article>
}