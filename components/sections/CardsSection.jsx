import Card from '../contentUI/Card';

const CardsSection = ({ data }) => {
	const { cardItems } = data;

	// Random AOS effects for each image
	const animations = [
		'fade-up',
		'fade-down',
		'fade-left',
		'fade-right',
		'zoom-in',
		'zoom-out',
	];

	return (
		<section
			className={`w-full  py-16 sm:py-20 ${
				data.mode === 'light' ? 'bg-light-background-alt' : 'bg-background'
			}`}>
			<div className='max-w-7xl mx-auto px-6 md:px-8'>
				<div className='grid md:grid-cols-3 gap-6'>
					{cardItems?.map((card, index) => (
						<Card
							path={card.uri}
							key={card.id}
							animation={animations[index % animations.length]}
							imageUrl={card.featuredImage?.node?.sourceUrl}
							imageHeight={data.imageHeight}
							alt={card.featuredImage?.node?.altText}
							title={card.title}
							description={card.excerpt}
							mode={data.mode}
							parent={card?.parent?.node?.name}
							iconName={card?.details.iconName || 'wave'}
							iconColor={card?.details.iconColor || 'var(--color-secondary)'}
							iconBackground='bg-gray-100'
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default CardsSection;
