import { Prisma, User } from '@prisma/client'
import prisma from '../helpers/prisma.helpers'

const findUniqueUserInfo = async (
	where: Prisma.UserWhereUniqueInput,
	select?: Prisma.UserSelect
) => {
	const uniqueUserInfo = await prisma.user.findUnique({
		where,
		select,
	})

	return uniqueUserInfo as User

}

const registerAuthenticationServices = async (
	userInfoData: Prisma.UserCreateInput
) => {
	const userSignUp: User = await prisma.user.create({
		data: userInfoData,
	})

	return userSignUp as User
}

export { registerAuthenticationServices, findUniqueUserInfo }
