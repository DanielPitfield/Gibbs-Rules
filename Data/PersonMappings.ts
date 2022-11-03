import { StaticImageData } from "next/image";

import { ConversationTemplate } from "../app/Conversation";

// Quote arrays
import { gibbsRules } from "./QuoteArrays/GibbsRules";
import { zivaMisquotes } from "./QuoteArrays/ZivaMisquotes";
import { tonyJokes } from "./QuoteArrays/TonyJokes";
import { duckyQuotes } from "./QuoteArrays/DuckyQuotes";

// Images
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
import { BodnarImages } from "./Images/Bodnar/BodnarImages";

export type Person =
  | "Gibbs"
  | "Ziva"
  | "Tony"
  | "McGee"
  | "Shannon"
  | "Ducky"
  | "Jenny"
  | "Fornell"
  | "Liat"
  | "Eli"
  | "Bodnar";

export type PersonMapping = {
  person: Person;
  images: { image: StaticImageData; isRandomlySelectable: boolean }[];
  array: ConversationTemplate[];
  isPermanentDailyCharacter: boolean;
};

export const PersonMappings: PersonMapping[] = [
  { person: "Gibbs", images: Object.values(GibbsImages), array: gibbsRules, isPermanentDailyCharacter: true },
  { person: "Ziva", images: Object.values(ZivaImages), array: zivaMisquotes, isPermanentDailyCharacter: true },
  { person: "Tony", images: Object.values(TonyImages), array: tonyJokes, isPermanentDailyCharacter: false },
  { person: "McGee", images: Object.values(McGeeImages), array: [], isPermanentDailyCharacter: false },
  { person: "Shannon", images: Object.values(ShannonImages), array: [], isPermanentDailyCharacter: false },
  { person: "Ducky", images: Object.values(DuckyImages), array: duckyQuotes, isPermanentDailyCharacter: false },
  { person: "Jenny", images: Object.values(JennyImages), array: [], isPermanentDailyCharacter: false },
  { person: "Fornell", images: Object.values(FornellImages), array: [], isPermanentDailyCharacter: false },
  { person: "Liat", images: Object.values(LiatImages), array: [], isPermanentDailyCharacter: false },
  { person: "Eli", images: Object.values(EliImages), array: [], isPermanentDailyCharacter: false },
  { person: "Bodnar", images: Object.values(BodnarImages), array: [], isPermanentDailyCharacter: false },
];

// These characters are always shown every day
export const permanentDailyCharacterMappings = PersonMappings.filter(
  (person) => person.isPermanentDailyCharacter && person.array.length > 0
);

// These characters each have an equal chance of appearing as additional characters
export const temporaryDailyCharacterMappings = PersonMappings.filter(
  (person) => !person.isPermanentDailyCharacter && person.array.length > 0
);
