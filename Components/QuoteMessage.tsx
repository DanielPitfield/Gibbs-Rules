interface QuoteMessageProps {
  message: string;
}

const QuoteMessage = (props: QuoteMessageProps) => {
  return <div className="quote-message">{props.message}</div>;
};

export default QuoteMessage;