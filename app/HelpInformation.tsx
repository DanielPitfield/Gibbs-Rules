import { Modal } from "./Modal";
import Quote, { flairs, QuoteTemplate } from "./Quote";

interface HelpInformationProps {
  onClose: () => void;
}

export default function HelpInformation(props: HelpInformationProps) {
  return (
    <Modal mode="default" name="helpInfo" title="Help Information" onClose={props.onClose}>
      <Quote key={"default"} template={{ person: "Gibbs", title: "Default", message: "" }} showImage={false} />

      {flairs.map((flair) => {
        const mockQuoteTemplate: QuoteTemplate = { person: "Gibbs", title: flair, message: "" };
        return <Quote key={flair} template={mockQuoteTemplate} showImage={false} />;
      })}
    </Modal>
  );
}
