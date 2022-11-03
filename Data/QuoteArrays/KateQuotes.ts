import { ConversationTemplate } from "../../app/Conversation";

export const kateQuotes: ConversationTemplate[] = [
  [
    {
      person: "Kate",
      message: "What's happening?",
    },
    {
      person: "Gibbs",
      message: "Emergency blow.",
    },
    {
      person: "Kate",
      message: "Wow!",
    },
    {
      person: "Gibbs",
      message: "Yeah! That's what they all tell me!",
      flair: "emergency",
    },
  ],
  [
    {
      person: "Kate",
      message: "Shooter! (* Kate gets shot in body armour *)",
      flair: "emergency",
    },
    {
      person: "Gibbs",
      message: "Kate!",
      flair: "emergency",
    },
    {
      person: "Tony",
      message: "You ok?",
    },
    {
      person: "Kate",
      message: "I just got shot at point blank range DiNozzo! What do you think?",
      flair: "golden",
    },
    {
      person: "Tony",
      message: "You're not gonna be going to that Pilates class tomorrow?",
      flair: "golden",
    },
    {
      person: "Gibbs",
      message: "Protection detail is over Kate.",
    },
    {
      person: "Tony",
      message: "You did good!",
    },
    {
      person: "Gibbs",
      message: "For once, DiNozzo's right!",
    },
    {
      person: "Kate",
      message: "Wow! I'd thought I die before I ever heard a compliment.. (* Kate gets shot in the head *)",
      flair: "emergency",
    },
  ],
  [
    {
      person: "Kate",
      message: "His serial number? Gibbs, I doubt he could remember his shoe size",
    },
    {
      person: "Gibbs",
      message: "Or you could just look him under Medal of Honor recipients.",
    },
    {
      person: "Kate",
      message: "He won the Medal of Honor?!",
    },
    {
      person: "Gibbs",
      message:
        "You don't win the Medal of Honor Kate, you're awarded it, for conspicuous gallantry above and beyond the call of duty",
      flair: "golden",
    },
  ],
];
