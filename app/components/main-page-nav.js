"use client";

import styles from "../page.module.css";
import Link from "next/link";
import {
  getToday,
  dateMinusOneDay,
  datePlusOneDay,
} from "../utils/dateHelpers";

export default function MainPageNav({ today = getToday(new Date()) }) {
  // const today = getToday(new Date());

  const yesterdayLink = `/date/${dateMinusOneDay(today)}`;
  const tomorrowLink = `/date/${datePlusOneDay(today)}`;

  return (
    <div className={styles.navigation}>
      <Link href={yesterdayLink}>
        {dateMinusOneDay(today).replace("-", " ")}
      </Link>
      <Link href={tomorrowLink}>{datePlusOneDay(today).replace("-", " ")}</Link>
    </div>
  );
}
