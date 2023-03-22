import { useEffect } from 'react'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import InputForm from '../ui/Input'
import Button from '../ui/Button'
import {
	RegisterInputValidationSchema,
	RegisterInputValidationSchemaTypes,
} from '../../utils/zod.validation'
import { signUpUsersFn } from '../../utils/api.utils'

function Register() {
	// form validation
	const methods = useForm<RegisterInputValidationSchemaTypes>({
		resolver: zodResolver(RegisterInputValidationSchema),
	})

	const {
		handleSubmit,
		reset,
		formState: { isSubmitSuccessful },
	} = methods

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset()
		}
	}, [isSubmitSuccessful])

	const {
		mutate: registerUser,
		isLoading,
		isError,
	} = useMutation(
		(userData: RegisterInputValidationSchemaTypes) =>
			signUpUsersFn(userData),
		{
			onSuccess: (successData) => {
				console.log(successData)
			},
		}
	)

	if (isLoading) {
		return <p>Loading ...</p>
	}
	if (isError) {
		return <p>error ...</p>
	}

	const onSubmitHandler: SubmitHandler<RegisterInputValidationSchemaTypes> = (
		values
	) => {
		registerUser(values)
		console.log(values)
	}

	return (
		<>
			<div className='bg-blue-100 h-screen grid grid-cols-2'>
				<div className='outline-unisell-100 bg-unisell-100 m-3 rounded-2xl' />

				<div className='mx-8 flex flex-col justify-center'>
					<h4 className='flex gap-2 justify-end pb-10'>
						Have An Account?{' '}
						<Link
							to='/login'
							className='text-unisell-100'
						>
							Log In
						</Link>
					</h4>

					<div>
						<h1 className='text-2xl font-extrabold mb-4'>
							Get Started
						</h1>
						<p className='text-lg font-normal'>
							Create your account now
						</p>
					</div>

					<FormProvider {...methods}>
						<form
							onSubmit={handleSubmit(onSubmitHandler)}
							className='pt-10'
						>
							<InputForm
								htmlFor='username'
								label='Username'
								placeholder='janeDoe'
								type='text'
							/>
							<InputForm
								htmlFor='email'
								label='Email'
								placeholder='test@test.xom'
								type='email'
							/>
							<InputForm
								htmlFor='password'
								label='Password'
								placeholder='password@134'
								type='password'
							/>
							<InputForm
								htmlFor='confirmPassword'
								label='ConfirmPassword'
								placeholder='password@134'
								type='password'
							/>

							<Button type='submit'>Register</Button>
						</form>
					</FormProvider>
				</div>
			</div>
		</>
	)
}
export default Register
