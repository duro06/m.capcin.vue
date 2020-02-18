<template>
  <div
    class="field slideInDown"
    v-wow
    data-wow-duration="1s"
    data-wow-delay="0.4s"
  >
    <article class="message is-danger">
      <div class="message-body">
        Halaman ini hanya bisa d akses oleh
        <strong>User level 4</strong>
        <a>Jika link ini bisa di akses bukan oleh level 4</a>
        maka ada yang salah dengan <em>Program saya</em>
        demikian permberitahuan ini diberitahukan agar anda tahu
      </div>
    </article>
  </div>
</template>
<script>
export default {
  name: "level4"
};
</script>
