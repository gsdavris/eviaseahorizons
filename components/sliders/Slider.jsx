import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';

export default function Slider(props) {
	const swiperRef = useRef(null);
	const { children, slideClasses, ...rest } = props;

	useEffect(() => {
		// Register Swiper web component
		register();

		if (!swiperRef.current) return;

		// pass component props to parameters
		const params = {
			...rest,
		};

		try {
			// Assign it to swiper element
			Object.assign(swiperRef.current, params);

			// Initialize swiper
			swiperRef.current.initialize();
		} catch (error) {
			console.error('Failed to initialize swiper:', error);
		}

		return () => {
			// Clean up the swiper instance to avoid issues on page navigation
			if (swiperRef.current && swiperRef.current.swiper) {
				swiperRef.current.swiper.destroy(true, true);
			}
		};
	}, [rest]);

	return (
		<swiper-container
			init='false'
			ref={(el) => {
				if (el) swiperRef.current = el;
			}}>
			{children?.map((child, index) => (
				<swiper-slide
					className={slideClasses}
					key={index}>
					{child}
				</swiper-slide>
			))}
		</swiper-container>
	);
}
