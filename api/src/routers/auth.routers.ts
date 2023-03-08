import { Response, Router } from 'express'
import { registerAuthenticationController } from '../controller/auth.controllers'

const authenticationRoute = Router()

authenticationRoute.get('/', (request, response: Response) => {
	response.json({
		message: 'Welcome To UNISELL Inc. Authentication Route',
	})
})

authenticationRoute.post('/signup', registerAuthenticationController)

export default authenticationRoute
