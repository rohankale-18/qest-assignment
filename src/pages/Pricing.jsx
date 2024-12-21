import React from 'react'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import FAQ from '../components/FAQ'
import PricingPlans from '@/components/PricingPlans'

const Pricing = () => {
	return (
		<MaxWidthWrapper>
			<div className='w-full relative'>
				<PricingPlans />
				<FAQ />
				<div className='absolute w-[634px] top-0 left-0 -translate-y-1/2 -translate-x-1/2 aspect-square bg-[#52BDAA] rounded-full filter blur-[500px] -z-10'>
				</div>
				<div className="absolute w-[634px] h-[634px] left-[581px] top-[-364px] bg-[#FFD6D6] filter blur-[500px] -z-10">
				</div>
				<div class="absolute w-[634px] h-[634px] left-[376px] top-[219px] bg-white filter blur-[500px] -z-10"></div>
			</div>
		</MaxWidthWrapper>
	)
}

export default Pricing