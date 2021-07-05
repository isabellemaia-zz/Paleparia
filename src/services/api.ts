import axios from "axios";

// Pode ser algum servidor executando localmente: 
// http://localhost:3000
require('dotenv').config()
export const url = 'http://localhost:1337/'
export const urlW = 'http://localhost:1337'

const api = axios.create({
  baseURL: url ,
});

export default api;