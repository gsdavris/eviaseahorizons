import Banner from '../contentUI/Banner';
import InfoText from '../contentUI/InfoText';

const Images2WText = ({ data }) => {
	return (
		<section>
			<div
				className={`pt-0 pb-32 hidden lg:block ${
					data?.mode === 'light' ? 'bg-light-background-alt' : 'bg-background'
				}`}></div>
			<div
				className={`relative ${
					data?.mode === 'light' ? 'bg-light-background-alt' : 'bg-background'
				}`}>
				<div className='px-6 lg:px-8 pt-16 md:pt-0 mx-auto max-w-7xl lg:flex lg:flex-wrap relative'>
					<div className='lg:w-1/12'></div>
					<div className='lg:w-11/12 lg:mb-16'>
						<Banner
							minHeight='min-h-[500px]'
							imageUrl={data.image?.sourceUrl}
							alt={data.image?.altText}
							overlayOpacity='50'
						/>
					</div>
					<div className='mb-4 relative lg:hidden mx-auto -mt-[100px] w-10/12 z-10'>
						<div className='overflow-hidden relative'>
							<Banner
								minHeight='min-h-[400px]'
								imageUrl={data.image1?.sourceUrl}
								alt={data.image1?.altText}
								overlayOpacity='50'
							/>
						</div>
					</div>
					<div className='lg:w-5/12'></div>
					<div className='lg:w-6/12'>
						<InfoText
							mode={data?.mode}
							contactModalButton={data.contactButton}
							contactModalButtonLabel={data.contactLabel}
							title={data.title}
							subtitle={data.subtitle}
							description={data.description}
							cta1={{
								label1: data.cta?.label,
								path1:
									data.cta?.urlType === 'internal'
										? data.cta.path?.uri
										: data.cta?.url,
							}}
							cta2={{
								label1: data?.cta1?.label,
								path1:
									data.cta1.urlType === 'internal'
										? data?.cta1?.path?.uri
										: data?.cta1?.url,
							}}
							cta3={{
								label1: data?.cta2?.label,
								path1:
									data.cta2?.urlType === 'internal'
										? data.cta2?.path?.uri
										: data.cta2?.url,
							}}
							textAlign='left'
						/>
					</div>
					<div
						className={`lg:p-4 lg:pl-8 lg:absolute hidden lg:block left-0 top-[440px] ${
							data.mode === 'light'
								? 'bg-light-background-alt'
								: 'bg-background'
						} w-4/12 z-10`}>
						<div className='overflow-hidden relative'>
							<Banner
								minHeight='min-h-[400px]'
								imageUrl={data.image1?.sourceUrl}
								alt={data.image1?.altText}
								overlayOpacity='50'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Images2WText;
