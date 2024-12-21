import React from 'react'
import Button from './Button'
import PricingCard from './PricingCard'
import { Link } from 'react-router-dom'

const PricingSection = () => {
	const starter = [
		{ available: true, feature: 'Commercial License' },
		{ available: true, feature: '100+ HTML UI Elements' },
		{ available: true, feature: 'Unlimited Domain Support' },
		{ available: false, feature: '6 Month Premium Support' },
		{ available: false, feature: 'Life Time Updates' },
	]
	const premium = [
		{ available: true, feature: 'Commercial License' },
		{ available: true, feature: '100+ HTML UI Elements' },
		{ available: true, feature: 'Unlimited Domain Support' },
		{ available: true, feature: '6 Month Premium Support' },
		{ available: true, feature: 'Life Time Updates' },
	]
	return (
		<div className='w-full pb-10 flex flex-col justify-center items-center'>
			<p className='text-[#1F1F1F] text-4xl text-center font-bold pb-6 font-urbanist tracking-tight'>
				Choose Plan<br />
				That’s Right For You
			</p>
			<p className='text-center text-[#475467] font-medium pb-2'>Simple and transparent pricing. Start for free, upgrade when you love it.</p>
			<p className='text-center text-[#A10F0F] font-medium'>30 day free trial in a button</p>
			<div className="flex flex-col items-center md:flex-row justify-center py-8">
				<p>Running a <strong>Growth Business</strong> or <strong>Enterprise</strong>? Let's connect - </p>
				<Button className={'py-0 px-2 rounded-xl w-fit'}>Talk to Sales</Button>
			</div>
			<div className="flex justify-center items-center gap-3 pb-5 font-semibold">
				<p>Monthly</p>
				<label className="toggle-switch">
					<input type="checkbox" />
					<div className="toggle-switch-background">
						<div className="toggle-switch-handle"></div>
					</div>
				</label>
				<p>Yearly</p>
				<p className="bg-[#FEF1EF] px-3 py-1.5 text-sm rounded-full text-[#F54F35] font-bold">SAVE 25%</p>
			</div>
			<div className='grid sm:grid-cols-2 gap-3 py-6'>
				<PricingCard title={'STARTER'} price={'$17'} features={starter} />
				<PricingCard title={'PREMIUM'} price={'$88'} features={premium} />
			</div>
			<Link to={'/pricing'} className='text-[#0000EE] underline'>Explore In-Depth Differences</Link>
		</div>
	)
}

export default PricingSection