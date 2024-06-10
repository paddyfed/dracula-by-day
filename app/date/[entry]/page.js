import React from "react";
import DateJournalEntry from "../../components/date-journal-entry";
import styles from "../../page.module.css";
import MainPageNav from "../../components/main-page-nav";
import Heading from "../../components/heading";
import { getData } from "../../utils/apiHelpers";

const api = `${process.env.API_URL}api/journalentries/`;

export async function generateStaticParams() {
  const sourceTypes = await getSourceType();

  return sourceTypes.map((sourceType) => ({
    entry: sourceType,
  }));
}

async function getSourceType() {
  const data = await getData(api);

  const valueArray = data.journalentries.map(
    (source) => `${source.month}-${source.day}`,
  );
  const unique = new Set(valueArray);
  const uniqueArray = [...unique];
  return uniqueArray;
}

export default function EntryPage({ params }) {
  const api = `${process.env.API_URL}api/journalentries/date/${params.entry}`;

  return (
    <>
      <main className={styles.main}>
        <Heading />
        <DateJournalEntry api={api}></DateJournalEntry>
      </main>
      <MainPageNav today={params.entry} />
    </>
  );
}
