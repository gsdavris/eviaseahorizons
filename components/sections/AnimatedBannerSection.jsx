import InfoText from '../contentUI/InfoText';
import Overlay from '../contentUI/Overlay';
import WaterScene from '../contentUI/WaterScene';

const AnimatedBannerSection = ({ data }) => {
	return (
		<section
			className={`relative w-full ${data?.minHeight} flex items-center content-center justify-center`}>
			<div className='fixed top-0 left-0 w-full h-full bg-center bg-cover -z-10'>
				<WaterScene />
			</div>
			<Overlay opacity={data?.opacity} />
			<div className='container relative z-20'>
				<InfoText
					mode={data?.mode}
					contactModalButton={data?.contactButton}
					contactModalButtonLabel={data?.contactLabel}
					title={data?.title}
					subtitle={data?.subtitle}
					description={data?.description}
					cta1={{
						label1: data?.cta.label,
						path1:
							data?.cta.urlType === 'internal'
								? data?.cta.path?.uri
								: data?.cta.url,
					}}
					cta2={{
						label1: data?.cta1.label,
						path1:
							data?.cta1.urlType === 'internal'
								? data?.cta1.path?.uri
								: data?.cta1.url,
					}}
					cta3={{
						label1: data.cta2.label,
						path1:
							data?.cta2.urlType === 'internal'
								? data?.cta2.path?.uri
								: data?.cta2.url,
					}}
				/>
			</div>
		</section>
	);
};

export default AnimatedBannerSection;
