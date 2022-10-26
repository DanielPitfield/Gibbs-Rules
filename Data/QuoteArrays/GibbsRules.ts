import { ConversationTemplate } from "../../app/Conversation";
import { GibbsImages } from "../Images/Gibbs/GibbsImages";

export const gibbsRules: ConversationTemplate[] = [
  [{ person: "Gibbs", title: "Rule #1", message: "Never let suspects stay together." }],
  [{ person: "Gibbs", title: "Rule #1", message: "Never screw over your partner." }],
  [{ person: "Gibbs", title: "Rule #2", message: "Always wear gloves at a crime scene." }],
  [{ person: "Gibbs", title: "Rule #3", message: "Don't believe what you're told. Double-check." }],
  [{ person: "Gibbs", title: "Rule #3", message: "Never be unreachable." }],
  [
    {
      person: "Gibbs",
      title: "Rule #4",
      message:
        "The best way to keep a secret: Keep it to yourself. Second best? Tell one other person - if you must. There is no third best.",
    },
  ],
  [{ person: "Gibbs", title: "Rule #5", message: "You don't waste good." }],
  [
    {
      person: "Gibbs",
      title: "Rule #6",
      message: "Never say you're sorry - it's a sign of weakness.",
      flair: "golden",
    },
  ],
  [{ person: "Gibbs", title: "Rule #7", message: "Always be specific when you lie." }],
  [{ person: "Gibbs", title: "Rule #8", message: "Never take anything for granted." }],
  [{ person: "Gibbs", title: "Rule #9", message: "Never go anywhere without a knife." }],
  [{ person: "Gibbs", title: "Rule #10", message: "Never get personally involved on a case." }],
  [{ person: "Gibbs", title: "Rule #11", message: "When the job is done, walk away." }],
  [{ person: "Gibbs", title: "Rule #12", message: "Never date a coworker.", flair: "golden" }],
  [{ person: "Gibbs", title: "Rule #13", message: "Never, ever involve lawyers." }],
  [{ person: "Gibbs", title: "Rule #14", message: "Bend the line, don't break it." }],
  [{ person: "Gibbs", title: "Rule #15", message: "Always work as a team." }],
  [{ person: "Gibbs", title: "Rule #16", message: "If someone thinks they have the upper hand, break it." }],
  [{ person: "Gibbs", title: "Rule #17", message: "Never, ever interrupt Gibbs during an interrogation." }],
  [{ person: "Gibbs", title: "Rule #18", message: "It's better to seek forgiveness than ask permission." }],
  [{ person: "Gibbs", title: "Rule #20", message: "Always look under." }],
  [{ person: "Gibbs", title: "Rule #22", message: "Never, ever bother Gibbs in interrogation." }],
  [{ person: "Gibbs", title: "Rule #23", message: "Never mess with a Marine's coffee if you want to live." }],
  [
    {
      person: "Gibbs",
      title: "Rule #27",
      message: "Two ways to follow someone. First way, they never notice you. Second way, they only notice you.",
    },
  ],
  [{ person: "Gibbs", title: "Rule #28", message: "When you need help, ask." }],
  [{ person: "Gibbs", title: "Rule #35", message: "Always watch the watchers." }],
  [{ person: "Gibbs", title: "Rule #36", message: "If it feels like you're being played, you probably are." }],
  [{ person: "Gibbs", title: "Rule #38", message: "Your case, you're lead." }],
  [{ person: "Gibbs", title: "Rule #39", message: "There is no such thing as coincidence.", flair: "golden" }],
  [
    {
      person: "Gibbs",
      title: "Rule #40",
      message: "If it seems like someone is out to get you, they are.",
      flair: "emergency",
    },
  ],
  [
    {
      person: "Gibbs",
      title: "Rule #42",
      message: "Never accept an apology from somebody who just sucker punched you.",
      flair: "emergency",
    },
  ],
  [
    {
      person: "Gibbs",
      title: "Rule #44",
      message: "First things first, hide the women and children.",
      flair: "emergency",
    },
  ],
  [{ person: "Gibbs", title: "Rule #45", message: "Clean up your own mess.", flair: "emergency" }],
  [{ person: "Gibbs", title: "Rule #51", message: "Sometimes you're wrong.", flair: "golden" }],
  [{ person: "Gibbs", title: "Rule #62", message: "Always give people space when they get off an elevator." }],
  [{ person: "Gibbs", title: "Rule #69", message: "Never trust a woman who doesn't trust her man." }],
  [{ person: "Gibbs", title: "Rule #72", message: "Always be open to new things." }],
  [{ person: "Gibbs", title: "Rule #73", message: "Never meet your heroes." }],
  [{ person: "Gibbs", title: "Rule #91", message: "When you decide to walk away, don't look back." }],
  [{ person: "Gibbs", title: "Rule #99", message: "Never tell Gibbs he's being audited." }],
  [
    {
      person: "Gibbs",
      image: GibbsImages.SNIPER.image,
      title: "Special Rule",
      message: "You do what you have to do for family.",
      flair: "golden",
    },
  ],
  [{ person: "Shannon", title: "Rule #1 or Rule #3", message: "Never date a lumberjack.", flair: "golden" }],
];
