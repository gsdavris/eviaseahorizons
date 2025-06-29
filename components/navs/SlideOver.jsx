import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	Dialog,
	Transition,
	TransitionChild,
	DialogPanel,
} from '@headlessui/react';
import { HiOutlineXMark } from 'react-icons/hi2';
import MobileMenu from '../menus/MobileMenu';
import ContactButton from '../contentUI/ContactButton';
import SocialMenu from '../menus/SocialMenu';

const SlideOver = ({
	open,
	setOpen,
	menus,
	defaultSeo,
	companyDetails,
	companySocials,
}) => {
	return (
		<Transition
			show={open}
			as={Fragment}>
			<Dialog
				as='div'
				className='relative z-20'
				onClose={setOpen}>
				<TransitionChild
					as={Fragment}
					enter='ease-in-out duration-500'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in-out duration-500'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'>
					<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
				</TransitionChild>

				<div className='fixed inset-0 overflow-hidden'>
					<div className='absolute inset-0 overflow-hidden'>
						<div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
							<TransitionChild
								as={Fragment}
								enter='transform transition ease-in-out duration-500 sm:duration-700'
								enterFrom='translate-x-full'
								enterTo='translate-x-0'
								leave='transform transition ease-in-out duration-500 sm:duration-700'
								leaveFrom='translate-x-0'
								leaveTo='translate-x-full'>
								<DialogPanel className='pointer-events-auto relative z-30 w-screen max-w-md'>
									<div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
										<div className='relative mt-6 flex-1 px-4 sm:px-6'>
											<div className='flex items-center justify-between'>
												<Link
													href='/'
													className='-my-6 p-1'>
													<span className='sr-only'>
														{defaultSeo?.schema.companyName}
													</span>
													<Image
														className='h-30 w-auto'
														width='250'
														height='200'
														src={
															defaultSeo?.schema.companyLogo?.sourceUrl ||
															'https://sass-lang.com/assets/img/logos/logo.svg'
														}
														alt={
															defaultSeo?.schema.companyLogo?.altText || 'logo'
														}
													/>
												</Link>
												<button
													type='button'
													className='-m-2.5 rounded-md p-2.5 text-gray-700'
													onClick={() => setOpen(false)}>
													<span className='sr-only'>Close menu</span>
													<HiOutlineXMark
														className='h-8 w-8'
														aria-hidden='true'
													/>
												</button>
											</div>
											<div className='mt-6 flow-root'>
												<div className='-my-6 '>
													<div className='space-y-2 py-24'>
														<MobileMenu menus={menus} />
													</div>
													<div className='py-6'>
														<ContactButton label='Κράτηση' />
													</div>
													<div className='py-6'>
														<SocialMenu
															social={
																companySocials || [
																	{
																		name: 'twitter',
																		location: 'https://twitter.com/',
																	},
																	{
																		name: 'facebook',
																		location: 'https://www.facebook.com',
																	},
																	{
																		name: 'instagram',
																		location:
																			'https://www.instagram.com/powertrust_2023',
																	},
																]
															}
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</DialogPanel>
							</TransitionChild>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default SlideOver;
