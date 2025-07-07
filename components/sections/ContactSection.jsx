import {
	HiOutlinePhone,
	HiOutlineEnvelope,
	HiOutlineMapPin,
} from 'react-icons/hi2';
import Contact from '../forms/Contact';
import SocialMenu from '../menus/SocialMenu';
import Faq from '@/components/contentUI/Faq';

const features = [
	{
		name: 'Τηλέφωνικη Επικοινωνία.',
		description: (
			<dd className='inline'>
				Συμπληρώστε τα στοιχεία σας στη φόρμα και ζητήστε τηλεφωνική
				επικοινωνία, θα σας καλέσουμε άμεσα. Ή καλέστε μας στο{' '}
				<a
					className='font-semibold text-primary hover:text-secondary'
					href='tel:+306945963502'>
					6945 963 502
				</a>{' '}
				ή στο{' '}
				<a
					className='font-semibold text-primary hover:text-secondary'
					href='tel:+306970019329'>
					6970 019 329
				</a>
				.
			</dd>
		),
		icon: HiOutlinePhone,
	},
	{
		name: 'Ηλεκτρονικό Ταχυδρομείο.',
		description: (
			<dd className='inline'>
				Στείλτε μας email στην διεύθυνσή μας{' '}
				<a
					className='font-semibold text-primary hover:text-secondary'
					href='mailto:eviaseahorizons@gmail.com'>
					eviaseahorizons@gmail.com
				</a>{' '}
				και θα σας απαντήσουμε το συντομότερο.
			</dd>
		),
		icon: HiOutlineEnvelope,
	},
	{
		name: 'Διεύθυνση.',
		description: (
			<dd className='inline'>
				Αποστολή αλληλογραφίας στην διεύθυνσή μας{' '}
				<span className='font-semibold text-primary'>
					Δρυώπων 6, Χαλκίδα ΤΚ:34100
				</span>
				.
			</dd>
		),
		icon: HiOutlineMapPin,
	},
];

export default function ContactSection() {
	return (
		<section className='overflow-hidden bg-white py-16 sm:py-20'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='pb-16 flex flex-col text-center'>
					<h2 className='text-base font-semibold leading-7 text-secondary'>
						Βρείτε μας εύκολα και άμεσα!
					</h2>
					<p className='mt-2 font-bold text-3xl text-primary tracking-tight sm:text-5xl'>
						Φόρμα Επικοινωνίας
					</p>
				</div>

				<div className='mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
					<Contact />
					<div className='lg:max-w-lg'>
						<p className='text-lg leading-8 text-gray-600'>
							Συμπληρώστε τα στοιχεία σας στη φόρμα επικοινωνίας και θα
							επικοινωνήσουμε σύντομα μαζί σας.
						</p>
						<Faq />
						<dl className='mt-6 max-w-xl space-y-8 text-base mx-auto leading-7 text-gray-600 lg:max-w-none'>
							{features.map((feature) => (
								<div
									key={feature.name}
									className='relative pl-9'>
									<dt className='inline font-semibold text-gray-900'>
										<feature.icon
											className='absolute left-1 top-1 h-6 w-6 text-primary hover:text-secondary'
											aria-hidden='true'
										/>
										{feature.name}
									</dt>{' '}
									{feature.description}
								</div>
							))}
						</dl>
						<div className='pt-8 text-center'>
							<SocialMenu
								social={[
									{
										name: 'instagram',
										location: 'https://www.instagram.com/evia_sea_horizons',
									},
								]}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
