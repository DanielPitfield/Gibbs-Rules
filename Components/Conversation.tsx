import Quote, { QuoteTemplate } from "./Quote";

export type ConversationTemplate = QuoteTemplate[];

interface ConversationProps {
  conversation: ConversationTemplate;
}

const Conversation = (props: ConversationProps) => {
  return (
    <>
      {props.conversation.map((quoteTemplate, index) => {
        return <Quote key={index} person={quoteTemplate.person} message={quoteTemplate.quote} showImage />;
      })}
    </>
  );
};

export default Conversation;
