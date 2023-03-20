import { HTMLInputTypeAttribute } from 'react'
import { useFormContext } from 'react-hook-form'

interface InputFormField {
	type: HTMLInputTypeAttribute
	htmlFor: string
	label: string
	placeholder: string
	key?: number
}

const InputForm = ({
	type,
	htmlFor,
	label,
	placeholder,
	key,
}: InputFormField) => {
	const {
		register,
		formState: { errors },
	} = useFormContext()
	return (
		<label htmlFor={htmlFor}>
			<div className='mb-4'>
				{errors[htmlFor] && (
					<span className='text-red-700'>
						{errors[htmlFor]?.message as string}
					</span>
				)}
				<p className='text-gray-500 pb-3'>{label}</p>
				<input
					className='w-full py-3 px-4 rounded-lg bg-inherit outline outline-gray-400 outline-2 outline-offset-4'
					type={type}
					{...register(htmlFor)}
					placeholder={placeholder}
					key={key}
				/>
			</div>
		</label>
	)
}

export default InputForm
