import InfoText from "../contentUI/InfoText";

const InfoTextSection = ({ data }) => {
  return (
    <section>
      <InfoText
        mode={data.mode}
        contactModalButton={data.contactButton}
        contactModalButtonLabel={data.contactLabel}
        title={data.title}
        subtitle={data.subtitle}
        description={data.description}
        cta1={{
          label1: data.cta.label,
          path1:
            data.cta.urlType === "internal" ? data.cta.path?.uri : data.cta.url,
        }}
        cta2={{
          label1: data.cta1.label,
          path1:
            data.cta1.urlType === "internal"
              ? data.cta1.path?.uri
              : data.cta1.url,
        }}
        cta3={{
          label1: data.cta2.label,
          path1:
            data.cta2.urlType === "internal"
              ? data.cta2.path?.uri
              : data.cta2.url,
        }}
      />
    </section>
  );
};

export default InfoTextSection;
