import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { NavBar } from "../Components/NavBar";
import Conversation, { ConversationTemplate } from "../Components/Conversation";
import { getDeterministicArrayItem } from "../Helpers/DeterministicSeeding";
import { DailyCharactersInfo, Person } from "../Data/PersonMappings";

/** Model of the properties of the component */
type HomePageProps = {
  dailyQuotes: { person: Person; conversation: ConversationTemplate }[];
};

/**
 * Server-side renders the properties of the component.
 * @returns Properties of the component.
 */
export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  // Get the daily quote for each character
  const dailyQuotes = DailyCharactersInfo.map((characterInfo) => ({
    person: characterInfo.person,
    conversation: getDeterministicArrayItem(characterInfo.array),
  }));

  return { props: { dailyQuotes: dailyQuotes } };
};

/**
 * Renders the home page.
 * @param props Properties of the home page.
 * @returns The home page.
 */
const Home: NextPage<HomePageProps> = (props) => {
  const formattedDate = new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "2-digit" });

  return (
    <>
      <Head>
        <title>{`NCIS Daily Quotes | ${formattedDate}`}</title>
        <meta name="description" content="Daily NCIS quotes" />

        {/* TODO: Update favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar formattedDate={formattedDate} />

      <main>
        {props.dailyQuotes.map((dailyQuote, index) => {
          // Display the daily quote of each character
          return <Conversation key={index} person={dailyQuote.person} conversation={dailyQuote.conversation} />;
        })}
      </main>
    </>
  );
};

export default Home;
