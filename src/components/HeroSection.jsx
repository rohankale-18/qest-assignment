import React from 'react'
import Logo from '../svgs/Logo'
import Button from './Button'

const HeroSection = () => {
	return (
		<div className='w-full pb-10'>
			<div className='flex justify-center gap-1 py-16'>
				<div className='text-right border-[3px] p-2 rounded-l-lg border-[#E5E7EB] bg-white'>
					<p className='font-bold'>AI</p>
					<Logo />
				</div>
				<div className='border-[3px] py-2 pl-5 pr-9 rounded-r-lg border-[#E5E7EB] flex justify-center items-center text-[#CACACA] font-medium bg-white'>
					Curious? Let AI Uncover the Answers!
				</div>
			</div>
			<div className='text-center text-6xl font-bold pb-3 font-urbanist tracking-tight'>
				Maximize Your Impact<br />
				<span className='text-[#F54F35]'>Business with</span> R<span className='text-[#A10F0F]'>Max</span>
			</div>
			<div className='text-center text-[#475467]'>
				Enhance your business with Rmax's all-in-one platform—streamlining client engagement, <br />automating workflows, and fueling growth.
			</div>
			<div className='flex justify-center space-x-3 text-center py-14'>
				<Button className='py-2 flex items-center gap-2'>
					Get Started
					<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.58862 1.93213L11.627 6.61066L6.58862 11.2892" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="bevel" />
						<path d="M0.830566 6.41787H10.9074" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="bevel" />
					</svg>
				</Button>
				<Button intent={'ghost'} className='py-2'>Book A Demo</Button>
			</div>
			<div className='font-urbanist tracking-tight font-medium grid grid-cols-2 md:flex justify-between items-center gap-4 text-lg px-[2%] md:px-[5%]'>
				<p className='text-center px-3 py-1.5 border rounded-lg text-[#1F1F1F] bg-white'>
					Seemless Onboarding
				</p>
				<p className='text-center px-3 py-1.5 border rounded-lg text-[#1F1F1F] bg-white'>
					Client Engaementent
				</p>
				<p className='text-center px-3 py-1.5 border rounded-lg text-[#1F1F1F] bg-white'>
					Generate Report
				</p>
				<p className='text-center px-3 py-1.5 border rounded-lg text-[#1F1F1F] bg-white'>
					Revenue Growth
				</p>
			</div>
		</div>
	)
}

export default HeroSection