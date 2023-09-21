import axios from "axios"
import { PASCAL3_TOKEN } from "react-native-dotenv"
const pascal = axios.create({
  baseURL: "https://cbdash-pr-4907.herokuapp.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${PASCAL3_TOKEN}`
  }
})
export const apiService = {}
