require('dotenv').config({ path: './src/config/.env.dev' })
import express, { Request, Response } from 'express'
import compression from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import authenticationRoute from './routers/auth.routers'

/**
 * * cors options
 * */

const whitelistDomains = [process.env.DOMAIN_1, process.env.DOMAIN_2]

const corsOptions = {
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	origin: function (origin: any, callback: any) {
		if (whitelistDomains.indexOf(origin) !== -1 || !origin) {
			callback(null, true)
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

app.get('/', cors(corsOptions), (request: Request, response: Response) => {
	response.send({
		message: 'WELCOME TO UNISELL API',
	})
})

app.use('/api/v1/auth/', authenticationRoute)

export default app
