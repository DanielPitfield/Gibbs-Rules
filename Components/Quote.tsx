import { Person, PersonMappings } from "../Data/PersonMappings";
import Image, { StaticImageData } from "next/image";

export type Flair = "emergency" | "golden";
export type QuoteTemplate = { person: Person; image?: StaticImageData; title?: string; flair?: Flair; message: string };

interface QuoteProps {
  template: QuoteTemplate;
  showImage: boolean;
}

const Quote = (props: QuoteProps) => {
  const getImage = (): StaticImageData | undefined => {
    // No image to be shown, early return
    if (!props.showImage) {
      return;
    }

    // If an image is not provided, but an image is to be shown
    if (!props.template.image) {
      const imageArray = PersonMappings.find((mapping) => props.template.person === mapping.person)?.images;
      // Randomly select an image of the person
      return imageArray?.[Math.floor(Math.random() * imageArray.length)];
    }

    // Otherwise, use the provided image
    return props.template.image;
  };

  const image = getImage();

  return (
    <div className="quote-wrapper" data-flair={props.template.flair}>
      <div className="quote-container">
        {props.template.title && <div className="quote-title">{props.template.title}</div>}
        <div className="quote-image">
          {image ? (
            <Image src={image} alt={props.template.person} width={550} height={270} layout="fixed" />
          ) : (
            // No image, just show the name of the person within the image container
            <span>{props.template.person}</span>
          )}
        </div>
        <div className="quote-message">{props.template.message}</div>
      </div>
    </div>
  );
};

export default Quote;
