import { Person } from "../Data/PersonMappings";
import Quote, { QuoteTemplate } from "./Quote";

import styles from "../styles/Conversation.module.scss";

export type ConversationTemplate = QuoteTemplate[];

interface ConversationProps {
  person: Person;
  conversation: ConversationTemplate;
}

const converstationTitles: { person: Person; converstationTitle: string }[] = [
  { person: "Gibbs", converstationTitle: "Gibbs Rule" },
  { person: "Ziva", converstationTitle: "Ziva Misquote" },
  { person: "Tony", converstationTitle: "Tony Joke" },
  { person: "Shannon", converstationTitle: "Shannon Rule" },
];

const Conversation = (props: ConversationProps) => {
  const conversationTitle = converstationTitles.find((x) => x.person === props.person)?.converstationTitle ?? "";

  return (
    <div className={styles.wrapper} data-person={props.person}>
      <h2 className={styles.title}>{conversationTitle}</h2>
      {props.conversation.map((quoteTemplate, index) => {
        return <Quote key={index} template={quoteTemplate} showImage />;
      })}
    </div>
  );
};

export default Conversation;
