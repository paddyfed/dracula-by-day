import { NextResponse } from "next/server";
import journalentries from "@/json/journalentries.json";
import { dateMinusOneDay } from "@/app/utils/dateHelpers";

export async function GET(request, { params }) {
  const source = params.source;

  const filtered = journalentries.journalentries.filter(
    (entry) => `${entry.source.toLowerCase()}` === source.toLowerCase(),
  );

  const data = await NextResponse.json({ journalentries: filtered });

  return data;
}
