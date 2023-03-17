import { ChangeEvent, forwardRef } from 'react'

interface InputField {
	HTMLFor: string
	Types: string
	Placeholder: string
	SvgIcon: JSX.Element
	// eslint-disable-next-line react/require-default-props
	OnChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputForm = forwardRef<HTMLInputElement, InputField>(
	({ HTMLFor, Types, Placeholder, SvgIcon, OnChange }: InputField, ref) => (
		<label
			htmlFor={`${HTMLFor}`}
			className='flex gap-8 bg-purple-500 py-4 px-3 w-[60%] my-4'
		>
			<div className='flex gap-2'>
				<span>{SvgIcon}</span>
				<p>{HTMLFor}</p>
			</div>

			<input
				className='bg-inherit w-full outline-none'
				type={`${Types}`}
				name={`${HTMLFor}`}
				id={`${HTMLFor}`}
				placeholder={`${Placeholder}`}
				ref={ref}
				onChange={OnChange}
			/>
		</label>
	)
)

InputForm.displayName = 'input'

export default InputForm
