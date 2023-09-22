import Heading from "../components/heading";
import styles from "../page.module.css";
import Link from "next/link";

export default function SourcePage() {
  return (
    <>
      <main className={styles.main}>
        <Heading />
        <Link href={"/source/Jonathan%20Harker’s%20Journal."}>
          Jonathan's Journal
        </Link>
        <Link href={"/source/Mina%20Harker’s%20Journal."}>Mina's Journal</Link>
        <Link href={"/source/Dr.%20Seward’s%20Diary."}>Dr Seward's Diary</Link>
      </main>
    </>
  );
}
