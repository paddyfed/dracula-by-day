import React from "react";
import SourceJournalEntry from "../../components/source-journal-entry";
import styles from "../../page.module.css";
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

  const valueArray = data.journalentries.map((source) => source.sourceType);
  const unique = new Set(valueArray);
  const uniqueArray = [...unique];
  return uniqueArray;
}

export default function EntryPage({ params }) {
  const api = `${process.env.API_URL}api/journalentries/sourcetype/${params.entry}`;

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
