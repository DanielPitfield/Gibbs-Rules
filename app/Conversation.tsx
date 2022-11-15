import Quote, { QuoteTemplate } from "./Quote";
import { Person } from "./page";
import { QuoteContext } from "../Data/QuoteContextMappings";

import styles from "../public/styles/Conversation.module.scss";

export type ConversationTemplate = QuoteTemplate[];

interface ConversationProps {
  index: number;
  person: Person;
  conversation: ConversationTemplate;
  showTitle: boolean;
  context: QuoteContext;
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
    <div className={styles.wrapper} data-index={props.index}>
      {props.showTitle && <h2 className={styles.title}>{conversationTitle}</h2>}
      {props.conversation.map((quoteTemplate, index) => {
        return <Quote key={index} template={quoteTemplate} context={props.context} showImage />;
      })}
    </div>
  );
};

export default Conversation;
