export default {
 state: {
  globalinput: {
   kelas: 'is-danger',
   holder: 'Email',
   lefticon: 'fa-envelope',
   rigthicon: 'fa-exclamation-triangle',
   visible: 'visible',
   help: 'help',
   pesan: 'coba aja pak',
   model: ''
  }
 },
 getters: {
  GLOBALINPUT: state => {
   return state.globalinput
  }
 },
 mutations: {
  SET_GLOBALINPUT: (state, {
   kelas,
   holder,
   lefticon,
   rigthicon,
   visible,
   help,
   pesan,
   model
  }) => {
   state.globalinput.kelas = kelas
   state.globalinput.holder = holder
   state.globalinput.lefticon = lefticon
   state.globalinput.rigthicon = rigthicon
   state.globalinput.visible = visible
   state.globalinput.help = help
   state.globalinput.pesan = pesan
   state.globalinput.model = model
  }

 },
 actions: {}


}