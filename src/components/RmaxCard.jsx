import React from 'react'

const RmaxCard = ({ icon, title, description, classes, url }) => {
	return (
		<div className={`w-full bg-[#FAFAFA] border border-[#E5E7EB] rounded-md flex flex-col items-center justify-center hover:outline hover:outline-[#F54F35] transition-all duration-100 ease-in-out overflow-hidden ${classes}`}>
			{icon && <img src={icon} className='h-8 w-8 mt-5' alt='' />}
			{url && (
				<div className="relative w-full h-96 overflow-hidden">
					<img
						src={url}
						className="absolute inset-0 w-full h-full object-cover"
						alt=""
					/>
				</div>
			)}
			<div className='p-4 flex flex-col items-center justify-center gap-3'>
				<p className='text-lg font-semibold'>{title}</p>
				<p className='line-clamp-2 overflow-hidden text-ellipsis'>{description}</p>
				<button className='flex items-center text-[#0000EE] gap-2'>
					<p>View details</p>
					<svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 9.5L5 5.5L1 1.5" stroke="#0000EE" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</button>
			</div>
		</div>
	)
}

export default RmaxCard