import GibbsDefaultImg from "./default.jpg";
import GibbsSniperImg from "./sniper.png";
import GibbsFamilyImg from "./family.jpg";
import GibbsAngryGif from "./angry.gif";
import GibbsGlareImg from "./glare.jpg";

export const GibbsImages = {
  DEFAULT: { image: GibbsDefaultImg, isRandomlySelectable: true },
  SNIPER: { image: GibbsSniperImg, isRandomlySelectable: false },
  FAMILY: { image: GibbsFamilyImg, isRandomlySelectable: false },
  ANGRY: { image: GibbsAngryGif, isRandomlySelectable: false },
  GLARE: { image: GibbsGlareImg, isRandomlySelectable: true },
};
