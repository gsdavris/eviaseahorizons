import Banner from '../contentUI/Banner';
import InfoText from '../contentUI/InfoText';
import Slider from '../sliders/Slider';

const HeroSection = ({ data }) => {
	if (data?.banners?.length === 1) {
		return (
			<section>
				<Banner
					imageUrl={data.banners[0].sourceUrl}
					filePath={data.banners[0].filePath}
					minHeight={data.banners[0].bannerOptions.minHeight}
					alt={data.banners[0].altText}
					overlayOpacity={data.banners[0].bannerOptions.opacity}>
					<InfoText
						mode='dark'
						contactModalButton={data.banners[0].bannerOptions.contactButton}
						contactModalButtonLabel={data.banners[0].bannerOptions.contactLabel}
						title={data.banners[0].bannerOptions.title}
						subtitle={data.banners[0].bannerOptions.subtitle}
						description={data.banners[0].bannerOptions.description}
						cta1={{
							label1: data.banners[0].bannerOptions.cta.label,
							path1:
								data.banners[0].bannerOptions.cta.urlType === 'internal'
									? data.banners[0].bannerOptions.cta.path?.uri
									: data.banners[0].bannerOptions.cta.url,
						}}
						cta2={{
							label2: data.banners[0].bannerOptions.cta1.label,
							path2:
								data.banners[0].bannerOptions.cta1.urlType === 'internal'
									? data.banners[0].bannerOptions.cta1.path?.uri
									: data.banners[0].bannerOptions.cta1.url,
						}}
						cta3={{
							label3: data.banners[0].bannerOptions.cta2.label,
							path3:
								data.banners[0].bannerOptions.cta2.urlType === 'internal'
									? data.banners[0].bannerOptions.cta2.path?.uri
									: data.banners[0].bannerOptions.cta2.url,
						}}
					/>
				</Banner>
			</section>
		);
	}

	return (
		<section>
			<Slider
				className='bg-white'
				slidesPerView={1}
				centered-slides='true'
				navigation={{ enabled: false }}
				pagination={{ type: 'bullets', dynamicBullets: true, clickable: true }}
				effect='slide'
				grabCursor='true'
				loop={true}
				scrollbar={{ draggable: true }}
				speed={500}
				autoplay={{ delay: 5000, disableOnInteraction: false }}
				breakpoints={{
					640: {
						navigation: { enabled: true },
					},
				}}
				injectStyles={[
					`
        :host {
            --swiper-theme-color: white;
            --swiper-pagination-bullet-inactive-color: #fff;
            --swiper-pagination-bullet-inactive-opacity: 0.2;
            --swiper-pagination-bullet-size: 12px;
            --swiper-pagination-bottom: 32px;
            --swiper-scrollbar-bg-color: rgba(255, 255, 255, 0.1);
            --swiper-scrollbar-drag-bg-color: rgba(255, 255, 255, 0.5);
            --swiper-scrollbar-size: 4px;
        }`,
				]}
				// on={{
				//   slideChange: () => console.log("slide changed"),
				//   progress: (s, progress) => console.log(`progress is ${progress}`),
				// }}
			>
				{data?.banners?.map((i) => (
					<Banner
						key={i.id}
						imageUrl={i.sourceUrl}
						filePath={i.filePath}
						minHeight={i.bannerOptions.minHeight}
						alt={i.altText}
						overlayOpacity={i.bannerOptions.opacity}>
						<InfoText
							mode='dark'
							contactModalButton={i.bannerOptions.contactButton}
							contactModalButtonLabel={i.bannerOptions.contactLabel}
							title={i.bannerOptions.title}
							subtitle={i.bannerOptions.subtitle}
							description={i.bannerOptions.description}
							cta1={{
								label1: i.bannerOptions.cta.label,
								path1:
									i.bannerOptions.cta.urlType === 'internal'
										? i.bannerOptions.cta.path?.uri
										: i.bannerOptions.cta.url,
							}}
							cta2={{
								label2: i.bannerOptions.cta1.label,
								path2:
									i.bannerOptions.cta1.urlType === 'internal'
										? i.bannerOptions.cta1.path?.uri
										: i.bannerOptions.cta1.url,
							}}
							cta3={{
								label3: i.bannerOptions.cta2.label,
								path3:
									i.bannerOptions.cta2.urlType === 'internal'
										? i.bannerOptions.cta2.path?.uri
										: i.bannerOptions.cta2.url,
							}}
						/>
					</Banner>
				))}
			</Slider>
		</section>
	);
};

export default HeroSection;
