import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaFingerprint,
  FaAward,
  FaRetweet,
  FaAngleDown
} from "react-icons/fa6";
import { IoBoatOutline } from "react-icons/io5";
import { LuWaves } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";

export const getIconByName = (name, color, classes) => {
  const iconsMap = {
    twitter: <FaXTwitter color={ color || "#0F1419" } className={ classes } />,
    facebook: <FaFacebookF color={ color || "#0866FF" } className={ classes } />,
    instagram: <FaInstagram color={ color || "#FD3189" } className={ classes } />,
    fingerprint: <FaFingerprint color={ color } className={ classes } />,
    award: <FaAward color={ color } className={ classes } />,
    retweet: <FaRetweet color={ color } className={ classes } />,
    boat: <IoBoatOutline color={ color } className={ classes } />,
    wave: <LuWaves color={ color } className={ classes } />,
    sun: <MdOutlineWbSunny color={ color } className={ classes } />,
    downArrow: <FaAngleDown color={ color } className={ classes } />,
  };

  if (name in iconsMap) {
    const IconComponent = iconsMap[name];
    return IconComponent;
  }
};
