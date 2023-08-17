import Image from 'next/image'
import styles from './page.module.css'

async function getJournalEntries() {
  const res = await fetch('http://localhost:3000/api/journalentries');
  return res.json();
}

export default async function Home() {
  const entries = await getJournalEntries();

  return (
    <main className={styles.main}>
      <h1>Dracula</h1>
      <p>by</p>
      <p>Bram Stoker</p>
      <p>How these papers have been placed in sequence will be made manifest in the reading of them. All needless matters have been eliminated, so that a history almost at variance with the possibilities of later-day belief may stand forth as simple fact. There is throughout no statement of past things wherein memory may err, for all the records chosen are exactly contemporary, given from the standpoints and within the range of knowledge of those who made them.</p>

      {
        entries.journalentries.map((d) => {
          return <>
            <h2 key={d.id}>{d.month} {d.day}</h2>
            <p key={d.index}>{d.entry}</p>
          </>
        })
      }

    </main>
  )
}
