import React from "react";
import DateJournalEntry from "../components/date-journal-entry";
import Link from "next/link";

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

    return <>
        <p>{api}</p>
        <p><Link href={yesterdayLink}>Yesterday {dateMinusOneDay(params.entry)}</Link></p>
        <p>Today (Params.Entry) {params.entry}</p>
        <p><Link href={tomorrowLink}>Tomorrow {datePlusOneDay(params.entry)}</Link></p>
        <p>getParamMonthNumber {getParamMonthNumber(params.entry)}</p>
        <p>getParamMonth {getParamMonth(params.entry)}</p>
        <p>getParamDay {getParamDay(params.entry)}</p>
        <DateJournalEntry api={api}></DateJournalEntry>
    </>;

}