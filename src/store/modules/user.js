import axios from 'axios'

const _urlOriginApi = 'http://192.168.43.231/capcin/api/'
const _LurlApi = 'http://localhost/capcin/api/'
const _newUrlApp = _LurlApi + 'app'
const _newUrlUser = _LurlApi + 'user/login'
const _newUrlApiLogin = _LurlApi + 'apilogin'
// const axios = require('axios').default
// const config = {
//  'X-API-KEY':'capcin123'
// }
export default {
  state: {
    login: {
      email: '',
      password: ''
    }
  },
  getters: {
    LOGIN_USER: state => {
      return state.login
    }
  },
  mutations: {
    SET_LOGIN_USER: (state, {
      email,
      password
    }) => {
      state.login.email = email
      state.login.password = password

    }
    // LOGIN_USER: (state) => {
    //   //declare the body form
    //   let loginFormData = new FormData();
    //   //add the parameters
    //   loginFormData.set('email', state.login.email);
    //   loginFormData.set('password', state.login.password);
    //   const config = {
    //     headers: {
    //       'Content-Type': `multipart/form-data; boundary=${loginFormData._boundary}`
    //     }
    //   }; //important step
    //   Axios.post(_newUrlUser, loginFormData, config)
    //     .then(data => {
    //       console.log(data.data);
    //       //handle the data
    //     })
    //     .catch(error => {
    //       console.log(error.response)
    //     })
    // },
  },
  actions: {
    // login_user(context) {
    //   context.commit("LOGIN_USER")
    // },

    LOGIN_USER: ({
      commit
    }, payload) => {
      return new Promise(async (resolve, reject) => {
        console.log(payload)

        await axios
          // ({
          //     method: 'post',
          //     url: _newUrlUser,
          //     params: payload
          //   })
          .post(_newUrlUser, payload, config)
          .then(({
            data,
            status
          }) => {
            if (status === 200) {
              console.log(data)
              resolve(true)
            }
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    }
  },
}