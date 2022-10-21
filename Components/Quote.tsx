import { PersonMappings } from "../Data/PersonMappings";
import Image from "next/image";

export type Person = "Gibbs" | "Ziva" | "Tony";

interface QuoteProps {
  person: Person;
  showImage: boolean;
  message: string;
  title: string;
  flair?: "emergency" | "golden";
}

const Quote = (props: QuoteProps) => {
  const image = PersonMappings.find((mapping) => props.person === mapping.person)?.image;

  return (
    <div className="quote-wrapper" data-flair={props.flair}>
      <div className="quote-container">
        <div className="quote-title">{props.title}</div>
        <div className="quote-image">
          {props.showImage && image ? <Image src={image} alt={props.person} width={550} height={270} layout="fixed" /> : <span>{props.person}</span>}
        </div>
        <div className="quote-message">{props.message}</div>
      </div>
    </div>
  );
};

export default Quote;
