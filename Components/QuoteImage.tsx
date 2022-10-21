import Image from "next/image";

interface QuoteImageProps {
  pathName: string;
}

const QuoteImage = (props: QuoteImageProps) => {
  return <Image src={props.pathName} alt={props.pathName}></Image>
};

export default QuoteImage;
