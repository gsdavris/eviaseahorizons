import FeaturesCard from '../contentUI/FeaturesCard';
import Slider from '../sliders/Slider';

export default function FeaturesCardsSection({ data }) {
	return (
		<section className='bg-white py-16 sm:py-20'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl sm:text-center'>
					<h2 className='text-3xl font-bold tracking-tight text-primary sm:text-4xl'>
						{data?.title}
					</h2>
					<p className='mt-6 text-lg leading-8 text-gray-600'>
						{data?.description}
					</p>
				</div>
			</div>
			<Slider
				className={
					(data?.mode === 'light' ? 'white' : 'bg-gray-800') +
					' mx-auto mt-16 sm:mt-20 max-w-7xl px-6 lg:px-8'
				}
				slidesPerView='1'
				spaceBetween='10'
				pagination={{ type: 'progressbar' }}
				centered-slides={true}
				navigation={{ enabled: false }}
				grabCursor={true}
				loop={true}
				speed={500}
				breakpoints={{
					640: {
						spaceBetween: 20,
					},
					768: {
						spaceBetween: 30,
					},
					1024: {
						spaceBetween: 40,
					},
				}}
				injectStyles={[
					`:host .swiper-pagination-progressbar-fill {
						background-color: var(--color-secondary);
					}`,
				]}>
				{data?.items?.map((item) => (
					<FeaturesCard
						key={item?.id}
						cardData={item}
						mode={data.mode}
					/>
				))}
			</Slider>
		</section>
	);
}
