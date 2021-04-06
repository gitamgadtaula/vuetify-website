<template>
  <div class="container">
    <v-row>
      <v-flex
        v-for="items in developmentItems"
        xs12
        sm6
        md4
        lg4
        xl4
        class="image-list"
        :key="items.id"
      >
        <router-link :to="`/projektentwicklung/${items.id}`">
          <v-card elevation="0" tile class="image-card">
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
  </div>
</template>

<script>
export default {
  name: "Development",
  data() {
    return {
      developmentItems: [],
    };
  },
  methods: {
    getLists() {
      this.$axios.get("/projektentwicklung").then((response) => {
        console.log(response.data);
        this.developmentItems = response.data;
      });
    },
  },
  created() {
    this.getLists();
    this.$store.commit("setHeader", false);
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
.image-card {
  background-position: center;
  background-size: cover;
}
</style>
