import Link from 'next/link';
import ContactButton from './ContactButton';

const InfoText = ({
	contactModalButton = false,
	contactModalButtonLabel,
	mode = 'light',
	textAlign = 'center',
	title = '',
	subtitle = '',
	description = '',
	htmlDescription = '',
	cta1 = { label1: '', path1: '' },
	cta2 = { label2: '', path2: '' },
	cta3 = { label3: '', path3: '' },
}) => {
	return (
		<div
			data-aos='zoom-in-right'
			className='mx-auto max-w-2xl py-16 px-4'>
			<div
				className={`mb-8 ${
					textAlign === 'left'
						? 'justify-start'
						: textAlign === 'right'
						? 'justify-end'
						: 'justify-center'
				} flex text-${
					textAlign === 'left'
						? 'start'
						: textAlign === 'right'
						? 'end'
						: textAlign
				}`}>
				{subtitle && (
					<div
						className={`relative rounded-full px-3 py-1 text-sm leading-6 ${
							mode === 'light' ? 'text-gray-600' : 'text-gray-300'
						} ring-1 ${
							mode === 'light'
								? 'ring-gray-900/10 hover:ring-gray-900/20'
								: 'ring-gray-100/10 hover:ring-gray-100/20'
						}`}>
						{subtitle}{' '}
						{cta2?.label2 && (
							<Link
								href={cta2.path2}
								className='font-semibold text-secondary'>
								<span
									className='absolute inset-0'
									aria-hidden='true'
								/>
								{cta2.label2} <span aria-hidden='true'>&rarr;</span>
							</Link>
						)}
					</div>
				)}
			</div>
			<div className={`text-${textAlign}`}>
				<h1
					className={`text-4xl font-bold ${
						mode === 'light' ? 'text-primary' : 'text-gray-100'
					} tracking-tight sm:text-6xl`}>
					{title}
				</h1>
				{description && (
					<p
						className={`mt-6 text-lg leading-8 ${
							mode === 'light' ? 'text-gray-600' : 'text-gray-300'
						}`}>
						{description}
					</p>
				)}
				{htmlDescription && (
					<div
						className={`mt-6 text-lg leading-8 ${
							mode === 'light' ? 'text-gray-600' : 'text-gray-300'
						}`}
						dangerouslySetInnerHTML={{ __html: htmlDescription }}
					/>
				)}
				<div
					className={`mt-10 flex items-center justify-${
						textAlign === 'left'
							? 'start'
							: textAlign === 'right'
							? 'end'
							: textAlign
					} gap-x-6`}>
					{contactModalButton && (
						<ContactButton label={contactModalButtonLabel} />
					)}
					{cta1?.label1 && (
						<Link
							href={cta1.path1}
							className='rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white hover:shadow shadow-md hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
							{cta1.label1}
						</Link>
					)}
					{cta3?.label3 && (
						<Link
							href={cta3.path3}
							className={`text-sm font-semibold leading-6 ${
								mode === 'light' ? 'text-gray-900' : 'text-gray-100'
							}`}>
							{cta3.label3} <span aria-hidden='true'>→</span>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default InfoText;
