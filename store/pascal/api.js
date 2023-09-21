import axios from "axios"
import { PASCAL4_SECRET } from "react-native-dotenv"
const pascal = axios.create({
  baseURL: "https://cbdash-pr-4907.herokuapp.com/dashboard",
  params: { private_key: PASCAL4_SECRET },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
