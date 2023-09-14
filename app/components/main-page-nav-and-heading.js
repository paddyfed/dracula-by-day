'use client'

import styles from '../page.module.css'
import Link from "next/link";
import { getToday, dateMinusOneDay, datePlusOneDay } from '../utils/dateHelpers';

export default function MainPageNavAndHeading() {
    const today = getToday(new Date());

    const yesterdayLink = `/${dateMinusOneDay(today)}`;
    const tomorrowLink = `/${datePlusOneDay(today)}`;

    return <div className={styles.navigation}><Link href={yesterdayLink}>Previous Entry</Link><Link href={tomorrowLink}>Next Entry</Link></div>
}