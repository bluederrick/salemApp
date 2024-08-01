/** @format */
import { Request, Response } from 'express'
import { createUserDTOS } from '../dtos/createUser.dtos'
// import {SUCCESS ,UNAUTHORIZED,FORBIDEN,NOT_FOUND,BAD_REQUEST} from '../utilities/constants'
import {
  postContactsServices,
  getAllContactsServices,
  getContactServices,
  updateContactService,
} from '../service/userService'
import StatusCode from '../utilities/constants'
import { RequsetDTO } from '../types/requestDTO'
import { responseDataDTOS } from '../types/responseDTO'
import { UserData } from '../types/userDTO'
const { SUCCESS, UNAUTHORIZED, FORBIDEN, NOT_FOUND, BAD_REQUEST } = StatusCode
// create new user
export const postContactController = (req: Request, res: Response): void => {
  // annotation :Request ,:Responce
  try {
    const data: UserData = req.body
    const userCreated = postContactsServices(data)
    res.status(201).json({ message: 'User created successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error })
  }
}
export const getContactController = async (
  req: Request,
  res: Response<responseDataDTOS>
) => {
  const { id } = req.params
  const isContactExist = await getContactServices(id)
  if (isContactExist === undefined) {
    console.error(isContactExist)
    return res.json({
      statusType: false,
      status: FORBIDEN,
      message: '!oops someting went wrong',
    })
  } else {
    return res.json({
      statusType: true,
      status: SUCCESS,
      message: `all contacts retrieved successfully ${isContactExist}`,
    })
    // if (isContactExist.length === 0) {
    //   return res.status(404).send('Contact not found')
    // }
    // res.json(isContactExist[0])
  }
}
export const updateContactController = async (
  req: Request,
  res: Response<responseDataDTOS>
) => {
  const { id } = req.params
  const { name, email, phone } = req.body
  const updatedContact = await updateContactService(req.body)
  if (!updatedContact) {
    return res.json({
      statusType: false,
      status: FORBIDEN,
      message: `An error occured${updatedContact}`,
    })
  }
  return res.json({
    statusType: true,
    status: SUCCESS,
    message: `successful update ${updatedContact}`,
  })
}
