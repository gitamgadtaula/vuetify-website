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
    this.$store.commit("setLogoImage",true)
    this.$store.commit("setDescription", this.reqData.description)
    this.$store.commit("setHeaderFontColor",false)

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
          image: require('@/static/teams/kai_mundel.jpg')
        },
        {
          id: 2,
          name: "Tina Schaller",
          image: require('@/static/teams/tina_schaller.jpg')
        },
        {
          id: 3,
          name: "Simone Wurm",
          image: require('@/static/teams/simone_wurm.jpg')
        },
        {
          id: 4,
          name: "Mahsa Chaharbaghi Sichani",
          image: require('@/static/teams/mahsa_c_s.jpg')
        },
        {
          id: 5,
          name: "Fabian Dej",
          image: require('@/static/teams/fabian_dej.jpg')
        },
        {
          id: 6,
          name: "Huyen Tran Tran",
          image: require('@/static/teams/tran_tran.jpg')
        }
      ]
      this.teamImages = [
        {img: require('@/static/teams/teams1.jpg')},
        {img: require('@/static/teams/teams2.jpg')}
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

