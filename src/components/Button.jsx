import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

// Define button variants using CVA
const buttonStyles = cva(
	'px-3 py-1.5 rounded font-medium transition-colors duration-300',
	{
		variants: {
			intent: {
				primary: 'bg-[#F54F35] border border-[#F54F35] rounded-md text-white hover:bg-[#DC472F]',
				secondary: 'bg-gray-500 text-white hover:bg-gray-200/50',
				ghost: 'bg-white ring-2 ring-[#E5E7EB] rounded-md shadow-md hover:ring-[#F54F35] transition-all duration-200 ease-in-out',
				opd: 'flex text-xs bg-white px-3 py-1.5 rounded-3xl items-center gap-1 text-[#22436D] ring-[0.5px] ring-[#22436D] font-medium hover:ring-0 hover:shadow-md transition-all duration-200 ease-in-out'
			},
			size: {
				xsmall: 'text-xs',
				small: 'text-sm',
				medium: 'text-base',
				large: 'text-lg',
			},
		},
		defaultVariants: {
			intent: 'primary',
			size: 'medium',
		},
	}
);

const Button = ({
	children,
	intent,
	size,
	className,
	...props
}) => {
	// Merge className with button styles and custom classes using twMerge
	const mergedClassName = twMerge(clsx(buttonStyles({ intent, size }), className));

	return (
		<button className={mergedClassName} {...props}>
			{children}
		</button>
	);
};

export default Button;
