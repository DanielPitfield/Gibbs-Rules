import { GibbsRuleTemplate } from "../Data/GibbsRules";
import Quote from "./Quote";

interface GibbsRuleProps {
  ruleInfo: GibbsRuleTemplate;
}

const GibbsRule = (props: GibbsRuleProps) => {
    // TODO: Rule number
  return <Quote person={"Gibbs"} message={props.ruleInfo.rule} showImage={true}></Quote>;
};

export default GibbsRule;
