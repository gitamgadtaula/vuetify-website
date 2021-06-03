<template>
  <div class="container">
    <image_list_flex :list-data="salonsItems" :to-value="'salons'" />
  </div>
</template>

<script>
import image_list_flex from "@/components/image_list_flex";
export default {
  name: "Salons",
  components: { image_list_flex },
  data() {
    return {
      salonsItems: [],
    };
  },
  methods: {
    getLists() {
      this.$axios.get("/projects?category=salon").then((response) => {
        this.salonsItems = response.data;
      });
    },
  },
  created() {
    this.getLists();
    this.$store.commit("setHeader", false);
    this.$store.commit("setHeaderFontColor", true);
  },
};
</script>

<style scoped>
.container {
  width: 75%;
  max-height: 100%;
  padding-top: 6rem;
}
.v-card__title {
  text-align: center;
  display: block;
}
a {
  text-decoration: none;
}
</style>
