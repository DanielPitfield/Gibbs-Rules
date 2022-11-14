import { ConversationTemplate } from "../../../app/Conversation";
import { GibbsImages } from "../ImageObjects/Gibbs";
import { ShannonImages } from "../ImageObjects/Shannon";

export const ShannonRules: ConversationTemplate[] = [
  [{ person: "Shannon", title: "Rule #1 or Rule #3", message: "Never date a lumberjack.", flair: "iconic" }],
  [
    { person: "Gibbs", image: GibbsImages.YOUNG.image, message: "You got a rule for everything?", flair: "iconic" },
    {
      person: "Shannon",
      image: ShannonImages.TALKING.image,
      message: "Working on it. Everybody needs a code they can live by. What's your name?",
      flair: "iconic",
    },
    { person: "Gibbs", image: GibbsImages.YOUNG2.image, message: "Leroy Jethro Gibbs", flair: "golden" },
    {
      person: "Shannon",
      message: "I'm just gonna call you Gibbs.",
      flair: "golden",
    },
    {
      person: "Gibbs",
      image: GibbsImages.YOUNG3.image,
      message: "You can call me anything you want.",
      flair: "golden",
    },
    {
      person: "Shannon",
      message: "I'm Shannon.",
      flair: "iconic",
    },
  ],
  [
    { person: "Shannon", message: "What were you and those guys fighting about?", flair: "golden" },
    {
      person: "Gibbs",
      image: GibbsImages.YOUNG.image,
      message: "Oh, I don't even remember.",
      flair: "golden",
    },
    { person: "Shannon", message: "You should stop.", flair: "golden" },
    {
      person: "Gibbs",
      image: GibbsImages.YOUNG.image,
      message: "Are you waiting for the train too?",
      flair: "golden",
    },
    {
      person: "Shannon",
      image: ShannonImages.SMILE.image,
      message: "",
    },
    {
      person: "Gibbs",
      image: GibbsImages.YOUNG.image,
      message: "We could sit together.",
    },
    {
      person: "Shannon",
      image: ShannonImages.TALKING.image,
      message: "I don't know, it's a long ride, but I guess you're not a lumberjack...",
    },
    {
      person: "Gibbs",
      image: GibbsImages.YOUNG2.image,
      message: "No...",
    },
    {
      person: "Shannon",
      message: "I have a rule, it's either Rule #1 or #3, never date a lumberjack...",
      flair: "iconic",
    },
  ],
];
