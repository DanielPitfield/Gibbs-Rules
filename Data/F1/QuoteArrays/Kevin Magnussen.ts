import { ConversationTemplate } from "../../../app/Conversation";
import { KevinMagnussenImages } from "../ImageObjects/Kevin Magnussen";
import { NicoHulkenbergImages } from "../ImageObjects/Nico Hulkenberg";

export const KevinMagnussenQuotes: ConversationTemplate[] = [
  [
    {
      person: "Nico Hulkenberg",
      image: NicoHulkenbergImages.FORCEDWIDE.image,
      message: "",
      flair: "emergency",
    },
    {
      person: "Nico Hulkenberg",
      image: NicoHulkenbergImages.UNSPORTIVE.image,
      message: "Once again, most unsportive driver on the grid.",
      flair: "emergency",
    },
    {
      person: "Kevin Magnussen",
      image: KevinMagnussenImages.SUCKMYBALLSMATE.image,
      message: "Suck my balls mate.",
      flair: "iconic",
    },
    {
      person: "Nico Hulkenberg",
      image: NicoHulkenbergImages.THUMBSUP.image,
      message: "Yeah. You're really good man. Keep doing it. Amazing!",
      flair: "emergency",
    },
  ],
];
