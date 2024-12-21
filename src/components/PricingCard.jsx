import React from 'react'

const PricingCard = ({ title, price, features }) => {
	return (
		<div className='w-fit p-5 flex flex-col border rounded-md'>
			<p className='text-xs text-[#F54F35] font-bold pb-5'>{title}</p>
			<div className='flex items-end font-bold pb-2'>
				<p>$</p>
				<p className='text-3xl pr-3'>{price}</p>
				<p className='font-normal'>/month</p>
			</div>
			<p className='text-[#475467] font-medium'>billed monthly</p>
			<div className='flex flex-col gap-3 pt-6 pr-14'>
				{features.map((feature, index) => (
					<div key={index} className='flex items-center gap-2'>
						{feature.available ?
							<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M5.82702 11.5589C5.55149 11.5589 5.2765 11.4555 5.06608 11.2481L0 6.25446L1.52187 4.75382L5.82702 8.99739L14.4373 0.510254L15.9592 2.01089L6.58795 11.2481C6.37754 11.4555 6.10255 11.5589 5.82702 11.5589Z" fill="#68D585" />
							</svg>
							:
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12.2016 1.34729L0.936279 12.6126" stroke="#949494" strokeWidth="1.87755" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M12.2016 12.6126L0.936279 1.34729" stroke="#949494" strokeWidth="1.87755" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						}
						<p className={`${feature.available ? 'text-[#1F1F1F]' : 'text-[#949494]'}`}>{feature.feature}</p>
					</div>
				))}
			</div>
			<div className='flex justify-start w-full py-4'>
				<button className='text-[#F54F35] bg-[#F54F35]/10 w-[80%] flex justify-between items-center px-3 py-3 rounded-lg'>
					<p>Get Started</p>
					<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7.93335 2L14 7.63333L7.93335 13.2667" stroke="#F54F35" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel" />
						<path d="M1 7.40123H13.1333" stroke="#F54F35" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel" />
					</svg>
				</button>
			</div>
			<p>No credit card required</p>
		</div>
	)
}

export default PricingCard