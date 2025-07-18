import { Fragment, useState } from 'react';
import {
	Dialog,
	Menu,
	Transition,
	TransitionChild,
	DialogPanel,
	MenuButton,
	MenuItems,
	MenuItem,
} from '@headlessui/react';
import {
	HiOutlineXMark,
	HiChevronDown,
	HiFunnel,
	HiSquares2X2,
} from 'react-icons/hi2';

const sortOptions = [
	{ name: 'Nεότερα', value: 'DESC' },
	{ name: 'Παλαιότερα', value: 'ASC' },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function BlogLayout({
	children,
	categories,
	onCurrentCategoryStateChange,
	onCurrentOrderStateChange,
	loading,
}) {
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
	const [currentCategory, setCurrentCategory] = useState('');
	const [currentOrder, setCurrentOrder] = useState('DESC');

	const DisplayedCategories = categories?.nodes?.filter(
		(i) => i.posts?.nodes?.length > 0
	);

	const handleClick = (name) => {
		setCurrentCategory(name);
		onCurrentCategoryStateChange(name);
	};

	const handleSelect = (order) => {
		setCurrentOrder(order);
		onCurrentOrderStateChange(order);
	};

	return (
		<div className='bg-white'>
			<div>
				{/* Mobile filter dialog */}
				<Transition
					show={mobileFiltersOpen}
					as={Fragment}>
					<Dialog
						as='div'
						className='relative z-40 lg:hidden'
						onClose={setMobileFiltersOpen}>
						<TransitionChild
							as={Fragment}
							enter='transition-opacity ease-linear duration-300'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='transition-opacity ease-linear duration-300'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'>
							<div className='fixed inset-0 bg-black bg-opacity-25' />
						</TransitionChild>

						<div className='fixed inset-0 z-40 flex'>
							<TransitionChild
								as={Fragment}
								enter='transition ease-in-out duration-300 transform'
								enterFrom='translate-x-full'
								enterTo='translate-x-0'
								leave='transition ease-in-out duration-300 transform'
								leaveFrom='translate-x-0'
								leaveTo='translate-x-full'>
								<DialogPanel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl'>
									<div className='flex items-center justify-between px-4'>
										<h2 className='text-lg font-medium text-gray-900'>
											Κατηγορίες
										</h2>
										<button
											type='button'
											className='-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400'
											onClick={() => setMobileFiltersOpen(false)}>
											<span className='sr-only'>Close menu</span>
											<HiOutlineXMark
												className='h-6 w-6'
												aria-hidden='true'
											/>
										</button>
									</div>

									{/* Filters */}
									<form className='mt-4 border-t border-gray-200'>
										<h3 className='sr-only'>Κατηγορίες</h3>
										<ul
											role='list'
											className='px-2 py-3 font-medium text-gray-900'>
											<li>
												<button
													type='button'
													disabled={loading}
													onClick={() => {
														handleClick('');
													}}
													className={`block px-2 py-3 ${
														currentCategory === '' ? 'text-secondary' : ''
													}`}>
													Όλες οι κατηγορίες
												</button>
											</li>
											{DisplayedCategories?.map((category) => (
												<li key={category.id}>
													<button
														type='button'
														disabled={loading}
														onClick={() => {
															handleClick(category.name);
														}}
														className={`block px-2 py-3 ${
															currentCategory === category.name
																? 'text-secondary'
																: ''
														}`}>
														{category.name}
													</button>
												</li>
											))}
										</ul>
									</form>
								</DialogPanel>
							</TransitionChild>
						</div>
					</Dialog>
				</Transition>

				<main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
					<div className='flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24'>
						<h1 className='text-4xl font-bold tracking-tight text-gray-900'>
							Άρθρα
						</h1>

						<div className='flex items-center'>
							<Menu
								as='div'
								className='relative inline-block text-left'>
								<div>
									<MenuButton className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
										Tαξινόμηση
										<HiChevronDown
											className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
											aria-hidden='true'
										/>
									</MenuButton>
								</div>

								<Transition
									as={Fragment}
									enter='transition ease-out duration-100'
									enterFrom='transform opacity-0 scale-95'
									enterTo='transform opacity-100 scale-100'
									leave='transition ease-in duration-75'
									leaveFrom='transform opacity-100 scale-100'
									leaveTo='transform opacity-0 scale-95'>
									<MenuItems className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
										<div className='py-1'>
											{sortOptions.map((option) => (
												<MenuItem key={option.name}>
													{({ active }) => (
														<button
															type='button'
															onClick={() => {
																handleSelect(option.value);
															}}
															className={classNames(
																currentOrder === option.value
																	? 'font-medium text-gray-900'
																	: 'text-gray-500',
																active ? 'bg-gray-100' : '',
																'block px-4 py-2 text-sm w-full'
															)}>
															{option.name}
														</button>
													)}
												</MenuItem>
											))}
										</div>
									</MenuItems>
								</Transition>
							</Menu>

							{/* <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <HiSquares2X2 className="h-5 w-5" aria-hidden="true" />
              </button> */}
							<button
								type='button'
								className='-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden'
								onClick={() => setMobileFiltersOpen(true)}>
								<span className='sr-only'>Κατηγορίες</span>
								<HiFunnel
									className='h-5 w-5'
									aria-hidden='true'
								/>
							</button>
						</div>
					</div>

					<section
						aria-labelledby='products-heading'
						className='pt-6'>
						<h2
							id='products-heading'
							className='sr-only'>
							Posts
						</h2>

						<div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
							{/* Filters */}
							<form className='hidden lg:block'>
								<h3 className='sr-only'>Κατηγορίες</h3>
								<ul
									role='list'
									className='space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900'>
									<li>
										<button
											type='button'
											disabled={loading}
											onClick={() => handleClick('')}
											className={
												currentCategory === '' ? 'text-secondary' : ''
											}>
											Όλες οι κατηγορίες
										</button>
									</li>
									{DisplayedCategories?.map((category) => (
										<li key={category.id}>
											<button
												type='button'
												disabled={loading}
												onClick={() => handleClick(category.name)}
												className={
													currentCategory === category.name
														? 'text-secondary'
														: ''
												}>
												{category.name}
											</button>
										</li>
									))}
								</ul>
							</form>

							{/* Product grid */}
							<div className='lg:col-span-3'>{children}</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}
