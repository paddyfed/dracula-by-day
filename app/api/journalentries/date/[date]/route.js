import { NextResponse } from "next/server";
import journalentries from "@/json/journalentries.json";
import { dateMinusOneDay } from "@/app/utils/dateHelpers";

// function getLatestJournalEntries()

function getLatestJournalEntries(date, filtered) {
  // if filtered has some results then return it
  if (filtered.length !== 0) {
    return filtered;
  }

  filtered = journalentries.journalentries.filter(
    (entry) =>
      `${entry.month.toLowerCase()}-${entry.day.toLowerCase()}` ===
      date.toLowerCase(),
  );

  // if we get here then filtered has no results
  // so we need to parse the date so that we can minus 1 day from it
  // and then recursively call getLatestJournalEntries with the updated date
  // and the latest filtered results
  const yesterday = dateMinusOneDay(date);

  return (filtered = getLatestJournalEntries(yesterday, filtered));
}

export async function GET(request, props) {
  const params = await props.params;
  const date = params.date;

  let filtered = [];
  filtered = getLatestJournalEntries(date, filtered);

  const data = await NextResponse.json({ journalentries: filtered });

  return data;
}
