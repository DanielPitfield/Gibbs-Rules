import { ConversationTemplate } from "../../app/Conversation";
import { GibbsImages } from "../Images/Gibbs/GibbsImages";

export const tonyQuotes: ConversationTemplate[] = [
  [
    { person: "McGee", message: "I've got it! Now my CPU's too small!" },
    { person: "Tony", message: "I'm gonna let that slide" },
  ],
  [{ person: "Tony", message: "My name is Anthony. Friends call me Tony, which backwards is 'Y Not'" }],
  [{ person: "Tony", message: "Big 'D', little 'i', Big 'N', little 'ozzo'" }],
  [
    { person: "Kate", message: "(* Wears high heels to crime scene *)" },
    { person: "Gibbs", message: "Can't work a field in high heels." },
    { person: "Tony", message: "Depends what field.", flair: "emergency" },
  ],
  [
    {
      person: "Tony",
      message:
        "I'm the wildcard. I'm the guy that looks at the reality in front of him and refuses to accept it. Like right now, I should be terrified right, but I'm not as I just can't stop thinking about the movie 'True Lies', you know where Arny is strapped to the chair and shot full of truth serum and picks his cuffs and kills everybody. You have 30 seconds to live Saleem.",
    },
    { person: "Saleem", message: "No, you're still bound. You're lying." },
    {
      person: "Tony",
      message:
        "I can't lie and I didn't say I was gonna be the one to kill you. Remember when I told you my boss was a sniper?",
      flair: /* TODO: Mega-rare flair */ "golden",
    },
    { person: "Gibbs", image: GibbsImages.SNIPER.image, message: "(* Snipes Saleem in the head *)", flair: "golden" },
    { person: "Tony", message: "Look out!" },
    { person: "Gibbs", image: GibbsImages.SNIPER.image, message: "(* Snipes armed guard *)", flair: "golden" },
    { person: "Tony", message: "Come on, alright Ziva, let's go!" },
    {
      person: "Gibbs",
      image: GibbsImages.SNIPER.image,
      message: "(* Shoots second armed guard close range with sniper rifle *)",
      flair: "golden",
    },
    {
      person: "Gibbs",
      image: GibbsImages.SNIPER.image,
      message: "Let's go home.",
      flair: "golden",
    },
  ],
];
