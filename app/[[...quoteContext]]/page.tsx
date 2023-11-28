"use client";

import "../../public/styles/index.scss";
import { useRouter, useSearchParams } from "next/navigation";
import { NCISCharacter } from "../../Data/NCIS/NCISCharacterMappings";
import { ConversationTemplate } from "../Conversation";
import { useEffect, useState } from "react";
import HelpInformation from "../HelpInformation";
import { NavBar } from "../NavBar";
import { StaticImageData } from "next/image";
import { F1Character } from "../../Data/F1/F1CharacterMappings";
import { QuoteContext, quoteContexts } from "../../Data/QuoteContextMappings";
import ConversationSection from "../ConversationSection";

export type Person = NCISCharacter | F1Character;

export type PersonMapping = {
  person: Person;
  images: { image: StaticImageData; isRandomlySelectable: boolean }[];
  array: ConversationTemplate[];
  isPermanentDailyCharacter: boolean;
};

const Page = () => {
  const router = useRouter();

  // Optional catch all routes
  const searchParams = useSearchParams();
  const quoteContextParam = searchParams.get("")?.toString().toUpperCase() as QuoteContext;

  // Check dynamic segment is a valid QuoteContext, if not use the fallback value of "NCIS"
  const defaultQuoteContext: QuoteContext = quoteContexts.some((quoteContext) => quoteContext === quoteContextParam)
    ? quoteContextParam
    : "NCIS";

  const [selectedQuoteContext, setSelectedQuoteContext] = useState<QuoteContext>(defaultQuoteContext);
  const [isDeterministic, setIsDeterministic] = useState<boolean>(true);
  const [areRulesSorted, setAreRulesSorted] = useState<boolean>(false);
  const [isHelpInfoShown, setIsHelpInfoShown] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);

  // On change of the selectedQuoteContext, update the URL path
  useEffect(() => {
    // Already at the correct URL path
    if (quoteContextParam === selectedQuoteContext) {
      return;
    }

    router.replace(`?=${selectedQuoteContext}`);

    // Preserve toggle status of isDeterministic (even after navigation)
    setIsDeterministic(isDeterministic);
  }, [selectedQuoteContext]);

  const formattedDate = new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "2-digit" });

  return (
    <main>
      <NavBar
        formattedDate={formattedDate}
        selectedQuoteContext={selectedQuoteContext}
        onChangeQuoteContext={setSelectedQuoteContext}
        isDeterministic={isDeterministic}
        onChangeIsDeterministic={setIsDeterministic}
        areRulesSorted={areRulesSorted}
        onChangeAreRulesSorted={setAreRulesSorted}
        onBackNavigation={() => setSelectedQuoteContext("NCIS")}
        onRefresh={() => setRefresh(!refresh)}
        toggleHelpInfo={setIsHelpInfoShown}
      />

      <ConversationSection
        selectedQuoteContext={selectedQuoteContext}
        setSelectedQuoteContext={setSelectedQuoteContext}
        isDeterministic={isDeterministic}
        areRulesSorted={areRulesSorted}
        refresh={refresh}
      />

      {isHelpInfoShown && (
        <HelpInformation
          context={selectedQuoteContext}
          setContext={setSelectedQuoteContext}
          onClose={() => setIsHelpInfoShown(false)}
        />
      )}
    </main>
  );
};

export default Page;
