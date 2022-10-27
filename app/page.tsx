// Client component
"use client";

import { DailyCharactersInfo, Person } from "../Data/PersonMappings";
import { getDeterministicArrayItem } from "../Helpers/DeterministicSeeding";
import Conversation, { ConversationTemplate } from "./Conversation";

const Page = () => {
  // Get the daily quote of each character
  const dailyQuotes: { person: Person; conversation: ConversationTemplate }[] = DailyCharactersInfo.map(
    (characterInfo) => ({
      person: characterInfo.person,
      conversation: getDeterministicArrayItem(characterInfo.array),
    })
  );

  return (
    <main>
      {dailyQuotes.map((dailyQuote, index) => {
        // Display each quote
        return <Conversation key={index} person={dailyQuote.person} conversation={dailyQuote.conversation} />;
      })}
    </main>
  );
};

export default Page;
