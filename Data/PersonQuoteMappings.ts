import { Person } from "../Components/Quote";
import { GibbsRule, gibbsRules } from "./GibbsRules";
import { TonyJoke, tonyJokes } from "./TonyJokes";
import { ZivaMisquote, zivaMisquotes } from "./ZivaMisquotes";

type Quote = GibbsRule | ZivaMisquote | TonyJoke;

type PersonQuoteMapping = {
  person: Person;
  imagePath: string;
  array: Quote[];
};

export const PersonQuoteMappings: PersonQuoteMapping[] = [
  { person: "Gibbs", imagePath: "", array: gibbsRules },
  { person: "Ziva", imagePath: "", array: zivaMisquotes },
  { person: "Tony", imagePath: "", array: tonyJokes },
];
