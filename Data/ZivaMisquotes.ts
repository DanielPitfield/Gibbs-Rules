import { Person } from "../Components/Quote";

// The name of the character and their response/correction to the misquote
export type ZivaMisquoteCorrection = { person: Person; correction: string };

export type ZivaMisquoteTemplate = {
  misquote: string;
  response?: ZivaMisquoteCorrection;
};

export const zivaMisquotes: ZivaMisquoteTemplate[] = [
  {
    misquote: "You are a broken tape, Gibbs.",
    response: { person: "Tony", correction: "Record. A broken record." },
  },
];
