import styles from "../styles/DeterministicSelection.module.scss";
import { FiRefreshCw } from "react-icons/fi";

interface DeterministicSelectionProps {
  isDeterministic: boolean;
  setIsDeterministic: (isDeterministic: boolean) => void;
  onRefresh: () => void;
}

export default function DeterministicSelection(props: DeterministicSelectionProps) {
  return (
    <div className={styles.wrapper}>
      <label>
        Randomise?
        <input
          type="checkbox"
          checked={!props.isDeterministic}
          onChange={() => props.setIsDeterministic(!props.isDeterministic)}
        />
      </label>

      <button onClick={() => props.onRefresh()}>
        <FiRefreshCw /> Refresh
      </button>
    </div>
  );
}
