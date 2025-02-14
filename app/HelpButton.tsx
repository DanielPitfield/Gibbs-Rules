import styles from "./styles/HelpButton.module.scss";

import { FiHelpCircle } from "react-icons/fi";

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
