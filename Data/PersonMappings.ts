import { StaticImageData } from "next/image";
import GibbsImg from "./images/gibbs.jpg";
import ZivaImg from "./images/ziva.jpg";
import TonyImg from "./images/tony.jpg";
import McgeeImg from "./images/mcgee.jpg";

export type Person = "Gibbs" | "Ziva" | "Tony" | "McGee";

export const PersonMappings: { person: Person; images: StaticImageData[] }[] = [
  { person: "Gibbs", images: [GibbsImg] },
  { person: "Ziva", images: [ZivaImg] },
  { person: "Tony", images: [TonyImg] },
  { person: "McGee", images: [McgeeImg] },
];
