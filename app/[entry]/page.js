import React from "react";
import DateJournalEntry from "../components/date-journal-entry";
import styles from '../page.module.css'
import MainPageNav from "../components/main-page-nav";
import Heading from "../components/heading";

export default function EntryPage({ params }) {
    const api = `${process.env.API_URL}api/journalentries/${params.entry}`;

    return <>
        <main className={styles.main}>
            <Heading />
            <DateJournalEntry api={api}></DateJournalEntry>
        </main>
        <MainPageNav today={params.entry} />
    </>
}