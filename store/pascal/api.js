import axios from "axios"
const pascal = axios.create({
  baseURL: "https://cbdash-pr-4907.herokuapp.com/dashboard",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
