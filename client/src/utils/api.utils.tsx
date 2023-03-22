import axios from 'axios'
import { RegisterInputValidationSchemaTypes } from '../utils/zod.validation'

const BASE_URL = 'http://localhost:5000/api/v1/'

const apiInstance = axios.create({
	baseURL: BASE_URL,
	// withCredentials: true,
})

apiInstance.defaults.headers.common['Content-Type'] = 'application/json'

const signUpUsersFn = async (users: RegisterInputValidationSchemaTypes) => {
	const response = await apiInstance.post('auth/signup', users)
}

export { signUpUsersFn }
