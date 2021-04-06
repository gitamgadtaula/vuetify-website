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
    <div>
<!--      <v-row>-->
<!--        <v-flex-->
<!--          v-for="items in names"-->
<!--          xs12-->
<!--          sm6-->
<!--          md4-->
<!--          lg4-->
<!--          xl4-->
<!--          class="image-ls"-->
<!--          :key="items.id"-->
<!--        >-->
<!--          <router-link :to="items.goto">-->
<!--            <v-card elevation="0" tile>-->
<!--              <div class="image-con">-->
<!--                <figure>-->
<!--                  <v-img-->
<!--                    style="vertical-align: center"-->
<!--                    :src="items.image"-->
<!--                    :lazy-src="items.image"-->
<!--                    max-height="500"-->
<!--                    max-width="500"-->
<!--                  ></v-img>-->
<!--                </figure>-->
<!--              </div>-->
<!--            </v-card>-->
<!--          </router-link>-->
<!--        </v-flex>-->
<!--      </v-row>-->
    </div>
  </div>

</template>

<script>
export default {
  name: "kunden",
  data(){
    return{
      names:[
        {id:1,name:"Seite besuchen",image:"https://mundelarchitekten.de/wp-content/uploads/2018/08/brockmannundknoedler-logo.png",goto:"https://mundelarchitekten.de/kunden/#"},
        {id:2,name:"Seite besuchen",image:"https://mundelarchitekten.de/wp-content/uploads/2018/08/brockmannundknoedler-logo.png",goto: "https://mundelarchitekten.de/kunden/#"},
        {id:3,name:"Seite besuchen",image:"https://mundelarchitekten.de/wp-content/uploads/2018/08/brockmannundknoedler-logo.png",goto: "https://mundelarchitekten.de/kunden/#"},
    ]}
  },
}
</script>

<style scoped>
.glow-text {
  text-shadow: 2px 2px 0 #a5a8a8,
  2px -2px 0 #A5A8A8, -2px 2px 0 #A5A8A8, -2px -2px 0 #A5A8A8, 2px 0px 0 #A5A8A8,
  0px 2px 0 #A5A8A8, -2px 0px 0 #A5A8A8, 0px -2px 0 #A5A8A8, 2px 2px 2px rgba(206,206,206,0.01);
  color: #FFFFFF;
  background: transparent;
  font-size: 150px;
  letter-spacing: 9px;
  z-index: 0;
  opacity: 0.5;
}
.glow-container{
  padding-top: 10vh;
  text-align: center;
  opacity: 0.5;
  z-index: 0;
}
.heading{
  font-size: 40px;
  font-weight: 700;
  margin-top: -10vh;
}
.image-con figure {
  position: relative;
  opacity: 1;
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: #7e7d7d;
  }
.image-con figure::after {
  display: block;
  content: "";

}
.image-con figure {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  opacity: 1;

}
.image-con figure:hover {
  background: #000000;
  /*-webkit-transform: scale(1.3);*/
  /*transform: scale(1.3);*/
}
img{
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  padding-top: 50%;
}
</style>
