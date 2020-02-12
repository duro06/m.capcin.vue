/* global localStorage */

import axios from 'axios'

const API_URL = process.env.API_URL || 'http://localhost/capcin/api/'

export default axios.create({
 baseURL: API_URL,
 headers: {
  'X-API-KEY': 'capcin123',
  // 'Content-Type': 'application/json',
  // 'Authorization': 'Bearer ' + localStorage.token,


 }
})