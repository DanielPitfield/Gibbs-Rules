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
 * Gets an item from an array, guaranteed to be deterministic based on the seed.
 * @param seed Seed of the returned item.
 * @param array Array of possible items.
 * @returns Deterministic item from array as per the seed.
 */
export function getDeterministicArrayItem<T>(array: T[]): T {
  const seedValue = todaySeed();

  //const chance = new Chance(seedValue); TODO: Uncomment after testing
  const chance = new Chance();

  return chance.shuffle(array)[0];
}
