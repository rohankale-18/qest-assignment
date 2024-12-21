import React from 'react'

const PricingPlans = () => {
	const pricing = [
		{
			title: 'Users',
			starter: 1,
			premium: 15,
		},
		{
			title: 'Branches',
			starter: 1,
			premium: 10,
		},
		{
			title: 'Courses',
			starter: 3,
			premium: '15/branch',
		},
		{
			title: 'Max. Students Allowed',
			starter: 25,
			premium: 500,
		},
		{
			title: 'Communication',
			starter: 25,
			premium: 'Yes',
		},
		{
			title: 'Bulk Updates',
			starter: 25,
			premium: 'Yes',
		},
		{
			title: 'User Roles',
			starter: 25,
			premium: 'Yes',
		}
	]
	return (
		<div className='w-full py-10 flex flex-col items-center'>
			<p className='text-5xl font-bold text-center pb-6 font-urbanist tracking-tight'>Flexible Plans,<br /> Transparent Pricing</p>
			<p className='text-center text-[#475467] font-medium pb-2 text-xl'>Find the Perfect Fit for You</p>
			<p className='text-center text-[#F54F35] font-medium pb-12 text-xl'>30-day free trial with money-back guarantee.</p>
			<p className='text-3xl font-semibold text-[#1F1F1F] py-2'>Compare our plans</p>
			<div className='w-full md:w-[75%] grid grid-cols-[3fr_2fr_2fr] gap-x-4 md:gap-x-14 py-10'>
				<div className='w-full font-semibold text-lg'>
					<p>Features</p>
				</div>
				<div className='w-full font-semibold text-lg'>
					<span>
						<p>Starter</p>
						<p className='font-normal text-[#475467] text-base py-1'>$17/month, billed
							monthly</p>
					</span>
				</div>
				<div className='w-full font-semibold text-lg'>
					<span>
						<p>Premium</p>
						<p className='font-normal text-[#475467] text-base py-1'>$88/month, billed
							monthly</p>
					</span>
				</div>
				<p className='col-span-3 font-semibold text-xl py-4'>Basic Management</p>
				{pricing.map((plan, index) => (
					<React.Fragment key={index}> {/* Fragment with key */}
						<p className='py-3 font-medium text-[#475467]'>{plan.title}</p>
						<p className='py-3 font-medium border-b-2 text-[#475467]'>{plan.starter}</p>
						<p className='py-3 font-medium border-b-2 text-[#475467]'>{plan.premium}</p>
					</React.Fragment>
				))}
				<div></div>
				<div className='w-full'>
					<div className='flex justify-start w-full py-2'>
						<button className='text-[#F54F35] bg-[#F54F35]/10 w-full max-w-md flex justify-between items-center px-3 py-3 rounded-lg'>
							<p>Get Started</p>
							<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.93335 2L14 7.63333L7.93335 13.2667" stroke="#F54F35" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel" />
								<path d="M1 7.40123H13.1333" stroke="#F54F35" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel" />
							</svg>
						</button>
					</div>
					<p className='text-[#475467]'>No credit card required</p>
				</div>
				<div>
					<div className='flex justify-start w-full py-2'>
						<button className='text-[#F54F35] bg-[#F54F35]/10 w-full max-w-md flex justify-between items-center px-3 py-3 rounded-lg'>
							<p>Get Started</p>
							<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.93335 2L14 7.63333L7.93335 13.2667" stroke="#F54F35" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel" />
								<path d="M1 7.40123H13.1333" stroke="#F54F35" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel" />
							</svg>
						</button>
					</div>
					<p className='text-[#475467]'>No credit card required</p>
				</div>
			</div>
		</div>
	)
}

export default PricingPlans