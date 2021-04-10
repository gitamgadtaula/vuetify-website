<template>
  <v-row>
    <v-flex
      v-for="items in listData"
      xs12
      sm6
      md4
      lg4
      xl4
      class="image-list"
      :key="items.id"
    >
      <router-link :to="`/${toValue}/${items.id}`">
        <v-card elevation="0" tile>
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
                {{ items.value }}
              </h3>
            </div>
          </v-card-title>
        </v-card>
      </router-link>
    </v-flex>
  </v-row>
</template>

<script>
export default {
  name: "image_list_flex",
  props: {
    listData: {
    },
    toValue: {
      type: String,
    },
  },}
</script>

<style scoped>
.image-list {
  padding: 20px 30px 10px 20px;
}
.item-content {
  font-size: 16px;
  /*font-family: Roboto,sans-serif;*/
  font-weight: 400;
  word-wrap: break-word;
}
.item-content:hover {
  color: #6f6f68;
}

.image-container {
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
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  opacity: 1;
  margin-top: 40px;
}
.image-container figure:hover {
  opacity: 0.7;
  margin-top: 0;
  /*-webkit-transform: scale(1.3);*/
  /*transform: scale(1.3);*/
}
.v-card__title {
  text-align: center;
  display: block;
}
</style>
