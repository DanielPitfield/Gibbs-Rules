import { StaticImageData } from "next/image";
import { ConversationTemplate } from "../../app/Conversation";

// Quote arrays
import { martinQuotes } from "./QuoteArrays/MartinQuotes";

// Images
import { MartinImages } from "./ImageObjects/MartinImages";
import { MeganTheeStallionImages } from "./ImageObjects/MeganTheeStallionImages";
import { MeganTheeStallionFriendImages } from "./ImageObjects/MeganTheeStallionFriendImages";

export type F1Character = "Martin" | "Crofty" | "MeganTheeStallion" | "MeganTheeStallion's Friend";

type F1CharacterMapping = {
  person: F1Character;
  images: { image: StaticImageData; isRandomlySelectable: boolean }[];
  array: ConversationTemplate[];
  isPermanentDailyCharacter: boolean;
};

export const F1CharacterMappings: F1CharacterMapping[] = [
  { person: "Martin", images: Object.values(MartinImages), array: martinQuotes, isPermanentDailyCharacter: true },
  { person: "Crofty", images: Object.values([]), array: [], isPermanentDailyCharacter: true },
  {
    person: "MeganTheeStallion",
    images: Object.values(MeganTheeStallionImages),
    array: [],
    isPermanentDailyCharacter: false,
  },
  {
    person: "MeganTheeStallion's Friend",
    images: Object.values(MeganTheeStallionFriendImages),
    array: [],
    isPermanentDailyCharacter: false,
  },
];
