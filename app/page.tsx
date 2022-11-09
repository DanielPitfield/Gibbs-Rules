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

export default function Page() {
  const [isDeterministic, setIsDeterministic] = useState(true);
  const [dailyQuotes, setDailyQuotes] = useState(getDailyQuotes());
  const [isHelpInfoShown, setIsHelpInfoShown] = useState(false);

  function getDailyCharacters(): PersonMapping[] {
    // How many quotes/characters to show?
    const NUM_DAILY_QUOTES = 3;

    const dailyCharacterMappings: PersonMapping[] = permanentDailyCharacterMappings;

    // Already have enough characters to show
    if (permanentDailyCharacterMappings.length >= NUM_DAILY_QUOTES) {
      return dailyCharacterMappings;
    }

    // How many more temporary characters are required?
    const numTemporaryCharacters = Math.abs(NUM_DAILY_QUOTES - permanentDailyCharacterMappings.length);

    const chosenTemporaryCharacterMappings: PersonMapping[] = getRandomArrayItems(
      temporaryDailyCharacterMappings,
      numTemporaryCharacters,
      isDeterministic
    );

    return dailyCharacterMappings.concat(chosenTemporaryCharacterMappings);
  }

  function getDailyQuotes() {
    const dailyCharacterMappings = getDailyCharacters();

    // Get the daily quote for each character
    return dailyCharacterMappings.map((mapping) => ({
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
}
