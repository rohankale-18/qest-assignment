import React from 'react'
import PersonIcon from '../svgs/PersonIcon'

const OnboardItem = ({ number, title, description, icon }) => {
	return (
		<div className='flex flex-col items-center'>
			<div className='w-[120px] md:w-[160px] shadow-[0px_8px_16px_rgba(148,148,148,0.16)] flex justify-center items-center aspect-square rounded-full bg-white relative'>
				<div className='bg-[#E85D04]/25 p-3 rounded-full w-[67px] flex justify-center items-center aspect-square'>
					{icon}
				</div>
				<p className='absolute top-0 left-0 bg-[#F6F6F7] rounded-full aspect-square w-8 h-8 flex justify-center items-center -translate-x-1/2 -translate-y-1/2'>{number}</p>
			</div>
			<div className="text-center mt-6 space-y-4">
				<h3 className="text-2xl text-[#1F1F1F] font-semibold">{title}</h3>
				<p className="text-center max-w-[300px] text-[#475467]">{description}</p>
			</div>
		</div>
	)
}

export default OnboardItem