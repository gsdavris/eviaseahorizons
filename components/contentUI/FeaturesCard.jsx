import Image from 'next/image';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa6';
import ContactButton from './ContactButton';

const FeaturesCard = ({ cardData, mode }) => {
	return (
		<div
			className={`mx-1 mt-8 mb-2 rounded-3xl ring-1 ring-gray-200 ${
				mode === 'light' ? 'bg-gray-50' : 'bg-gray-900'
			} lg:flex lg:max-w-7xl`}>
			<div className='p-8 sm:p-10 lg:flex-auto'>
				<h3
					className={`text-2xl font-bold tracking-tight ${
						mode === 'light' ? 'text-primary' : 'text-gray-100'
					}`}>
					{cardData?.title}
				</h3>
				<div
					className={`mt-6 text-base leading-7 ${
						mode === 'light' ? 'text-gray-600' : 'text-gray-300'
					}`}
					dangerouslySetInnerHTML={{ __html: cardData?.excerpt }}
				/>
				<div className='mt-10 flex items-center gap-x-4'>
					<h4
						className={`flex-none text-sm font-semibold leading-6 ${
							mode === 'light' ? 'text-primary' : 'text-secondary'
						}`}>
						Features
					</h4>
					<div className='h-px flex-auto bg-gray-100' />
				</div>
				<ul
					role='list'
					className={`mt-8 grid grid-cols-1 gap-4 text-sm leading-6 ${
						mode === 'light' ? 'text-gray-600' : 'text-gray-300'
					} sm:grid-cols-2 sm:gap-6`}>
					{cardData?.features?.nodes.length <= 4
						? cardData?.features?.nodes.map((feature) => (
								<li
									key={feature?.id}
									className='flex gap-x-3'>
									<FaCheck
										className='h-6 w-5 flex-none text-primary'
										aria-hidden='true'
									/>
									{feature?.name}
								</li>
						  ))
						: cardData?.features?.nodes.slice(0, 4).map((feature) => (
								<li
									key={feature?.id}
									className='flex gap-x-3'>
									<FaCheck
										className={`h-6 w-5 flex-none ${
											mode === 'light' ? 'text-primary' : 'text-secondary'
										}`}
										aria-hidden='true'
									/>
									{feature?.name}
								</li>
						  ))}
				</ul>
				{cardData?.features?.nodes.length > 4 && (
					<h4
						className={`flex-none text-sm pt-4 font-semibold leading-6 ${
							mode === 'light' ? 'text-primary' : 'text-secondary'
						}`}>
						και πολλά ακόμα...
					</h4>
				)}
			</div>
			<div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
				<div className='relative rounded-2xl bg-gray-100 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:h-full lg:flex-col lg:justify-center'>
					<div className='relative w-full h-64 overflow-hidden rounded-t-2xl'>
						<Image
							src={cardData?.featuredImage?.node.sourceUrl}
							fill
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							style={{ objectFit: 'cover' }}
							className='z-0'
							alt={cardData?.featuredImage?.node.altText}
						/>
					</div>
					<div className='relative mx-auto max-w-xs px-8 py-8'>
						<ContactButton
							full
							label='Κλείσε τώρα'
						/>
						<Link
							href={cardData?.uri}
							className='mt-4 block w-full rounded-md bg-primary px-3 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
							Μάθε περισσότερα
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturesCard;
