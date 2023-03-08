import { Prisma, User } from '@prisma/client'
import prisma from '../helpers/prisma.helpers'

const registerAuthenticationServices = async (
	userInfoData: Prisma.UserCreateInput
) => {
	const userSignUp: User = await prisma.user.create({
		data: userInfoData,
	})

	return userSignUp as User
}

export { registerAuthenticationServices }
