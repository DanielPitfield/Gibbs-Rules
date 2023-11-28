import Quote, { QuoteTemplate } from "./Quote";
import { Person } from "./[[...quoteContext]]/page";
import { QuoteContext } from "../Data/QuoteContextMappings";

import styles from "./styles/Conversation.module.scss";

export type ConversationTemplate = QuoteTemplate[];

interface ConversationProps {
  position: number;
  person: Person;
  conversation: ConversationTemplate;
  isOnlyCharacter: boolean;
  context: QuoteContext;
  setContext: (context: QuoteContext) => void;  
  showTitle: boolean;
  showImage: boolean;
}

const converstationTitles: { person: Person; converstationTitle: string }[] = [
  { person: "Gibbs", converstationTitle: "Gibbs Rule" },
  { person: "Ziva", converstationTitle: "Ziva Misquote" },
  { person: "Shannon", converstationTitle: "Shannon Rule" },
  { person: "Murray Walker", converstationTitle: "Murrayism" },
];

const Conversation = (props: ConversationProps) => {
  const conversationTitle =
    converstationTitles.find((x) => x.person === props.person)?.converstationTitle ?? `${props.person} Quote`;

  return (
    <div className={styles.wrapper} data-position={props.position}>
      {props.showTitle && <h2 className={styles.title}>{conversationTitle}</h2>}
      {props.conversation.map((quoteTemplate, index) => {
        return (
          <Quote
            key={index}
            context={props.context}
            setContext={props.setContext}
            template={quoteTemplate}
            isOnlyCharacter={props.isOnlyCharacter}
            showImage={props.showImage}
          />
        );
      })}
    </div>
  );
};

export default Conversation;
