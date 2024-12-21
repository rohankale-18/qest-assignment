import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import AccordianWrapper from './AccordianWrapper';

const FAQ = () => {
	return (
		<div className='w-full py-10 flex flex-col items-center'>
			<p className='text-[#191A15] text-4xl text-center font-bold pb-6 font-urbanist tracking-tight'>Frequently Asked Questions</p>
			<p className='text-[#475467] text-center max-w-xl'>Find answers to common questions about our services and features.
				For more details, contact our support team.
			</p>
			<div className='w-full max-w-2xl flex flex-col items-center mt-10'>
				<div className='w-full rounded-md outline h-10 outline-[#E5E7EB] flex'>
					<input type="text" name="" id="" className='w-full border-none outline-none px-3' placeholder='Ask Q! e.g Tell me about key Features.' />
					<div className='bg-[#F54F35] text-white h-full aspect-square flex justify-center items-center'>
						<CiSearch size={25} />
					</div>
				</div>
				<div className='py-3 space-y-3'>
					<AccordianWrapper question='What is Rmax?' answer={'Qest, is a SaaS platform/ecosystem that lets any small to medium service business setup & manage their business quickly & easily.'} />
					<AccordianWrapper question='How does it work?' answer={'Qest, is a SaaS platform/ecosystem that lets any small to medium service business setup & manage their business quickly & easily.'} />
					<AccordianWrapper question='How much does it cost?' answer={'Qest, is a SaaS platform/ecosystem that lets any small to medium service business setup & manage their business quickly & easily.'} />
				</div>
			</div>
			<Link to='/support' className='flex flex-col sm:flex-row py-6 gap-1'>
				<p>Haven’t got your answer?</p>
				<p className='text-[#0000EE] font-medium'>Contact our support now</p>
			</Link>
		</div>
	)
}

export default FAQ