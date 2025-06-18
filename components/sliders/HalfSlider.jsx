import Link from 'next/link';
import InfoText from '../contentUI/InfoText';
import Slider from './Slider';

const HalfSlider = ({
	children,
	mode = 'light',
	title,
	subtitle,
	description,
	contactModalButton,
	contactModalButtonLabel,
	cta,
	cta1,
	cta2,
}) => {
	return (
		<section
			className={`py-16 ${
				mode === 'light' ? 'bg-light-background-alt' : 'bg-gray-900'
			}`}>
			<div className='max-w-7xl mx-auto px-6 md:px-8'>
				<div className='flex flex-wrap w-full items-center gap-8'>
					<div className='w-full md:w-6/12'>
						<Slider
							className={mode === 'light' ? 'bg-gray-100' : 'bg-gray-900'}
							slideClasses=''
							slidesPerView={1}
							// spaceBetween={20}
							centered-slides='true'
							navigation={{ enabled: false }}
							pagination={{
								type: 'bullets',
								dynamicBullets: true,
								clickable: true,
							}}
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
							//   progress: (s, progress) =>
							//     console.log(`progress is ${progress}`),
							// }}
						>
							{children}
						</Slider>
					</div>
					<div className='w-full md:w-4/12 mx-auto'>
						<InfoText
							contactModalButton={contactModalButton}
							contactModalButtonLabel={contactModalButtonLabel}
							mode={mode}
							textAlign='left'
							title={title}
							subtitle={subtitle}
							description={description}
							cta1={{
								label1: cta?.label,
								path1: cta?.urlType === 'internal' ? cta?.path?.uri : cta?.url,
							}}
							cta2={{
								label2: cta1?.label,
								path2:
									cta1?.urlType === 'internal' ? cta1?.path?.uri : cta1?.url,
							}}
							cta3={{
								label3: cta2.label,
								path3:
									cta2?.urlType === 'internal' ? cta2?.path?.uri : cta2?.url,
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HalfSlider;
