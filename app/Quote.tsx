import Image, { StaticImageData } from "next/image";
import { Person } from "./[[...quoteContext]]/page";
import { QuoteContext, quoteContextMappings } from "../Data/QuoteContextMappings";
import { useMemo } from "react";

import styles from "../public/styles/Quote.module.scss";
import { getDeterministicIndexFromString } from "../Helpers/DeterministicIndexFromString";

export type Flair = "emergency" | "golden" | "iconic";

export type QuoteTemplate = {
  person: Person;
  image?: StaticImageData;
  title?: string;
  flair?: Flair;
  message: string;
};

interface QuoteProps {
  template: QuoteTemplate;
  showImage: boolean;
  context: QuoteContext;
}

const Quote = (props: QuoteProps) => {
  const getImage = (): StaticImageData | undefined => {
    // No image to be shown, early return
    if (!props.showImage) {
      return;
    }

    // If an image is not provided, but an image is to be shown
    if (!props.template.image) {
      // Find the character mappings for the selected quoteContext
      const characterMappings =
        quoteContextMappings.find((x) => x.quoteContext === props.context)?.characterMappings ?? [];

      // Find the image array of the current character
      const imageArray = characterMappings
        .find((mapping) => props.template.person === mapping.person)
        ?.images.filter((imageInfo) => imageInfo.isRandomlySelectable);

      // Randomly select an image of the person
      return imageArray?.[getDeterministicIndexFromString(props.template.message, imageArray.length - 1)].image;
    }

    // Otherwise, use the provided image
    return props.template.image;
  };

  const image = useMemo(() => getImage(), [props.template.message]);

  return (
    <div className={styles.wrapper} data-flair={props.template.flair}>
      <div className={styles.container}>
        {props.template.title && <div className={styles.title}>{props.template.title}</div>}
        <div className={styles.image}>
          {image ? (
            // The image selected from the server source set, only (rougly) needs to be at most 30vw wide
            <Image src={image} alt={props.template.person} fill sizes="30vw" />
          ) : (
            // No image, just show the name of the person within the image container
            <span>{props.template.person}</span>
          )}
        </div>
        {props.template.message && <div className={styles.message}>{props.template.message}</div>}
      </div>
    </div>
  );
};

export default Quote;
