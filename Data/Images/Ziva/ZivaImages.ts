import ZivaDefaultImg from "./default.jpg";
import ZivaGlareImg from "./glare.jpg";
import ZivaGlare2Img from "./glare2.jpg";
import ZivaLaughGif from "./laugh.gif";
import ZivaGunImg from "./gun.jpg";
import ZivaWorriedImg from "./worried.jpg";
import ZivaLaugh2Img from "./laugh2.webp";

export const ZivaImages = {
  DEFAULT: { image: ZivaDefaultImg, isRandomlySelectable: true },
  GLARE: { image: ZivaGlareImg, isRandomlySelectable: true },
  GLARE2: { image: ZivaGlare2Img, isRandomlySelectable: true },
  LAUGH: { image: ZivaLaughGif, isRandomlySelectable: false },
  GUN: { image: ZivaGunImg, isRandomlySelectable: false },
  WORRIED: { image: ZivaWorriedImg, isRandomlySelectable: true },
  LAUGH2: { image: ZivaLaugh2Img, isRandomlySelectable: true },
};
