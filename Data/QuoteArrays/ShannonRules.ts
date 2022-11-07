import { ConversationTemplate } from "../../app/Conversation";
import { GibbsImages } from "../Images/Gibbs/GibbsImages";
import { ShannonImages } from "../Images/Shannon/ShannonImages";

export const shannonRules: ConversationTemplate[] = [
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
];
