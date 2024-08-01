/** @format */
import express, { Request, Response } from 'express'
const app = express()
app.use(express.urlencoded({ extended: true }))
app.all('*', (Request: Request, Response: Response<>) => {
  Request.send('UNATHORIZED PATH')
})
