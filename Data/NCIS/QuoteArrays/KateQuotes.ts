import { ConversationTemplate } from "../../../app/Conversation";
import { KateImages } from "../ImageObjects/KateImages";

export const kateQuotes: ConversationTemplate[] = [
  [
    { person: "Kate", message: "What's happening?" },
    { person: "Gibbs", message: "Emergency blow." },
    { person: "Kate", message: "Wow!" },
    { person: "Gibbs", message: "Yeah! That's what they all tell me!", flair: "emergency" },
  ],
  [
    {
      person: "Kate",
      image: KateImages.SHOOTER.image,
      message: "Shooter!",
      flair: "emergency",
    },
    { person: "Gibbs", message: "Kate!", flair: "emergency" },
    { person: "Tony", message: "You ok?" },
    {
      person: "Kate",
      image: KateImages.SHOTBODY.image,
      message: "I just got shot at point blank range DiNozzo! What do you think?",
      flair: "golden",
    },
    { person: "Tony", message: "You're not gonna be going to that Pilates class tomorrow?", flair: "golden" },
    { person: "Gibbs", message: "Protection detail is over Kate." },
    { person: "Tony", message: "You did good!" },
    { person: "Gibbs", message: "For once, DiNozzo's right!" },
    {
      person: "Kate",
      image: KateImages.SHOTHEAD.image,
      message: "Wow! I'd thought I die before I ever heard a compliment...",
      flair: "iconic",
    },
  ],
  [
    { person: "Kate", message: "His serial number? Gibbs, I doubt he could remember his shoe size" },
    { person: "Gibbs", message: "Or you could just look him under Medal of Honor recipients." },
    { person: "Kate", message: "He won the Medal of Honor?!" },
    {
      person: "Gibbs",
      message:
        "You don't win the Medal of Honor Kate, you're awarded it, for conspicuous gallantry above and beyond the call of duty",
      flair: "golden",
    },
  ],
  [
    { person: "Kate", message: "Damnit Tony, I should just take you home and get you in bed." },
    { person: "Tony", message: "..." },
    { person: "Kate", message: "Ok, that didn't come out the way I intended." },
  ],
  [
    { person: "Kate", message: "Do all Marines build boats?" },
    { person: "Tony", message: "Only the ones who've been married a few times." },
    { person: "Kate", message: "Why's that?" },
    { person: "Tony", message: "The rest of them can afford to buy one." },
  ],
  [
    { person: "Kate", message: "Do we know how big his unit was?" },
    { person: "Abby", message: "We could ask him, but in my experience most men lie about that point." },
  ],
  [
    { person: "Kate", message: "I hate to say it, but that was actually smart, Tony." },
    { person: "Gibbs", message: "What was, Kate?" },
    { person: "Kate", message: "Tony might have figured out how to find the hacker." },
    { person: "Gibbs", message: "It's his job. You think I keep him around for his personality?" },
  ],
  [
    { person: "Kate", message: "Give him 5 seconds." },
    { person: "McGee", message: "Until what?" },
    { person: "Kate", message: "Until he notices there's a..." },
    { person: "Tony", message: "Bikini contest?!" },
  ],
  [
    {
      person: "Tony",
      message: "Gibbs'll get in. He's got clearance that'll let him see the dead aliens buried in Area 51.",
    },
    { person: "Kate", message: "Because he probably killed them." },
  ],
  [
    { person: "Tony", message: "I'll take it. I've always wanted a dog." },
    { person: "Kate", title: "The dog growls and bites Tony", message: "Good dog. I think I'll call you Tony." },
    { person: "Gibbs", message: "It's a bitch, Kate.", flair: "golden" },
    { person: "Kate", message: "I know." },
  ],
];
