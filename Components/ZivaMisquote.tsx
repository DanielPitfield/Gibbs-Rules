import { ZivaMisquoteTemplate } from "../Data/ZivaMisquotes";
import Quote from "./Quote";

interface ZivaMisquoteProps {
  misquoteInfo: ZivaMisquoteTemplate;
}

const ZivaMisquote = (props: ZivaMisquoteProps) => {
  return (
    <>
      <Quote person={"Ziva"} message={props.misquoteInfo.misquote} showImage={true} />
      {props.misquoteInfo.response && (
        <Quote
          person={"Tony" /* props.misquoteInfo.response.character */}
          message={props.misquoteInfo.response.correction}
          showImage={true}
        />
      )}
    </>
  );
};

export default ZivaMisquote;
