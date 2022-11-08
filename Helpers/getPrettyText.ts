export function getPrettyText(text: string): string {
  return (
    text
      // Replace dashes with spaces
      .replaceAll("-", " ")
      // Get each individual word
      .split(" ")
      // Capitalise the first letter of each word
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      // Join the words together with spaces (as one string)
      .join(" ")
  );
}
