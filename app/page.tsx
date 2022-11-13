"use client";

import { NCISCharacter } from "../Data/NCIS/NCISCharacterMappings";
import Conversation, { ConversationTemplate } from "./Conversation";
import DeterministicSelection from "./DeterministicSelection";
import { useState } from "react";
import { getRandomArrayItems } from "../Helpers/DeterministicSeeding";
import HelpInformation from "./HelpInformation";
import HelpButton from "./HelpButton";
import { StaticImageData } from "next/image";
import { F1Character } from "../Data/F1/F1CharacterMappings";
import { QuoteContext, quoteContextMappings } from "../Data/QuoteContextMappings";

import "../public/styles/index.scss";

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
  const [dailyQuotes, setDailyQuotes] = useState(getDailyQuotes());
  const [isHelpInfoShown, setIsHelpInfoShown] = useState(false);

  function getPermanentCharacters(): PersonMapping[] {
    const permanentCharacterMappings = quoteContextMappings.find(
      (mapping) => mapping.quoteContext === selectedQuoteContext
    )?.characterMappings;

    return (
      permanentCharacterMappings?.filter((person) => person.isPermanentDailyCharacter && person.array.length > 0) ?? []
    );
  }

  function getTemporaryCharacters(): PersonMapping[] {
    const temporaryCharacterMappings = quoteContextMappings.find(
      (mapping) => mapping.quoteContext === selectedQuoteContext
    )?.characterMappings;

    return (
      temporaryCharacterMappings?.filter((person) => !person.isPermanentDailyCharacter && person.array.length > 0) ?? []
    );
  }

  function getDailyCharacters(): PersonMapping[] {
    const permanentCharacterMappings = getPermanentCharacters();
    const temporaryCharacterMappings = getTemporaryCharacters();

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
  }

  function getDailyQuotes() {
    // Get the daily quote for each character
    return getDailyCharacters().map((mapping) => ({
      person: mapping.person,
      conversation: getRandomArrayItems(mapping.array, 1, isDeterministic)[0],
    }));
  }

  return (
    <main>
      <DeterministicSelection
        isDeterministic={isDeterministic}
        setIsDeterministic={setIsDeterministic}
        onRefresh={() => setDailyQuotes(getDailyQuotes())}
      />

      {dailyQuotes.map((dailyQuote, index) => {
        // Display the daily quote of each character
        return (
          <Conversation
            key={index}
            person={dailyQuote.person}
            conversation={dailyQuote.conversation}
            showTitle={true}
          />
        );
      })}

      <HelpButton onClick={() => setIsHelpInfoShown(true)} />

      {isHelpInfoShown && <HelpInformation onClose={() => setIsHelpInfoShown(false)} />}
    </main>
  );
};

export default Page;
