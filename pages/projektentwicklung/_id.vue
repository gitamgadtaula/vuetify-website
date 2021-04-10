<template>
  <div class="index-container">
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
      id: this.$route.params.id,
      galleryItems: {
        title: "",
        description: "",
        titleImg: "",
        images: [],
      },
    };
  },
  created() {
    this.getGalleryItems();
    this.getParentItem();
  },
  methods: {
    getGalleryItems() {
      this.$axios
        .get(`/projektentwicklungGallery?master_id=${this.id}`)
        .then((response) => {
          this.$set(this.galleryItems, "images", response.data);
        });
    },
    getParentItem() {
      this.$axios.get(`/projektentwicklung/${this.id}`).then((response) => {
        this.$set(this.galleryItems, "title", response.data.value);
        this.$set(this.galleryItems, "description", response.data.desc);
        this.$set(this.galleryItems, "titleImg", response.data.img);
        this.setGlobalSettings();
      });
    },
    setGlobalSettings() {
      this.$store.commit("setHeader", true);
      this.$store.commit("setImage", this.galleryItems.titleImg);
      this.$store.commit("setTitle", this.galleryItems.title);
      this.$store.commit("setSmallText", true);
      this.$store.commit("setDescription", this.galleryItems.description);
    },
  },
};
</script>

<style scoped>
.image-list {
  padding-bottom: 8vh;
}
.index-container{
  width: 80%;
  margin: auto;
}
div{
  display: block;
}
</style>
