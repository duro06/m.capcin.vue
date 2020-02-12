/* global localStorage */

import axios from 'axios'

const API_URL = process.env.API_URL || 'http://localhost/capcin/api/'

export default axios.create({
 baseURL: API_URL,
 headers: {

  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Authorization': 'Bearer ' + localStorage.token,


 }
})