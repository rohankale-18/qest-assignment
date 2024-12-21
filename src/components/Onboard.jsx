import React from 'react'
import OnboardItem from './OnboardItem'
import PersonIcon from '../svgs/PersonIcon'
import DownloadIcon from '../svgs/DownloadIcon'
import ComputerIcon from '../svgs/ComputerIcon'

const Onboard = () => {
	return (
		<div className='w-full py-10'>
			<p className='text-[#191A15] text-4xl text-center font-bold pb-6 font-urbanist tracking-tight'>Onboard business in 3 simple steps</p>
			<p className='text-[#475467] text-center'>Quick assisted onboarding with 30day free trial. No credit card needed.</p>
			<div className='w-full flex flex-col md:flex-row justify-between gap-20 md:gap-2 py-20'>
				<OnboardItem
					number={1}
					title={'Claim your preset profile'}
					description={'Unlock tailored service and seamlessly elevate your experience by claiming your preset profile today.'}
					icon={<PersonIcon />}
				/>
				<svg className='translate-y-10 hidden md:block' width="157" height="56" viewBox="0 0 157 56" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1.4614 54.416C26.6427 49.2485 53.9717 40.2555 69.2441 17.9965C71.6257 14.5255 76.0581 5.37685 70.4031 2.53943C65.4403 0.0493599 55.6868 2.48732 52.4608 6.69485C44.0645 17.6459 36.8253 34.2189 53.9932 41.2653C72.6829 48.9364 98.8733 46.8283 118.48 43.7581C127.99 42.269 139.321 39.7266 148.035 35.562C153.819 32.7974 148.383 33.372 144.327 32.9703C138.557 32.399 125.235 31.0798 138.008 32.3446C143.198 32.8586 148.953 32.6057 153.741 31.7398C158.86 30.8139 150.737 35.9095 149.883 36.9191C147.19 40.1017 143.967 45.3601 143.55 49.5775" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" />
				</svg>
				<OnboardItem
					number={2}
					title={'Add services'}
					description={'Make use of multiple scheduling, pricing options to add services. Choose from pre-created scheduling templates.'}
					icon={<DownloadIcon />}
				/>
				<svg className='translate-y-10 hidden md:block' width="146" height="49" viewBox="0 0 146 49" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 25.2319C9.50191 9.88558 27.9368 -8.69514 45.8057 6.88653C55.6999 15.5143 60.9042 40.0666 46.3455 47.3666C41.1403 49.9766 41.0493 43.8849 41.787 40.63C43.1266 34.7191 47.2288 29.9334 52.3436 26.856C65.2177 19.11 75.5548 31.5769 86.3528 36.5399C100.367 42.9812 121.232 43.592 135.717 38.224C148.236 33.5846 140.067 33.0785 131.638 29.322C125.229 26.4652 139.338 30.0339 141.355 30.8859C143.891 31.9565 146.426 31.0944 144.054 33.4723C140.037 37.5011 136.142 42.3078 132.718 46.8854" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" />
				</svg>

				<OnboardItem
					number={3}
					title={'Built Website'}
					description={'Build your online storefront your way, seamlessly integrating all services for a cohesive and efficient  Client experience.'}
					icon={<ComputerIcon />}
				/>
			</div>
		</div>
	)
}

export default Onboard