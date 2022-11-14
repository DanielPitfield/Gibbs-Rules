import { ConversationTemplate } from "../../../app/Conversation";

export const martinQuotes: ConversationTemplate[] = [
  [
    {
      person: "Martin",
      message: "Oh so close!",
      flair: "iconic",
    },
  ],
  [
    {
      person: "Martin",
      message: "Megan, you're a freestyle rapper, you got any raps for us today on F1?",
    },
    {
      person: "MeganTheeStallion",
      message: "I have no rap today, I'm sorry!",
    },
    {
      person: "Martin",
      message: "Who are you supporting in the race?",
    },
    {
      person: "MeganTheeStallion's Friend",
      message: "You can't do that!",
      title: "Pushes Martin out of the way trying to stop the interview",
      flair: "emergency",
    },
    {
      person: "Martin",
      message: "Well, I can do that, because I did.",
      flair: "iconic",
    },
  ],
];
