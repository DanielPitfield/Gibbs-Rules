import { Person } from "../Data/PersonMappings";
import Quote, { QuoteTemplate } from "./Quote";
import Share from "./Share";

export type ConversationTemplate = QuoteTemplate[];

interface ConversationProps {
  person: Person;
  conversation: ConversationTemplate;
}

const converstationTitles: { person: Person; converstationTitle: string }[] = [
  { person: "Gibbs", converstationTitle: "Gibbs Rule" },
  { person: "Ziva", converstationTitle: "Ziva Misquote" },
  { person: "Tony", converstationTitle: "Tony Joke" },
];

const Conversation = (props: ConversationProps) => {
  const conversationTitle = converstationTitles.find((x) => x.person === props.person)?.converstationTitle ?? "";

  return (
    <div className="conversation" data-person={props.person}>
      <h2 className="conversation-title">{conversationTitle}</h2>
      {props.conversation.map((quoteTemplate, index) => {
        return <Quote key={index} template={quoteTemplate} showImage />;
      })}
      <Share conversationTitle={conversationTitle} conversation={props.conversation} />
    </div>
  );
};

export default Conversation;
