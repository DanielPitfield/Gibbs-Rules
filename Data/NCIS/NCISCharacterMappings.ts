import { StaticImageData } from "next/image";
import { ConversationTemplate } from "../../app/Conversation";

// Quote arrays
import { gibbsRules } from "./QuoteArrays/GibbsRules";
import { zivaMisquotes } from "./QuoteArrays/ZivaMisquotes";
import { tonyQuotes } from "./QuoteArrays/TonyQuotes";
import { duckyQuotes } from "./QuoteArrays/DuckyQuotes";
import { abbyQuotes } from "./QuoteArrays/AbbyQuotes";
import { kateQuotes } from "./QuoteArrays/KateQuotes";
import { mcGeeQuotes } from "./QuoteArrays/McGeeQuotes";
import { palmerQuotes } from "./QuoteArrays/PalmerQuotes";
import { jennyQuotes } from "./QuoteArrays/JennyQuotes";
import { shannonRules } from "./QuoteArrays/ShannonRules";

// Images
import { GibbsImages } from "./ImageObjects/GibbsImages";
import { ZivaImages } from "./ImageObjects/ZivaImages";
import { TonyImages } from "./ImageObjects/TonyImages";
import { McGeeImages } from "./ImageObjects/McGeeImages";
import { ShannonImages } from "./ImageObjects/ShannonImages";
import { DuckyImages } from "./ImageObjects/DuckyImages";
import { JennyImages } from "./ImageObjects/JennyImages";
import { FornellImages } from "./ImageObjects/FornellImages";
import { LiatImages } from "./ImageObjects/LiatImages";
import { EliImages } from "./ImageObjects/EliImages";
import { BodnarImages } from "./ImageObjects/BodnarImages";
import { AbbyImages } from "./ImageObjects/AbbyImages";
import { KateImages } from "./ImageObjects/KateImages";
import { SaleemImages } from "./ImageObjects/SaleemImages";
import { PalmerImages } from "./ImageObjects/PalmerImages";

export type NCISCharacter =
  | "Gibbs"
  | "Ziva"
  | "Kate"
  | "Tony"
  | "McGee"
  | "Abby"
  | "Shannon"
  | "Ducky"
  | "Palmer"
  | "Jenny"
  | "Fornell"
  | "Liat"
  | "Eli"
  | "Bodnar"
  | "Saleem";

type NCISCharacterMapping = {
  person: NCISCharacter;
  images: { image: StaticImageData; isRandomlySelectable: boolean }[];
  array: ConversationTemplate[];
  isPermanentDailyCharacter: boolean;
};

export const NCISCharacterMappings: NCISCharacterMapping[] = [
  { person: "Gibbs", images: Object.values(GibbsImages), array: gibbsRules, isPermanentDailyCharacter: true },
  { person: "Ziva", images: Object.values(ZivaImages), array: zivaMisquotes, isPermanentDailyCharacter: true },
  { person: "Kate", images: Object.values(KateImages), array: kateQuotes, isPermanentDailyCharacter: false },
  { person: "Tony", images: Object.values(TonyImages), array: tonyQuotes, isPermanentDailyCharacter: false },
  { person: "McGee", images: Object.values(McGeeImages), array: mcGeeQuotes, isPermanentDailyCharacter: false },
  { person: "Abby", images: Object.values(AbbyImages), array: abbyQuotes, isPermanentDailyCharacter: false },
  { person: "Shannon", images: Object.values(ShannonImages), array: shannonRules, isPermanentDailyCharacter: false },
  { person: "Ducky", images: Object.values(DuckyImages), array: duckyQuotes, isPermanentDailyCharacter: false },
  { person: "Palmer", images: Object.values(PalmerImages), array: palmerQuotes, isPermanentDailyCharacter: false },
  { person: "Jenny", images: Object.values(JennyImages), array: jennyQuotes, isPermanentDailyCharacter: false },
  { person: "Fornell", images: Object.values(FornellImages), array: [], isPermanentDailyCharacter: false },
  { person: "Liat", images: Object.values(LiatImages), array: [], isPermanentDailyCharacter: false },
  { person: "Eli", images: Object.values(EliImages), array: [], isPermanentDailyCharacter: false },
  { person: "Bodnar", images: Object.values(BodnarImages), array: [], isPermanentDailyCharacter: false },
  { person: "Saleem", images: Object.values(SaleemImages), array: [], isPermanentDailyCharacter: false },
];