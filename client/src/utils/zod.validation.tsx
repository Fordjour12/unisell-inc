import { z, TypeOf } from 'zod'

const RegisterInputValidationSchema = z
	.object({
		username: z
			.string({ required_error: 'Username is required' })
			.trim()
			.regex(
				/^[a-zA-Z0-9](?=.*?[_#?!@$ %^&*-]).{3,50}/,
				'Username must contain a symbol'
			)
			.min(3, 'username must contain at least 3 character')
			.max(150, 'username must contain at most 150 characters'),

		email: z
			.string({ required_error: 'Email is required' })
			.trim()
			.email('Invalid Email Address'),
		password: z
			.string({
				required_error: 'Password is required',
			})

			.min(8, 'Password must be 8 characters or more')
			.max(40, 'Password must be less than 40 characters')
			.regex(
				/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
				'Password must contain a number and symbol '
			),

		confirmPassword: z
			.string({
				required_error: 'Password confirmation is required',
			})
			.min(8, 'Password must be 8 characters or more')
			.max(40, 'Password must be less than 40 characters')
			.regex(
				/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
				'Password must contain a number and symbol '
			),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: 'Password does not match',
	})

type RegisterInputValidationSchemaTypes = TypeOf<
	typeof RegisterInputValidationSchema
>

export { RegisterInputValidationSchema }
export type { RegisterInputValidationSchemaTypes }
