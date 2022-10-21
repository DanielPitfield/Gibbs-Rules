// The name of the character and their response/correction to the misquote
export type ZivaMisquoteCorrection = { character: string; correction: string };

export type ZivaMisquoteTemplate = {
  misquote: string;
  response?: ZivaMisquoteCorrection;
};

export const zivaMisquotes = [
  {
    misquote: "You are a broken tape, Gibbs.",
    response: { character: "Tony", correction: "Record. A broken record." },
  },
];
