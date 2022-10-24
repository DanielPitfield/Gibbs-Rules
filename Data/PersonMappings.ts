import { StaticImageData } from "next/image";
import GibbsImg from "./images/gibbs.jpg";
import ZivaImg from "./images/ziva.jpg";
import TonyImg from "./images/tony.jpg";
import McgeeImg from "./images/mcgee.jpg";

export type Person = "Gibbs" | "Ziva" | "Tony" | "McGee";

export const GibbsImages = {
  DEFAULT: GibbsImg,
};

export const ZivaImages = {
  DEFAULT: ZivaImg,
};

export const TonyImages = {
  DEFAULT: TonyImg,
};

export const McgeeImages = {
  DEFAULT: McgeeImg,
};

export const PersonMappings: { person: Person; images: StaticImageData[] }[] = [
  { person: "Gibbs", images: Object.values(GibbsImages) },
  { person: "Ziva", images: Object.values(ZivaImages) },
  { person: "Tony", images: Object.values(TonyImages) },
  { person: "McGee", images: Object.values(McgeeImages) },
];
