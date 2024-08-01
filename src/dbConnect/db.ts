/** @format */
import { createPool, createConnection } from 'mysql2'
import config from '../config'
import { Connection } from 'mysql2/typings/mysql/lib/Connection'
// Create a connection to the database
export const connection = createConnection({
  host: 'localhost',
  user: 'contactApp',
  password: 'root',
  database: 'contactApplication',
})
// Connect to the database
connection.connect((err: any) => {
  if (err) {
    console.error('Error connecting: ' + err.stack)
  }
  console.log('Connected as id ' + connection.threadId)
})
