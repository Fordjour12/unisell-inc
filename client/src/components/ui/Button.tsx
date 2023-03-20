import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProp {
	children: ReactNode
	type: ButtonHTMLAttributes<HTMLButtonElement>['type']
}

function Button({ children, type }: ButtonProp) {
	return (
		<button
			type={type}
			className='bg-unisell-100 py-4 w-full mt-4 text-white rounded-lg'
		>
			{children}
		</button>
	)
}

export default Button
