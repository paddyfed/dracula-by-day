import React from "react";
import EntryText from "./entry-text";
import Link from "next/link";

async function getData(api) {
    const res = await fetch(api);

    if(!res.ok) {
        throw new Error("Failed to fetch data");

    }

    return res.json();
}

export default async function DateJournalEntry({ api }) {

    const data = await getData(api);

    // if (data.journalentries.length === 0) return (`No Data for Today`);

    return <><h2>{data.journalentries[0].month} {data.journalentries[0].day}</h2>
    {data.journalentries.map((entry) => {
      return <EntryText key={entry.id} entry={entry} />
    })}
    </>
}