
import express from 'express'
import routes from './routes' // 路由
import logger from './utils/logger'
import config from 'config'
import initMiddleware from './middleware'

const app = express()

// 挂载中间件
initMiddleware(app)

app.use(express.json())

const PORT = config.get('server.port')

// 启动
app.listen(PORT, async () => {
  logger.info(`App is running at http://localhost:${PORT}`)
  routes(app)
})

