"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { NCISCharacter } from "../../Data/NCIS/NCISCharacterMappings";
import Conversation, { ConversationTemplate } from "../Conversation";
import { useEffect, useMemo, useState } from "react";
import { getRandomArrayItems } from "../../Helpers/DeterministicSeeding";
import HelpInformation from "../HelpInformation";
import { NavBar } from "../NavBar";
import { StaticImageData } from "next/image";
import { F1Character } from "../../Data/F1/F1CharacterMappings";
import { QuoteContext, quoteContextMappings, quoteContexts } from "../../Data/QuoteContextMappings";

import "../../public/styles/index.scss";

// How many quotes/characters to show?
const NUM_QUOTES = 3;

export type Person = NCISCharacter | F1Character;

export type PersonMapping = {
  person: Person;
  images: { image: StaticImageData; isRandomlySelectable: boolean }[];
  array: ConversationTemplate[];
  isPermanentDailyCharacter: boolean;
};

const Page = () => {
  const router = useRouter();

  // Optional catch all routes
  const searchParams = useSearchParams();
  const quoteContextParam = searchParams.get("")?.toString().toUpperCase() ?? "";

  // Check dynamic segment is a valid QuoteContext, if not use the fallback value of "NCIS"
  const defaultQuoteContext: QuoteContext = quoteContexts.includes(quoteContextParam)
    ? (quoteContextParam as QuoteContext)
    : "NCIS";

  const [selectedQuoteContext, setSelectedQuoteContext] = useState<QuoteContext>(defaultQuoteContext);
  const [isDeterministic, setIsDeterministic] = useState(true);
  const [isHelpInfoShown, setIsHelpInfoShown] = useState(false);
  const [refresh, setRefresh] = useState(false);

  // On change of the selectedQuoteContext, update the URL path
  useEffect(() => {
    // Already at the correct URL path
    if (quoteContextParam === selectedQuoteContext) {
      return;
    }

    // TODO: Changing the context, still the bug of the pictures changing
    router.replace(`?=${selectedQuoteContext}`);
  }, [selectedQuoteContext]);

  // Get the characters to be displayed every time the quoteContext changes (or on a refresh)
  const displayedCharacters = useMemo(() => {
    const characterMappings = quoteContextMappings.find(
      (mapping) => mapping.quoteContext === selectedQuoteContext
    )?.characterMappings;

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
      isDeterministic
    );

    return permanentCharacterMappings.concat(chosenTemporaryCharacterMappings);
  }, [selectedQuoteContext, refresh]);

  // Get a quote to display for each of the displayed characters (that have been chosen)
  const displayedQuotes = useMemo(() => {
    return displayedCharacters.map((mapping) => ({
      person: mapping.person,
      conversation: getRandomArrayItems(mapping.array, 1, isDeterministic)[0],
    }));
  }, [displayedCharacters]);

  const formattedDate = new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "2-digit" });

  return (
    <main>
      <NavBar
        formattedDate={formattedDate}
        onChangeQuoteContext={setSelectedQuoteContext}
        isDeterministic={isDeterministic}
        onChangeIsDeterministic={setIsDeterministic}
        onRefresh={() => setRefresh(!refresh)}
        toggleHelpInfo={setIsHelpInfoShown}
        selectedQuoteContext={selectedQuoteContext}
      />

      <section className="conversations">
        {displayedQuotes.map((quote, index) => {
          return (
            <Conversation
              key={index}
              position={index + 1}
              person={quote.person}
              conversation={quote.conversation}
              showTitle={true}
              context={selectedQuoteContext}
            />
          );
        })}
      </section>

      {isHelpInfoShown && <HelpInformation context={selectedQuoteContext} onClose={() => setIsHelpInfoShown(false)} />}
    </main>
  );
};

export default Page;
