import { Fragment } from 'react';
import {
	Tab,
	Disclosure,
	TabGroup,
	TabList,
	TabPanels,
	TabPanel,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';
import { HiPlus, HiMinus } from 'react-icons/hi2';
import Link from 'next/link';
import { buildMenuTree } from '@/utils/menu';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const MobileMenu = ({ menus }) => {
	const mainMenu = menus?.nodes?.find((menu) => menu.slug === 'main');

	const menuItems = buildMenuTree(mainMenu?.menuItems?.nodes);

	return (
		<>
			{menuItems.map((item) => {
				return item?.children?.length !== 0 ? (
					<Disclosure
						as='div'
						key={item.id}
						className='border-b border-gray-200 py-3'>
						{({ open }) => (
							<>
								<h3 className='-my-3 flow-root'>
									<DisclosureButton className='flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500'>
										<span className='block text-base text-left font-semibold leading-7 text-gray-900'>
											{item.label}
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
									{item?.children?.map((i) => (
										<Link
											href={i.uri}
											key={i.id}
											className='block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-600 hover:bg-gray-50'>
											{i.label}
										</Link>
									))}
								</DisclosurePanel>
							</>
						)}
					</Disclosure>
				) : (
					<Link
						key={item.id}
						href={item.uri}
						className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
						{item.label}
					</Link>
				);
			})}
		</>
	);
};

export default MobileMenu;
