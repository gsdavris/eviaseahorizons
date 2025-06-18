import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineBars3, HiOutlinePhone } from 'react-icons/hi2';
import MainMenu from '../menus/MainMenu';
import ContactButton from '../contentUI/ContactButton';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Navbar({
	setOpen,
	mode,
	menus,
	companyDetails,
	defaultSeo,
}) {
	return (
		<nav
			className={`max-w-7xl mx-auto flex ${
				mode === 'dark' ? 'text-gray-100' : 'text-gray-700'
			} items-center justify-between p-6 lg:px-8`}
			aria-label='Global'>
			<div className='flex lg:hidden'>
				<button
					type='button'
					className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5'
					onClick={() => setOpen(true)}>
					<span className='sr-only'>Open main menu</span>
					<HiOutlineBars3
						className='h-8 w-8'
						aria-hidden='true'
					/>
				</button>
			</div>
			<div className='flex lg:flex-1'>
				<Link
					href='/'
					className='-my-6 p-1'>
					<span className='sr-only'>{defaultSeo?.schema.companyName}</span>
					<Image
						className={`h-30 w-auto ${mode !== 'dark' && 'hidden'}`}
						width='250'
						height='200'
						src={
							'https://api.motify.gr/evia-sea-horizons/wp-content/uploads/sites/3/2025/05/EVIA-SEA-HORIZONS_LOGO_DARK.svg'
						}
						alt={defaultSeo?.schema.companyLogo?.altText || 'logo'}
						priority
					/>
					<Image
						className={`h-30 w-auto ${mode === 'dark' && 'hidden'}`}
						width='250'
						height='200'
						src={
							defaultSeo?.schema.companyLogo?.sourceUrl ||
							'https://sass-lang.com/assets/img/logos/logo.svg'
						}
						alt={defaultSeo?.schema.companyLogo?.altText || 'logo'}
					/>
				</Link>
			</div>
			<div className='flex lg:hidden'>
				<a
					href={`tel:+30${companyDetails?.phone}`}
					className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5'>
					<span className='sr-only'>Call us now</span>
					<HiOutlinePhone
						className='h-8 w-8'
						aria-hidden='true'
					/>
				</a>
			</div>
			<div className='hidden lg:flex lg:gap-x-4'>
				<MainMenu
					mode={mode}
					menus={menus}
				/>
			</div>
			<div className='hidden lg:flex lg:flex-1 lg:justify-end'>
				<ContactButton label='Επικοινωνία' />
			</div>
		</nav>
	);
}
