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
        <router-link :to="`/projektentwicklung/${items.value}`">
          <v-card elevation="0" tile class="image-card">
            <v-img
              :src="items.img"
              :lazy-src="items.img"
              max-width="500"
              height="350"
            ></v-img>
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
      developmentItems: [
        {
          id: 1,
          value: "Item11",
          img: "https://picsum.photos/500/300?image=11",
        },
        {
          id: 2,
          value: "Item12",
          img: "https://picsum.photos/500/300?image=12",
        },
        {
          id: 3,
          value: "Item13",
          img: "https://picsum.photos/500/300?image=13",
        },
        {
          id: 4,
          value: "Item14",
          img: "https://picsum.photos/500/300?image=14",
        },
        {
          id: 5,
          value: "Item15",
          img: "https://picsum.photos/500/300?image=15",
        },
        {
          id: 6,
          value: "Item16",
          img: "https://picsum.photos/500/300?image=16",
        },
        {
          id: 7,
          value: "Item17",
          img: "https://picsum.photos/500/300?image=17",
        },
        {
          id: 8,
          value: "Item18",
          img: "https://picsum.photos/500/300?image=18",
        },
        {
          id: 9,
          value: "Item19",
          img: "https://picsum.photos/500/300?image=19",
        },
        {
          id: 10,
          value: "Item20",
          img: "https://picsum.photos/500/300?image=20",
        },
      ],
    };
  },
  created() {
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
  font-family: Roboto, sans-serif;
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
.image-card{
  background-position: center;
  background-size: cover;
}
</style>
