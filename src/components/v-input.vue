<template>
 <div id="input">
  <div class="field">
   <div class="control has-icons-left has-icons-right">
    <input
     :class="['input', kelas]"
     type="username"
     placeholder="Username"
     @change="UserValidation"
    />
    <span class="icon is-small is-left">
     <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right" :style="{visibility: visible}">
     <i class="fas fa-exclamation-triangle"></i>
    </span>
   </div>
   <p :class="[help, 'align-left',kelas ]">{{ pesan }}</p>
  </div>
 </div>
</template>
<script>
export default {
 name: 'input',
 props: {
  Pkelas: String,

  PVisible: String,
  Phelp: String,
  Ppesan: String

 },
 data: {
  kelas: '',

  visible: '',
  help: '',
  pesan: ''
 },
 methods: {
  UserValidation() {
   const vm = this
   vm.kelas = vm.Pkelas

   vm.visible = vm.PVisible
   vm.help = vm.Phelp
   vm.pesan = vm.Ppesan
  }

 }

}
</script>
