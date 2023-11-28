import { PersonMapping } from "../app/[[...quoteContext]]/page";
import { F1CharacterMappings } from "./F1/F1CharacterMappings";
import { GibbsCharacterMapping, NCISCharacterMappings } from "./NCIS/NCISCharacterMappings";

export const quoteContexts = ["NCIS", "GIBBS", "F1"] as const;
export type QuoteContext = (typeof quoteContexts)[number];

type QuoteContextMapping = {
  quoteContext: QuoteContext;
  characterMappings: PersonMapping[];
  isSelectable: boolean;
};

export const quoteContextMappings: QuoteContextMapping[] = [
  { quoteContext: "NCIS", characterMappings: NCISCharacterMappings, isSelectable: true },
  { quoteContext: "GIBBS", characterMappings: [GibbsCharacterMapping], isSelectable: false },
  { quoteContext: "F1", characterMappings: F1CharacterMappings, isSelectable: true },
];
