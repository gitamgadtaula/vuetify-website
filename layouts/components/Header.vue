<template>
  <nav>
    <v-parallax v-if="showParallex"
      dark
      fixed
      :src="getImage"
      style="width: 100%;height: 100vh;z-index: 1000">
    <v-app-bar text fixed style="opacity: 70%; position:fixed; z-index:1000;">
      <v-app-bar-title><v-img
      src="https://mundelarchitekten.de/wp-content/uploads/2018/06/Logo_ohne_hintergrund_lang_2-300x14.png"
      /></v-app-bar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in menuItems"
               :key="item.id"
               :to="item.path"
               text
               class="on-id">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="item in menuItems" :key="item.id">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.title }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-app-bar>
    <h1 class="font-weight-thick">{{getTitle}}</h1>
    </v-parallax>
    <v-app-bar v-else
      color="white" text fixed style="z-index: 99">
      <v-app-bar-title><v-img
        src="https://mundelarchitekten.de/wp-content/uploads/2018/06/Logo_ohne_hintergrund_lang_2-300x14.png"
      /></v-app-bar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in menuItems"
               :key="item.id"
               :to="item.path"
               text>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="item in menuItems" :key="item.id">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.title }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-app-bar>

  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: false,
      dialog: false,
      menuItems: [
        {id: 1, title: 'HOME', path: '/'},
        {id: 2, title: 'PROJEKTE', path: '/projekte'},
        {id: 3, title: 'PROJEKTENTWICKLUNG', path: '/projektentwicklung'},
        {id: 4, title: 'SALONS', path: '/salons'},
        {id: 5, title: 'UBER UNS', path: '/uberuns'},
        {id: 6, title: 'KONTAKT', path: '/kontakt'},
      ]
    }
  },
  methods: {
  },
  computed:{
    showParallex() {
      return this.$store.state.headerStyle
    },
    getTitle(){
      return this.$store.state.titleSrc
    },
    getImage(){
      return this.$store.state.imageSrc
    }
  },
}
</script>

<style scoped>
.fixed-tabs-bar {
      position: -webkit-sticky;
      position: sticky;
      top: 4rem;
      z-index: 2;
  }
.font-weight-thick{
  margin-top: -20px;
  font-size: 54px;
  line-height: 56px;
  font-weight: 700;
  text-align: -webkit-center;
  font-family: 'Courier New',serif !important;
}
.on-id{
  color: black !important;
}
</style>
