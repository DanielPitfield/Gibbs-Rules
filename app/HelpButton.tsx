import { FiHelpCircle } from "react-icons/fi";

import styles from "../public/styles/HelpButton.module.scss";

interface HelpButtonProps {
  onClick: () => void;
}

const HelpButton = (props: HelpButtonProps) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={props.onClick}>
        <FiHelpCircle /> Help Information
      </button>
    </div>
  );
};

export default HelpButton;
