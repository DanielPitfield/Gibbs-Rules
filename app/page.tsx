import { DailyCharactersInfo } from "../Data/PersonMappings";
import { getDeterministicArrayItem } from "../Helpers/DeterministicSeeding";
import HomePage from "./HomePage";

/* TODO: Data fetching
This is a server component, if the daily quotes need to be fetched...
Declare an async function within this file:
SSG using { cache: 'force-cache' } (default)
SSR using { cache: 'no-store' }
ISR using { next: { revalidate: 10 } }
Forward the data as a prop of <HomePage />
*/

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
