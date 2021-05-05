<template>
  <div class="container">
    <image_list_flex :list-data="developmentItems"
                     :to-value="'projektentwicklung'"/>
  </div>
</template>

<script>
import image_list_flex from "@/components/image_list_flex";
export default {
  name: "Development",
  components:{image_list_flex},
  data() {
    return {
      developmentItems: [],
    };
  },
  methods: {
    getLists() {
      this.$axios.get("/projektentwicklung").then((response) => {
        console.log(response.data);
        this.developmentItems = response.data;
      });
    },
  },
  created() {
    this.getLists();
    this.$store.commit("setHeader", false);
    this.$store.commit("setHeaderFontColor",true)

  },
};
</script>

<style scoped>
.image-list {
  padding: 20px 30px 10px 20px;
}
.item-content {
  font-size: 16px;
  /*font-family: Roboto, sans-serif;*/
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
.image-card {
  background-position: center;
  background-size: cover;
}
</style>
