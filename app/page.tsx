"use client";

import { DailyCharactersInfo } from "../Data/PersonMappings";
import Conversation from "./Conversation";
import { getRandomArrayItem } from "../Helpers/DeterministicSeeding";
import { useState } from "react";

// Provide all the modules for the server-rendering
import "../styles/index.scss";
import "../styles/Conversation.module.scss";
import "../styles/Quote.module.scss";
import "../styles/Share.module.scss";

export default function Page() {
  const [isDeterministic, setIsDeterministic] = useState(true);
  const [dailyQuotes, setDailyQuotes] = useState(getDailyQuotes(isDeterministic));

  function getDailyQuotes(isDeterministic: boolean) {
    // Get the daily quote for each character
    return DailyCharactersInfo.map((characterInfo) => ({
      person: characterInfo.person,
      conversation: getRandomArrayItem(characterInfo.array, isDeterministic),
    }));
  }

  return (
    <main>
      <label>
        Deterministic
        <input type="checkbox" checked={isDeterministic} onChange={() => setIsDeterministic(!isDeterministic)} />
      </label>

      <button onClick={() => setDailyQuotes(getDailyQuotes(isDeterministic))}>Refresh</button>

      {dailyQuotes.map((dailyQuote, index) => {
        // Display the daily quote of each character
        return <Conversation key={index} person={dailyQuote.person} conversation={dailyQuote.conversation} />;
      })}
    </main>
  );
}
