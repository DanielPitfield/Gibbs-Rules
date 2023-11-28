import React from "react";
import { QuoteContext, quoteContextMappings } from "../Data/QuoteContextMappings";
import DeterministicSelection from "./DeterministicSelection";
import HelpButton from "./HelpButton";
import RuleSorting from "./RuleSorting";

interface NavBarProps {
  formattedDate: string;
  selectedQuoteContext: QuoteContext;
  onChangeQuoteContext: (quoteContext: QuoteContext) => void;
  isDeterministic: boolean;
  onChangeIsDeterministic: (isDeterministic: boolean) => void;
  areRulesSorted: boolean;
  onChangeAreRulesSorted: (areRulesSorted: boolean) => void;
  onBackNavigation: () => void;
  onRefresh: () => void;
  toggleHelpInfo: (isShown: boolean) => void;
}

export const NavBar = (props: NavBarProps) => {
  if (props.selectedQuoteContext === "GIBBS") {
    return (
      <header>
        <RuleSorting
          areRulesSorted={props.areRulesSorted}
          setAreRulesSorted={props.onChangeAreRulesSorted}
          onBackNavigation={() => props.onBackNavigation()}
        />

        <div className="title">
          <h1>Gibbs Rules</h1>
          <h2>{props.formattedDate}</h2>
        </div>

        <HelpButton onClick={() => props.toggleHelpInfo(true)} />
      </header>
    );
  }

  return (
    <header>
      <DeterministicSelection
        isDeterministic={props.isDeterministic}
        setIsDeterministic={props.onChangeIsDeterministic}
        onRefresh={() => props.onRefresh()}
      />

      <div className="title">
        <h1>
          <select
            onChange={(e) => props.onChangeQuoteContext(e.target.value as QuoteContext)}
            value={props.selectedQuoteContext}
          >
            {quoteContextMappings
              .filter((qcm) => qcm.isSelectable)
              .map((qcm) => (
                <option key={qcm.quoteContext} value={qcm.quoteContext}>
                  {qcm.quoteContext}
                </option>
              ))}
          </select>
          Daily Quotes
        </h1>

        <h2>{props.formattedDate}</h2>
      </div>

      <HelpButton onClick={() => props.toggleHelpInfo(true)} />
    </header>
  );
};
