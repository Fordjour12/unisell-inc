import { FormEvent, useRef } from 'react'

import Input from '../layout/Input'

function Register() {
	const nameRef = useRef<HTMLInputElement>(null)
	const emailRef = useRef<HTMLInputElement>(null)
	const passwordRef = useRef<HTMLInputElement>(null)
	const confirmPasswordRef = useRef<HTMLInputElement>(null)

	const submitFormHander = (event: FormEvent<HTMLFormElement>) => {
		const enteredNameValue = nameRef.current?.value
		const enteredEmailValue = emailRef.current?.value
		const enteredPasswordValue = passwordRef.current?.value
		const enteredConfirmPasswordValue = confirmPasswordRef.current?.value

		event.preventDefault()

		console.log({
			enteredNameValue,
			enteredEmailValue,
			enteredPasswordValue,
			enteredConfirmPasswordValue,
		})
	}

	return (
		<form
			// method='Post'
			onSubmit={submitFormHander}
			className='flex flex-col items-center justify-center h-screen'
		>
			<Input
				HTMLFor='userName'
				Types='text'
				SvgIcon={
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						strokeWidth='2'
						stroke='currentColor'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path
							stroke='none'
							d='M0 0h24v24H0z'
						/>
						<path d='M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z' />
						<path d='M3 7l9 6l9 -6' />
					</svg>
				}
				Placeholder='Jane_Doe_1'
				ref={nameRef}
			/>

			<Input
				HTMLFor='email'
				Types='email'
				SvgIcon={
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						strokeWidth='2'
						stroke='currentColor'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path
							stroke='none'
							d='M0 0h24v24H0z'
						/>
						<path d='M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z' />
						<path d='M3 7l9 6l9 -6' />
					</svg>
				}
				Placeholder='Janedoe@email.com'
				ref={emailRef}
			/>
			<Input
				HTMLFor='password'
				Types='password'
				SvgIcon={
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='icon icon-tabler icon-tabler-password'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						strokeWidth='2'
						stroke='currentColor'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path
							stroke='none'
							d='M0 0h24v24H0z'
							fill='none'
						/>
						<path d='M12 10v4' />
						<path d='M10 13l4 -2' />
						<path d='M10 11l4 2' />
						<path d='M5 10v4' />
						<path d='M3 13l4 -2' />
						<path d='M3 11l4 2' />
						<path d='M19 10v4' />
						<path d='M17 13l4 -2' />
						<path d='M17 11l4 2' />
					</svg>
				}
				Placeholder='******************'
				ref={passwordRef}
			/>

			<Input
				HTMLFor='confirmPassword'
				Types='password'
				SvgIcon={
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='icon icon-tabler icon-tabler-password'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						strokeWidth='2'
						stroke='currentColor'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path
							stroke='none'
							d='M0 0h24v24H0z'
							fill='none'
						/>
						<path d='M12 10v4' />
						<path d='M10 13l4 -2' />
						<path d='M10 11l4 2' />
						<path d='M5 10v4' />
						<path d='M3 13l4 -2' />
						<path d='M3 11l4 2' />
						<path d='M19 10v4' />
						<path d='M17 13l4 -2' />
						<path d='M17 11l4 2' />
					</svg>
				}
				Placeholder='******************'
				ref={confirmPasswordRef}
			/>
			<button type='submit'>Hello there</button>
		</form>
	)
}

export default Register
