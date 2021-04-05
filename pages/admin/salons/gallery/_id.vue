<template>
  <v-app>
    <gallery-items type="salonsGallery" :id="$route.params.id" />
  </v-app>
</template>

<script>
import GalleryItems from "@/components/Admin/GalleryItems";
export default {
  components: {
    GalleryItems,
  },
};
</script>

<style>
</style>
GalleryItems