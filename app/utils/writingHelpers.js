import {
  Dancing_Script,
  Great_Vibes,
  Sacramento,
  Cookie,
  Alex_Brush,
  Marck_Script,
  Satisfy,
  Courier_Prime,
} from "next/font/google";

const mina_handwriting = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
});
const lucy_handwriting = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const quincey_handwriting = Sacramento({ subsets: ["latin"], weight: ["400"] });
const arthur_handwriting = Alex_Brush({ subsets: ["latin"], weight: ["400"] });
const john_handwriting = Marck_Script({ subsets: ["latin"], weight: ["400"] });
const abraham_handwriting = Satisfy({ subsets: ["latin"], weight: ["400"] });
const default_typewriter = Courier_Prime({
  subsets: ["latin"],
  weight: ["400"],
});
const sisteragatha_handwriting = Cookie({
  subsets: ["latin"],
  weight: ["400"],
});

export function getHandwriting(entry) {
  switch (entry.author) {
    case "Mina":
      return mina_handwriting.className;
    case "Lucy":
      return lucy_handwriting.className;
    case "Quincey":
      return quincey_handwriting.className;
    case "Arthur":
      return arthur_handwriting.className;
    case "John":
      return john_handwriting.className;
    case "Abraham":
      return abraham_handwriting.className;
    case "SisterAgatha":
      return sisteragatha_handwriting.className;
    default:
      return default_typewriter.className;
  }
}
