<template>
  <v-app>
    <div class="container">
      <div v-for="(item, index) in lists" :key="index">
        <p class="title">{{ item.value }}</p>
        <p class="desc">{{ item.desc }}</p>
        <div class="images">
          <img :src="item.img" />
        </div>
        <hr />
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  props: {
    type: [Array, Object],
  },
  data() {
    return {
      lists: [],
    };
  },
  methods: {
    getLists() {
      this.$axios.get(`/${this.type}`).then((response) => {
        this.lists = response.data;
      });
    },
  },
  mounted() {
    this.getLists();
  },
};
</script>

<style>
</style>