import { ConversationTemplate } from "../../../app/Conversation";
import { ChristianHornerImages } from "../ImageObjects/Christian Horner";

// TODO: You are world champion team radio quotes!
// TODO: Christian vs Toto

export const ChristianHornerQuotes: ConversationTemplate[] = [
  [
    {
      person: "Christian Horner",
      image: ChristianHornerImages.RADIO.image,
      message:
        "Max Verstappen, YOU are world champion, WE are world champions! Thank you so much! And thank you Dietrich Mateschitz for everything that you have done, for us, for this team and these championships are for you. Thank you.",
      flair: "iconic",
    },
    {
      person: "Max Verstappen",
      message:
        "Ah, that one was for Dietrich. I gave it everything out there, even though of course we had that stop but yeah I was a bit upset but I just you know I just keep pushing. And yeah congrats guys, what an amazing season to win also the Constructors'. You guys really deserve it.",
      flair: "golden",
    },
    {
      person: "GP",
      message:
        "Yeah, fantastic result Max. And another milestone. That was your 13th win as well, this year. Fantastic result.",
      flair: "golden",
    },
    {
      person: "Max Verstappen",
      message: "Three more chance to add on that mate.",
      flair: "golden",
    },
    {
      person: "GP",
      message: "Three more chances. You did that in style, well done.",
      flair: "golden",
    },
  ],
  [
    {
      person: "Christian Horner",
      image: ChristianHornerImages.WORLDCHAMPION2013.image,
      message:
        "You've done it in style, fantastic! You're a four-time world champion. Brilliant, brilliant drive. You've joined the greats mate, you're up there, there's Fangio, Schumacher, then you.",
      flair: "iconic",
    },
  ],
];
