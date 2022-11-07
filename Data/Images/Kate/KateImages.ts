import KateDefaultImg from "./default.jpg";
import KateGunImg from "./gun.jpg";
import KateShooterGif from "./shooter.gif";
import KateShotBodyGif from "./shot.jpg";
import KateShotHeadGif from "./shothead.gif";

export const KateImages = {
  DEFAULT: { image: KateDefaultImg, isRandomlySelectable: true },
  GUN: { image: KateGunImg, isRandomlySelectable: false },
  SHOOTER: { image: KateShooterGif, isRandomlySelectable: false },
  SHOTBODY: { image: KateShotBodyGif, isRandomlySelectable: false },
  SHOTHEAD: { image: KateShotHeadGif, isRandomlySelectable: false },
};
