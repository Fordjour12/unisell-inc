import logger from './config/logger'
import app from './server'

const port: number = Number(process.env.PORT)

app.listen(port, () => {
	logger.info(`[⚡️ server :] server connected to https://localhost:${port}`)
})
