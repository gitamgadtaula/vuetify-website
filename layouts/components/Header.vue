<template>
  <nav style="padding-bottom: 20px">
    <v-toolbar color="white" text>
      <v-toolbar-title><v-img
      src="https://mundelarchitekten.de/wp-content/uploads/2018/06/Logo_ohne_hintergrund_lang_2-300x14.png"
      /></v-toolbar-title>
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
    </v-toolbar>
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
        {id: 3, title: 'PROJEKTENTWICKLUNG', path: '/projektetwicklung'},
        {id: 4, title: 'SALONS', path: '/salons'},
        {id: 5, title: 'UBER UNS', path: '/#'},
        {id: 6, title: 'KONTAKT', path: '/#'},
      ]
    }
  },
  methods: {
  },
}
</script>

<style scoped>

</style>
