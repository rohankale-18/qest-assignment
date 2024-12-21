import React, { useEffect, useRef, useState } from 'react'
import Logo from '../svgs/Logo'
import Button from './Button'
import { Link, useLocation } from 'react-router-dom'
import MaxWidthWrapper from './MaxWidthWrapper'
import FeatureItem from './FeatureItem'

const Navbar = () => {
	const location = useLocation();
	const dropdownRef = useRef(null);

	const isActive = (path) => location.pathname === path;
	const [isFeatureVisible, setIsFeatureVisible] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleFeatureVisibility = (event) => {
		event.stopPropagation(); // Prevent the click event from propagating to document
		setIsFeatureVisible((prev) => !prev);
	};

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	useEffect(() => {
		setIsFeatureVisible(false);
		setIsMenuOpen(false);
	}, [location.pathname])

	useEffect(() => {
		if (isFeatureVisible) {
			setIsMenuOpen(false);
		}
	}, [isFeatureVisible])

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target) &&
				event.target.getAttribute('data-toggle') !== 'features-button'
			) {
				setIsFeatureVisible(false); // Close the dropdown
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<>
			<nav className='max-w-7xl w-full bg-white border-b shadow-md md:border-[3px] mx-auto border-[#E5E7EB] md:rounded-[8px] p-2.5 md:mt-5 flex justify-between items-center relative z-10'>
				<div className='px-1'>
					<Logo />
				</div>
				<div className='flex items-center divide-x-2 gap-4'>
					{/* Desktop Menu */}
					<div className='hidden md:flex items-center gap-5 relative'>
						<Link to='/' className={isActive('/') ? 'font-semibold' : 'font-normal'}>Home</Link>
						<p
							className='cursor-pointer flex items-center gap-1'
							data-toggle='features-button' // Add this attribute
							onClick={(e) => toggleFeatureVisibility(e)}
						>
							Features <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.01001 1L5.01001 5L9.01001 1" stroke="#1F1F1F" stroke-linecap="round" stroke-linejoin="round" />
							</svg>

						</p>
						<Link to='/pricing' className={isActive('/pricing') ? 'font-semibold' : 'font-normal'}>Pricing</Link>
						<p className='flex items-center gap-1 cursor-pointer'>Solutions <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1.01001 1L5.01001 5L9.01001 1" stroke="#1F1F1F" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						</p>
					</div>
					<div className='pl-4 space-x-3 hidden md:block'>
						<Button intent={'ghost'} className='py-1'>Login</Button>
						<Button className='py-1'>Try for free</Button>
					</div>
				</div>

				{/* Hamburger Menu Button for Mobile */}
				<div className='md:hidden'>
					<button onClick={toggleMenu} className='text-xl'>
						{isMenuOpen ? (
							<span>&#10005;</span> // Close icon
						) : (
							<span>&#9776;</span> // Hamburger icon
						)}
					</button>
				</div>
				{/* Dropdown for Features */}
				{isFeatureVisible && (
					<div ref={dropdownRef} className='max-w-full w-[950px] absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-b-md border grid grid-cols-1 md:grid-cols-[2fr_3fr_2fr] pb-4'>
						<div className='border-r-2'>
							<p className='text-lg font-semibold py-3 pl-6'>Discover</p>
							<div className='flex flex-col gap-y-2 p-2'>
								<FeatureItem icon={'/airplay.svg'} feature='Custom Branded website' />
								<FeatureItem icon={'/mobile.svg'} feature='User Mobile App' />
								<FeatureItem icon={'/image-gallery-plus.svg'} feature='Business Webpage' />
							</div>
						</div>
						<div className='border-r-2'>
							<p className='text-lg font-semibold py-3 pl-6'>Manage</p>
							<div className='grid grid-cols-2 gap-2 p-2'>
								<FeatureItem icon={'/book-open-reader.svg'} feature='Courses' />
								<FeatureItem icon={'/envelope-shield.svg'} feature='Communication' />
								<FeatureItem icon={'/school.svg'} feature='Classess' />
								<FeatureItem icon={'/triangle.svg'} feature='Trail Session' />
								<FeatureItem icon={'/document.svg'} feature='Appointments' />
								<FeatureItem icon={'/user-settings.svg'} feature='Staff Roles' />
								<FeatureItem icon={'/user-change.svg'} feature='Services' />
								<FeatureItem icon={'/home-dash-user.svg'} feature='Workshops' />
								<FeatureItem icon={'/star-magic.svg'} feature='Retreats' />
								<FeatureItem icon={'/chart-line.svg'} feature='Reporting tools' />
								<FeatureItem icon={'/credit-card-check.svg'} feature='Payments' />
								<FeatureItem icon={'/signs-direction.svg'} feature='Multi-Location' />
								<FeatureItem icon={'/layout-web-4.svg'} feature='Design Tools' />
								<FeatureItem icon={'/ranking.svg'} feature='Events' />
							</div>
						</div>
						<div>
							<p className='text-lg font-semibold py-3 pl-6'>Grow</p>
							<div className='flex flex-col gap-y-2 p-2'>
								<FeatureItem icon={'/star-magic.svg'} feature='AI Marketing Tools' />
								<FeatureItem icon={'/chat-text-plus.svg'} feature='Social Media Integration' />
								<FeatureItem icon={'/file-list.svg'} feature='CRM' />
							</div>
						</div>
						<div className='md:col-span-3 flex justify-center mt-4 mb-2'>
							<button className='text-[#F54F35] bg-[#F54F35]/10 w-fit md:w-[40%] flex justify-center items-center px-3 py-3 rounded-lg gap-x-4'>
								<p>See all features</p>
								<svg
									width='8'
									height='14'
									viewBox='0 0 8 14'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M1.50006 13.4584C1.34006 13.4584 1.18004 13.3976 1.05837 13.2751C0.814202 13.0309 0.814202 12.6351 1.05837 12.3909L6.45001 6.99925L1.05837 1.6076C0.814202 1.36344 0.814202 0.967575 1.05837 0.723408C1.30254 0.479242 1.6984 0.479242 1.94257 0.723408L7.7759 6.55674C8.02007 6.80091 8.02007 7.19677 7.7759 7.44094L1.94257 13.2743C1.82007 13.3976 1.66006 13.4584 1.50006 13.4584Z'
										fill='#FF5252'
									/>
								</svg>
							</button>
						</div>
					</div>
				)}
				{isMenuOpen && (
					<div className='md:hidden bg-white border-t-2 border-[#E5E7EB] p-4 absolute top-full left-1/2 -translate-x-1/2 w-full shadow-2xl'>
						<div className='flex flex-col gap-4'>
							<Link to='/' className={isActive('/') ? 'font-semibold' : 'font-normal'}>Home</Link>
							<p className='cursor-pointer' onClick={toggleFeatureVisibility}>Features</p>
							<Link to='/pricing' className={isActive('/pricing') ? 'font-semibold' : 'font-normal'}>Pricing</Link>
							<p>Solutions</p>

							<div className='flex flex-col gap-4 mt-6'>
								<Button intent={'ghost'} className='py-2 w-full'>Login</Button>
								<Button className='py-2 w-full'>Try for free</Button>
							</div>
						</div>

					</div>
				)}
			</nav>

			{/* Mobile Menu */}
		</>
	)
}

export default Navbar;
