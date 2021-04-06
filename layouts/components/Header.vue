<template>
  <div style="padding-top: 0">
    <v-layout v-if="showParallex" class="header-layout">
      <v-flex>
        <div class="parallex-wrap">
          <v-parallax
            style="z-index: 100"
            :src="getImage"
            jumbotron
            class="parallax-class"
          >
            <v-app-bar
              :class="{ app_bar_scrolled: scrollPosition > 200 }"
              class="app-bar"
              elevation="0"
              fixed
              text
            >
              <v-app-bar-title>
                <v-img
                  v-if="setSmallText"
                  src="https://mundelarchitekten.de/wp-content/uploads/2018/06/Logo_ohne_hintergrund_lang_2-300x14.png"
                />
              </v-app-bar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                  v-for="item in menuItems"
                  :key="item.id"
                  :to="item.path"
                  class="on-id"
                  text
                >
                  <v-menu
                    v-if="item.title === 'UBER UNS'"
                    bottom
                    left
                    style="z-index: 500"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        class="on-id"
                        elevation="0"
                        style="
                          text-decoration: none;
                          background-color: transparent;
                        "
                      >
                        {{ item.title }}
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                        v-for="(additem, index) in item.items"
                        :key="index"
                      >
                        <v-list-item-title>
                          <v-btn
                            :to="additem.path"
                            left
                            style="width: 100%; background-color: white"
                          >
                            {{ additem.title }}</v-btn
                          >
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                  <div v-else>{{ item.title }}</div>
                </v-btn>
              </v-toolbar-items>
              <v-menu class="hidden-md-and-up" bottom left style="z-index: 500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon color="black" v-bind="attrs" v-on="on">
                    <v-app-bar-nav-icon class="hidden-md-and-up"></v-app-bar-nav-icon>
                  </v-btn>
                </template>
                <v-list style="background-color: white">
                  <v-list-item v-for="item in menuListItems" :key="item.id">
                    <v-list-item-title>
                      <v-btn
                        :to="item.path"
                        style="width: 100%; background-color: white"
                        >{{ item.title }}</v-btn
                      >
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-app-bar>
            <span v-if="setSmallText" class="small-text-header">{{
              getDescription
            }}</span>
            <h1 class="font-weight-thick">{{ getTitle }}</h1>
          </v-parallax>
        </div>
      </v-flex>
    </v-layout>
    <v-app-bar
      v-else
      :class="{ app_bar_scrolled_else: scrollPosition < 200 }"
      color="white"
      elevation="0"
      fixed
      style="z-index: 99"
      text
    >
      <v-app-bar-title>
        <v-img
          src="https://mundelarchitekten.de/wp-content/uploads/2018/06/Logo_ohne_hintergrund_lang_2-300x14.png"
        />
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in menuItems" :key="item.id" :to="item.path" text>
          <v-menu v-if="item.title === 'UBER UNS'" bottom left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                elevation="0"
                style="background-color: transparent"
              >
                {{ item.title }}
              </v-btn>
            </template>
            <v-list style="background-color: white">
              <v-list-item v-for="(additem,index) in item.items" :key="index">
                <v-list-item-title>
                  <v-btn
                    :to="additem.path"
                    style="width: 100%; background-color: white"
                    >{{ additem.title }}</v-btn
                  >
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <div v-else>{{ item.title }}</div>
        </v-btn>
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up" left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon left color="black" v-bind="attrs" v-on="on">
            <v-icon class="hidden-md-and-up">mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list style="background-color: white">
          <v-list-item v-for="item in menuListItems" :key="item.id">
            <v-list-item-title>
              <v-btn
                :to="item.path"
                style="width: 100%; background-color: white"
                >{{ item.title }}</v-btn
              >
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    showSmallText: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      drawer: false,
      dialog: false,
      scrollPosition: null,
      menuItems: [
        { id: 1, title: "HOME", path: "/" },
        { id: 2, title: "PROJEKTE", path: "/projekte" },
        { id: 3, title: "PROJEKTENTWICKLUNG", path: "/projektentwicklung" },
        { id: 4, title: "SALONS", path: "/salons" },
        {
          id: 5,
          title: "UBER UNS",
          items: [
            { id: 1, title: "LEISTUNGEN", path: "/leistungen" },
            { id: 2, title: "PHILOSOPHIE", path: "/philosophie" },
            { id: 3, title: "TEAM", path: "/team" },
            { id: 4, title: "KUNDEN", path: "/kunden" },
            { id: 5, title: "IMPRESSUM", path: "/impressum" },
          ],
        },
        { id: 6, title: "KONTAKT", path: "/kontakt" },
      ],
      menuListItems: [
        { id: 1, title: "HOME", path: "/" },
        { id: 2, title: "PROJEKTE", path: "/projekte" },
        { id: 3, title: "PROJEKTENTWICKLUNG", path: "/projektentwicklung" },
        { id: 4, title: "SALONS", path: "/salons" },
        { id: 5, title: "UBER UNS" },
        { id: "a", title: "LEISTUNGEN", path: "/leistungen" },
        { id: "b", title: "PHILOSOPHIE", path: "/philosophie" },
        { id: "c", title: "TEAM", path: "/team" },
        { id: "d", title: "KUNDEN", path: "/kunden" },
        { id: "e", title: "IMPRESSUM", path: "/impressum" },
        { id: 6, title: "KONTAKT", path: "/kontakt" },
      ],
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  computed: {
    showParallex() {
      return this.$store.state.headerStyle;
    },
    getTitle() {
      return this.$store.state.titleSrc;
    },
    getImage() {
      return this.$store.state.imageSrc;
    },
    setSmallText() {
      return this.$store.state.smallText;
    },
    getDescription() {
      return this.$store.state.description;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style scoped>
.v-parallax__image {
  transform: translate(-50%, 200px) !important;
  vertical-align: middle !important;
}

.parallax-mirror {
  overflow: no-display !important;
}

.app-bar {
  opacity: 70%;
  position: fixed;
}

.app_bar_scrolled {
  background-color: black !important;
  opacity: 100%;
  transition: background-color 200ms linear;
  color: white !important;
}

.app_bar_scrolled .on-id {
  color: white !important;
}

.fixed-tabs-bar {
  position: -webkit-sticky;
  position: sticky;
  top: 4rem;
  z-index: 2;
}

.font-weight-thick {
  margin-top: -20px;
  font-size: 54px;
  line-height: 56px;
  font-weight: 700;
  text-align: -webkit-center;
  font-family: "Courier New", serif !important;
}

.on-id {
  color: black;
  font-weight: 500 !important;
}

.small-text-header {
  font-weight: 300;
  letter-spacing: 4.5px;
  font-style: normal;
  margin-top: 0;
  margin-bottom: 50px;
  color: #fff;
  font-family: "Courier New", serif !important;
  font-size: 14px;
  line-height: 18px;
  text-align: -webkit-center;
}

.header-layout {
  padding-bottom: 8vh;
}

.app_bar_scrolled_else {
  opacity: 0.5;
}
.parallax-class {
  width: 100%;
  height: 800px !important;
  z-index: 1000;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
@media only screen and (max-width: 800px) {
  .parallax-class {
    height: 600px !important;
  }
}
</style>
