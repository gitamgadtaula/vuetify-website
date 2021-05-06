<template>
  <div class="container">
    <div class="glow-container">
      <div class="glow-text">
        Kunden
      </div>
    </div>
    <p class="heading" style="z-index: 100">
      Mit großartigen Menschen - Einmalige Projekte
    </p>
    <br><br>
    <div>
      <v-row>
        <v-flex
          v-for="items in names"
          :key="items.id"
          class="image-list"
          lg4
          md4
          sm6
          xl4
          xs12
        >
            <v-card elevation="0" tile>
              <div class="container-inside">
                <div class="container-image">
                  <v-img :src="items.image"
                         class="image">
                  </v-img>
                </div>
                <div class="overlay">
                  <router-link :to='items.goto'>
                  <div class="text">{{ items.name }}
                  <span class="arrow">
                    <span class="line"></span>
                    <span class="point"></span>
                  </span>
                  </div>
                  </router-link>
                </div>
              </div>
            </v-card>
        </v-flex>
      </v-row>
    </div>

    <!--    <div class="container-inside">-->
    <!--      <v-img src="https://mundelarchitekten.de/wp-content/uploads/2018/06/WW_Logo_Start.jpg"-->
    <!--             alt="Avatar" class="image">-->
    <!--      </v-img>-->
    <!--      <div class="overlay">-->
    <!--        <div class="text">Hello World</div>-->
    <!--      </div>-->
    <!--    </div>-->


  </div>

</template>

<script>
export default {
  name: "kunden",
  data() {
    return {
      names: [
        {
          id: 1, name: "Dresdner Wohnweise",
          image: require("@/static/organizations/1.jpg"),
          goto: "#"
        },
        {
          id: 2, name: "Seite besuchen",
          image: require("@/static/organizations/2.png"),
          goto: "#"
        },
        {
          id: 3, name: "Seite besuchen",
          image: require("@/static/organizations/3.png"),
          goto: "#"
        },
        {
          id: 4, name: "Seite besuchen",
          image: require("@/static/organizations/4.png"),
          goto: "#"
        },
        {
          id: 5, name: "Seite besuchen",
          image: require("@/static/organizations/5.jpg"),
          goto: "#"
        },
        {
          id: 6, name: "Seite besuchen",
          image: require("@/static/organizations/6.png"),
          goto: "#"
        },
        {
          id: 7, name: "Seite besuchen",
          image: require("@/static/organizations/7.png"),
          goto: "#"
        },
        {
          id: 8, name: "Seite besuchen",
          image: require("@/static/organizations/8.png"),
          goto: "#"
        },
        {
          id: 9, name: "Seite besuchen",
          image: require("@/static/organizations/9.png"),
          goto: "#"
        },
        {
          id: 10, name: "Seite besuchen",
          image: require("@/static/organizations/10.png"),
          goto: "#"
        },
        {
          id: 11, name: "Seite besuchen",
          image: require("@/static/organizations/11.png"),
          goto: "#"
        },
        {
          id: 12, name: "Seite besuchen",
          image: require("@/static/organizations/12.png"),
          goto: "#"
        },
        {
          id: 13, name: "Seite besuchen",
          image: require("@/static/organizations/13.png"),
          goto: "#"
        },
        {
          id: 14, name: "Seite besuchen",
          image: require("@/static/organizations/14.jpg"),
          goto: "#"
        },
        {
          id: 15, name: "Seite besuchen",
          image: require("@/static/organizations/15.png"),
          goto: "#"
        },
        {
          id: 16, name: "Seite besuchen",
          image: require("@/static/organizations/16.jpg"),
          goto: "#"
        },
        {
          id: 17, name: "Seite besuchen",
          image: require("@/static/organizations/17.png"),
          goto: "#"
        },
        {
          id: 18, name: "Seite besuchen",
          image: require("@/static/organizations/18.jpg"),
          goto: "#"
        },
        {
          id: 19, name: "Seite besuchen",
          image: require("@/static/organizations/19.jpg"),
          goto: "#"
        },
        {
          id: 20, name: "Seite besuchen",
          image: require("@/static/organizations/20.png"),
          goto: "#"
        },
      ]
    }
  },
  created() {
    this.$store.commit("setHeader", false);
    this.$store.commit("setSmallText", false)
    this.$store.commit("setLogoImage", false)
    this.$store.commit("setHeaderFontColor", true)


  },
  head() {
    return {
      title: 'Kunden',
    }
  }
}
</script>

<style scoped>
.container {
  width: 80%;
  max-height: 100%;
  padding-top: 3rem;
}

.image-list {
  padding: 15px;
}

.container-inside {
  min-height: auto;
  position: relative;
  width: 100%;
  background-color: #dcd9d9;
}

.image {
  border: 0;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #000000;
}

.container-inside:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  top: 50%;
  left: 50%;
  position: relative;
  display: inline-block;
  font-family: Roboto,sans-serif;
  font-size: 11px;
  line-height: 30px;
  letter-spacing: 2px;
  font-weight: 500;
  text-decoration: none;
  padding-right: 50px;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
.arrow {
  width:30px;
  position: relative;
  display: inline-block;
  transition: right .3s ease-in;

}
.line {
  margin-top:2px;
  width: 20px;
  background: #ffffff;
  height: 1px;
  float: right;
}
.point {
  width: 5px;
  height: 5px;
  float: right;
  box-shadow: -1px 1px 0 #ffffff;
  transform: rotate(-135deg);
  margin-right:-20px;
}
.arrow:hover{
  transition: right;
}
.container-image {
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 0px;
  background-color: #f2f2f2;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;

}

.glow-text {
  text-shadow: 2px 2px 0 #a5a8a8,
  2px -2px 0 #A5A8A8, -2px 2px 0 #A5A8A8, -2px -2px 0 #A5A8A8, 2px 0px 0 #A5A8A8,
  0px 2px 0 #A5A8A8, -2px 0px 0 #A5A8A8, 0px -2px 0 #A5A8A8, 2px 2px 2px rgba(206, 206, 206, 0.01);
  color: #FFFFFF;
  background: transparent;
  font-size: 150px;
  letter-spacing: 9px;
  z-index: 0;
  opacity: 0.5;
}

.glow-container {
  padding-top: 6vh;
  text-align: center;
  opacity: 0.6;
  z-index: 0;
}

.heading {
  font-size: 40px;
  font-weight: 700;
  margin-top: -10vh;
  text-align: -webkit-center;
}

</style>
