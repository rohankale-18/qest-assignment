import React from 'react'

const MaxWidthWrapper = ({ children }) => {
	return (
		<div className="w-full max-w-7xl px-6">
			{children}
		</div>
	)
}

export default MaxWidthWrapper
