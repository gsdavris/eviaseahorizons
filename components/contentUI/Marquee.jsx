import React from 'react';
import ContactButton from './ContactButton';

const Marquee = ({
	text,
	mode,
	contactModalButton,
	contactModalButtonLabel,
	cta,
}) => {
	return (
		<div
			className={`marquee flex overflow-hidden whitespace-nowrap ${
				mode === 'light'
					? 'bg-light-background text-light-text'
					: 'bg-background text-text'
			} py-4`}>
			<div className='marquee-content flex text-6xl font-thin tracking-tight gap-64'>
				{[...Array(20)].map((_, index) => (
					<span
						key={index}
						className='marquee-item flex items-center gap-8'>
						{text}
						{contactModalButton && (
							<ContactButton label={contactModalButtonLabel} />
						)}
						{cta?.label && (
							<Link
								href={cta.path}
								className='rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white hover:shadow shadow-md hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
								{cta.label}
							</Link>
						)}
					</span>
				))}
			</div>
		</div>
	);
};

export default Marquee;
