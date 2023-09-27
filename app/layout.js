import "./globals.css";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import Image from "next/image";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dracula by Day",
  description: "Events of Dracula day by day",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="header">
          <nav>
            <ul>
              <li>
                <Link href={"/source"}>Sources</Link>
              </li>
              <li>
                <Link href="/">
                  <Image
                    src="/Vampire_icon-icons-com_75033.png"
                    width={32}
                    height={32}
                    alt="Dracula"
                  />
                </Link>
              </li>
              <li>
                <Link href={"/sourcetype"}>Source Type</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
