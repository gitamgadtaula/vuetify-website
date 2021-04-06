<template>
  <v-app>
    <div class="admin-container">
      <v-card elevation="2" class="mx-auto" max-width="500" color="#26c6da">
        <v-card-title>Admin Panel </v-card-title>
        <v-list>
          <v-list-item-group>
            <v-list-item v-for="(item, i) in items" :key="i">
              <nuxt-link :to="'admin/' + item.link">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </nuxt-link>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "mdi-domain",
          text: "Projekte",
          link: "projekte",
        },
        {
          icon: "mdi-domain",
          text: "Projektentwicklung",
          link: "projektentwicklung",
        },
        {
          icon: " mdi-domain",
          text: "Salons",
          link: "salons",
        },
      ],
    };
  },
};
</script>

<style>
.v-application a {
  color: unset;
  display: -webkit-box;
  text-decoration: none;
}
</style>