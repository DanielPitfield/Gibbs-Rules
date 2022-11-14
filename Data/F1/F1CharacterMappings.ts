import { StaticImageData } from "next/image";
import { ConversationTemplate } from "../../app/Conversation";

// Quote arrays
import { MartinBrundleQuotes } from "./QuoteArrays/Martin Brundle";

// Images
import { MartinBrundleImages } from "./ImageObjects/Martin Brundle";
import { ChristianHornerImages } from "./ImageObjects/Christian Horner";
import { MeganTheeStallionImages } from "./ImageObjects/Megan Thee Stallion";
import { MeganTheeStallionFriendImages } from "./ImageObjects/Megan Thee Stallion Friend";

export type F1Character =
  | "Martin Brundle"
  | "Crofty"
  | "Christian Horner"
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
  { person: "Crofty", images: Object.values([]), array: [], isPermanentDailyCharacter: true },
  {
    person: "Christian Horner",
    images: Object.values(ChristianHornerImages),
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
