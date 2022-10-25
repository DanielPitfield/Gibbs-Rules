import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { ConversationTemplate } from "./Conversation";

interface ShareProps {
  conversationTitle: string;
  conversation: ConversationTemplate;
}

const Share = (props: ShareProps) => {
  const PAGE_URL = "test.com";
  const DEFAULT_HASHTAG = "NCISDailyQuotes";

  const commonButtonProps = {
    url: PAGE_URL,
    title: "NCIS Daily Quotes",
  };

  const commonIconProps = {
    size: 40,
    borderRadius: 10,
  };

  const conversationText = props.conversation.map((quote) => `${quote.person}: "${quote.message}"`).join("\n");

  // TODO: Pinterest sharing, text within an image of the character

  return (
    <div className="social-media-buttons-container">
      <div className="social-media-button">
        <FacebookShareButton {...commonButtonProps} quote={conversationText} hashtag={DEFAULT_HASHTAG}>
          <FacebookIcon {...commonIconProps} />
        </FacebookShareButton>
      </div>

      <div className="social-media-button">
        <TwitterShareButton {...commonButtonProps} hashtags={[DEFAULT_HASHTAG, props.conversationTitle]}>
          <TwitterIcon {...commonIconProps} />
        </TwitterShareButton>
      </div>

      <div className="social-media-button">
        <LinkedinShareButton {...commonButtonProps} summary={conversationText} source={PAGE_URL}>
          <LinkedinIcon {...commonIconProps} />
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default Share;
