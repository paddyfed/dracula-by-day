import Heading from "../components/heading";
import styles from "../page.module.css";
import Link from "next/link";
import { getData } from "../utils/apiHelpers";

const api = `${process.env.API_URL}api/journalentries/`;

export default async function SourcePage() {
  const data = await getData(api);

  if (data.journalentries.length === 0) return `No Data for Today`;

  const valueArray = data.journalentries.map((source) => source.source);
  const unique = new Set(valueArray);
  const uniqueArray = [...unique];

  return (
    <>
      <main className={styles.main}>
        <Heading />
        {uniqueArray.map((entry, index) => {
          return (
            <p key={index}>
              <Link href={`/source/${entry}`}>{entry}</Link>
            </p>
          );
        })}
      </main>
    </>
  );
}
