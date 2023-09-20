import styles from './page.module.css'
import React from 'react';
import LatestJournalEntry from './components/latest-journal-entry';
import MainPageNav from './components/main-page-nav';
import Heading from './components/heading';


export default function Home() {

  const api = `${process.env.API_URL}api/journalentries/date/`;

  return <>
    <main className={styles.main}>
      <Heading />
      <LatestJournalEntry api={api}></LatestJournalEntry>
    </main>
    <MainPageNav />
  </>;


}
