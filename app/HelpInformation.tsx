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
      <p>
        The quotes <b>reset daily</b> (and are the same for everybody!).
      </p>
      <p>
        The <b>context of the quotes can be changed</b> using the dropdown.
      </p>
      <p>
        A quote from some characters will always be shown whereas quotes from other characters are only sometimes
        randomly shown.
      </p>
      <p>
        Enabling the <b>Randomise</b> option and using the <b>Refresh</b> button will optionally display a new random
        set of quotes.
      </p>
      <p>Each quote also has a rarity, which can be any of the following:</p>

      <QuoteFlairs context={props.context} />
    </Modal>
  );
};

export default HelpInformation;
