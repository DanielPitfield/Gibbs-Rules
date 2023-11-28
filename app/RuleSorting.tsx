import styles from "./styles/RuleSorting.module.scss";
import { FiArrowLeft } from "react-icons/fi";

interface RuleSortingProps {
  areRulesSorted: boolean;
  setAreRulesSorted: (areRulesSorted: boolean) => void;
  onBackNavigation: () => void;
}

const RuleSorting = (props: RuleSortingProps) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={() => props.onBackNavigation()}>
        <FiArrowLeft /> Back
      </button>

      <label>
        Sort rules by flair?
        <input
          type="checkbox"
          checked={props.areRulesSorted}
          onChange={() => props.setAreRulesSorted(!props.areRulesSorted)}
        />
      </label>
    </div>
  );
};

export default RuleSorting;
