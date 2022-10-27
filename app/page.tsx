import HomePage from "./HomePage";

/* TODO: Data fetching
This is a server component, if the daily quotes need to be fetched...

Declare an async function within this file:
SSG using { cache: 'force-cache' } (default)
SSR using { cache: 'no-store' }
ISR using { next: { revalidate: 10 } }

Forward the data as a prop of <HomePage />
*/

export default async function Page() {
  return <HomePage />;
}
