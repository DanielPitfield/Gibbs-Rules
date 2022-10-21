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
          person={props.misquoteInfo.response.person}
          message={props.misquoteInfo.response.correction}
          showImage
        />
      )}
    </>
  );
};

export default ZivaMisquote;
