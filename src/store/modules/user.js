import axios from 'axios'

const _urlOriginApi = 'http://192.168.43.231/capcin/api/'
const _LurlApi = 'http://localhost/capcin/api/'
const _newUrlApp = _LurlApi + 'app'
const _newUrlUser = _LurlApi + 'users'
const _newUrlApiLogin = _LurlApi + 'apilogin'
// const axios = require('axios').default
// const config = {
//  'X-API-KEY':'capcin123'
// }
export default {
 state: {},
 getters: {},
 mutations: {},
 actions: {
  LOGIN: ({
   commit
  }, payload) => {
   return new Promise((resolve, reject) => {
    axios
     .get(_newUrlUser + '/user?X-API-KEY=capcin123')
     .then(({
      data,
      status
     }) => {
      if (status === 200) {
       resolve(true)
      }
     })
     .catch(error => {
      reject(error)
     })
   })
  }
 },
}