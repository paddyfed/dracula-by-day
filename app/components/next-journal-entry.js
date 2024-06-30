"use client";

import React from "react";
import useSWR from "swr";
import Spinner from "./spinner";
import { getToday } from "../utils/dateHelpers";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function NextJournalEntry({ api }) {
  const today = getToday(new Date());
  const todayApi = `${api}${today}`;
  const { data, error, isLoading } = useSWR(todayApi, fetcher);

  if (error) return "An error has occurred.";
  if (isLoading) return <Spinner />;
  if (data.journalentries.length === 0) return `No Data for ${today}`;

  return (
    <>
      {`Next entry will be on ${data.journalentries[0].month} ${data.journalentries[0].day}`}
    </>
  );
}
