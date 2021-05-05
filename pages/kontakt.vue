<template>
<div class="container">
  <v-row>
  <div class="information">
    <p>Wir sind ein seit Jahren erfolgreich am Markt etabliertes Architektur- und Designbüro. Immer auf der Suche nach neuen, spannenden und individuellen Kunden, mit denen wir gemeinsam Projekte realisieren.</p>
    <p>Kunden die uns zum ersten Mal erleben möchten, buchen uns für einen Architektur- und/oder Designworkshop.</p>
    <p>Wir begleiten Sie in Ihrem neuen „Lebensraum Haus“ oder in Ihrem neuen „Lebensraum Arbeitsstätte“. Dabei sondieren, beantworten und strukturieren wir all Ihre Fragen, die Sie in diesem Zusammenhang als Unternehmer oder Privatperson haben.</p>
    <p>Der Workshop verpflichtet Sie zu keinerlei weiterer Zusammenarbeit mit uns.</p>
    <p>Er dient der gegenseitigen freien Sondierung und Entscheidungsfindung und ist unserer Erfahrung nach unabdingbar, für einen gemeinsamen Realisierungsprozess, von der ersten Skizze bis hin zum fertig gebauten Objekt. Ihrem Objekt.</p>
    <p>Mit den für Sie aus dem Workshop gewonnenen Informationen und ersten Möglichkeiten der Gestaltung und Nutzung, sind Sie bestens vorbereitet, Ihr neues Projekt zu beginnen.</p>
    <p>Kontaktieren Sie uns einfach per Mail unter: km@mundelarchitketen.de.</p>
    <p>Wir freuen uns auf Sie.</p>
  </div>
  </v-row>
  <br>
  <v-row>
    <div>
    <div class="heading">
      <div class="subtitle"> STANDORTE</div>
      <h2 class="title">Unsere Büros</h2>
    </div>
    <div class="add-one add-block">
      <span class="separator"></span>
      <h4 class="add-title">Büro 1</h4>
      <p>Postfach 1362</p>
      <p>71668 Marbach</p>
      <br>
    </div>
    <div class="add-two add-block">
      <span class="separator"></span>
      <h4 class="add-title">Büro 2</h4>
      <p>Königsbrücker Straße 99</p>
      <p>01099 Dresden</p>
      <br>
    </div>
  </div>
  </v-row>
  <br>
</div>
</template>

<script>
export default {
  name: "kontakt",
  data() {
    return {
      reqData: "",
    };
  },
  created() {
    this.getItems();
    this.$store.commit("setHeader", true);
    this.$store.commit("setImage", this.reqData.titleImg);
    this.$store.commit("setTitle", this.reqData.title);
    this.$store.commit("setSmallText",false)
    this.$store.commit("setLogoImage",true)
    this.$store.commit("setDescription",this.reqData.description)
    this.$store.commit("setHeaderFontColor",false)

  },
  methods: {
    getItems() {
      //  Dummy data
      this.reqData = {
        id: 1,
        title: "Der Beginn eines gemeinsamen \n Projektes",
        description:"",
        titleImg:
          require("@/static/kontakt.png")
          // "/_nuxt/static/kontakt.png"
        // "https://mundelarchitekten.de/wp-content/uploads/2018/06/kontakt.png"
      };
    },
  },
}
</script>

<style scoped>
div{
  display: block;
}
p{
  font-family: 'Courire New',monospace !important;
  font-size: 16px;
  line-height: 32px;
  font-weight: 400;
  color: #7e7d7d;
  margin: 0 0 10px;
  display: block;
}
.container {
  width: 80%;
  max-height: 100%;
  padding-top: 3rem;
}
.heading{
  padding:30px 0;
  text-align: left;
  display: block;
}
.heading .subtitle{
  font-family: Roboto,sans-serif;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 4.5px;
  font-weight: 300;
  color: black;
}
.heading .title{
  margin-top: 18px;
  letter-spacing: .9px;
}
.heading h2{
  font-family: 'Courier New', monospace !important;
  font-weight: 700;
  color: black ;
  display: block;
  font-size: 40px !important;
  line-height: 44px;
}
.add-block{
  position: relative;
}
.separator{
  display: inline-block;
  width: 70px;
  height: 1px;
  background-color: #111;
  margin-bottom: 24px;
  -webkit-transition: background-color .3s ease-in;
  -o-transition: background-color .3s ease-in;
  transition: background-color .3s ease-in;
}
.add-title{
  font-size: 11px;
  line-height: 18px;
  letter-spacing: 2.2px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 23px;
  -webkit-transition: color .3s ease-in;
  -o-transition: color .3s ease-in;
  transition: color .3s ease-in;
}
.add-block p{
  margin-bottom: 0px;
  -webkit-transition: color .3s ease-in;
  -o-transition: color .3s ease-in;
  transition: color .3s ease-in;
  line-height: 32px;
}
@media only screen and (max-width: 990px) {
  .heading h2{
    font-size: 30px !important;
    line-height: 34px;
  }
}
</style>
