import Quote, { QuoteTemplate } from "./Quote";

import styles from "../public/styles/Conversation.module.scss";
import { Person } from "./page";

export type ConversationTemplate = QuoteTemplate[];

interface ConversationProps {
  person: Person;
  conversation: ConversationTemplate;
  showTitle: boolean;
}

const converstationTitles: { person: Person; converstationTitle: string }[] = [
  { person: "Gibbs", converstationTitle: "Gibbs Rule" },
  { person: "Ziva", converstationTitle: "Ziva Misquote" },
  { person: "Shannon", converstationTitle: "Shannon Rule" },
];

const Conversation = (props: ConversationProps) => {
  const conversationTitle =
    converstationTitles.find((x) => x.person === props.person)?.converstationTitle ?? `${props.person} Quote`;

  return (
    <div className={styles.wrapper} data-person={props.person}>
      {props.showTitle && <h2 className={styles.title}>{conversationTitle}</h2>}
      {props.conversation.map((quoteTemplate, index) => {
        return <Quote key={index} template={quoteTemplate} showImage />;
      })}
    </div>
  );
};

export default Conversation;
