import { ConversationTemplate } from "../../app/Conversation";

export const mcGeeQuotes: ConversationTemplate[] = [
  [{ person: "McGee", message: "Look, you're attractive. At least on the outside." }],
  [
    { person: "Tony", message: "That's a first." },
    { person: "McGee", message: "He called me Tim." },
    { person: "Tony", message: "Patted my back." },
    { person: "McGee", message: "It was kind of nice." },
    { person: "Tony", message: "Nice? I don't want nice! It's not Gibbs if he's nice!" },
  ],
  [
    { person: "McGee", message: "(* Hesitates to shoot a criminal reaching for his gun *)" },
    { person: "Gibbs", message: "Don't ever hesitate because you second guessed yourself again. I'll take your badge. We clear?", flair: "iconic" },
    { person: "McGee", message: "Clear." },
  ],
];
