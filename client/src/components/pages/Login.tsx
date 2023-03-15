import Input from '../layout/Input'

function Login() {
	return (
		<form className='flex flex-col items-center justify-center h-screen'>
			<Input
				SvgIcons={
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
						<path d='M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' />
						<path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
					</svg>
				}
				HtmlFor='Name'
				Type='text'
				Placeholder='Enter UserName Here'
			/>
			<Input
				SvgIcons={
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
				HtmlFor='Email'
				Type='email'
				Placeholder='Enter Email Here'
			/>
			<Input
				SvgIcons={
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
				HtmlFor='Passwords'
				Type='password'
				Placeholder='Enter Passwords Here'
			/>

			<button
				type='submit'
				className='text-white py-3 bg-blue-300 px-10 rounded'
			>
				login here
			</button>
		</form>
	)
}

export default Login
