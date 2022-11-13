import { StaticImageData } from "next/image";
import { ConversationTemplate } from "../../app/Conversation";

// Quote arrays
import { martinQuotes } from "./QuoteArrays/MartinQuotes";

// Images
import { MartinImages } from "./ImageObjects/MartinImages";

export type F1Character = "Martin" | "Crofty";

type F1CharacterMapping = {
  person: F1Character;
  images: { image: StaticImageData; isRandomlySelectable: boolean }[];
  array: ConversationTemplate[];
  isPermanentDailyCharacter: boolean;
};

export const F1CharacterMappings: F1CharacterMapping[] = [
  { person: "Martin", images: Object.values(MartinImages), array: martinQuotes, isPermanentDailyCharacter: true },
  { person: "Crofty", images: Object.values([]), array: [], isPermanentDailyCharacter: true },
];
