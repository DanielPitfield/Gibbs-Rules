import { StaticImageData } from "next/image";
import { ConversationTemplate } from "../../app/Conversation";

// Quote arrays
import { MartinBrundleQuotes } from "./QuoteArrays/Martin Brundle";
import { MurrayWalkerQuotes } from "./QuoteArrays/Murray Walker";
import { CroftyQuotes } from "./QuoteArrays/Crofty";

// Images
import { MartinBrundleImages } from "./ImageObjects/Martin Brundle";
import { MurrayWalkerImages } from "./ImageObjects/Murray Walker";
import { ChristianHornerImages } from "./ImageObjects/Christian Horner";
import { FelipeNasrImages } from "./ImageObjects/Felipe Nasr";
import { MeganTheeStallionImages } from "./ImageObjects/Megan Thee Stallion";
import { MeganTheeStallionFriendImages } from "./ImageObjects/Megan Thee Stallion Friend";
import { CroftyImages } from "./ImageObjects/Crofty";
import { MaxVerstappenImages } from "./ImageObjects/Max Verstappen";
import { GPImages } from "./ImageObjects/GP";
import { SergioPerezImages } from "./ImageObjects/Sergio Perez";
import { ChristianHornerQuotes } from "./QuoteArrays/Christian Horner";

export type F1Character =
  | "Martin Brundle"
  | "Crofty"
  | "Murray Walker"
  | "Max Verstappen"
  | "Sergio Perez"
  | "Christian Horner"
  | "GP"
  | "Felipe Nasr"
  | "Megan Thee Stallion"
  | "Megan Thee Stallion's Friend";

type F1CharacterMapping = {
  person: F1Character;
  images: { image: StaticImageData; isRandomlySelectable: boolean }[];
  array: ConversationTemplate[];
  isPermanentDailyCharacter: boolean;
};

export const F1CharacterMappings: F1CharacterMapping[] = [
  {
    person: "Martin Brundle",
    images: Object.values(MartinBrundleImages),
    array: MartinBrundleQuotes,
    isPermanentDailyCharacter: true,
  },
  { person: "Crofty", images: Object.values(CroftyImages), array: CroftyQuotes, isPermanentDailyCharacter: true },
  {
    person: "Murray Walker",
    images: Object.values(MurrayWalkerImages),
    array: MurrayWalkerQuotes,
    isPermanentDailyCharacter: false,
  },
  {
    person: "Max Verstappen",
    images: Object.values(MaxVerstappenImages),
    array: [],
    isPermanentDailyCharacter: false,
  },
  {
    person: "Sergio Perez",
    images: Object.values(SergioPerezImages),
    array: [],
    isPermanentDailyCharacter: false,
  },
  {
    person: "Christian Horner",
    images: Object.values(ChristianHornerImages),
    array: ChristianHornerQuotes,
    isPermanentDailyCharacter: false,
  },
  {
    person: "GP",
    images: Object.values(GPImages),
    array: [],
    isPermanentDailyCharacter: false,
  },
  {
    person: "Felipe Nasr",
    images: Object.values(FelipeNasrImages),
    array: [],
    isPermanentDailyCharacter: false,
  },
  {
    person: "Megan Thee Stallion",
    images: Object.values(MeganTheeStallionImages),
    array: [],
    isPermanentDailyCharacter: false,
  },
  {
    person: "Megan Thee Stallion's Friend",
    images: Object.values(MeganTheeStallionFriendImages),
    array: [],
    isPermanentDailyCharacter: false,
  },
];
