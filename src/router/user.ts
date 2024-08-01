/** @format */
import { Router } from 'express'
import {
  getContactController,
  postContactController,
  updateContactController,
} from '../controller/userController'
const router = Router()
// get all users
router.get('/')
// get  a particular user
router.get('user/contact/:id', getContactController)
// update  contact information
router.put('/contacts/:id', updateContactController)
// delete a particular user contact
router.delete('del/contacts/:id')
// add new user contact information
router.post('new/contact/', postContactController)
export default router
