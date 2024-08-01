/** @format */
import express, { Request, Response } from 'express'
import useRouter from './router/user'
// import config from './config'
import { connection } from './dbConnect/db'
import config from './config'
const PORT = config.PORT
connection
console.log(PORT)
const app = express()
app.use(express.json(), express.urlencoded({ extended: true }))
app.use('api/users', useRouter)
app.listen(PORT, () => {
  console.log(`listening http://localhost:${PORT}`)
})
