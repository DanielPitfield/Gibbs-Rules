import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { NavBar } from "../Components/NavBar";
import Conversation, { ConversationTemplate } from "../Components/Conversation";
import { gibbsRules } from "../Data/QuoteArrays/GibbsRules";
import { zivaMisquotes } from "../Data/QuoteArrays/ZivaMisquotes";
import { getDeterministicArrayItems } from "../Helpers/DeterministicSeeding";
import { tonyJokes } from "../Data/QuoteArrays/TonyJokes";

/** Model of the properties of the component */
type HomePageProps = {
  dailyGibbsRule: ConversationTemplate;
  dailyZivaMisquote: ConversationTemplate;
  dailyTonyJoke: ConversationTemplate;
};

/**
 * Server-side renders the properties of the component.
 * @returns Properties of the component.
 */
export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const dailyGibbsRule = getDeterministicArrayItems(1, gibbsRules)[0];
  const dailyZivaMisquote = getDeterministicArrayItems(1, zivaMisquotes)[0];
  const dailyTonyJoke = getDeterministicArrayItems(1, tonyJokes)[0];

  return { props: { dailyGibbsRule, dailyZivaMisquote, dailyTonyJoke } };
};

/**
 * Renders the home page.
 * @param props Properties of the home page.
 * @returns The home page.
 */
const Home: NextPage<HomePageProps> = (props) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main>
        <Conversation conversation={props.dailyGibbsRule} />
        <Conversation conversation={props.dailyZivaMisquote} />
        <Conversation conversation={props.dailyTonyJoke} />
      </main>
    </div>
  );
};

export default Home;
