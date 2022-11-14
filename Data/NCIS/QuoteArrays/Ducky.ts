import { ConversationTemplate } from "../../../app/Conversation";

export const DuckyQuotes: ConversationTemplate[] = [
  [
    { person: "Bodnar", message: "And whose grandfather would you be?" },
    { person: "Ducky", message: "Well that depends. Who's your grandmother?", flair: "iconic" },
  ],
  [
    { person: "Jenny", message: "Did you know when Jethro was married, he had a daughter?" },
    {
      person: "Ducky",
      message: "No, that's not possible. I know all three of Jethor's ex-wifes, they had no children.",
    },
    {
      person: "Jenny",
      message:
        "With his first wife Shannon, he did. They were murdered when Jethro was fighting in Desert Storm. Shannon witnessed the shooting of a marine and identified the killer as Pedro Hernandez. An NIS agent was assigned to protect her, and was killed when driving their van, he died instantly, Shannon and Jethro's eight year old daughter were killed in the crash.",
    },
    {
      person: "Ducky",
      message: "Was Hernandez ever caught?",
    },
    {
      person: "Jenny",
      message:
        "No, he fled to Mexico, NIS tried to extradite but the Mexican authorities always claimed they couldn't find him. It's in our cold case files.",
    },
    {
      person: "Ducky",
      message: "Well, you can close it.",
    },
    {
      person: "Jenny",
      message: "What do you know?",
    },
    {
      person: "Ducky",
      message:
        "Jethro would have pursued the killer of his wife and daughter to hell and back. Jethro got his revenge.",
      flair: "iconic",
    },
  ],
];
