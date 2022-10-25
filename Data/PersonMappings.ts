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
import { DuckyImages } from "./Images/Ducky/DuckyImages";
import { JennyImages } from "./Images/Jenny/JennyImages";
import { FornellImages } from "./Images/Fornell/FornellImages";
import { LiatImages } from "./Images/Liat/LiatImages";
import { EliImages } from "./Images/Eli/EliImages";

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
  { person: "Ducky", images: Object.values(DuckyImages), array: [] },
  { person: "Jenny", images: Object.values(JennyImages), array: [] },
  { person: "Fornell", images: Object.values(FornellImages), array: [] },
  { person: "Liat", images: Object.values(LiatImages), array: [] },
  { person: "Eli", images: Object.values(EliImages), array: [] },
];

export const DailyCharactersInfo = PersonMappings.filter((person) => person.array.length > 0);
