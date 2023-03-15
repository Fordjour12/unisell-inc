import { ReactNode } from 'react'

interface SvgItem {
	child: ReactNode
}

function SvgIcon({ child }: SvgItem) {
	return (
		<div className='bg-blue-200/20 w-12 h-12 rounded-full flex justify-center items-center mb-4'>
			{child}
		</div>
	)
}

export default SvgIcon
