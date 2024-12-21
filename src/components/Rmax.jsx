import React from 'react'
import RmaxCard from './RmaxCard'

const Rmax = () => {
	return (
		<div className='w-full py-10 text-center flex flex-col items-center'>
			<p className='text-4xl font-bold text-center text-[#191A15] font-urbanist tracking-tight'>Why Rmax?</p>
			<p className='text-center w-[80%] text-[#475467] py-6 leading-7'>Rmax is designed to simplify and transform the way service businesses operate. From onboarding, scheduling and billing to client management, payments and growth, Rmax integrates everything in one easy-to-use platform connecting all the stake holders.</p>
			<div className='w-full md:w-[80%] grid md:grid-cols-3 gap-7 h-fit md:h-[750px]'>
				<div className='flex flex-col gap-7 h-[750px]'>
					<RmaxCard
						classes={'h-[30%]'}
						icon={'/calendar-check-alt.svg'}
						title={'Scheduling'}
						description={'Manage appointments, classes, and events, workshops with...'}
					/>
					<RmaxCard
						classes={'h-[70%]'}
						url={'/BillingRmax.png'}
						title={'Billing & Payments'}
						description={'Streamline invoicing and payments with automated workflows, reducing ...'}
					/>
				</div>
				<div className='flex flex-col gap-7 h-[750px]'>
					<RmaxCard
						classes={'h-[25%]'}
						title={'Client Management & CRM'}
						description={'Keep track of customer data, preferences, and interactions to...'}
					/>
					<RmaxCard
						classes={'h-[50%]'}
						icon={'/briefcase.svg'}
						title={'Marketing & Engagement Tools'}
						description={'Boost client retention and grow your business with integrated...'}
					/>
					<RmaxCard
						classes={'h-[25%]'}
						title={'Multi-Location Management'}
						description={'Manage multiple locations with ease, assigning roles and permissions...'}
					/>
				</div>
				<div className='flex flex-col gap-7 h-[750px]'>
					<RmaxCard
						classes={'h-[30%]'}
						icon={'/star-magic-color.svg'}
						title={'AI Powered Insights'}
						description={'Boost client retention and grow your business with integrated...'}
					/>
					<RmaxCard
						classes={'h-[70%] flex-col-reverse'}
						url={'/custombrand.png'}
						title={'Custom Branded website'}
						description={'Qest’s Custom Branded Website Builder allows you to create a fully personalized...'}
					/>
				</div>
			</div>
		</div>
	)
}

export default Rmax