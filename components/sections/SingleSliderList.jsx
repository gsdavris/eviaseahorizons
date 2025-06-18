import Slider from '../sliders/Slider';
import CategoryCard from '../contentUI/CategoryCard';

export default function SingleSliderList({ mode = 'dark', title, items }) {
	return (
		<section className={mode === 'light' ? 'bg-gray-100' : 'bg-background'}>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl py-16 sm:py-20 lg:max-w-none lg:py-32'>
					<h2
						className={`text-3xl sm:text-4xl font-bold tracking-tight ${
							mode === 'light' ? 'text-gray-900' : 'text-gray-100'
						}`}>
						{title}
					</h2>
					<Slider
						className={
							(mode === 'light' ? 'bg-gray-100' : 'bg-background') +
							' mt-8 sm:mt-16'
						}
						slidesPerView={1}
						spaceBetween={20}
						centered-slides='true'
						navigation={{ enabled: false }}
						effect='slide'
						grabCursor='true'
						loop={false}
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
								slidesPerView: 4,
								spaceBetween: 50,
							},
						}}
						injectStyles={[
							`
        :host {
            --swiper-theme-color: white;
        }`,
						]}>
						{items
							?.slice(0)
							.reverse()
							.map((category) => (
								<CategoryCard
									mode={mode}
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
