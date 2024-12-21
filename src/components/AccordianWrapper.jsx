import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const AccordianWrapper = ({ question, answer }) => {
	const [open, setOpen] = useState(false);
	const contentRef = useRef(null);

	useEffect(() => {
		if (open) {
			contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
		} else {
			contentRef.current.style.maxHeight = "0px";
		}
	}, [open]);

	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<div className="w-full cursor-pointer">
			<div
				className="rounded-xl w-full text-left px-4 text-xs md:text-sm flex flex-col items-center justify-between border
			
			
			"
			>
				<div
					className="flex w-full h-full items-center gap-2 py-3.5 relative"
					onClick={handleClick}
				>
					<p className="w-[95%] font-bold text-lg">{question}</p>
					<div
						className={`transition-all duration-300 ease-in-out ${open ? "transform -rotate-180" : ""
							}`}
					>
						<IoIosArrowDown />
					</div>
				</div>
				<div
					ref={contentRef}
					className="rounded-xl w-full text-sm overflow-hidden transition-max-height duration-300 ease-in-out font-medium"
					style={{ maxHeight: "0px" }}
				>
					{<p className="pb-2.5 text-[#475467]">{answer}</p>}
				</div>
			</div>
		</div>
	);
};

export default AccordianWrapper;
