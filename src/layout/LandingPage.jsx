import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet, useLocation } from 'react-router-dom'

const LandingPage = () => {
	const location = useLocation()
	// Scroll to top on page load or route change
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location])

	return (
		<div className='w-full h-[100dvh] flex flex-col items-center'>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	)
}

export default LandingPage
