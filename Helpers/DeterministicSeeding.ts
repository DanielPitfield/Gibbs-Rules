import { Chance } from "chance";

/**
 * Gets a number guaranteed to be the same throughout today, and guaranteed to change every day.
 * @returns Seed value.
 */
function todaySeed(): number {
  return Number(
    new Date()
      .toLocaleDateString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/[^\d]/g, "")
  );
}

/**
 * Gets a number of items from an array, guaranteed to be deterministic based on the seed.
 * @param seed Seed of the returned items.
 * @param numItems Number of items to return.
 * @param array Array of possible items.
 * @returns Deterministic items from array as per the seed.
 */
export function getDeterministicArrayItems<T>(
  numItems: number,
  array: T[]
): T[] {
  const seedValue = todaySeed();

  //const chance = new Chance(seedValue); TODO: Uncomment after testing
  const chance = new Chance();

  return chance.shuffle(array.slice()).slice(0, numItems);
}
