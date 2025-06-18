import Image from 'next/image';
import Link from 'next/link';
import { getIconByName } from '@/utils/icons';

const Card = ({
	path,
	imageUrl,
	imageHeight,
	alt,
	title,
	description,
	iconName,
	iconColor,
	iconBackground,
	parent,
	mode,
	animation,
}) => {
	const shortenedText = (text, maxLength) => {
		const words = text.trim().split(' ');
		if (words.join(' ').length > maxLength) {
			let truncatedText = '';
			for (const word of words) {
				if ((truncatedText + word).length <= maxLength) {
					truncatedText += word + ' ';
				} else {
					break;
				}
			}
			return truncatedText;
		}
	};

	return (
		<div
			data-aos={animation} // Random animation
			className='w-full text-center group'>
			<div
				className={`relative flex flex-col min-w-0 break-words transform transition-transform duration-300 ease-out group-hover:-translate-y-4 group-hover:shadow-lg ${
					mode === 'light' ? 'bg-white' : 'bg-gray-800'
				} w-full shadow-md rounded-lg`}>
				{path ? (
					<Link href={path}>
						{imageUrl && alt && (
							<div
								className={`relative w-full ${imageHeight} overflow-hidden rounded-t-lg -mb-12`}>
								<Image
									src={imageUrl}
									fill
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									style={{ objectFit: 'cover' }}
									className='z-0'
									alt={alt}
								/>
							</div>
						)}
						<div className='px-4 py-5 flex-auto'>
							<div
								className={`relative text-center inline-flex items-center justify-center h-14 w-14 mb-5 shadow-md rounded-full transition-all duration-300 ease-out group-hover:shadow-xl ${iconBackground}`}>
								{getIconByName(iconName, iconColor, 'h-6 w-6')}
							</div>
							{parent && (
								<p
									className={`mt-2 ${
										mode === 'light' ? 'text-gray-600' : 'text-gray-300'
									} text-sm font-semibold leading-8`}>
									{parent}
								</p>
							)}
							<h6
								className={`text-xl font-bold ${
									mode === 'light' ? 'text-primary' : 'text-gray-100'
								} tracking-tight sm:text-2xl`}>
								{title}
							</h6>
							<div
								className={`mt-2 mb-4 ${
									mode === 'light' ? 'text-gray-600' : 'text-gray-300'
								} text-lg leading-8`}
								dangerouslySetInnerHTML={{
									__html:
										shortenedText(description, 120) +
										"<span class='text-secondary hover:text-secondary/70 text-sm'>...περισσότερα</span>",
								}}
							/>
						</div>
					</Link>
				) : (
					<>
						{imageUrl && alt && (
							<div
								className={`relative w-full ${imageHeight} overflow-hidden rounded-t-lg -mb-12`}>
								<Image
									src={imageUrl}
									fill
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									style={{ objectFit: 'cover' }}
									className='z-0'
									alt={alt}
								/>
							</div>
						)}
						<div className='px-4 py-5 flex-auto'>
							<div
								className={`relative text-center inline-flex items-center justify-center h-14 w-14 mb-5 shadow-md rounded-full transition-all duration-300 ease-out group-hover:shadow-xl ${iconBackground}`}>
								{getIconByName(iconName, iconColor, 'h-6 w-6')}
							</div>
							<h6
								className={`text-xl font-bold ${
									mode === 'light' ? 'text-gray-900' : 'text-gray-100'
								} tracking-tight sm:text-2xl`}>
								{title}
							</h6>
							<p
								className={`mt-2 mb-4 ${
									mode === 'light' ? 'text-gray-600' : 'text-gray-300'
								} text-lg leading-8`}>
								{description}
							</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Card;
