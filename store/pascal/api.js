import axios from "axios"
import { PASCAL1_USERNAME, PASCAL1_PASSWORD } from "react-native-dotenv"
const pascal = axios.create({
  baseURL: "https://cbdash-pr-4907.herokuapp.com/dashboard",
  auth: { username: PASCAL1_USERNAME, password: PASCAL1_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
