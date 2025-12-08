import { NextResponse } from "next/server";
import journalentries from "@/json/journalentries.json";
import { getParamMonthNumber } from "@/app/utils/dateHelpers";

export async function GET(request, props) {
  const params = await props.params;
  const sourcetype = params.sourcetype;

  const filtered = journalentries.journalentries
    .filter(
      (entry) =>
        `${entry.sourceType.toLowerCase()}` === sourcetype.toLowerCase(),
    )
    .sort((a, b) => {
      if (getParamMonthNumber(a.month) > getParamMonthNumber(b.month)) {
        return 1;
      }
      if (getParamMonthNumber(a.month) < getParamMonthNumber(b.month)) {
        return -1;
      }
      if (+a.day > +b.day) {
        return 1;
      }
      if (+a.day < +b.day) {
        return -1;
      }
      return 0;
    });

  const data = await NextResponse.json({ journalentries: filtered });

  return data;
}
