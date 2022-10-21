// The name of the character and their response/correction to the misquote
export type ZivaMisquoteCorrection = { character: string; correction: string };

export type ZivaMisquoteTemplate = {
  misquote: string;
  response: ZivaMisquoteCorrection;
};

export const zivaMisquotes = [];
