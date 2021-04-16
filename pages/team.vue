<template>
  <div class="index-container">
    <div class="head">
      <h2>Bereit für Ihren Auftrag.</h2>
    </div>
    <br><br>
    <v-row>
      <v-flex
        v-for="items in teamData"
        :key="items.id"
        class="image-list"
        lg4
        md4
        sm6
        xl4
        xs12
      >
        <v-card elevation="0" tile>
          <div>
            <figure>
              <v-img
                :lazy-src="items.image"
                :src="items.image"
                height="380"
                width="300"
              ></v-img>
            </figure>
          </div>
          <br>
          <v-card-title primary-title style="padding-right: 60px; text-align: center; padding-left: 50px">
            <div>
              <h3 class="headline mb-0 item-content">
                {{ items.name }}
              </h3>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-row>
    <br><br>
    <div>
      <v-row>
        <v-flex
          v-for="items in teamImages"
          :key="items.img"
          class="image-list"
          lg12
          md12
          sm12
          style="z-index: 0"
          xl12
          xs12
        >
          <v-img :lazy-src="items.img" :src="items.img"></v-img>
        </v-flex>
      </v-row>
      <br><br><br>
    </div>
  </div>
</template>

<script>
export default {
  name: "team",
  data() {
    return {
      reqData: "",
    };
  },
  created() {
    this.getItems();
    this.$store.commit("setHeader", true);
    this.$store.commit("setImage", this.reqData.titleImg);
    this.$store.commit("setTitle", this.reqData.title);
    this.$store.commit("setSmallText", false)
    this.$store.commit("setLogoImage",false)
    this.$store.commit("setDescription", this.reqData.description)
  },
  methods: {
    getItems() {
      //  Dummy data
      this.reqData = {
        id: 1,
        title: "Unser Team",
        description: "",
        titleImg:
          // "/_nuxt/static/team.jpg"
          require("@/static/team.jpg")
      };
      this.teamData = [
        {
          id: 1,
          name: "Kai Mundel",
          image: "https://mundelarchitekten.de/wp-content/uploads/2021/03/Kai_Hochformat.jpg"
        },
        {
          id: 2,
          name: "Tina Schaller",
          image: "https://mundelarchitekten.de/wp-content/uploads/2021/03/Kai_Hochformat.jpg"
        },
        {
          id: 3,
          name: "Simone Wurm",
          image: "https://mundelarchitekten.de/wp-content/uploads/2021/03/Kai_Hochformat.jpg"
        },
        {
          id: 4,
          name: "Mahsa Chaharbaghi Sichani",
          image: "https://mundelarchitekten.de/wp-content/uploads/2021/03/Kai_Hochformat.jpg"
        },
        {
          id: 5,
          name: "Fabian Dej",
          image: "https://mundelarchitekten.de/wp-content/uploads/2021/03/Kai_Hochformat.jpg"
        },
        {
          id: 6,
          name: "Huyen Tran Tran",
          image: "https://mundelarchitekten.de/wp-content/uploads/2021/03/Kai_Hochformat.jpg"
        }
      ]
      this.teamImages = [
        {img: "https://mundelarchitekten.de/wp-content/uploads/2018/11/B%C3%BCro.jpg"},
        {img: "https://mundelarchitekten.de/wp-content/uploads/2018/12/B%C3%BCro3.jpg"}
      ]
    },
  },
};
</script>

<style scoped>
.index-container {
  padding-left: 20%;
  width: 80%;
  max-height: 100%;
}

.head h2 {
  font-size: 30px;
}

.head {
  margin-top: 18px;
  letter-spacing: 5px;
}

.item-content {
  font-size: 22px;
  line-height: 30px;
  font-weight: 700;
  margin: 20px 0;
}

.image-list {
  padding-top: 3rem;
}

</style>

