import { PersonMappings } from "../Data/PersonMappings";
import Image from "next/image";

export type Person = "Gibbs" | "Ziva" | "Tony";

interface QuoteProps {
  person: Person;
  showImage: boolean;
  message: string;
}

const Quote = (props: QuoteProps) => {
  const imagePath = PersonMappings.find((mapping) => props.person === mapping.person)?.imagePath;

  return (
    <div className="quote-wrapper">
      <div className="quote-image">
        {props.showImage && imagePath ? <Image src={imagePath} alt={imagePath} /> : <span>{props.person}</span>}
      </div>

      <div className="quote-message">{props.message}</div>
    </div>
  );
};

export default Quote;
