import { ConversationTemplate } from "../../../app/Conversation";

export const palmerQuotes: ConversationTemplate[] = [
  [
    { person: "Palmer", message: "How do you do it?" },
    { person: "Gibbs", message: "Hmm?" },
    { person: "Palmer", message: "Block out fear." },
    { person: "Gibbs", message: "You don't. It's what you do with it.", flair: "golden" },
  ],
  [
    {
      person: "Palmer",
      message: "Yeah, most people don't know this, but financial disputes, second-leading cause of divorce.",
    },
    { person: "Ducky", message: "Really? What's number one?" },
    { person: "Gibbs", message: "Marriage.", flair: "golden" },
  ],
];
