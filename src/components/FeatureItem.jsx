import React from 'react'

const FeatureItem = ({ icon, feature }) => {
	return (
		<div className='flex items-center gap-2 py-1 pl-5 hover:bg-f54f35-to-transparent cursor-pointer rounded-md transition-all duration-100 ease-in-out'>
			<img src={icon} alt="" />
			<p>{feature}</p>
		</div>
	)
}

export default FeatureItem