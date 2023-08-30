import { NextResponse } from "next/server";
import journalentries from '@/json/journalentries.json'

// function getLatestJournalEntries()

function getParamDay(date) {
    return date.split('-')[1];
}

function getParamMonth(date) {
    return date.split('-')[0];
}

function getParamMonthNumber(date) {
    const month = getParamMonth(date);
    return new Date(Date.parse(month + "1, 1890")).getMonth();
}

function dateMinusOneDay(date) {
    const today = new Date(1890,getParamMonthNumber(date),getParamDay(date)-1);
    return `${today.toLocaleDateString("en-us",{ month: "long"})}-${today.toLocaleDateString("en-us",{ day: "2-digit"})}`
}

function getLatestJournalEntries(date, filtered) {
    
    // if filtered has some results then return it
    if(filtered.length !== 0) {
        return filtered;
    }
    
    filtered = journalentries.journalentries.filter(month => `${month.month.toLowerCase()}-${month.day.toLowerCase()}` === date.toLowerCase())

    // if we get here then filtered has no results
    // so we need to parse the date so that we can minus 1 day from it
    // and then recursively call getLatestJournalEntries with the updated date
    // and the latest filtered results
    const yesterday = dateMinusOneDay(date);

    return filtered = getLatestJournalEntries(yesterday, filtered);    
}

export async function GET(request, { params }) {
    const date = params.date;
    
    let filtered = [];
    filtered = getLatestJournalEntries(date, filtered);
    
    const data = await NextResponse.json({ journalentries: filtered })

    return data;
}