/** @format */
import { Request, Response } from 'express'
export function getUsers(request: Request, responose: Response) {
  responose.send([])
}
