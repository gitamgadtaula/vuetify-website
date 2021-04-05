<template>
  <div class="container">
    <v-row>
      <v-flex
        v-for="items in galleryItems.images"
        xs12
        sm12
        md12
        lg12
        xl12
        class="image-list"
        :key="items.img"
        style="z-index: 0"
      >
        <v-img :src="items.img" :lazy-src="items.img"> </v-img>
      </v-flex>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: this.$route.params.id,
      galleryItems: "",
    };
  },
  created() {
    this.getItems();
    this.$store.commit("setHeader", true);
    this.$store.commit("setImage", this.galleryItems.titleImg);
    this.$store.commit("setTitle", this.value);
    this.$store.commit("setSmallText", true);
    this.$store.commit("setDescription", this.galleryItems.description);
  },
  methods: {
    getItems() {
      //  Do something with "id" variable passed
      console.log(this.$route.params.id);

      //  Dummy data
      this.galleryItems = {
        id: 1,
        title: this.$route.params.id,
        description: "Small | Text | Projektentwicklung",
        titleImg:
          "https://picsum.photos/1000?image=" +
          this.$route.params.id.split("")[this.$route.params.id.length - 1],
        images: [
          { img: "https://picsum.photos/500/300?image=85" },
          { img: "https://picsum.photos/500/300?image=95" },
          { img: "https://picsum.photos/500/300?image=23" },
          { img: "https://picsum.photos/500/300?image=63" },
          { img: "https://picsum.photos/500/300?image=73" },
        ],
      };
    },
  },
};
</script>

<style scoped>
.image-list {
  padding-bottom: 8vh;
}
</style>
