<template>
  <Project />
</template>

<script>
import Project from "~/components/Project";
export default {
  components: { Project },
  name: "index",
  created() {
    this.$store.commit("setHeader", false);
  },
  head() {
    return {
      title: 'Projekte',
    }
  }
};
</script>

<style scoped>
</style>
