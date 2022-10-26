import { DailyCharactersInfo } from "../Data/PersonMappings";
import { getDeterministicArrayItem } from "../Helpers/DeterministicSeeding";
import HomePage from "./HomePage";

/*
Defaults to SSG using { cache: 'no-store' }
{ cache: 'no-store' } for SSR
*/

// TODO: Ideally use ISR for automatic revalidating

async function getDailyQuotes() {
  // Get the daily quote for each character
  return DailyCharactersInfo.map((characterInfo) => ({
    person: characterInfo.person,
    conversation: getDeterministicArrayItem(characterInfo.array),
  }));
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const dailyQuotes = await getDailyQuotes();
  // Forward fetched data to your Client Component
  return <HomePage dailyQuotes={dailyQuotes} />;
}
