import ContactButton from '../contentUI/ContactButton';
import Modal from '../contentUI/Modal';
import FooterMenu from '../menus/FooterMenu';
import SocialMenu from '../menus/SocialMenu';
import ContactSection from '../sections/ContactSection';
import AbsoluteFooter from './AbsoluteFooter';
import BackTop from './BackTop';
import { transformMenu } from '@/utils/helpers';

const Footer = ({ mode = 'light', menus, companyDetails, companySocials }) => {
	const secondaryMenu = menus?.nodes.find((menu) => menu.slug === 'secondary');

	const footerMenus = transformMenu(secondaryMenu);

	return (
		<>
			<footer
				className={`relative ${
					mode === 'light' ? 'bg-light-background' : 'bg-background'
				} pt-12 pb-6`}>
				<div className='max-w-7xl mx-auto'>
					<div className='flex flex-wrap text-center lg:text-left'>
						<div className='w-full lg:w-4/12 px-8'>
							<h4
								className={`text-3xl font-semibold ${
									mode === 'light' ? 'text-black' : 'text-gray-100'
								}`}>
								{companyDetails?.title}
							</h4>
							<img
								className='h-30 w-auto mx-auto my-2 lg:ml-0'
								src='https://api.motify.gr/evia-sea-horizons/wp-content/uploads/sites/3/2025/05/EVIA-SEA-HORIZONS_LOGO_DARK.svg'
								alt='logo'
							/>
							<h5
								className={`text-lg mt-0 mb-2  ${
									mode === 'light' ? 'text-gray-600' : 'text-gray-300'
								}`}>
								{companyDetails?.bio}
							</h5>
							<div className='mt-6 lg:mb-0 mb-6'>
								<SocialMenu
									social={
										companySocials || [
											{ name: 'twitter', location: 'https://twitter.com/' },
											{
												name: 'facebook',
												location: 'https://www.facebook.com/',
											},
											{
												name: 'instagram',
												location: 'https://www.instagram.com/',
											},
										]
									}
								/>
							</div>
						</div>
						<div className='w-full lg:w-8/12 px-4'>
							<div className='flex flex-wrap items-top mb-6'>
								{footerMenus &&
									footerMenus.length !== 0 &&
									footerMenus.map((menu) => (
										<div
											key={menu.id}
											className='w-full md:w-4/12 px-4 ml-auto'>
											<FooterMenu
												mode={mode}
												title={menu.label}
												navigation={menu.items}
											/>
										</div>
									))}
								<div className='w-full md:w-4/12 px-4 ml-auto'>
									<div className='py-4'>
										<ContactButton label='Κράτηση' />
									</div>
								</div>
							</div>
						</div>
					</div>
					<AbsoluteFooter
						companyDetails={companyDetails}
						mode={mode}
					/>
				</div>
				<BackTop />
				<Modal>
					<ContactSection />
				</Modal>
			</footer>
		</>
	);
};

export default Footer;
