import Slider from '../sliders/Slider';
import CategoryCard from '../contentUI/CategoryCard';

export default function SliderList({ data }) {
	return (
		<section
			className={data?.mode === 'light' ? 'bg-gray-100' : 'bg-background'}>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl py-16 sm:py-20 lg:max-w-none lg:py-32'>
					<h2
						className={`text-3xl sm:text-4xl font-bold tracking-tight ${
							data?.mode === 'light' ? 'text-primary' : 'text-secondary'
						}`}>
						{data?.title}
					</h2>
					<Slider
						className={
							(data?.mode === 'light' ? 'bg-gray-100' : 'bg-background') +
							' mt-8 sm:mt-16'
						}
						slidesPerView={1}
						spaceBetween={20}
						centered-slides='true'
						navigation={{ enabled: false }}
						effect='slide'
						grabCursor='true'
						loop={true}
						speed={500}
						autoplay={{ delay: 5000, disableOnInteraction: false }}
						breakpoints={{
							640: {
								navigation: { enabled: true },
								slidesPerView: 2,
								spaceBetween: 20,
							},
							768: {
								navigation: { enabled: true },
								slidesPerView: 3,
								spaceBetween: 40,
							},
							1024: {
								navigation: { enabled: true },
								slidesPerView: 3,
								spaceBetween: 50,
							},
						}}
						injectStyles={[
							`
        :host {
            --swiper-theme-color: white;
        }`,
						]}>
						{data?.items?.map((category) => (
							<CategoryCard
								mode={data?.mode}
								key={category.id}
								category={category}
							/>
						))}
					</Slider>
				</div>
			</div>
		</section>
	);
}
