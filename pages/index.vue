<template>
  <div>
    <div class="container">
      <h1>Projekte</h1>
    </div>
    <Project :fromIndex="true" class="index-container" />
  </div>
</template>

<script>
import Project from "~/components/Project";

export default {
  data() {
    return {
      homeImg:
        "https://mundelarchitekten.de/wp-content/uploads/2018/08/startbildschirmklein_3.png",
    };
  },
  components: {
    Project,
  },
  created() {
    this.$store.commit("setHeader", true);
    this.$store.commit("setImage", this.homeImg);
    this.$store.commit("setTitle", "");
  },
};
</script>
<style scoped>
.container {
  width: 75%;
  max-height: 100%;
  padding-top: 10rem;
}
.index-container {
  padding-top: 0px !important;
}
</style>
