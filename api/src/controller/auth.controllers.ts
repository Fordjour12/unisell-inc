import { NextFunction, Request, Response } from 'express'
import bcrypt, { genSalt } from 'bcryptjs'
import prisma from '../helpers/prisma.helpers'
import { registerAuthenticationServices } from '../services/auth.services'
import logger from '../config/logger'

const registerAuthenticationController = async (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	/**
	 * *check if user exist => tell user to login
	 * * check if use passing correct data
	 * * hash password and save it
	 * * we say user data is created
	 * */

	const { name, email, password } = request.body

	try {
		const userInfoData = await prisma.user.findUnique({
			where: {
				email: email,
			},
		})
		if (userInfoData) {
			response.status(409).json({
				message: 'User Already Exist Please LogIn',
				data: {
					email: userInfoData.email,
					name: userInfoData.name,
				},
			})
			logger.warn(userInfoData)

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
export { registerAuthenticationController }
