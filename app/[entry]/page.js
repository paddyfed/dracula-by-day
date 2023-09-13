import React from "react";
import DateJournalEntry from "../components/date-journal-entry";
import Link from "next/link";
import styles from '../page.module.css'


function getParamDay(date) {
    return +date.split('-')[1];
}

function getParamMonth(date) {
    return date.split('-')[0];
}

function getParamMonthNumber(date) {
    const month = getParamMonth(date);
    return +(new Date(Date.parse(month + " 1, 1890")).getMonth());
}

function dateMinusOneDay(date) {
    const today = new Date(1890, getParamMonthNumber(date), getParamDay(date) - 1);
    return `${today.toLocaleDateString("en-us", { month: "long" })}-${today.toLocaleDateString("en-us", { day: "2-digit" })}`
}

function datePlusOneDay(date) {
    const today = new Date(1890, getParamMonthNumber(date), getParamDay(date) + 1);
    return `${today.toLocaleDateString("en-us", { month: "long" })}-${today.toLocaleDateString("en-us", { day: "2-digit" })}`
}

export default function EntryPage({ params }) {
    const api = `${process.env.API_URL}api/journalentries/${params.entry}`;
    const yesterdayLink = `/${dateMinusOneDay(params.entry)}`;
    const tomorrowLink = `/${datePlusOneDay(params.entry)}`;

    return <main className={styles.main}>
        <div className={styles.navigation}><Link href={yesterdayLink}>Previous Entry</Link><h1>Dracula</h1><Link href={tomorrowLink}>Next Entry</Link></div>
        
        <p>by</p>
        <p>Bram Stoker</p>
        <p>How these papers have been placed in sequence will be made manifest in the reading of them. All needless matters have been eliminated, so that a history almost at variance with the possibilities of later-day belief may stand forth as simple fact. There is throughout no statement of past things wherein memory may err, for all the records chosen are exactly contemporary, given from the standpoints and within the range of knowledge of those who made them.</p>

        <DateJournalEntry api={api}></DateJournalEntry>
    </main>
}