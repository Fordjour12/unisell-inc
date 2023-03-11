import { Response, Router } from 'express'
import { registerAuthenticationController } from '../controller/auth.controllers'
import validator from '../middleware/validate.middleware'
import { authRegistrationSchema } from '../schema/auth.schema'

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

export default authenticationRoute
