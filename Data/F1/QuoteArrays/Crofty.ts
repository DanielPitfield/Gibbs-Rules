import { ConversationTemplate } from "../../../app/Conversation";
import { ChristianHornerImages } from "../ImageObjects/Christian Horner";
import { MaxVerstappenImages } from "../ImageObjects/Max Verstappen";

export const CroftyQuotes: ConversationTemplate[] = [
  [
    {
      person: "Crofty",
      image: MaxVerstappenImages.DEBUTWIN.image,
      message:
        "The sun is out, the smiles will be out, at 18 years and 227 days old, Max Verstappen wins a Formula One Grand Prix, wins the Spanish Grand Prix and is the youngest driver EVER to win a Formula One World Championship Grand Prix. ",
      flair: "iconic",
    },
    {
      person: "Max Verstappen",
      message: "Yes! Yes!",
      flair: "golden",
    },
    {
      person: "GP",
      message: "Unbelievable Max. Unbelievable.",
      flair: "golden",
    },
    {
      person: "Christian Horner",
      image: ChristianHornerImages.RADIO.image,
      message: "Max Verstappen, you are a race winner! What a great debut!",
      flair: "golden",
    },
    {
      person: "Max Verstappen",
      message: "Thank you very much Christian.",
    },
  ],
  [
    {
      person: "Crofty",
      title: "Lewis Hamilton breaks the record for most race wins",
      message:
        "The man that woke up this morning on the verge of a historic 92nd win in Formula One. Records are there to be broken said Michael Schumacher. The record is broken!",
      flair: "golden",
    },
  ],
  [
    {
      person: "Crofty",
      message:
        "They've won here as Toro Rosso, and they are gonna win in 2020 as AlphaTauri, Pierre Gasly wins the Italian Grand Prix!",
      flair: "golden",
    },
  ],
  [
    {
      person: "Crofty",
      image: MaxVerstappenImages.WORLDCHAMPION2021.image,
      message:
        "Of all the drama, of all the controversy, of all the magical moments in Formula One in 2021, it comes down to this. And at this moment, it looks like it's going to go the way of Max Verstappen. Mercedes not happy. Red Bull will be delighted. They have shared a brilliant championship battle, but the championship can only be won by one and it's going Dutch in 2021. Max Verstappen for the first time ever is champion of the world!",
      flair: "iconic",
    },
    {
      person: "Christian Horner",
      image: ChristianHornerImages.WORLDCHAMPION2021.image,
      message:
        "",
      flair: "iconic",
    },
  ],
];
