"use client";

import { Person } from "../Data/PersonMappings";
import Conversation, { ConversationTemplate } from "./Conversation";

// Provide all the modules for the server-rendering
import "../styles/index.scss";
import "../styles/Converstation.module.scss";
import "../styles/Quote.module.scss";
import "../styles/Share.module.scss";

interface HomePageProps {
  dailyQuotes: { person: Person; conversation: ConversationTemplate }[];
}

export default function HomePage(props: HomePageProps) {
  return (
    <main>
      {props.dailyQuotes.map((dailyQuote, index) => {
        // Display the daily quote of each character
        return <Conversation key={index} person={dailyQuote.person} conversation={dailyQuote.conversation} />;
      })}
    </main>
  );
}
