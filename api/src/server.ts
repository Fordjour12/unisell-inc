require('dotenv').config({ path: './src/config/.env.dev' })
import express, { Request, Response } from 'express'
import compression from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import authenticationRoute from './routers/auth.routers'
import {
	errorRequestHandler,
	notFoundRequest,
} from './middleware/notFound.middleware'
import morgan from 'morgan'
import logger from './config/logger'

// /**
//  * * cors options
//  * */

const whitelistDomains = [process.env.DOMAIN_1, process.env.DOMAIN_2]
logger.info(process.env.DOMAIN_1)

const corsOptions = {
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	origin: function (origin: any, callback: any) {
		if (whitelistDomains.indexOf(origin) !== -1 || !origin) {
			callback(null, true)
			logger.info(whitelistDomains)
		} else {
			callback(new Error('Blocked By CORS'))
		}
	},
	optionsSuccessStatus: 200,
}

/**
 * * helmet options
 * */
const helmetOptions = {
	crossOriginResourcePolicy: true,
	xssFilter: true,
}

const app = express()
app.use(compression())
app.use(cors(corsOptions))
app.use(helmet(helmetOptions))
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (request: Request, response: Response) => {
	response.send({
		message: 'WELCOME TO UNISELL API',
	})
})

app.use('/api/v1/auth/', authenticationRoute)

app.use(notFoundRequest)
app.use(errorRequestHandler)

export default app
