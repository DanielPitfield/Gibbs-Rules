import { Conversation } from "../Data/ZivaMisquotes";
import Quote from "./Quote";

interface ZivaMisquoteProps {
  misquoteConversation: Conversation;
}

const ZivaMisquote = (props: ZivaMisquoteProps) => {
  return (
    <>
      {props.misquoteConversation.map((quoteTemplate, index) => {
        return <Quote key={index} person={quoteTemplate.person} message={quoteTemplate.quote} showImage />;
      })}
    </>
  );
};

export default ZivaMisquote;
