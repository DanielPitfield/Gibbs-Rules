import Quote, { QuoteTemplate } from "./Quote";

export type ConversationTemplate = QuoteTemplate[];

interface ConversationProps {
  conversation: ConversationTemplate;
}

const Conversation = (props: ConversationProps) => {
  return (
    <div className="conversation">
      {props.conversation.map((quoteTemplate, index) => {
        return <Quote key={index} template={quoteTemplate} showImage />;
      })}
    </div>
  );
};

export default Conversation;
