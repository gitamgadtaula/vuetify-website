<template>
  <div class="container">
    <image_list_flex :list-data="projectItems"
                     :to-value="'projekte'"/>
  </div>
</template>

<script>
import image_list_flex from "@/components/image_list_flex";
export default {
  name: "Project",
  components:{image_list_flex},
  props: ["fromIndex"],
  data() {
    return {
      projectItems: [],
    };
  },
  methods: {
    getLists() {
      this.$axios.get("/projekte").then((response) => {
        this.projectItems = response.data;
      });
    },
  },
  created() {
    this.getLists();
    this.$store.commit("setHeaderFontColor",true)
    if (!this.fromIndex) {
      this.$store.commit("setHeader", false);
    } else {
      this.$store.commit("setHeader", true);
    }
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
  word-break: break-word;
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
</style>
<style>
.image-container {
  position: relative;
  opacity: 1;
  width: 100%;
  height: 250px;
  background: #000000;
  overflow: hidden;
}
.image-container figure::after {
  display: block;
  content: "";
  /* 4:3 aspect ratio */
  padding-bottom: 75%;
}
.image-container figure {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  opacity: 1;
  margin-top: 40px;
}
.image-container figure:hover {
  opacity: 0.7;
  margin-top: 0;
  /*-webkit-transform: scale(1.3);*/
  /*transform: scale(1.3);*/
}

</style>
