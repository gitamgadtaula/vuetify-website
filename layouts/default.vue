<template>
  <v-app>
    <Header />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";
export default {
  components: { Footer, Header },
  data() {
    return {};
  },
};
</script>
<style>
html {
  font-family: "Courier New", monospace;
  padding-top: 0;
}
body {
  padding: 0;
}
</style>
