import express from 'express'
import projectRoutes from '../routes/project.routes.js'

const app = express()

//middlewares
app.use(express.json())

app.use(projectRoutes)

export default app;