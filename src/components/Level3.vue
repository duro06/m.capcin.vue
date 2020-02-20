<template>
  <div class="container">
    <div
      id="lev3"
      class="field slideInDown"
      v-wow
      data-wow-duration="1s"
      data-wow-delay="0.4s"
    >
      <article class="message is-danger">
        <div class="message-body">
          Halaman ini hanya bisa d akses oleh
          <strong>User level 3 </strong>
          <a>Jika link ini bisa di akses bukan oleh level 3</a>
          maka ada yang salah dengan <em>Program saya</em>
          demikian permberitahuan ini diberitahukan agar anda tahu
        </div>
      </article>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/element/bulmaFooter.vue";
export default {
  name: "level3",
  components: { Footer }
};
</script>
