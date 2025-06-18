import Link from 'next/link';
import { Dialog, DialogPanel } from '@headlessui/react';
import { HiOutlineXMark } from 'react-icons/hi2';
import ProfileDropdown from '../dropdowns/ProfileDropdown';
import MobileMenu from '../menus/MobileMenu';
import ContactButton from '../contentUI/ContactButton';

const NavbarMobile = ({ open, setOpen }) => {
	return (
		<Dialog
			as='div'
			className='lg:hidden'
			open={open}
			onClose={setOpen}>
			<div className='fixed inset-0 z-50' />
			<DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
				<div className='flex items-center justify-between'>
					<Link
						href='/'
						className='-m-1.5 p-1.5'>
						<span className='sr-only'>Your Company</span>
						<img
							className='h-8 w-auto'
							src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
							alt=''
						/>
					</Link>
					<button
						type='button'
						className='-m-2.5 rounded-md p-2.5 text-gray-700'
						onClick={() => setOpen(false)}>
						<span className='sr-only'>Close menu</span>
						<HiOutlineXMark
							className='h-6 w-6'
							aria-hidden='true'
						/>
					</button>
				</div>
				<div className='mt-6 flow-root'>
					<div className='-my-6 divide-y divide-gray-500/10'>
						<div className='space-y-2 py-6'>
							<MobileMenu />
							<ContactButton />
						</div>
						<div className='py-6'>
							<ProfileDropdown />
						</div>
					</div>
				</div>
			</DialogPanel>
		</Dialog>
	);
};

export default NavbarMobile;
