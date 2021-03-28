<template>
<Project/>
</template>

<script>
import Project from "~/components/Project";
export default {
  components:{Project},
name: "index",
  created() {
    this.$store.commit('setHeader', false)
  }}
</script>

<style scoped>

</style>
