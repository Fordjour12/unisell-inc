import { Request, Response, NextFunction } from 'express'
import { AnyZodObject, ZodError } from 'zod'

const validator =
	(schema: AnyZodObject) =>
	(request: Request, response: Response, next: NextFunction) => {
		try {
			schema.parse({
				params: request.params,
				query: request.query,
				body: request.body,
			})
			next()
		} catch (error) {
			if (error instanceof ZodError) {
				return response.status(400).json({
					status: 'Bad Requests',
					errors: error.errors,
				})
			}

			next(error)
		}
	}

export { validator }
