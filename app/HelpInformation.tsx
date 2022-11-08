import { KateImages } from "../Data/Images/Kate/KateImages";
import { getPrettyText } from "../Helpers/getPrettyText";
import Conversation from "./Conversation";
import { Modal } from "./Modal";
import { flairs, QuoteTemplate } from "./Quote";

interface HelpInformationProps {
  onClose: () => void;
}

export default function HelpInformation(props: HelpInformationProps) {
  const mockQuoteTemplate: QuoteTemplate = {
    person: "Kate",
    image: KateImages.DEFAULT.image,
    title: "Default",
    message: "",
  };

  return (
    <Modal mode="default" name="helpInfo" title="Help Information" onClose={props.onClose}>
      <Conversation key={"default"} person={"Kate"} conversation={[mockQuoteTemplate]} showTitle={false} />

      {flairs.map((flair) => {
        return (
          <Conversation
            key={flair}
            person={"Kate"}
            conversation={[
              {
                ...mockQuoteTemplate,
                title: getPrettyText(flair),
                flair: flair,
              },
            ]}
            showTitle={false}
          />
        );
      })}
    </Modal>
  );
}
