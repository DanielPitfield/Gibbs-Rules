import { Modal } from "./Modal";
import QuoteFlairs from "./QuoteFlairs";

interface HelpInformationProps {
  onClose: () => void;
}

const HelpInformation = (props: HelpInformationProps) => {
  return (
    <Modal mode="default" name="helpInfo" title="Help Information" onClose={props.onClose}>
      <p>
        The quotes <b>reset daily</b> (and are the same for everybody!).
      </p>
      <p>
        The <i>Gibbs Rule</i> and <i>Ziva Misquote</i> will always be shown whilst the third quote is from another
        random character.
      </p>
      <p>
        Enabling the <b>Randomise</b> option and using the <b>Refresh</b> button will optionally display a new random
        set of quotes.
      </p>
      <p>Each quote also has a rarity, which can be any of the following:</p>

      <QuoteFlairs />
    </Modal>
  );
};

export default HelpInformation;
