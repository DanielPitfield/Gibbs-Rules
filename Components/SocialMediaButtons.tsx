import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { ConversationTemplate } from "./Conversation";

interface SocialMediaButtonsProps {
  conversationTitle: string;
  conversation: ConversationTemplate;
}

const SocialMediaButtons = (props: SocialMediaButtonsProps) => {
  const PAGE_URL = "test.com";
  const DEFAULT_TITLE = "NCIS Daily Quotes";
  const DEFAULT_HASHTAG = "NCISDailyQuotes";

  const conversationText = props.conversation.map((quote) => `${quote.person}: "${quote.message}"`).join("\n");

  // TODO: Pinterest sharing, text within an image of the character

  return (
    <div className="social-media-buttons-container">
      <div className="social-media-button">
        <FacebookShareButton url={PAGE_URL} quote={conversationText} hashtag={DEFAULT_HASHTAG}>
          <FacebookIcon />
        </FacebookShareButton>
      </div>

      <div className="social-media-button">
        <TwitterShareButton url={PAGE_URL} title={DEFAULT_TITLE} hashtags={[DEFAULT_HASHTAG, props.conversationTitle]}>
          <TwitterIcon />
        </TwitterShareButton>
      </div>

      <div className="social-media-button">
        <LinkedinShareButton url={PAGE_URL} title={DEFAULT_TITLE} summary={conversationText} source={PAGE_URL}>
          <LinkedinIcon />
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default SocialMediaButtons;
