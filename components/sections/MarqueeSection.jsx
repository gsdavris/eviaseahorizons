import Marquee from '../contentUI/Marquee';

const MarqueeSection = ({ data }) => {
	return (
		<section>
			<Marquee
				mode={data.mode}
				contactModalButton={data.contactButton}
				contactModalButtonLabel={data.contactLabel}
				text={data.text}
				cta={{
					label: data.cta.label,
					path:
						data.cta.urlType === 'internal' ? data.cta.path?.uri : data.cta.url,
				}}
			/>
		</section>
	);
};

export default MarqueeSection;
