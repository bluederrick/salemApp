/** @format */
import { connection } from '../dbConnect/db'
import {
  getContact,
  postContacts,
  qetAllContacts,
  updateContact,
} from '../query'
import { UserData } from '../types/userDTO'
export const postContactsServices = (...data: UserData[]) => {
  // connection.query(qetAllContacts, [...data], (err, results)
  // const { name, email, phone } = data
  const dataResponse = connection.query(
    qetAllContacts,
    [...data],
    (err, results) => {
      if (err) {
        console.error(err)
        return 'error creating contact'
      }
      return { results }
    }
  )
  return dataResponse
}
export const getAllContactsServices = () => {
  connection.query(postContacts, (err, results) => {
    if (err) {
      console.error(err)
      return err
    }
    return results
  })
}
export const getContactServices = (id: string) => {
  connection.query(getContact, [id], (err, results) => {
    if (err) {
      console.error(err)
      return 'Error fetching contact'
    }
    if (!results) {
      return 'Contact not found'
    }
    return results
  })
}
export const updateContactService = (...data: UserData[]) => {
  // const { name, email, phone, id } = data
  const updatedContact = connection.query(
    updateContact,
    [...data],
    (err, results) => {
      if (err) {
        console.error(err)
        return 'Error updating contact'
      }
      if (results) {
        return `user does not exist`
      }
      return 'Contact updated'
    }
  )
  return updatedContact
}
