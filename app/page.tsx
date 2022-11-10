"use client";

import {
  permanentDailyCharacterMappings,
  temporaryDailyCharacterMappings,
  PersonMapping,
} from "../Data/PersonMappings";
import Conversation from "./Conversation";
import DeterministicSelection from "./DeterministicSelection";
import { useState } from "react";
import { getRandomArrayItems } from "../Helpers/DeterministicSeeding";
import HelpInformation from "./HelpInformation";
import HelpButton from "./HelpButton";

import "../public/styles/index.scss";

// How many quotes/characters to show?
const NUM_DAILY_QUOTES = 3;

const Page = () => {
  const [isDeterministic, setIsDeterministic] = useState(true);
  const [dailyQuotes, setDailyQuotes] = useState(getDailyQuotes());
  const [isHelpInfoShown, setIsHelpInfoShown] = useState(false);

  function getDailyCharacters(): PersonMapping[] {
    // Already have enough (or more than enough) characters to show
    if (permanentDailyCharacterMappings.length >= NUM_DAILY_QUOTES) {
      return permanentDailyCharacterMappings.slice(0, NUM_DAILY_QUOTES);
    }

    // How many more temporary characters are required?
    const numTemporaryCharacters = Math.abs(NUM_DAILY_QUOTES - permanentDailyCharacterMappings.length);

    const chosenTemporaryCharacterMappings: PersonMapping[] = getRandomArrayItems(
      temporaryDailyCharacterMappings,
      numTemporaryCharacters,
      isDeterministic
    );

    return permanentDailyCharacterMappings.concat(chosenTemporaryCharacterMappings);
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
