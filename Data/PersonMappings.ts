import { StaticImageData } from "next/image";

import { ConversationTemplate } from "../Components/Conversation";
import { gibbsRules } from "./QuoteArrays/GibbsRules";
import { zivaMisquotes } from "./QuoteArrays/ZivaMisquotes";
import { tonyJokes } from "./QuoteArrays/TonyJokes";

// TODO: Import all from folder statically?
import GibbsImg1 from "./images/Gibbs/default.jpg";
import GibbsImg2 from "./images/Gibbs/sniper.png";
import GibbsImg3 from "./images/Gibbs/family.jpg"

import ZivaImg1 from "./images/Ziva/default.jpg";

import TonyImg1 from "./images/Tony/default.jpg";

import McGeeImg1 from "./images/McGee/default.jpg";

import ShannonImg1 from "./Images/Shannon/default.png";

export type Person = "Gibbs" | "Ziva" | "Tony" | "McGee" | "Shannon" | "Ducky" | "Jenny" | "Fornell" | "Liat" | "Eli";

// TODO: Property name derived from file name?
// TODO: Can the image be randomly selected or is just imported to be used for speicfic quotes?
export const GibbsImages = {
  DEFAULT: GibbsImg1,
  SNIPER: GibbsImg2,
  FAMILY: GibbsImg3,
};

export const ZivaImages = {
  DEFAULT: ZivaImg1,
};

export const TonyImages = {
  DEFAULT: TonyImg1,
};

export const McGeeImages = {
  DEFAULT: McGeeImg1,
};

export const ShannonImages = {
  DEFAULT: ShannonImg1,
};

// TODO: Exporting object literals and arrays?
export const PersonMappings: { person: Person; images: StaticImageData[]; array: ConversationTemplate[] }[] = [
  { person: "Gibbs", images: Object.values(GibbsImages), array: gibbsRules },
  { person: "Ziva", images: Object.values(ZivaImages), array: zivaMisquotes },
  { person: "Tony", images: Object.values(TonyImages), array: tonyJokes },
  { person: "McGee", images: Object.values(McGeeImages), array: [] },
  { person: "Shannon", images: Object.values(ShannonImages), array: [] },
  { person: "Ducky", images: [], array: [] },
];

export const DailyCharactersInfo = PersonMappings.filter((person) => person.array.length > 0);
