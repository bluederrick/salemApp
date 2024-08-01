/** @format */
import dotenv from 'dotenv'
// import Config from './types/configDTO'
dotenv.config()
interface Config {
  PORT: number
  // Add other configuration properties as needed
}
const config: Config = {
  // PORT: parseInt(process.env.PORT || '4000')
  PORT: 4000,
  // PASSWORD: process.env.PASSWORD,
}
export default config
