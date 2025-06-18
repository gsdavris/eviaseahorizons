import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import Link from 'next/link';
import { buildMenuTree } from '@/utils/menu';

const MainMenu = ({ mode, menus }) => {
	const mainMenu = menus?.nodes.find((menu) => menu.slug === 'main');
	const menuItems = buildMenuTree(mainMenu?.menuItems?.nodes);

	return (
		mainMenu &&
		menuItems.map((item) =>
			item.children.length === 0 ? (
				<Link
					key={item.id}
					href={item.uri}
					className={`rounded-lg px-3 py-2 text-md ${
						mode === 'dark'
							? ' text-gray-100 hover:text-secondary'
							: ' text-gray-700 hover:text-primary hover:bg-gray-50'
					} font-semibold leading-6`}>
					{item.label}
				</Link>
			) : (
				<div
					onMouseEnter={() =>
						document.getElementById(`popover-${item.id}`)?.click()
					}
					onMouseLeave={() => document.activeElement?.blur()}
					className='relative'
					key={item.id}>
					<Popover>
						<PopoverButton
							id={`popover-${item.id}`}
							className={`rounded-lg px-3 py-2 text-md ${
								mode === 'dark'
									? ' text-gray-100 hover:text-secondary'
									: ' text-gray-700 hover:text-primary hover:bg-gray-50'
							} font-semibold leading-6 focus-visible:outline-none`}>
							{item.label}
						</PopoverButton>
						<PopoverPanel
							transition
							anchor='bottom'
							className={`divide-y shadow-lg divide-white/5 rounded-xl z-20 left-1/3 translate-x-1/3 ${
								mode === 'dark'
									? ' text-gray-100 bg-white/5'
									: ' text-gray-700 bg-white'
							} text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0`}>
							<div className='p-3'>
								{item.children.map((i) => (
									<Link
										key={i.id}
										className={`block rounded-lg py-2 px-3 transition ${
											mode === 'dark'
												? ' text-gray-100 hover:text-secondary hover:bg-white/5'
												: ' text-gray-700 hover:text-primary hover:bg-gray-50'
										} font-semibold`}
										href={i.uri}>
										{i.label}
									</Link>
								))}
							</div>
						</PopoverPanel>
					</Popover>
				</div>
			)
		)
	);
};

export default MainMenu;
