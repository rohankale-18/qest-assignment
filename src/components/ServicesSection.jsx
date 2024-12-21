import React from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"


const ServicesSection = () => {
	const carouselData = [
		{
			type: 'Sports',
			description: 'From fitness studios to sports academies, Rmax empowers sports businesses',
			url: '/Sports.png'
		},
		{
			type: 'Healthcare & Wellness',
			description: 'Health and wellness service providers—from yoga instructors and gyms',
			url: '/Health.png'
		},
		{
			type: 'Learning Activities',
			description: 'Tutors, educators, and learning centers—from music schools to art studios',
			url: '/Activities.png'
		},
		{
			type: 'Houshold Services',
			description: 'From Plumbing to Cleaning and all Household Services in between',
			url: '/Household.png'
		},
		{
			type: 'Miscellaneous',
			description: 'From Event Planning to Photography and all Household Services in between',
			url: '/Miscellaneous.jpeg'
		}
	]
	return (
		<div className='w-full py-14 flex flex-col items-center'>
			<p className='text-[#191A15] text-4xl text-center font-bold pb-6 font-urbanist tracking-tight'>Empowering Service<br /> Providers Across Industries</p>
			<p className='text-[#475467] text-center max-w-3xl'>Whether you're in sports, education, wellness, household services, or niche markets, our technology simplifies your business operations, making it easier for you to focus on what you do best.
			</p>
			<div className='w-[85%] py-10'>
				<Carousel
					opts={{
						align: "start",
					}}
					className="w-full"
				>
					<CarouselContent>
						{carouselData.map((data, index) => (
							<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
								<div className="h-fit w-full flex flex-col">
									<img src={data.url} className='h-[358px] object-cover rounded-md' alt="" />
									<p className='text-xl py-3 font-bold'>{data.type}</p>
									<div className='space-x-1'>
										<span>{data.description}</span>
										<span className='text-[#0000EE] cursor-pointer'>Know more...</span>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</div>
	)
}

export default ServicesSection