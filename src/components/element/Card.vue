<template>
  <div class="card">
    <carousel :per-page="2">
      <slide v-for="(item, apem) in items" :key="apem">
        <ElementCard :data="item"></ElementCard>
      </slide>
    </carousel>
  </div>
</template>
<script>
import ElementCard from "./ElementCard.vue";
export default {
  name: "card",
  components: { ElementCard },
  data() {
    return {
      items: [
        {
          name: "Kin Khao",
          email: ["Thai"],
          message: "ngetes lu masuk apa ga"
        },
        { name: "Jū-Ni", email: ["Sushi", "Japanese", "$$$$"] },
        { name: "Delfina", email: ["Pizza", "Casual"] },
        { name: "San Tung", email: ["Chinese", "$$"] },
        { name: "Anchor Oyster Bar", email: ["Seafood", "Cioppino"] },
        { name: "Locanda", email: ["Italian"] },
        { name: "Garden Creamery", email: ["Ice cream"] }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
ElementCard {
  max-width: 128px;
  height: auto;
}
// @import "../../assets/css/debug.css";
// Import Bulma core
// @import "~bulma-carousel/dist/css/bulma-carausel.min.css"; // Import component
// @import "bulmaCarousel.sass";
</style>
