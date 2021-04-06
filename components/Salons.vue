<template>
  <div class="container">
    <v-row>
      <v-flex v-for="items in salonsItems"
              xs12 sm6 md4 lg4 xl4
              class="image-list"
              :key="items.id">
        <router-link :to='`/salons/${items.value}`'>
          <v-card elevation="0" tile >
            <div class="image-container">
              <figure>
                <v-img
                  :src="items.img"
                  :lazy-src="items.img"
                  height="350"
                ></v-img>
              </figure>
            </div>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0 item-content">
                  {{items.value}}
                </h3>
              </div>
            </v-card-title>
          </v-card>
        </router-link>
      </v-flex>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Salons",
  data(){
    return{
      salonsItems:[
        {id:1,value:"Item21",
          img:"https://picsum.photos/500/300?image=21"},
        {id:2,value:"Item22",
          img:"https://picsum.photos/500/300?image=22"},
        {id:3,value:"Item23",
          img:"https://picsum.photos/500/300?image=23"},
        {id:4,value:"Item24",
          img:"https://picsum.photos/500/300?image=24"},
        {id:5,value:"Item25",
          img:"https://picsum.photos/500/300?image=25"},
        {id:6,value:"Item26",
          img:"https://picsum.photos/500/300?image=26"},
        {id:7,value:"Item27",
          img:"https://picsum.photos/500/300?image=27"},
        {id:8,value:"Item28",
          img:"https://picsum.photos/500/300?image=28"},
        {id:9,value:"Item29",
          img:"https://picsum.photos/500/300?image=29"},
        {id:10,value:"Item30",
          img:"https://picsum.photos/500/300?image=30"}
      ]
    }
  },
  created() {
    this.$store.commit('setHeader', false)
  }

}
</script>

<style scoped>
.image-list{
  padding: 20px 30px 10px 20px;
}
.item-content{
  font-size: 16px;
  /*font-family: Roboto,sans-serif;*/
  font-weight: 400;
  word-wrap: break-word;
}
.item-content:hover {
  color: #6f6f68;
}

.container{
  width: 75%;
  max-height: 100%;
  padding-top: 6rem;
}
.v-card__title{
  text-align: center;
  display: block;
}
a{
  text-decoration: none;
}

</style>
