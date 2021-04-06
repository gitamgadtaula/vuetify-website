<template>
  <nav style="padding-top: 0">
    <v-layout v-if="showParallex" class="header-layout">
      <v-flex>
        <v-parallax
          :src="getImage"
          dark
          style="width: 100%;height:100vh;z-index: 1000;">
          <v-app-bar :class="{app_bar_scrolled: scrollPosition > 200}" class="app-bar"
                     elevation="0"
                     fixed
                     text>
            <v-app-bar-title>
              <v-img v-if="setSmallText"
                     src="https://mundelarchitekten.de/wp-content/uploads/2018/06/Logo_ohne_hintergrund_lang_2-300x14.png"
              />
            </v-app-bar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
              <v-btn v-for="item in menuItems"
                     :key="item.id"
                     :to="item.path"
                     class="on-id"
                     text>
                {{ item.title }}
              </v-btn>
            </v-toolbar-items>
            <v-menu class="hidden-md-and-up">
              <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
              <v-list>
                <v-list-item v-for="item in menuItems" :key="item.id">
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-app-bar>
          <span v-if="setSmallText"
                class="small-text-header">{{ getDescription }}</span>
          <h1 class="font-weight-thick">{{ getTitle }}</h1>
        </v-parallax>
      </v-flex>
    </v-layout>
    <v-app-bar
      v-else
      :class="{app_bar_scrolled_else: scrollPosition < 200}"
      color="white" elevation="0" fixed
      style="z-index: 99"
      text>
      <v-app-bar-title>
        <v-img
          src="https://mundelarchitekten.de/wp-content/uploads/2018/06/Logo_ohne_hintergrund_lang_2-300x14.png"
        />
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in menuItems"
               :key="item.id"
               :to="item.path"
               text
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-item v-for="item in menuItems" :key="item.id">
            <v-list-item-content>
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

  </nav>
</template>

<script>
export default {
  name: "Header",
  props: {
    showSmallText: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      drawer: false,
      dialog: false,
      scrollPosition: null,
      menuItems: [
        {id: 1, title: 'HOME', path: '/'},
        {id: 2, title: 'PROJEKTE', path: '/projekte'},
        {id: 3, title: 'PROJEKTENTWICKLUNG', path: '/projektentwicklung'},
        {id: 4, title: 'SALONS', path: '/salons'},
        {
          id: 5, title: 'UBER UNS', items: [
            {id: 1, title: 'LEISTUNGEN', path: '/leistungen'},
            {id: 2, title: 'PHILOSOPHIE', path: '/philosophie'},
            {id: 3, title: 'TEAM', path: '/team'},
            {id: 4, title: 'KUNDEN', path: '/kunden'},
            {id: 5, title: 'IMPRESSUM', path: '/impressum'},
          ]
        },
        {id: 6, title: 'KONTAKT', path: '/kontakt'},
      ]
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
  },
  computed: {
    showParallex() {
      return this.$store.state.headerStyle
    },
    getTitle() {
      return this.$store.state.titleSrc
    },
    getImage() {
      return this.$store.state.imageSrc
    },
    setSmallText() {
      return this.$store.state.smallText
    },
    getDescription() {
      return this.$store.state.description
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
}
</script>

<style scoped>
.v-parallax__image {
  transform: none !important;
  width: 100% !important;
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
  font-family: 'Courier New', serif !important;
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
  font-family: 'Courier New', serif !important;
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

</style>
