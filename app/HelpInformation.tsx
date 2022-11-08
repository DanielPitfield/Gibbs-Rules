import { Modal } from "./Modal";
import QuoteFlairs from "./QuoteFlairs";

interface HelpInformationProps {
  onClose: () => void;
}

export default function HelpInformation(props: HelpInformationProps) {
  return (
    <Modal mode="default" name="helpInfo" title="Help Information" onClose={props.onClose}>
      <QuoteFlairs />
    </Modal>
  );
}
