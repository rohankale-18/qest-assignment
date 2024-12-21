import React from 'react'

const FooterElements = ({ title, services }) => {
	return (
		<div className='flex flex-col gap-3'>
			<p className='text-[#FAFAFA] text-opacity-65 mb-5'>{title}</p>
			{services.map((service, index) => <span className='text-[#FAFAFA]' key={index}>{service}</span>)}
		</div>
	)
}

export default FooterElements