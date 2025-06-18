import AnimatedBannerFragment from "./AnimatedBannerFragment";
import CardsFragment from "./CardsFragment";
import ContentFragment from "./ContentFragment";
import HalfSliderFragment from "./HalfSliderFragment";
import HeroFragment from "./HeroFragment";
import ImageGalleryFragment from "./ImageGalleryFragment";
import Images2WTextFragment from "./Images2WTextFragment";
import InfoTextFragment from "./InfoTextFragment";
import FeaturesCardsFragment from "./FeaturesCardsFragment";
import SliderListFragment from "./SliderListFragment";
import StatsFragment from "./StatsFragment";
import MarqueeFragment from "./MarqueeFragment";

const PageContentFragment = `
 pageContent {
    pageSections
    ${InfoTextFragment}
    ${StatsFragment}
    ${FeaturesCardsFragment}
    ${CardsFragment}
    ${HalfSliderFragment}
    ${Images2WTextFragment}
    ${SliderListFragment}
    ${ContentFragment}
    ${HeroFragment}
    ${ImageGalleryFragment}
    ${AnimatedBannerFragment}
    ${MarqueeFragment}
}
`;

export default PageContentFragment;
