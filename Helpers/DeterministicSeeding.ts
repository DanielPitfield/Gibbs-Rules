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
 * @param array Array of possible items.
 * @param isDeterministic Whether to return a deterministically random item for today.
 * @returns Deterministic item from array as per the seed.
 */
export function getRandomArrayItem<T>(array: T[], isDeterministic: boolean): T {
  const seedValue = todaySeed();

  const chance = isDeterministic ? new Chance(seedValue) : new Chance();

  return chance.shuffle(array)[0];
}
