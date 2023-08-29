'use client'

import React from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

function getToday() {
    const today = new Date();
  
    return `${today.toLocaleDateString("en-us",{ month: "long"})}-${today.toLocaleDateString("en-us",{ day: "2-digit"})}`;
  }

export default function JournalEntry({ api }) {
    const today = getToday();
    const todayApi = `${api}${today}`
    const { data, error, isLoading } = useSWR(
        todayApi,
        fetcher
    );

    if (error) return ("An error has occurred.");
    if (isLoading) return("Loading... ");
    // if (data.journalentries.length() === 0) return ("No data");

    return <>{data.journalentries.map((d) => {
        return <>
          <h2 key={d.id}>{d.month} {d.day}</h2>
          <p key={d.index}>{d.entry}</p>
        </>
      })}</>
}