import { NextResponse } from "next/server";
import journalentries from '@/json/journalentries.json'


export async function GET(request, { params }) {
    const date = params.date;    

    const filtered = journalentries.journalentries.filter(month => `${month.month.toLowerCase()}${month.day.toLowerCase()}` === date.toLowerCase())

    const data = await NextResponse.json({ journalentries: filtered })

    return data;
}