import { PersonMapping } from "../app/page";
import { F1CharacterMappings } from "./F1/F1CharacterMappings";
import { NCISCharacterMappings } from "./NCIS/NCISCharacterMappings";

export type QuoteContext = "NCIS" | "F1";

type QuoteContextMapping = {
  quoteContext: QuoteContext;
  characterMappings: PersonMapping[];
};

export const quoteContextMappings: QuoteContextMapping[] = [
  { quoteContext: "NCIS", characterMappings: NCISCharacterMappings },
  { quoteContext: "F1", characterMappings: F1CharacterMappings},
];
