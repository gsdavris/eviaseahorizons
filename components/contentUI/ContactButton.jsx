import { useContext } from 'react';
import { Context } from '../../context';

const ContactButton = ({ full, label = 'Επικοινωνήστε μαζί μας' }) => {
	const { dispatch } = useContext(Context);

	const handleClick = () => {
		dispatch({ type: 'IS_OPEN', payload: true });
	};

	return (
		<button
			onClick={handleClick}
			className={`rounded-md cursor-pointer bg-secondary px-6 py-2.5 ${
				full && 'w-full'
			} text-sm font-semibold text-white hover:shadow shadow-md hover:bg-secondary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}>
			{label}
		</button>
	);
};

export default ContactButton;
