<template>
  <div id="input">
    <div class="field">
      <div class="control has-icons-left has-icons-right">
        <input
          :class="['input', GLOBALINPUT.kelas]"
          type="username"
          :value="GLOBALINPUT.holder"
        />
        <span class="icon is-small is-left">
          <i :class="['fas', GLOBALINPUT.lefticon]"></i>
        </span>
        <span
          class="icon is-small is-right"
          :style="{ visibility: GLOBALINPUT.visible }"
        >
          <i :class="['fas', GLOBALINPUT.rigthicon]"></i>
        </span>
      </div>
      <p :class="[GLOBALINPUT.help, 'align-left', GLOBALINPUT.kelas]">
        {{ GLOBALINPUT.pesan }}
      </p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "globalinput",

  computed: {
    ...mapGetters(["GLOBALINPUT"])
    // model: {
    //  get() {
    //   return this.$store.getters.GLOBALINPUT.model
    //  },
    //  set(value) {
    //   this.$store.commit('SET_GLOBALINPUT', {
    //    model
    //   })
    // }
    // }
  }
};
</script>
