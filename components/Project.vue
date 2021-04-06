<template>
  <div class="container">
    <v-row>
      <v-flex
        v-for="items in projectItems"
        xs12
        sm6
        md4
        lg4
        xl4
        class="image-list"
        :key="items.id"
      >
        <router-link :to="`/projekte/${items.value}`">
          <v-card elevation="0" tile>
            <div class="image-container">
              <figure>
                <v-img
                  :src="items.img"
                  :lazy-src="items.img"
                  height="350"
                  max-width="500"
                ></v-img>
              </figure>
            </div>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0 item-content">
                  {{ items.value }}
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
  name: "Project",
  props: ["fromIndex"],
  data() {
    return {
      projectItems: [
        { id: 1, value: "Item1", img: "https://picsum.photos/500/300?image=1" },
        { id: 2, value: "Item2", img: "https://picsum.photos/500/300?image=2" },
        { id: 3, value: "Item3", img: "https://picsum.photos/500/300?image=3" },
        { id: 4, value: "Item4", img: "https://picsum.photos/500/300?image=4" },
        { id: 5, value: "Item5", img: "https://picsum.photos/500/300?image=5" },
        { id: 6, value: "Item6", img: "https://picsum.photos/500/300?image=6" },
        { id: 7, value: "Item7", img: "https://picsum.photos/500/300?image=7" },
        { id: 8, value: "Item8", img: "https://picsum.photos/500/300?image=8" },
        { id: 9, value: "Item9", img: "https://picsum.photos/500/300?image=9" },
        {
          id: 10,
          value: "Item10",
          img: "https://picsum.photos/500/300?image=10",
        },
      ],
    };
  },
  created() {
    if (!this.fromIndex) {
      this.$store.commit("setHeader", false);
    } else {
      this.$store.commit("setHeader", true);
    }
  },
};
</script>

<style scoped>
.image-list {
  padding: 20px 30px 10px 20px;
}
.item-content {
  font-size: 16px;
  /*font-family: Roboto, sans-serif;*/
  font-weight: 400;
  word-wrap: break-word;
}
.item-content:hover {
  color: #6f6f68;
}

.container {
  width: 75%;
  max-height: 100%;
  padding-top: 6rem;
}
.v-card__title {
  text-align: center;
  display: block;
}
a {
  text-decoration: none;
}
</style>
<style>
.image-container{
  position: relative;
  opacity: 1;
  width: 100%;
  height: 250px;
  background: #000000;
  overflow: hidden;
}
.image-container figure::after {
  display: block;
  content: "";
  /* 4:3 aspect ratio */
  padding-bottom: 75%;
}
.image-container figure {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
  -webkit-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  opacity: 1;
  margin-top: 40px;
}
.image-container figure:hover {
  opacity: 0.7;
  margin-top: 0;
  /*-webkit-transform: scale(1.3);*/
  /*transform: scale(1.3);*/
}

.ratio-4-3{
  width:100%;
  position:relative;
  background: 50% 50% no-repeat;
  background-size:cover;
  background-clip:content-box;
}
.ratio-4-3:before{
  display:block;
  content:"";
  padding-top:75%;
}
</style>
