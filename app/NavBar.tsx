import React from "react";
import { QuoteContext, quoteContextMappings } from "../Data/QuoteContextMappings";
import DeterministicSelection from "./DeterministicSelection";
import HelpButton from "./HelpButton";

interface NavBarProps {
  isDeterministic: boolean;
  onChangeIsDeterministic: (isDeterministic: boolean) => void;
  onRefresh: () => void;
  formattedDate: string;
  onChangeQuoteContext: (quoteContext: QuoteContext) => void;
  toggleHelpInfo: (isShown: boolean) => void;
  selectedQuoteContext: QuoteContext;
}

export const NavBar = (props: NavBarProps) => {
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
            {quoteContextMappings.map((quoteMapping) => (
              <option key={quoteMapping.quoteContext} value={quoteMapping.quoteContext}>
                {quoteMapping.quoteContext}
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
