import Quote, { QuoteTemplate } from "./Quote";

export type ConversationTemplate = QuoteTemplate[];

interface ConversationProps {
  conversation: ConversationTemplate;
}

const Conversation = (props: ConversationProps) => {
  return (
    <>
      {props.conversation.map((quoteTemplate, index) => {
        return (
          <Quote
            key={index}
            person={quoteTemplate.person}
            image={quoteTemplate.image}
            showImage
            title={quoteTemplate.title}
            flair={quoteTemplate.flair}
            message={quoteTemplate.message}
          />
        );
      })}
    </>
  );
};

export default Conversation;
