import { StaticImageData } from "next/image";
import GibbsImg from "./images/gibbs.jpg";
import ZivaImg from "./images/ziva.jpg";
import TonyImg from "./images/tony.jpg";
import McgeeImg from "./images/mcgee.jpg";
import { ConversationTemplate } from "../Components/Conversation";
import { gibbsRules } from "./QuoteArrays/GibbsRules";
import { zivaMisquotes } from "./QuoteArrays/ZivaMisquotes";
import { tonyJokes } from "./QuoteArrays/TonyJokes";

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

export const PersonMappings: { person: Person; images: StaticImageData[]; array: ConversationTemplate[] }[] = [
  { person: "Gibbs", images: Object.values(GibbsImages), array: gibbsRules },
  { person: "Ziva", images: Object.values(ZivaImages), array: zivaMisquotes },
  { person: "Tony", images: Object.values(TonyImages), array: tonyJokes },
  { person: "McGee", images: Object.values(McgeeImages), array: [] },
];

export const DailyCharactersInfo = PersonMappings.filter((person) => person.array.length > 0);
