import Banner from "../contentUI/Banner";
import Stats from "../contentUI/Stats";

const StatSection = ({ data }) => {
  
  return (
    <section>
      <Banner
        imageUrl={data.image?.sourceUrl}
        minHeight={data.minHeight}
        alt={data.image?.altText}
        overlayOpacity={data.opacity}
      >
        <Stats mode={data.mode} data={data} textAlign={data.textAlign} />
      </Banner>
    </section>
  );
};

export default StatSection;
