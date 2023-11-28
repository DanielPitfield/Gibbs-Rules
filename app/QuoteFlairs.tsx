import { getPrettyText } from "../Helpers/getPrettyText";
import Conversation, { ConversationTemplate } from "./Conversation";
import { Flair } from "./Quote";
import { QuoteContext, quoteContextMappings } from "../Data/QuoteContextMappings";
import { PersonMapping } from "./[[...quoteContext]]/page";
import { NCISCharacterMappings } from "../Data/NCIS/NCISCharacterMappings";

import styles from "./styles/QuoteFlairs.module.scss";

interface QuoteFlairsProps {
  context: QuoteContext;
  setContext: (context: QuoteContext) => void;
}

const QuoteFlairs = (props: QuoteFlairsProps) => {
  const flairDescriptionMappings: { flair: Flair | undefined; description: string }[] = [
    { flair: undefined, description: "Basic character quote" },
    { flair: "emergency", description: "Danger is implied or just something controversial!" },
    { flair: "golden", description: "Rare - special, noteworthy quotes" },
    { flair: "iconic", description: "Very Rare - memorable moments from the show or a defining quote of a character" },
  ];

  // Use the first character within the data for the currently selected quoteContext
  const defaultPersonMapping: PersonMapping =
    quoteContextMappings.find((mapping) => mapping.quoteContext === props.context)?.characterMappings[0] ??
    // Otherwise, use the first NCIS character (Gibbs) as a fallback
    NCISCharacterMappings[0];

  return (
    <div className={styles.wrapper}>
      {flairDescriptionMappings.map((mapping) => {
        // The name of the flair as the title with the description of the flair as the message (and the flair applied!)
        const conversationTemplate: ConversationTemplate = [
          {
            person: defaultPersonMapping.person,
            image: defaultPersonMapping.images[0].image,
            title: getPrettyText(mapping.flair ?? "Default"),
            flair: mapping.flair,
            message: mapping.description,
          },
        ];

        return (
          <Conversation
            key={mapping.flair}
            position={1}
            person={defaultPersonMapping.person}
            conversation={conversationTemplate}
            isOnlyCharacter={true}
            context={props.context}
            setContext={props.setContext}
            showTitle={false}
            showImage
          />
        );
      })}
    </div>
  );
};

export default QuoteFlairs;
