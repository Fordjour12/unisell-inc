import { NextFunction, Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import prisma from '../helpers/prisma.helpers'
import {
	findUniqueUserInfo,
	registerAuthenticationServices,
} from '../services/auth.services'
import logger from '../config/logger'
import {
	authRegistrationSchemaInput,
	authSignInSchemaInput,
} from '../schema/auth.schema'
import { resolve } from 'path'

const registerAuthenticationController = async (
	request: Request<{}, {}, authRegistrationSchemaInput>,
	response: Response,
	next: NextFunction
) => {
	const { name, email, password } = request.body

	try {
		const userInfoData = findUniqueUserInfo({ email: email })
		if (await userInfoData) {
			response.status(409).json({
				message: 'User Already Exist Please LogIn',
				data: {
					email: (await userInfoData).email,
					name: (await userInfoData).name,
				},
			})
			return
		}
		const salt = Number(process.env.BCRYPT_SALT_GEN)
		const hashedPassword = await bcrypt.hash(password, salt)

		const UserData = await registerAuthenticationServices({
			name,
			email,
			password: hashedPassword,
		})
		response.json({
			message: 'Success Request',
			data: UserData,
		})
	} catch (error) {
		if (error) {
			logger.warn(error)
			next(error)
		}
	}
}

const signInAuthenticationController = async (
	request: Request<{}, {}, authSignInSchemaInput>,
	response: Response,
	next: NextFunction
) => {
	try {
		/**
		 *  Todo: Add verification to email to make user verify their emails
		 * */

		const { email, password } = request.body

		const userInfoData = findUniqueUserInfo(
			{ email: email },
			{ email: true, id: true, password: true, name: true }
		)
		if (!(await userInfoData)) {
			response.status(409).json({
				message: 'User Does Not Exist Please SignUp',
			})
			return
		}

		if (!(await bcrypt.compare(password, (await userInfoData).password))) {
			response.status(400).json({
				message: 'password failed',
			})
			return
		}
		if (await bcrypt.compare(password, (await userInfoData).password)) {
			response.status(200).json({
				message: 'Successfully Login In',
				data: await userInfoData,
			})
		}
	} catch (error) {
		if (error) {
			logger.warn(error)
			next(error)
		}
	}
}

export { registerAuthenticationController, signInAuthenticationController }
