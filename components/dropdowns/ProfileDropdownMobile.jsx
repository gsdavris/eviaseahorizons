import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';
import { HiPlus, HiMinus } from 'react-icons/hi2';

const ProfileDropdownMobile = () => {
	return (
		<Disclosure
			as='div'
			className='border-b border-gray-200 py-3'>
			{({ open }) => (
				<>
					<h3 className='-my-3 flow-root'>
						<DisclosureButton className='relative flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500'>
							<span className='absolute -inset-1.5' />
							<span className='sr-only'>Open user menu</span>
							<span className='inline-flex items-center space-x-4'>
								<img
									className='h-8 w-8 rounded-full'
									src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
									alt=''
								/>
								<span className='block text-base font-semibold leading-7 text-gray-900'>
									User menu
								</span>
							</span>
							<span className='ml-6 flex items-center'>
								{open ? (
									<HiMinus
										className='h-5 w-5'
										aria-hidden='true'
									/>
								) : (
									<HiPlus
										className='h-5 w-5'
										aria-hidden='true'
									/>
								)}
							</span>
						</DisclosureButton>
					</h3>
					<DisclosurePanel className='pt-4'>
						<div className='block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-600 hover:bg-gray-50'>
							Your Profile
						</div>
						<div className='block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-600 hover:bg-gray-50'>
							Settings
						</div>
						<div className='block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-600 hover:bg-gray-50'>
							Sign out
						</div>
					</DisclosurePanel>
				</>
			)}
		</Disclosure>
	);
};

export default ProfileDropdownMobile;
