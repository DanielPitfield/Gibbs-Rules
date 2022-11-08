import { FiHelpCircle } from "react-icons/fi";

import styles from "../styles/HelpButton.module.scss";

interface HelpButtonProps {
  onClick: () => void;
}

export default function HelpButton(props: HelpButtonProps) {
  return (
    <div className={styles.wrapper}>
      <button onClick={() => props.onClick}>
        <FiHelpCircle /> Help
      </button>
    </div>
  );
}
