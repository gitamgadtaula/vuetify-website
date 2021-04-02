<template>
  <v-app>
  <v-footer
    absolute
    app
  >
    <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
  </v-app>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>

</style>
