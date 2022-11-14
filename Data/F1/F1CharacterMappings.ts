import { StaticImageData } from "next/image";
import { ConversationTemplate } from "../../app/Conversation";

// Quote arrays
import { martinBrundleQuotes } from "./QuoteArrays/MartinBrundleQuotes";

// Images
import { MartinBrundleImages } from "./ImageObjects/MartinBrundleImages";
import { ChristianHornerImages } from "./ImageObjects/ChristianHornerImages";
import { MeganTheeStallionImages } from "./ImageObjects/MeganTheeStallionImages";
import { MeganTheeStallionFriendImages } from "./ImageObjects/MeganTheeStallionFriendImages";

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
    array: martinBrundleQuotes,
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
