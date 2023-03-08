interface InputField {
	Type: string
	HtmlFor: string
	Placeholder: string
	SvgIcons: JSX.Element
}

interface LabelField {
	children: JSX.Element | JSX.Element[]
	LabelName: string
}

export function Label({ children, LabelName }: LabelField) {
	return (
		<label
			htmlFor={`${LabelName}`}
			className='flex gap-8 bg-purple-500 py-4 px-3 w-[60%] my-4'
		>
			{children}
		</label>
	)
}

function Input({ HtmlFor, Placeholder, SvgIcons, Type }: InputField) {
	return (
		<Label LabelName={`${HtmlFor}`}>
			<div className='flex gap-2'>
				<span>{SvgIcons}</span>
				<span>{HtmlFor}</span>
			</div>
			<input
				className='bg-inherit w-full outline-none'
				type={`${Type}`}
				name={`${HtmlFor}`}
				id=''
				placeholder={`${Placeholder}`}
			/>
		</Label>
	)
}

export default Input
