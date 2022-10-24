import { Person } from "../Data/PersonMappings";
import Quote, { QuoteTemplate } from "./Quote";

export type ConversationTemplate = QuoteTemplate[];

interface ConversationProps {
  conversation: ConversationTemplate;
  person: Person;
}

const converstationTitles: { person: Person; converstationTitle: string }[] = [
  { person: "Gibbs", converstationTitle: "Gibbs Rule" },
  { person: "Ziva", converstationTitle: "Ziva Misquote" },
  { person: "Tony", converstationTitle: "Tony Joke" },
];

const Conversation = (props: ConversationProps) => {
  return (
    <div className="conversation" data-person={props.person}>
      <h2 className="conversation-title">{converstationTitles.find((x) => x.person === props.person)?.converstationTitle}</h2>
      {props.conversation.map((quoteTemplate, index) => {
        return <Quote key={index} template={quoteTemplate} showImage />;
      })}
    </div>
  );
};

export default Conversation;
