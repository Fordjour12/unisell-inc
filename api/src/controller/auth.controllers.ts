import { NextFunction, Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import prisma from '../helpers/prisma.helpers'
import {
	findUniqueUserInfo,
	registerAuthenticationServices,
} from '../services/auth.services'
import logger from '../config/logger'
import { authRegistrationSchemaInput } from '../schema/auth.schema'

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
		}
	}
}

// const signInAuthenticationController = async (params) => {}

export { registerAuthenticationController }
