import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const imagesArray = [
	'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=500&auto=format&fit=crop&q=60',
	'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60',
	'https://images.unsplash.com/photo-1588001438703-40b53fafbcba?w=500&auto=format&fit=crop&q=60',
	'https://images.unsplash.com/photo-1595185977571-530d18c9ef5f?w=500&auto=format&fit=crop&q=60',
	'https://images.unsplash.com/photo-1522804500346-54b1cff8cc39?w=500&auto=format&fit=crop&q=60',
	'https://images.unsplash.com/photo-1615681666366-e8a35535fb72?w=500&auto=format&fit=crop&q=60',
	'https://images.unsplash.com/photo-1594582613951-52ebd5f4138c?w=500&auto=format&fit=crop&q=60',
];

const GallerySection = ({ images = imagesArray, data }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);

	// Random AOS effects for each image
	const animations = [
		'fade-up',
		'fade-down',
		'fade-left',
		'fade-right',
		'zoom-in',
		'zoom-out',
	];

	let items = '';

	if (data) {
		items = data.items;
	}

	return (
		<section className='overflow-hidden bg-light-background-alt py-8'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='relative columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4'>
					{items
						? items.map((image, index) => (
								<div
									key={image.id}
									className='relative overflow-hidden rounded-lg shadow-lg transform hover:!transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-2xl'
									data-aos={animations[index % animations.length]} // Random animation
									style={{ willChange: 'transform, opacity' }}
									onClick={() => {
										setPhotoIndex(index);
										setIsOpen(true);
									}}>
									<img
										src={image.sourceUrl}
										alt={image.altText}
										className='w-full object-cover rounded-lg'
									/>
								</div>
						  ))
						: images.map((image, index) => (
								<div
									key={index}
									className='relative overflow-hidden rounded-lg shadow-lg transform hover:!transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-2xl'
									data-aos={animations[index % animations.length]} // Random animation
									style={{ willChange: 'transform, opacity' }}
									onClick={() => {
										setPhotoIndex(index);
										setIsOpen(true);
									}}>
									<img
										src={image}
										alt={`Gallery Image ${index + 1}`}
										className='w-full object-cover rounded-lg'
									/>
								</div>
						  ))}
				</div>
				{items
					? isOpen && (
							<Lightbox
								open={isOpen}
								close={() => setIsOpen(false)}
								slides={items?.map(({ sourceUrl, ...rest }) => ({
									...rest,
									src: sourceUrl,
								}))}
								index={photoIndex}
							/>
					  )
					: isOpen && (
							<Lightbox
								open={isOpen}
								close={() => setIsOpen(false)}
								slides={images.map((src) => ({ src }))}
								index={photoIndex}
							/>
					  )}
				{}
			</div>
		</section>
	);
};

export default GallerySection;
