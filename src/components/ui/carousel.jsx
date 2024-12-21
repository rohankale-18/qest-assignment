import * as React from "react"
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const CarouselContext = React.createContext(null)

function useCarousel() {
	const context = React.useContext(CarouselContext)

	if (!context) {
		throw new Error("useCarousel must be used within a <Carousel />")
	}

	return context
}

const Carousel = React.forwardRef((
	{
		orientation = "horizontal",
		opts,
		setApi,
		plugins,
		className,
		children,
		...props
	},
	ref
) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y",
	}, plugins)
	const [canScrollPrev, setCanScrollPrev] = React.useState(false)
	const [canScrollNext, setCanScrollNext] = React.useState(false)

	const onSelect = React.useCallback((api) => {
		if (!api) {
			return
		}

		setCanScrollPrev(api.canScrollPrev())
		setCanScrollNext(api.canScrollNext())
	}, [])

	const scrollPrev = React.useCallback(() => {
		api?.scrollPrev()
	}, [api])

	const scrollNext = React.useCallback(() => {
		api?.scrollNext()
	}, [api])

	const handleKeyDown = React.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault()
			scrollPrev()
		} else if (event.key === "ArrowRight") {
			event.preventDefault()
			scrollNext()
		}
	}, [scrollPrev, scrollNext])

	React.useEffect(() => {
		if (!api || !setApi) {
			return
		}

		setApi(api)
	}, [api, setApi])

	React.useEffect(() => {
		if (!api) {
			return
		}

		onSelect(api)
		api.on("reInit", onSelect)
		api.on("select", onSelect)

		return () => {
			api?.off("select", onSelect)
		};
	}, [api, onSelect])

	return (
		(<CarouselContext.Provider
			value={{
				carouselRef,
				api: api,
				opts,
				orientation:
					orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
				scrollPrev,
				scrollNext,
				canScrollPrev,
				canScrollNext,
			}}>
			<div
				ref={ref}
				onKeyDownCapture={handleKeyDown}
				className={cn("relative", className)}
				role="region"
				aria-roledescription="carousel"
				{...props}>
				{children}
			</div>
		</CarouselContext.Provider>)
	);
})
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel()

	return (
		(<div ref={carouselRef} className="overflow-hidden">
			<div
				ref={ref}
				className={cn(
					"flex",
					orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
					className
				)}
				{...props} />
		</div>)
	);
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
	const { orientation } = useCarousel()

	return (
		(<div
			ref={ref}
			role="group"
			aria-roledescription="slide"
			className={cn(
				"min-w-0 shrink-0 grow-0 basis-full",
				orientation === "horizontal" ? "pl-4" : "pt-4",
				className
			)}
			{...props} />)
	);
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel()

	return (
		(<Button
			ref={ref}
			variant={variant}
			size={size}
			className={cn("absolute  h-8 w-8 rounded-full bg-black hover:bg-black/50", orientation === "horizontal"
				? "-left-12 top-1/2 -translate-y-1/2"
				: "-top-12 left-1/2 -translate-x-1/2 rotate-90", className)}
			disabled={!canScrollPrev}
			onClick={scrollPrev}
			{...props}>
			<svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M7.99998 15.75C8.19198 15.75 8.38401 15.6771 8.53001 15.5301C8.82301 15.2371 8.82301 14.762 8.53001 14.469L2.06004 7.99905L8.53001 1.52908C8.82301 1.23608 8.82301 0.761041 8.53001 0.468041C8.23701 0.175041 7.76197 0.175041 7.46897 0.468041L0.46897 7.46804C0.17597 7.76104 0.17597 8.23608 0.46897 8.52908L7.46897 15.5291C7.61597 15.6771 7.80798 15.75 7.99998 15.75Z" fill="#FAFAFA" />
			</svg>
			<span className="sr-only">Previous slide</span>
		</Button>)
	);
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel()

	return (
		(<Button
			ref={ref}
			variant={variant}
			size={size}
			className={cn("absolute h-8 w-8 rounded-full bg-black hover:bg-black/50", orientation === "horizontal"
				? "-right-12 top-1/2 -translate-y-1/2"
				: "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className)}
			disabled={!canScrollNext}
			onClick={scrollNext}
			{...props}>
			<svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1.00002 15.75C0.808023 15.75 0.615994 15.6771 0.469994 15.5301C0.176994 15.2371 0.176994 14.762 0.469994 14.469L6.93996 7.99905L0.469994 1.52908C0.176994 1.23608 0.176994 0.761041 0.469994 0.468041C0.762994 0.175041 1.23803 0.175041 1.53103 0.468041L8.53103 7.46804C8.82403 7.76104 8.82403 8.23608 8.53103 8.52908L1.53103 15.5291C1.38403 15.6771 1.19202 15.75 1.00002 15.75Z" fill="#FAFAFA" />
			</svg>
			<span className="sr-only">Next slide</span>
		</Button>)
	);
})
CarouselNext.displayName = "CarouselNext"

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
