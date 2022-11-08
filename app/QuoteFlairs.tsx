import { KateImages } from "../Data/ImageObjects/KateImages";
import { getPrettyText } from "../Helpers/getPrettyText";
import Conversation from "./Conversation";
import { Flair, QuoteTemplate } from "./Quote";
import { StaticImageData } from "next/image";
import { Person } from "../Data/PersonMappings";

import styles from "/styles/QuoteFlairs.module.scss";

const QuoteFlairs = () => {
  const flairDescriptionMappings: { flair: Flair; description: string }[] = [
    { flair: "emergency", description: "Danger is implied or just something controversial!" },
    { flair: "golden", description: "Rare - special, noteworthy quotes" },
    { flair: "iconic", description: "Very Rare - memorable moments from the show or a defining quote of a character" },
  ];

  const defaultPerson: Person = "Kate";
  const defaultImage: StaticImageData = KateImages.DEFAULT.image;

  const defaultQuoteTemplate: QuoteTemplate = {
    person: defaultPerson,
    image: defaultImage,
    title: "Default",
    message: "Basic character quote",
  };

  return (
    <div className={styles.wrapper}>
      <Conversation key={"default"} person={defaultPerson} conversation={[defaultQuoteTemplate]} showTitle={false} />

      {flairDescriptionMappings.map((mapping) => {
        return (
          <Conversation
            key={mapping.flair}
            person={defaultPerson}
            conversation={[
              {
                ...defaultQuoteTemplate,
                title: getPrettyText(mapping.flair),
                flair: mapping.flair,
                message: mapping.description,
              },
            ]}
            showTitle={false}
          />
        );
      })}
    </div>
  );
};

export default QuoteFlairs;
