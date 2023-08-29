import Image from 'next/image'
import styles from './page.module.css'
import React from 'react';
import useSWR from 'swr';
import JournalEntry from './components/journal-entry';


export default function Home() {
  
  const api = `${process.env.API_URL}api/journalentries/`;

  return (
    <main className={styles.main}>
      <h1>Dracula</h1>
      <p>by</p>
      <p>Bram Stoker</p>
      <p>How these papers have been placed in sequence will be made manifest in the reading of them. All needless matters have been eliminated, so that a history almost at variance with the possibilities of later-day belief may stand forth as simple fact. There is throughout no statement of past things wherein memory may err, for all the records chosen are exactly contemporary, given from the standpoints and within the range of knowledge of those who made them.</p>

      <JournalEntry api={api}></JournalEntry>     
    </main>
  );

 
}
