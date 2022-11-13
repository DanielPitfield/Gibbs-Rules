"use client";

import { NCISCharacter } from "../Data/NCIS/NCISCharacterMappings";
import Conversation, { ConversationTemplate } from "./Conversation";
import DeterministicSelection from "./DeterministicSelection";
import { useEffect, useMemo, useState } from "react";
import { getRandomArrayItems } from "../Helpers/DeterministicSeeding";
import HelpInformation from "./HelpInformation";
import HelpButton from "./HelpButton";
import { StaticImageData } from "next/image";
import { F1Character } from "../Data/F1/F1CharacterMappings";
import { QuoteContext, quoteContextMappings } from "../Data/QuoteContextMappings";

import "../public/styles/index.scss";
import { NavBar } from "./NavBar";

// How many quotes/characters to show?
const NUM_DAILY_QUOTES = 3;

export type Person = NCISCharacter | F1Character;

export type PersonMapping = {
  person: Person;
  images: { image: StaticImageData; isRandomlySelectable: boolean }[];
  array: ConversationTemplate[];
  isPermanentDailyCharacter: boolean;
};

const Page = () => {
  const [selectedQuoteContext, setSelectedQuoteContext] = useState<QuoteContext>("F1");
  const [isDeterministic, setIsDeterministic] = useState(true);
  const [isHelpInfoShown, setIsHelpInfoShown] = useState(false);
  const [refresh, setRefresh] = useState(false);

  //
  const dailyCharacters = useMemo(() => {
    const characterMappings = quoteContextMappings.find(
      (mapping) => mapping.quoteContext === selectedQuoteContext
    )?.characterMappings;

    const permanentCharacterMappings =
      characterMappings?.filter((person) => person.isPermanentDailyCharacter && person.array.length > 0) ?? [];
    const temporaryCharacterMappings =
      characterMappings?.filter((person) => !person.isPermanentDailyCharacter && person.array.length > 0) ?? [];

    // Already have enough (or more than enough) characters to show
    if (permanentCharacterMappings.length >= NUM_DAILY_QUOTES) {
      return permanentCharacterMappings.slice(0, NUM_DAILY_QUOTES);
    }

    // How many more temporary characters are required?
    const numTemporaryCharacters = Math.abs(NUM_DAILY_QUOTES - permanentCharacterMappings.length);

    const chosenTemporaryCharacterMappings: PersonMapping[] = getRandomArrayItems(
      temporaryCharacterMappings,
      numTemporaryCharacters,
      isDeterministic
    );

    return permanentCharacterMappings.concat(chosenTemporaryCharacterMappings);
  }, [selectedQuoteContext, isDeterministic, refresh]);

  //
  const dailyQuotes = useMemo(() => {
    return dailyCharacters.map((mapping) => ({
      person: mapping.person,
      conversation: getRandomArrayItems(mapping.array, 1, isDeterministic)[0],
    }));
  }, [dailyCharacters]);

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
        {dailyQuotes.map((dailyQuote, index) => {
          // Display the daily quote of each character
          return (
            <Conversation
              key={index}
              person={dailyQuote.person}
              conversation={dailyQuote.conversation}
              showTitle={true}
              context={selectedQuoteContext}
            />
          );
        })}
      </section>

      {isHelpInfoShown && <HelpInformation onClose={() => setIsHelpInfoShown(false)} />}
    </main>
  );
};

export default Page;
