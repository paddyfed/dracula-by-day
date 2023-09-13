'use client'

import styles from '../page.module.css'
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

function getToday(today) {
    return `${today.toLocaleDateString("en-us", { month: "long" })}-${today.toLocaleDateString("en-us", { day: "2-digit" })}`;
  }

export default function MainPageNavAndHeading() {
    const today = getToday(new Date());

    const yesterdayLink = `/${dateMinusOneDay(today)}`;
    const tomorrowLink = `/${datePlusOneDay(today)}`;

    return <div className={styles.navigation}><Link href={yesterdayLink}>Previous Entry</Link><h1>Dracula</h1><Link href={tomorrowLink}>Next Entry</Link></div>
}