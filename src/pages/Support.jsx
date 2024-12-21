import Button from '@/components/Button'
import CustomInput from '@/components/CustomInput'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Logo from '@/svgs/Logo'
import React from 'react'

const Support = () => {
	return (
		<>
			<MaxWidthWrapper>
				<div className='w-full flex flex-col items-center relative'>
					<div className='absolute w-[634px] top-0 left-0 -translate-y-1/2 -translate-x-1/2 aspect-square bg-[#52BDAA] rounded-full filter blur-[500px] -z-10'>
					</div>
					<div className="absolute w-[634px] h-[634px] left-[581px] top-[-364px] bg-[#FFD6D6] filter blur-[500px] -z-10">
					</div>
					<div class="absolute w-[634px] h-[634px] left-[376px] top-[219px] bg-white filter blur-[500px] -z-10"></div>
					<div className='flex justify-center gap-1 py-16'>
						<div className='text-right border-[3px] p-2 rounded-l-lg border-[#E5E7EB]'>
							<p className='font-bold'>AI</p>
							<Logo />
						</div>
						<div className='border-[3px] p-2 rounded-r-lg border-[#E5E7EB] flex justify-center items-center text-[#CACACA] font-semibold'>
							Curious? Let AI Uncover the Answers!
						</div>
					</div>
					<div className='w-full'>
						<p className='text-5xl font-bold pb-16 font-urbanist tracking-tight'>Get in touch with us.<br />
							We're here to assist you.</p>
					</div>
					<div className='w-full grid md:grid-cols-2 gap-x-14 gap-y-8'>
						<CustomInput
							title='Business Name'
							required={true}
							placeholder='Search for your business listing'
						/>
						<CustomInput
							title='Your Name'
							required={true}
							placeholder='Enter your name'
						/>
						<CustomInput
							title='Phone Number'
							required={true}
							prefix={
								<select className='focus:outline-none'>
									<option value='+91'>+91</option>
									<option value='+1'>+1</option>
									<option value='+66'>+66</option>
									<option value='+83'>+83</option>
								</select>
							}
							placeholder=''
						/>
						<CustomInput
							title='Email'
							required={false}
							placeholder='e.g xyz@gmail.com'
						/>
						<div className='md:col-span-2 space-y-2'>
							<span className='font-medium'>Message<span className="text-red-500">*</span></span>
							<textarea className='w-full resize-none border border-[#FEF1EF] bg-white focus:outline-none focus:ring-2 focus:ring-[#F54F35] p-4 rounded-md' rows={5} />
						</div>
						<Button className={'w-fit px-4 py-2.5 mb-16 mt-4 flex items-center gap-3'}>
							Leave  us a Message <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9.21844 2.30615L15.7139 8.63268L9.21844 14.9592" stroke="#FAFAFA" stroke-width="1.89796" stroke-linecap="square" stroke-linejoin="bevel" />
								<path d="M1.7959 8.37211H14.7868" stroke="#FAFAFA" stroke-width="1.89796" stroke-linecap="square" stroke-linejoin="bevel" />
							</svg>
						</Button>

					</div>
				</div>
			</MaxWidthWrapper>
			<div className="w-full flex flex-col items-center relative h-fit bg-[url('/Container.svg')]">
				<MaxWidthWrapper>
					<div className='w-full grid md:grid-cols-[3fr_2fr_2fr] gap-x-5 gap-y-10 py-20'>
						<div className='space-y-4'>
							<p className='font-medium'>Contact Info</p>
							<p className='font-bold text-4xl font-urbanist tracking-tight'>We are always<br /> happy to assist you</p>
						</div>
						<div className='space-y-2'>
							<p className='font-semibold'>Email Address</p>
							<p className='font-semibold'>-</p>
							<p className='font-semibold'>Support@Rmax.com</p>
							<p className=''>Assistance hours:</p>
							<p className=''>Monday - Friday 6 am to 8 pm EST</p>
						</div>
						<div className='space-y-2'>
							<p className='font-semibold'>Contact Number</p>
							<p className='font-semibold'>-</p>
							<p className='font-semibold'>+91-8657491236</p>
							<p className=''>Assistance hours:</p>
							<p className=''>Monday - Friday 6 am to 8 pm EST</p>
						</div>
					</div>
				</MaxWidthWrapper>
			</div>
		</>
	)
}

export default Support