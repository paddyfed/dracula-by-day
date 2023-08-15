import { NextResponse } from "next/server";
import journalentries from '@/json/journalentries.json'


export async function GET() {
    return NextResponse.json({ journalentries: journalentries.journalentries })
}