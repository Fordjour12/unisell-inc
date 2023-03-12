import { Response, Router } from 'express'
import {
	registerAuthenticationController,
	signInAuthenticationController,
} from '../controller/auth.controllers'
import validator from '../middleware/validate.middleware'
import { authRegistrationSchema, authSignInSchema } from '../schema/auth.schema'

const authenticationRoute = Router()

authenticationRoute.get('/', (request, response: Response) => {
	response.json({
		message: 'Welcome To UNISELL Inc. Authentication Route',
	})
})

authenticationRoute.post(
	'/signup',
	validator(authRegistrationSchema),
	registerAuthenticationController
)

authenticationRoute.post(
	'/login',
	validator(authSignInSchema),
	signInAuthenticationController
)

export default authenticationRoute
