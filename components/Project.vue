<template>
  <div class="container">
    <v-row>
    <v-flex v-for="n in galleryItems" xs6 md3 class="image-list">
      <nuxt-link to="/projekte/#">
          <v-card elevation="0" tile >
            <v-img
              :src="n.img"
              width="500"
              height="350"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0 item-content">
                  {{n.value}}
                </h3>
              </div>
            </v-card-title>
          </v-card>
      </nuxt-link>
        </v-flex>
  </v-row>
  </div>
</template>

<script>
export default {
  name: "Project",
  data(){
    return{
      galleryItems:[
        {id:1,
          value:"Item1",
          img:"https://picsum.photos/500/300?image=11"},
        {id:2,
          value:"Item2",
          img:"https://picsum.photos/500/300?image=12"},
        {id:3,
          value:"Item3",
          img:"https://picsum.photos/500/300?image=13"},
        {id:4,
          value:"Item4",
          img:"https://picsum.photos/500/300?image=14"},
        {id:5,
          value:"Item5",
          img:"https://picsum.photos/500/300?image=15"}
      ]
    }
  }
}
</script>

<style scoped>
.image-list{
  padding: 20px 30px 10px 20px;
}
.item-content{
  font-size: 16px;
  font-family: Roboto,sans-serif;
  font-weight: 400;
  word-wrap: break-word;
}
.item-content:hover {
  color: #6f6f68;
}

.container{
  width: 75%;
}
.v-card__title{
  text-align: center;
  display: block;
}
a{
  text-decoration: none;
}

</style>
