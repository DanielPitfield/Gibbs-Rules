import { StaticImageData } from "next/image";
import { ConversationTemplate } from "../../app/Conversation";

// Quote arrays
import { GibbsRules } from "./QuoteArrays/Gibbs";
import { ZivaMisquotes } from "./QuoteArrays/Ziva";
import { TonyQuotes } from "./QuoteArrays/Tony";
import { DuckyQuotes } from "./QuoteArrays/Ducky";
import { AbbyQuotes } from "./QuoteArrays/Abby";
import { KateQuotes } from "./QuoteArrays/Kate";
import { McGeeQuotes } from "./QuoteArrays/McGee";
import { PalmerQuotes } from "./QuoteArrays/Palmer";
import { JennyQuotes } from "./QuoteArrays/Jenny";
import { ShannonRules } from "./QuoteArrays/Shannon";

// Images
import { GibbsImages } from "./ImageObjects/Gibbs";
import { ZivaImages } from "./ImageObjects/Ziva";
import { TonyImages } from "./ImageObjects/Tony";
import { McGeeImages } from "./ImageObjects/McGee";
import { ShannonImages } from "./ImageObjects/Shannon";
import { DuckyImages } from "./ImageObjects/Ducky";
import { JennyImages } from "./ImageObjects/Jenny";
import { FornellImages } from "./ImageObjects/Fornell";
import { LiatImages } from "./ImageObjects/Liat";
import { EliImages } from "./ImageObjects/Eli";
import { BodnarImages } from "./ImageObjects/Bodnar";
import { AbbyImages } from "./ImageObjects/Abby";
import { KateImages } from "./ImageObjects/Kate";
import { SaleemImages } from "./ImageObjects/Saleem";
import { PalmerImages } from "./ImageObjects/Palmer";

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

export const GibbsCharacterMapping: NCISCharacterMapping = {
  person: "Gibbs",
  images: Object.values(GibbsImages),
  array: GibbsRules,
  isPermanentDailyCharacter: true,
};

export const NCISCharacterMappings: NCISCharacterMapping[] = [
  GibbsCharacterMapping,
  { person: "Ziva", images: Object.values(ZivaImages), array: ZivaMisquotes, isPermanentDailyCharacter: true },
  { person: "Kate", images: Object.values(KateImages), array: KateQuotes, isPermanentDailyCharacter: false },
  { person: "Tony", images: Object.values(TonyImages), array: TonyQuotes, isPermanentDailyCharacter: false },
  { person: "McGee", images: Object.values(McGeeImages), array: McGeeQuotes, isPermanentDailyCharacter: false },
  { person: "Abby", images: Object.values(AbbyImages), array: AbbyQuotes, isPermanentDailyCharacter: false },
  { person: "Shannon", images: Object.values(ShannonImages), array: ShannonRules, isPermanentDailyCharacter: false },
  { person: "Ducky", images: Object.values(DuckyImages), array: DuckyQuotes, isPermanentDailyCharacter: false },
  { person: "Palmer", images: Object.values(PalmerImages), array: PalmerQuotes, isPermanentDailyCharacter: false },
  { person: "Jenny", images: Object.values(JennyImages), array: JennyQuotes, isPermanentDailyCharacter: false },
  { person: "Fornell", images: Object.values(FornellImages), array: [], isPermanentDailyCharacter: false },
  { person: "Liat", images: Object.values(LiatImages), array: [], isPermanentDailyCharacter: false },
  { person: "Eli", images: Object.values(EliImages), array: [], isPermanentDailyCharacter: false },
  { person: "Bodnar", images: Object.values(BodnarImages), array: [], isPermanentDailyCharacter: false },
  { person: "Saleem", images: Object.values(SaleemImages), array: [], isPermanentDailyCharacter: false },
];
