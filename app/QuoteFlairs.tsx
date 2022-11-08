import { KateImages } from "../Data/Images/Kate/KateImages";
import { getPrettyText } from "../Helpers/getPrettyText";
import Conversation from "./Conversation";
import { QuoteTemplate, flairs } from "./Quote";

import styles from "../styles/QuoteFlairs.module.scss";

export default function QuoteFlairs() {
  const mockQuoteTemplate: QuoteTemplate = {
    person: "Kate",
    image: KateImages.DEFAULT.image,
    title: "Default",
    message: "",
  };

  return (
    <div className={styles.wrapper}>
      <Conversation key={"default"} person={"Kate"} conversation={[mockQuoteTemplate]} showTitle={false} />

      {flairs.map((flair) => {
        return (
          <Conversation
            key={flair}
            person={"Kate"}
            conversation={[
              {
                ...mockQuoteTemplate,
                title: getPrettyText(flair),
                flair: flair,
              },
            ]}
            showTitle={false}
          />
        );
      })}
    </div>
  );
}
