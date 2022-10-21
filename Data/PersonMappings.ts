import { StaticImageData } from "next/image";
import { Person } from "../Components/Quote";
import GibbsImg from "./images/gibbs.jpg";
import ZivaImg from "./images/ziva.jpg";
import TonyImg from "./images/tony.jpg";

export const PersonMappings: { person: Person; image: StaticImageData }[] = [
  { person: "Gibbs", image: GibbsImg },
  { person: "Ziva", image: ZivaImg },
  { person: "Tony", image: TonyImg },
];
