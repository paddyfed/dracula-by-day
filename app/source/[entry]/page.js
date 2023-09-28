import React from "react";
import SourceJournalEntry from "../../components/source-journal-entry";
import styles from "../../page.module.css";
import Heading from "../../components/heading";

export default function EntryPage({ params }) {
  const api = `${process.env.API_URL}api/journalentries/source/${params.entry}`;

  return (
    <>
      <main className={styles.main}>
        <Heading />
        <SourceJournalEntry api={api}></SourceJournalEntry>
      </main>
      {/* <MainPageNav today={params.entry} /> */}
    </>
  );
}
