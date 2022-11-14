import { QuoteContext } from "../Data/QuoteContextMappings";
import { Modal } from "./Modal";
import QuoteFlairs from "./QuoteFlairs";

interface HelpInformationProps {
  context: QuoteContext;
  onClose: () => void;
}

const HelpInformation = (props: HelpInformationProps) => {
  return (
    <Modal mode="default" name="helpInfo" title="Help Information" onClose={props.onClose}>
      <p>The quotes reset daily (and are the same for everybody!).</p>
      <p>
        A quote from some characters will always be shown, whereas quotes from other characters are only sometimes
        randomly shown.
      </p>

      <h3>Refreshing quotes</h3>
      <p>The context of the quotes can be changed using the dropdown.</p>
      <p>
        Enabling the Randomise option and using the Refresh button will optionally display a new random set of quotes.
      </p>

      <h3>Quote Flairs</h3>
      <QuoteFlairs context={props.context} />
    </Modal>
  );
};

export default HelpInformation;
