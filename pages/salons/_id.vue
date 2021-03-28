<template>
  <div class="container">
    <v-row>
      <v-flex v-for="items in salonGalleryItems.images"
              xs12 sm12 md12 lg12 xl12
              class="image-list"
              :key="items.img"
              style="z-index: 0">
        <v-img
          :src="items.img"
          :lazy-src="items.img">
        </v-img>
      </v-flex>
    </v-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      value:this.$route.params.id,
      galleryItems:""
    }
  },
  created(){
    this.getItems()
    this.$store.commit('setHeader', true)
    this.$store.commit('setImage', this.galleryItems.titleImg)
    this.$store.commit('setTitle', this.value)

  },
  methods:{
    getItems(){
      //  Do something with "id" variable passed
      console.log(this.$route.params.id)

      //  Dummy data
      this.salonGalleryItems =  {
        id:1,
        title:this.$route.params.id,
        titleImg:"https://picsum.photos/1000?image=1",
        images: [
          {img: "https://picsum.photos/500/300?image=16"},
          {img: "https://picsum.photos/500/300?image=18"},
          {img: "https://picsum.photos/500/300?image=26"},
          {img: "https://picsum.photos/500/300?image=28"},
          {img: "https://picsum.photos/500/300?image=88"},
        ]
      }
    },
  }
}
</script>

<style scoped>

</style>
