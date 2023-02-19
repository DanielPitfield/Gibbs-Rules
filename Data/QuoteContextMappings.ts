import { PersonMapping } from "../app/[[...quoteContext]]/page";
import { F1CharacterMappings } from "./F1/F1CharacterMappings";
import { NCISCharacterMappings } from "./NCIS/NCISCharacterMappings";

export const quoteContexts = ["NCIS" , "F1"] as const;
export type QuoteContext = typeof quoteContexts[number] ;

type QuoteContextMapping = {
  quoteContext: QuoteContext;
  characterMappings: PersonMapping[];
};

export const quoteContextMappings: QuoteContextMapping[] = [
  { quoteContext: "NCIS", characterMappings: NCISCharacterMappings },
  { quoteContext: "F1", characterMappings: F1CharacterMappings },
];
