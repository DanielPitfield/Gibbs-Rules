/**
 * Returns a deterministic random number between 0 and the maxIndex for the supplied string.
 * @param string String to use.
 * @param maxIndex Maximum index to return.
 * @returns Deterministic random number.
 */
export function getDeterministicIndexFromString(string: string, maxIndex: number): number {
  // Get a numeric value for the string, in this case, all the char code numbers
  const numeric = string.split("").reduce((total, char) => (total += char.charCodeAt(0)), 0);

  // Take the remainder of the number from the maxIndex (plus 1 as the max will never be returned)
  return Math.floor(numeric % (maxIndex + 1));
}
