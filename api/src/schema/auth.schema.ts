import { boolean, TypeOf, z } from 'zod'

const authRegistrationSchema = z.object({
	body: z
		.object({
			name: z
				.string({ required_error: 'Name is required' })
				.trim()
				.min(3, 'Name must contain at least 3 characters')
				.max(150, 'Name must contain at least 150 characters'),
			email: z
				.string({ required_error: 'Email is required' })
				.trim()
				.email('Invalid Email Address'),
			password: z
				.string({
					required_error: 'Password is required',
				})
				.min(8, 'Password must be 8 characters or more')
				.max(40, 'Password must be less than 40 characters'),
			confirmPassword: z
				.string({
					required_error: 'Password confirmation is required',
				})
				.min(8, 'Password must be 8 characters or more')
				.max(40, 'Password must be less than 40 characters'),
			emailVerified: boolean().default(false),
		})
		.refine((data) => data.password === data.confirmPassword, {
			path: ['confirmPassword'],
			message: 'Passwords does not match',
		}),
})

type authRegistrationSchemaInput = Omit<
	TypeOf<typeof authRegistrationSchema>['body'],
	'confirmPassword'
>

const authSignInSchema = z.object({
	body: z.object({
		email: z
			.string({ required_error: 'Email is required' })
			.trim()
			.email('Invalid Email Address'),
		password: z
			.string({
				required_error: 'Password is required',
			})
			.min(8, 'Password must be 8 characters or more')
			.max(40, 'Password must be less than 40 characters'),
	}),
})

type authSignInSchemaInput = TypeOf<typeof authSignInSchema>['body']

export {
	authRegistrationSchema,
	authSignInSchema,
	authRegistrationSchemaInput,
	authSignInSchemaInput,
}
