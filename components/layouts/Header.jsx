import { useState, useEffect } from 'react';
import Navbar from '../navs/Navbar';
import SlideOver from '../navs/SlideOver';

const Header = ({
	menus,
	categories,
	defaultSeo,
	companyDetails,
	companySocials,
}) => {
	const [open, setOpen] = useState(false);
	const [mode, setMode] = useState('dark');

	const headerColorChange = () => {
		const windowsScrollTop = window.pageYOffset;
		if (400 < windowsScrollTop) {
			setMode('light');
		} else {
			setMode('dark');
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', headerColorChange);
		return function cleanup() {
			window.removeEventListener('scroll', headerColorChange);
		};
	}, []);

	return (
		<header
			className={`fixed w-full inset-x-0 top-0 z-20 ${
				mode === 'light' ? 'bg-white' : 'text-white'
			}`}>
			<Navbar
				open={open}
				setOpen={setOpen}
				mode={mode}
				menus={menus}
				defaultSeo={defaultSeo}
				companyDetails={companyDetails}
			/>
			<SlideOver
				open={open}
				setOpen={setOpen}
				menus={menus}
				categories={categories}
				defaultSeo={defaultSeo}
				companyDetails={companyDetails}
				companySocials={companySocials}
			/>
		</header>
	);
};

export default Header;
