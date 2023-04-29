import axios from "axios";

const baseURL = 'https://content-service.onrender.com/v1'

export default axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})