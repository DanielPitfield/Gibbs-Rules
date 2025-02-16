import { ConversationTemplate } from "../../../app/Conversation";
import { AbbyImages } from "../ImageObjects/Abby";
import { GibbsImages } from "../ImageObjects/Gibbs";

export const AbbyQuotes: ConversationTemplate[] = [
  [
    {
      person: "Abby",
      message: "I am one of the few people in the world who can murder you and leave no trace.",
      flair: "golden",
    },
  ],
  [
    { person: "Abby", message: "Nobody gets everything right the first time, McGee." },
    { person: "McGee", message: "..." },
    { person: "Abby", message: "Except Gibbs." },
  ],
  [
    { person: "Abby", message: "Rule #8 is going to save you McGee." },
    { person: "Tony", message: "Never date a coworker?" },
    { person: "Ziva", message: "Never go anywhere without your knife." },
    { person: "Tony", message: "Thought that was #9" },
    { person: "Gibbs", message: "Never take anything for granted." },
    { person: "Abby", message: "Correct el jefe (boss), but then again you did make up the rules.", flair: "iconic" },
    { person: "Gibbs", message: "Get to the point, Abby." },
  ],
  [
    { person: "Abby", message: "Gibbs mentioned Rule #40.", flair: "emergency" },
    { person: "Tony", message: "You think someone is out to get you, they are?", flair: "emergency" },
    { person: "Ziva", message: "I have never heard of Rule #40", flair: "emergency" },
    { person: "Tony", message: "They don't come up very often.", flair: "emergency" },
    { person: "Abby", message: "And that's a good thing." },
    { person: "Ziva", message: "How many times have I told Gibbs to write these things down...", flair: "golden" },
    {
      person: "Tony",
      message: "You don't have to write them down, they're for daily use most of the rules but the 40s...",
      flair: "emergency",
    },
    { person: "Abby", message: "The 40s are for emergency use only...", flair: "emergency" },
    {
      person: "Tony",
      message: "If the 40s are in play, then something unspeakably bad is going down...",
      flair: "emergency",
    },
  ],
  [
    { person: "Gibbs", message: "Rule #40, Abby...", flair: "emergency" },
    { person: "Abby", message: "If it seems like someone is out to get you, they are...", flair: "emergency" },
  ],
  [
    {
      person: "Abby",
      message: "I matched the bullet in Pedro Hernandez's head to your sniper rifle. You killed him in cold blood.",
      flair: "iconic",
    },
    { person: "Gibbs", image: GibbsImages.SNIPER.image, message: "" },
    {
      person: "Abby",
      message: "I mean I know what he did Gibbs, he killed your wife and your daughter. But Gibbs...",
      flair: "iconic",
    },
    { person: "Gibbs", image: GibbsImages.DEFAULT.image, message: "I know." },
  ],
  [
    {
      person: "Abby",
      message: "I'm trying to figure out a way to be ok with not being enough...",
      flair: "golden",
    },
    {
      person: "Gibbs",
      message: "Enough what?",
    },
    {
      person: "Abby",
      message: "Enough good...",
      flair: "golden",
    },
    {
      person: "Gibbs",
      message: "Well, then you're not counting the hit and runs.",
    },
    {
      person: "Abby",
      message: "The what?",
    },
    {
      person: "Gibbs",
      message:
        "The good kind! You do something good now, you're not always around to see the difference it makes later.",
      flair: "iconic",
    },
  ],
  [
    {
      person: "Gibbs",
      message: "Abby, first day we met...",
    },
    {
      person: "Abby",
      message: "It was a Thursday. 70 degrees. Mostly sunny. What about it?",
    },
    {
      person: "Gibbs",
      message: "What did you give me?",
    },
    {
      person: "Abby",
      message: "I had Chinese food and I gave you the fortune from my cookie.",
    },
    {
      person: "Gibbs",
      message: "Because?",
    },
    {
      person: "Abby",
      message: "Because, I wanted it to be about you.",
    },
    {
      person: "Gibbs",
      title: "Opens his wallet and gives the fortune to Abby",
      message: "",
      flair: "golden",
    },
    {
      person: "Abby",
      message: "The fortune? You kept it!",
    },
    {
      person: "Gibbs",
      message: "The things you do, mean something to people.",
      flair: "iconic",
    },
    {
      person: "Abby",
      title: "Reads the fortune cookie",
      message: "",
      image: AbbyImages.FORTUNE.image,
      flair: "iconic",
    },
  ],
];
