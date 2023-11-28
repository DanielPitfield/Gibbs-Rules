import "./styles/index.scss";
import { useMemo } from "react";
import { QuoteContext, quoteContextMappings } from "../Data/QuoteContextMappings";
import { getRandomArrayItems } from "../Helpers/DeterministicSeeding";
import { Person, PersonMapping } from "./[[...quoteContext]]/page";
import Conversation, { ConversationTemplate } from "./Conversation";

interface ConversationSectionProps {
  selectedQuoteContext: QuoteContext;
  setSelectedQuoteContext: (selectedQuoteContext: QuoteContext) => void;
  isDeterministic: boolean;
  areRulesSorted: boolean;
  refresh: boolean;
}

// How many quotes/characters to show?
const NUM_QUOTES = 3;

const ConversationSection = (props: ConversationSectionProps) => {
  // Get the characters to be displayed every time the quoteContext changes (or on a refresh)
  const displayedCharacters = useMemo(() => {
    const characterMappings = quoteContextMappings.find(
      (mapping) => mapping.quoteContext === props.selectedQuoteContext
    )?.characterMappings;

    // Gibbs is the only character for the "Gibbs" quote context!
    if (props.selectedQuoteContext === "GIBBS") {
      return characterMappings ?? [];
    }

    const permanentCharacterMappings =
      characterMappings?.filter((person) => person.isPermanentDailyCharacter && person.array.length > 0) ?? [];

    const temporaryCharacterMappings =
      characterMappings?.filter((person) => !person.isPermanentDailyCharacter && person.array.length > 0) ?? [];

    // Already have enough (or more than enough) characters to show
    if (permanentCharacterMappings.length >= NUM_QUOTES) {
      return permanentCharacterMappings.slice(0, NUM_QUOTES);
    }

    // How many more temporary characters are required?
    const numTemporaryCharacters = Math.abs(NUM_QUOTES - permanentCharacterMappings.length);

    const chosenTemporaryCharacterMappings: PersonMapping[] = getRandomArrayItems(
      temporaryCharacterMappings,
      numTemporaryCharacters,
      props.isDeterministic
    );

    return permanentCharacterMappings.concat(chosenTemporaryCharacterMappings);
  }, [props.selectedQuoteContext, props.refresh]);

  // Get a quote to display for each of the displayed characters (that have been chosen)
  const displayedQuotes: { person: Person; conversation: ConversationTemplate }[] = useMemo(() => {
    // If Gibbs is the only character
    // TODO: Remove checking for Gibbs and perhaps this could be done for any person/character?
    if (displayedCharacters.length === 1 && displayedCharacters[0].person === "Gibbs") {
      // Show all his rules!
      return displayedCharacters[0].array
        .slice()
        .sort((a, b) => {
          if (!props.areRulesSorted) {
            return 0;
          }

          return (a[0].flair ?? "").localeCompare(b[0].flair ?? "");
        })
        .map((conversation) => ({
          person: "Gibbs",
          conversation,
        }));
    }

    return displayedCharacters.map((mapping) => ({
      person: mapping.person,
      conversation: getRandomArrayItems(mapping.array, 1, props.isDeterministic)[0],
    }));
  }, [displayedCharacters, props.areRulesSorted]);

  // Is there only quote(s) from one character being shown (e.g. Gibbs)?
  const isOnlyCharacter = displayedCharacters.length === 1;

  return (
    <section className="conversations">
      {displayedQuotes.map((quote, index) => {
        return (
          <Conversation
            key={index}
            // Ensures conversation/quotes have the same background colour if there is only one character
            position={isOnlyCharacter ? 1 : index + 1}
            person={quote.person}
            conversation={quote.conversation}
            // Pass through whether this is the only character (need to know for slightly different styling of the quotes)
            isOnlyCharacter={isOnlyCharacter}
            context={props.selectedQuoteContext}
            setContext={props.setSelectedQuoteContext}
            // Only show the title and image for conversation/quotes when there are several characters being shown
            showTitle={!isOnlyCharacter}
            showImage={!isOnlyCharacter}
          />
        );
      })}
    </section>
  );
};

export default ConversationSection;
