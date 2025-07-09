import { parseWpTableToArray } from '@/utils/helpers';

export default function BoatFeaturesSection({ data }) {
	const features = parseWpTableToArray(data?.content) || [
		{ key: 'Origin', value: 'Designed by Good Goods, Inc.' },
		{
			key: 'Material',
			value:
				'Solid walnut base with rare earth magnets and powder coated steel card cover',
		},
		{ key: 'Dimensions', value: '6.25" x 3.55" x 1.15"' },
		{ key: 'Finish', value: 'Hand sanded and finished with natural oil' },
		{ key: 'Includes', value: 'Wood card tray and 3 refill packs' },
		{
			key: 'Considerations',
			value:
				'Made from natural materials. Grain and color vary with each item.',
		},
	];
	return (
		<section
			className={`w-full  py-16 sm:py-20 ${
				true ? 'bg-light-background-alt' : 'bg-background'
			}`}>
			<div className='mx-auto grid max-w-7xl grid-cols-1 items-center gap-x-8 gap-y-16 px-6 md:px-8'>
				<div>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						Τεχνικά Χαρακτηριστικά
					</h2>
					<dl className='mt-16 grid grid-cols-1 gap-x-6 lg:gap-x-8 gap-y-6 sm:gap-y-8 sm:grid-cols-2'>
						{features.map((feature) => (
							<div
								key={feature.key}
								className='border-t border-gray-200 pt-4'>
								<dt className='font-medium text-gray-900'>{feature.key}</dt>
								<dd className='mt-2 text-sm text-gray-500'>{feature.value}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</section>
	);
}
