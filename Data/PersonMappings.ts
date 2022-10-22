import { StaticImageData } from "next/image";
import GibbsImg from "./images/gibbs.jpg";
import ZivaImg from "./images/ziva.jpg";
import TonyImg from "./images/tony.jpg";

export type Person = "Gibbs" | "Ziva" | "Tony" | "McGee";

export const PersonMappings: { person: Person; image: StaticImageData }[] = [
  { person: "Gibbs", image: GibbsImg },
  { person: "Ziva", image: ZivaImg },
  { person: "Tony", image: TonyImg },
];
