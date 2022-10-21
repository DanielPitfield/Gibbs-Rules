import { GibbsRuleTemplate } from "../Data/GibbsRules";
import Quote from "./Quote";

interface GibbsRuleProps {
  ruleInfo: GibbsRuleTemplate;
}

const GibbsRule = (props: GibbsRuleProps) => {
  return (
    <Quote
      person={"Gibbs"}
      title={`Rule #${props.ruleInfo.number}`}
      flair={props.ruleInfo.flair}
      showImage
      message={props.ruleInfo.rule}
    ></Quote>
  );
};

export default GibbsRule;
