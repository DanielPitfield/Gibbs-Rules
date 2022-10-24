import { Person, PersonMappings } from "../Data/PersonMappings";
import Image, { StaticImageData } from "next/image";

export type Flair = "emergency" | "golden";
export type QuoteTemplate = { person: Person; image?: StaticImageData; title?: string; flair?: Flair; message: string };

interface QuoteProps {
  person: Person;
  image?: StaticImageData;
  showImage: boolean;
  title?: string;
  flair?: Flair;
  message: string;
}

const Quote = (props: QuoteProps) => {
  const getImage = (): StaticImageData | undefined => {
    if (!props.showImage) {
      return;
    }

    if (!props.image) {
      const imageArray = PersonMappings.find((mapping) => props.person === mapping.person)?.images;
      return imageArray?.[Math.floor(Math.random() * imageArray.length)];
    }

    return props.image;
  };

  const image = getImage();

  return (
    <div className="quote-wrapper" data-flair={props.flair}>
      <div className="quote-container">
        {props.title && <div className="quote-title">{props.title}</div>}
        <div className="quote-image">
          {image ? (
            <Image src={image} alt={props.person} width={550} height={270} layout="fixed" />
          ) : (
            <span>{props.person}</span>
          )}
        </div>
        <div className="quote-message">{props.message}</div>
      </div>
    </div>
  );
};

export default Quote;
