import { Fragment } from "react";
import CardsSection from "../sections/CardsSection";
import ContactSection from "../sections/ContactSection";
import HalfSliderSection from "../sections/HalfSliderSection";
import Images2WText from "../sections/Images2WText";
import FeaturesCardsSection from "../sections/FeaturesCardsSection";
import SliderList from "../sections/SliderList";
import StatSection from "../sections/StatsSection";
import InfoTextSection from "../sections/InfoTextSection";
import ContentSection from "../sections/ContentSection";
import HeroSection from "../sections/HeroSection";
import GallerySection from "../sections/GallerySection";
import AnimatedBannerSection from '../sections/AnimatedBannerSection'
import MarqueeSection from "../sections/MarqueeSection";

const PageContent = ({ content }) => {
  const sectionsMap = {
    infotext: InfoTextSection,
    stats: StatSection,
    featuresCards: FeaturesCardsSection,
    cards: CardsSection,
    halfSlider: HalfSliderSection,
    imagesWText: Images2WText,
    sliderList: SliderList,
    contact: ContactSection,
    contentSection: ContentSection,
    heroSection: HeroSection,
    imageGallery: GallerySection,
    animatedBanner: AnimatedBannerSection,
    marquee: MarqueeSection
  };

  const getSectionByName = (name, data) => {
    if (name in sectionsMap) {
      const SectionComponent = sectionsMap[name];
      return <SectionComponent data={...data} />;
    }
  };



  return (
    content?.pageSections?.map((section) => (
      <Fragment key={section}>
        {getSectionByName(section, content[section])}
      </Fragment>
    )) || null
  );
};

export default PageContent;
