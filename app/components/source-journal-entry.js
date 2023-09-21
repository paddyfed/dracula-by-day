import React from "react";
import EntryText from "./entry-text";
import { getData } from "../utils/apiHelpers";

export default async function SourceJournalEntry({ api }) {

    const data = await getData(api);

    if (data.journalentries.length === 0) return (`No Data for Today`);

    return <>
    {data.journalentries.map((entry) => {
      return <><h2 key={entry.id}>{entry.month} {entry.day}</h2><EntryText key={entry.id} entry={entry} /></>
    })}
    </>
}