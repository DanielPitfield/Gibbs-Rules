import { PersonQuoteMappings, QuoteTemplate } from "../Data/PersonQuoteMappings";
import { getDeterministicArrayItems } from "../Helpers/DeterministicSeeding";

export type Person = "Gibbs" | "Ziva" | "Tony";

interface QuoteProps {
  person: Person;
  showImage: boolean;
}

const Quote = (props: QuoteProps) => {
  // Get all the quotes of the specified person
  const personQuotes: QuoteTemplate[] | undefined = PersonQuoteMappings.find(
    (mapping) => props.person === mapping.person
  )?.array;

  if (!personQuotes) {
    return;
  }

  // Get the determinstic quote
  const dailyQuote: QuoteTemplate = getDeterministicArrayItems(1, personQuotes)[0];

  console.log(dailyQuote);
};

export default Quote;
