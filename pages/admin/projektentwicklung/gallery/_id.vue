<template>
  <v-app>
    <gallery-items type="projektentwicklungGallery" :id="$route.params.id" />
  </v-app>
</template>

<script>
import GalleryItems from "@/components/Admin/GalleryItems.vue";
export default {
  components: {
    GalleryItems,
  },
};
</script>

<style>
</style>
GalleryItems