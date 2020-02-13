import axios from 'axios'

const _urlOriginApi = 'http://192.168.43.231/capcin/api/'
const _LurlApi = 'http://localhost/capcin/api/'
const _newUrlApp = _LurlApi + 'app'
const _newUrlUser = _LurlApi + 'user/login'
const _newUrlApiLogin = _LurlApi + 'apilogin'

axios.defaults.baseURL = _LurlApi
export default {
  state: {
    token: localStorage.getItem('access_token') || null,
  },
  getters: {
    loggedIn(state) {
      return state.token !== null
    },
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null
    },
  },
  actions: {

    retrieveName(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

      return new Promise((resolve, reject) => {
        axios.get('/user')
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    register(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/register', {
            name: data.name,
            email: data.email,
            password: data.password,
          })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    destroyToken(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('user/logout')
            .then(response => {
              localStorage.removeItem('access_token')
              context.commit('destroyToken')
              resolve(response)
              // console.log(response);
              // context.commit('addTodo', response.data)
            })
            .catch(error => {
              localStorage.removeItem('access_token')
              context.commit('destroyToken')
              reject(error)
            })
        })
      }
    },
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        const params = new URLSearchParams()
        params.append('email', credentials.email)
        params.append('password', credentials.password)
        axios.post('user/login', params)
          .then(response => {
            console.log(response.data.data)
            const token = response.data.data.token
            resolve(response)
            // if (token != undefined) {
            localStorage.setItem('access_token', token)
            context.commit('retrieveToken', token)
            // } else {
            // localStorage.removeItem('access_token')
            // context.commit('destroyToken')
            // console.log('token undefined')
            // }
          })
          .catch(error => {
            // console.log(error)
            reject(error)
          })
      })

    }
  }
}