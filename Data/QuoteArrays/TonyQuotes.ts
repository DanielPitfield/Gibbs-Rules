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
      flair: "iconic",
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
      flair: "iconic",
    },
  ],
  [{ person: "Tony", message: "Never bring a knife to a gunfight. James Bond." }],
  [
    { person: "Tony", message: "How can you work with someone for three years and not know they have a kid?" },
    {
      person: "Ziva",
      message: "Just because you work with somebody everyday does not mean that you know *everything* about them.",
    },
    {
      person: "Tony",
      message: "Really? So I shouldn't know about that tattoo on the inside of your...",
      flair: "emergency",
    },
  ],
  [
    { person: "Tony", message: "If things get hairy, just follow my lead." },
    { person: "Ziva", message: "I don't need a babysitter, Tony, I have been in hundreds of these situations." },
    { person: "Tony", message: "Never with me. As far as I'm concerned, you're a probie." },
    {
      person: "Ziva",
      message: "I've never had sex with you either - does that mean I'm a virgin?",
      flair: "emergency",
    },
  ],
  [
    {
      person: "Tony",
      message:
        "It's like when you bring a date home you want them to like you. You don't introduce them to your weird uncle Jethro till like the fifth date!",
    },
    { person: "Gibbs", message: "Since when are you an expert on fifth dates, DiNozzo?" },
    { person: "Tony", message: "You are very right, boss." },
  ],
  [
    { person: "Gibbs", message: "Tail her. I want you on Ziva's ass." },
    { person: "Tony", message: "She's not really my type boss.", flair: "emergency" },
  ],
  [
    { person: "Tony", message: "Nice girl, wasn't my type though." },
    { person: "Ziva", message: "Really? She was breathing." },
    { person: "Tony", message: "Oh, I have standards, Ziva, otherwise I'd be dating you." },
  ],
  [
    { person: "Tony", message: "That's kinda touching, Gibbs, remembering the day you hired me." },
    { person: "Gibbs", message: "Yeah, well, it seemed like a good idea at the time.", flair: "golden" },
  ],
  [
    { person: "Tony", message: "Are we fighting?" },
    { person: "Ziva", message: "If we were you would be on the floor bleeding.", flair: "emergency" },
    { person: "Tony", message: "Okay, I accept that as a likely outcome." },
  ],
  [
    { person: "Tony", message: "Aren't you hot?" },
    { person: "Ziva", message: "I've been told that before.", flair: "emergency" },
    { person: "Tony", message: "I'm talking about temperature." },
  ],
  [
    { person: "Gibbs", message: "You'll do, it's your team now. (* hands Tony his badge *)", flair: "iconic" },
    { person: "Tony", message: "..." },
    { person: "Gibbs", message: "Tim, you're a good agent, don't let him tell you otherwise." },
    { person: "McGee", message: "I won't boss." },
  ],
  [
    { person: "Tony", message: "I broke rule #10, again. Never get personally involved on a case.", flair: "golden" },
    { person: "Gibbs", message: "Yeah, it's the rule I've always had the most trouble with.", flair: "golden" },
  ],
  [
    { person: "Gibbs", message: "Rule #11, DiNozzo" },
    {
      person: "Tony",
      message: "I would never date a coworker boss. Trust me, I mean why would you even...",
      flair: "golden",
    },
    { person: "Gibbs", message: "..." },
    {
      person: "Tony",
      message: "That's #12, #11 - When the job is done, walk away.",
      flair: "golden",
    },
  ],
];
