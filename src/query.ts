/** @format */
export const qetAllContacts = 'SELECT * FROM contacts'
export const postContacts =
  'INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)'
export const getContact = 'SELECT * FROM contacts WHERE id = ?'
export const updateContact =
  'UPDATE contacts SET name = ?, email = ?, phone = ? WHERE id = ?'
