import { ConversationTemplate } from "../../../app/Conversation";
import { MartinBrundleImages } from "../ImageObjects/Martin Brundle";

export const MartinBrundleQuotes: ConversationTemplate[] = [
  [
    {
      person: "Martin Brundle",
      message: "Oh so close!",
      flair: "iconic",
    },
  ],
  [
    {
      person: "Christian Horner",
      message: "It's a shame, you're too old to have driven here really.",
      flair: "emergency",
    },
    {
      person: "Martin Brundle",
      message: "I am too old to have driven here, but...",
    },
    {
      person: "Christian Horner",
      message: "You would have liked it.",
    },
    {
      person: "Martin Brundle",
      message: "Shame you wasn't fast enough to get into Formula One!",
      flair: "iconic",
    },
  ],
  [
    {
      person: "Martin Brundle",
      message: "Megan, you're a freestyle rapper, you got any raps for us today on F1?",
    },
    {
      person: "Megan Thee Stallion",
      message: "I have no rap today, I'm sorry!",
    },
    {
      person: "Martin Brundle",
      message: "Who are you supporting in the race?",
    },
    {
      person: "Megan Thee Stallion's Friend",
      message: "You can't do that!",
      title: "Pushes Martin out of the way trying to stop the interview",
      flair: "emergency",
    },
    {
      person: "Martin Brundle",
      message: "Well, I can do that, because I did.",
      flair: "iconic",
    },
  ],
  [
    {
      person: "Martin Brundle",
      image: MartinBrundleImages.OUTBRAKE.image,
      message:
        "There's a lady here, who's gonna try and outbrake me. She's obviously from another TV, but we don't normally have that. Felipe? How is it out there? How's the track?",
      title: "Trying to interview a driver at the same time as a rival reporter",
      flair: "emergency",
    },
    {
      person: "Felipe Nasr",
      message: "Well, it's been reset this morning, but to be honest, it doesn't feel too bad.",
    },
    {
      person: "Martin Brundle",
      image: MartinBrundleImages.OUTBRAKE2.image,
      message: "Okay, good luck, there's a lady here, who thought she was gonna outbrake me. No chance.",
      flair: "iconic",
    },
  ],
  [
    {
      person: "Murray Walker",
      message:
        "I hate to say this, but alot of people here are really debating whether Ricardo Rosset is Formula One material.",
      flair: "emergency",
    },
    {
      person: "Martin Brundle",
      message: "Well, it's a fairly short debate Murray.",
      flair: "iconic",
    },
  ],
  [
    {
      person: "Martin Brundle",
      message: "Hug the apex like it is your favourite granny.",
      flair: "emergency",
    },
  ],
  [
    {
      person: "Martin Brundle",
      message: "Just kiss the apex twice as though you are a continental European.",
      flair: "emergency",
    },
  ],
  [
    {
      person: "Martin Brundle",
      message:
        "Well again, Michael Schumacher, very slow, 1:25.9 on that last lap, I wonder if he's got something like a slow puncture or some kind of gear shift problem because Villeneuve is all over him look, he's going through!",
    },
    {
      person: "Murray Walker",
      message: "He's through!",
    },
    {
      person: "Martin Brundle",
      message: "Oh yes! I don't think...",
    },
    {
      person: "Murray Walker",
      message: "Out goes Michael Schumacher!",
    },
    {
      person: "Martin Brundle",
      image: MartinBrundleImages.JEREZ.image,
      message: "That didn't work, that didn't work Michael, you hit the wrong part of him my friend!",
      flair: "iconic",
    },
  ],
];
