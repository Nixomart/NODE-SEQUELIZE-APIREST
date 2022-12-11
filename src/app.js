import express from 'express'
import projectRoutes from '../routes/project.routes.js'
import taskRoutes from '../routes/task.routes.js'

const app = express()

//middlewares
app.use(express.json())

app.use(projectRoutes)
app.use(taskRoutes)

export default app;