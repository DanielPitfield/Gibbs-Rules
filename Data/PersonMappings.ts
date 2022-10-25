import { StaticImageData } from "next/image";

import { ConversationTemplate } from "../Components/Conversation";
import { gibbsRules } from "./QuoteArrays/GibbsRules";
import { zivaMisquotes } from "./QuoteArrays/ZivaMisquotes";
import { tonyJokes } from "./QuoteArrays/TonyJokes";
import { GibbsImages } from "./Images/Gibbs/GibbsImages";
import { ZivaImages } from "./Images/Ziva/ZivaImages";
import { TonyImages } from "./Images/Tony/TonyImages";
import { McGeeImages } from "./Images/McGee/McGeeImages";
import { ShannonImages } from "./Images/Shannon/ShannonImages";

export type Person = "Gibbs" | "Ziva" | "Tony" | "McGee" | "Shannon" | "Ducky" | "Jenny" | "Fornell" | "Liat" | "Eli";

export const PersonMappings: {
  person: Person;
  images: { image: StaticImageData; isRandomlySelectable: boolean }[];
  array: ConversationTemplate[];
}[] = [
  { person: "Gibbs", images: Object.values(GibbsImages), array: gibbsRules },
  { person: "Ziva", images: Object.values(ZivaImages), array: zivaMisquotes },
  { person: "Tony", images: Object.values(TonyImages), array: tonyJokes },
  { person: "McGee", images: Object.values(McGeeImages), array: [] },
  { person: "Shannon", images: Object.values(ShannonImages), array: [] },
  { person: "Ducky", images: [], array: [] }, //TODO: Add images
  { person: "Jenny", images: [], array: [] }, //TODO: Add images
  { person: "Fornell", images: [], array: [] }, //TODO: Add images
  { person: "Liat", images: [], array: [] }, //TODO: Add images
  { person: "Eli", images: [], array: [] }, //TODO: Add images
];

export const DailyCharactersInfo = PersonMappings.filter((person) => person.array.length > 0);
