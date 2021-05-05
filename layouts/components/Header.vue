<template>
  <div style="padding-top: 0">
    <v-layout v-if="showParallex" class="header-layout">
      <v-row><v-col>
        <div class="parallex-wrap">
          <v-parallax
            style="z-index: 0"
            :src="getImage"
            aspect-ratio="1"
            jumbotron
            class="parallax-class"
          >
            <span v-if="setSmallText" class="small-text-header">{{
                getDescription
              }}</span>
            <h1 class="font-weight-thick">{{ getTitle }}</h1>
          </v-parallax>
          <v-app-bar
            :class="((scrollPosition > 100) && getHeaderColor) ? 'app_bar_scrolled_white' :((scrollPosition > 100) && !getHeaderColor) ? 'app_bar_scrolled_black':'app-bar'"
              elevation="0"
              fixed
              text
            >
              <v-app-bar-title>
                <nuxt-link to="/">
                <v-img
                  v-if="getLogoImage && getHeaderColor"
                  :src="require('@/static/title-image-black.png')"
                />
                <v-img
                  v-if="getLogoImage && !getHeaderColor"
                  :src="require('@/static/title-image-white-header.png')"
                />
                </nuxt-link>
              </v-app-bar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                  v-for="item in menuItems"
                  :key="item.id"
                  :to="item.path"
                  class="plain--btn--2"
                  :class="getHeaderColor?'on_id_black':'on_id_white'"
                  text
                  :ripple="false"
                >
                  <v-menu
                    v-if="item.title === 'UBER UNS'"
                    bottom
                    left
                    open-on-hover
                    offset-y
                    style="z-index: 500"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        text
                        v-bind="attrs"
                        v-on="on"
                        class="plain--btn plain--btn--2"
                        :class="getHeaderColor?'on_id_black':'on_id_white'"
                        elevation="0"
                        :ripple="false"
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
              <v-menu class="hidden-md-and-up" bottom offset-y left style="z-index: 500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon color="black" v-bind="attrs" v-on="on">
                    <v-app-bar-nav-icon class="hidden-md-and-up">></v-app-bar-nav-icon>
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
      </v-col></v-row>
    </v-layout>
    <v-app-bar
      v-else
      :class="((scrollPosition > 100) && getHeaderColor) ? 'app_bar_scrolled_white' :((scrollPosition > 100) && !getHeaderColor) ? 'app_bar_scrolled_black':'app-bar'"
      color="white"
      elevation="0"
      fixed
      style="z-index: 99"
      text
    >
      <v-app-bar-title>
        <v-img
          :src="require('@/static/title-image-black.png')"
        />
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in menuItems"
               :key="item.id"
               :to="item.path"
               text
               :ripple="false"
               class="plain--btn--2"
               :class="getHeaderColor?'on_id_black':'on_id_white'">
          <v-menu v-if="item.title === 'UBER UNS'" bottom left
                  open-on-hover
                  offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                elevation="0"
                large
                block
                class="plain--btn plain--btn--2"
                :class="getHeaderColor?'on_id_black':'on_id_white'"
                :ripple="false"
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
                    :ripple="false"
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
          <v-btn icon left color="black" v-bind="attrs" v-on="on" :ripple="false">
            <v-icon class="hidden-md-and-up">mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list style="background-color: white">
          <v-list-item v-for="item in menuListItems" :key="item.id">
            <v-list-item-title>
              <v-btn
                :to="item.path"
                :ripple="false"
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
    getLogoImage(){
      return this.$store.state.logoImage
    },
    getHeaderColor(){
      return this.$store.state.headerColor
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style scoped>

.parallax-mirror,#vurtUnderlay{
  height:auto!important;
  width:100%!important;
  padding:30% 0 0;
}
.parallax-mirror img{width:100%!important;height:100%!important}

.app-bar {
  background: rgba(255,255,255, 0) !important;
  color: white;
  z-index: 500;
}

.app_bar_scrolled_black {
  background-color: black !important;
  opacity: 100%;
  transition: background-color 200ms linear;
  color: white !important;
}
.app_bar_scrolled_white {
  background-color: white !important;
  opacity: 100%;
  transition: background-color 200ms linear;
  color: white !important;
}

.app_bar_scrolled_black .on_id_black {
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
  font-weight: 500 !important;
}
.on_id_white {
  color: white !important;
  font-weight: 500 !important;
}
.on_id_black {
  color: black !important;
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
  background: rgba(255,255,255, 0) !important;
}
.parallax-class {
  width: 100%;
  height: 100vh !important;
  z-index: 100;
  position: relative;
  background-size: contain;
  background: transparent no-repeat center center;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

@media only screen and (max-width: 800px) {
  .parallax-class {
    height: 80vh !important;
  }
}
.plain--btn:hover:before {
  background-color: transparent;
}.plain--btn:hover:after {
  background-color: transparent;
}
.plain--btn{
  height: 60px !important;
  padding: 0 !important;
  font-family: "Courier New", sans-serif!important;
  font-weight: 600;
  font-size: 16px !important;
}

.plain--btn--2:focus,
.plain--btn--2:hover{
  /*color:black !important;*/
  font-weight: 800 !important;

}
.plain--btn--2:focus:after,
.plain--btn--2:hover:after{
  /*color:black !important;*/
  font-weight: 800 !important;
}

.plain--btn--2{
  font-family: "Courier New", sans-serif!important;
  font-weight: 600 !important;
  font-size: 16px !important;
  letter-spacing: 2px;
  line-height: 18px;
  text-transform: uppercase;
  transition: opacity .3s ease-in;
  opacity: 1 !important;
}
.v-toolbar__content{
  opacity: 1 !important;
}
</style>
<style>
.v-parallax__image{
  min-width: 100%;
  max-height: 110%;
  display: none;
  transform: translate(-50%) !important;
  will-change: transform;
}
</style>
