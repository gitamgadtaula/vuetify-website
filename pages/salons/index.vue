<template>
  <div>
    <Salons />
  </div>
</template>

<script>
import Salons from "~/components/Salons";
export default {
  name: "index",
  components: { Salons },
  data() {
    return {};
  },
  created() {
    this.$store.commit("setHeader", false);
  },
  head() {
    return {
      title: 'Salons',
    }
  }};
</script>

<style scoped>
</style>
