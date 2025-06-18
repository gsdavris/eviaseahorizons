import { useContext, Fragment } from 'react';
import {
	Dialog,
	Transition,
	TransitionChild,
	DialogPanel,
} from '@headlessui/react';

import { Context } from '@/context';

const Modal = ({ children }) => {
	const { state, dispatch } = useContext(Context);
	const { isOpen } = state;

	const handleClose = () => {
		dispatch({ type: 'IS_OPEN', payload: false });
	};

	return (
		<Transition
			show={isOpen}
			as={Fragment}>
			<Dialog
				onClose={handleClose}
				className='relative z-50'>
				{/* The backdrop, rendered as a fixed sibling to the panel container */}
				<TransitionChild
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'>
					<div
						className='fixed inset-0 bg-black/50'
						aria-hidden='true'
					/>
				</TransitionChild>

				{/* Full-screen scrollable container */}
				<div className='fixed inset-0 w-screen overflow-y-auto'>
					{/* Container to center the panel */}
					<div className='flex min-h-full items-center justify-center p-4 pt-20'>
						{/* The actual dialog panel  */}{' '}
						<TransitionChild
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'>
							<DialogPanel className='mx-auto rounded-lg overflow-hidden'>
								{children}
							</DialogPanel>
						</TransitionChild>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default Modal;
