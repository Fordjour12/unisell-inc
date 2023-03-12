import { NextFunction, Request, Response } from 'express'

interface errorReq {
    message:string
	stack?: string
}

const notFoundRequest = (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	const error = new Error(`Request Not Found 🤞🏾😮‍💨 => ${request.originalUrl}`)
	response.status(404)
	next(error)
}

const errorRequestHandler = (
	error: Error,
    request: Request,
	response: Response<errorReq>,
	next: NextFunction,
) => {
	const statusCode = response.statusCode !== 200 ? response.statusCode : 500
	response.status(statusCode)
	response.json({
		message: error.message,
		stack:
			process.env.NODE_ENV === 'production' ? 'development' : error.stack,
	})
}

export { notFoundRequest, errorRequestHandler }
