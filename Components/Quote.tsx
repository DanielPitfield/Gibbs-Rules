import { Person, PersonMappings } from "../Data/PersonMappings";
import Image, { StaticImageData } from "next/image";

export type QuoteTemplate = { person: Person; quote: string };

interface QuoteProps {
  person: Person;
  title?: string;
  flair?: "emergency" | "golden";
  imageIndex?: number;
  showImage: boolean;
  message: string;
}

const Quote = (props: QuoteProps) => {
  const getImage = (): StaticImageData | null => {
    if (!props.showImage) {
      return null;
    }

    const imageArray = PersonMappings.find((mapping) => props.person === mapping.person)?.images;

    if (!imageArray) {
      return null;
    }

    // props.imageIndex is a valid index
    if (props.imageIndex && props.imageIndex >= 0 && props.imageIndex <= imageArray.length - 1) {
      return imageArray[props.imageIndex];
    }

    // A randomly selected image
    return imageArray[Math.floor(Math.random() * imageArray.length)];
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
