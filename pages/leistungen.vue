<template>
  <div class="index-container">
    <h4>Projektentwicklung –&nbsp;Alle Leistungen einschließlich Vermarktung und&nbsp;Vertrieb.</h4>
    <h4>Architektur –&nbsp;Alle Leistungsphasen der HOAI.</h4>
    <h4>Innenarchitektur –&nbsp;Alle Leistungsphasen der HOAI.</h4>
    <h4>Bauliche Umsetzung –&nbsp;Alle Gewerke durch unseren Kooperationspartner.</h4>
    <p>&nbsp;</p>
    <p><span style="color: #000000; font-family: 'Courier New',monospace;">Wir strukturieren sämtliche Wünsche und Vorstellungen unserer Bauherren in ein</span><br>
      <span style="color: #000000; font-family: 'Courier New',monospace;">über Generationen zeitlosen wertvollen Lebensraum.</span></p>
    <p><span style="color: #000000; font-family: 'Courier New',monospace;">Dabei stellen wir unsere langjährige Erfahrung rund um das Planen, Bauen, das</span><br>
      <span style="color: #000000; font-family: 'Courier New',monospace;">Sortieren und Strukturieren, das Abwägen und Entscheiden unseren Bauherren</span><br>
      <span style="color: #000000; font-family: 'Courier New',monospace;">uneingeschränkt zur Verfügung.</span></p>
    <p><span style="color: #000000; font-family: 'Courier New',monospace;">Langjährig gewachsene vertrauensvolle Kooperationen zu ausführenden</span><br>
      <span style="color: #000000; font-family: 'Courier New',monospace;">Handwerksfirmen, Fachingenieuren sowie internationalen Vertriebs- und</span><br>
      <span style="color: #000000; font-family: 'Courier New',monospace;">Finanzstrukturen bilden dabei das Fundament, die individuell und gemeinsam mit</span><br>
      <span style="color: #000000; font-family: 'Courier New',monospace;">unseren Auftraggebern entwickelte Planung, handwerklich sauber, kostensicher</span><br>
      <span style="color: #000000; font-family: 'Courier New',monospace;">und termingenau um zu setzten.</span></p>
    <br>
    <h4>Unserer Leistungen im Überblick:</h4>
    <br>
    <ul>
      <li><span style="color: #000000; font-family: 'Courier New';">Standortanalyse, Entscheidungsfindung und ggf. damit einhergehende&nbsp;Moderation sowie Prüfung der baurechtlichen Machbarkeiten.</span></li>
      <li><span style="color: #000000; font-family: 'Courier New';">Projektentwicklung und Abstimmung mit allen Beteiligten wie Banken,&nbsp;Vertriebe, Städte und Kommunen.</span></li>
      <li><span style="color: #000000; font-family: 'Courier New';">Nutzungskonzepte für private Bauherren, Baugruppen sowie für Investoren.</span></li>
      <li><span style="color: #000000; font-family: 'Courier New';">Planung von Bauvorhaben des Hochbaus und des Innenausbaus vom Entwurf, Bauantrag, Werkplanung über die Bauleitung bis zur Übergabe des Objektes an unsere Auftraggeber.</span></li>
      <li><span style="color: #000000; font-family: 'Courier New';">Tischlerarbeiten als individuelle Raumlösungen.</span></li>
      <li><span style="color: #000000; font-family: 'Courier New';">Farb-, Material und Lichtkonzepte als ganzheitlich erlebbare&nbsp;Raumgestaltung.</span></li>
      <li><span style="color: #000000; font-family: 'Courier New';">Kostenkontrolle während des Gesamtvorhabens.</span></li>
      <li><span style="color: #000000; font-family: 'Courier New';">Terminkoordiantion während des Gesamtvorhabens.</span></li>
      <li><span style="color: #000000; font-family: 'Courier New';">Energieökonomische Konzepte gemeinsam mit unseren Fachingenieuren.</span></li>
    </ul>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: "leistungen",
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
    this.$store.commit("setLogoImage",false)
    this.$store.commit("setDescription",this.reqData.description)
  },
  methods: {
    getItems() {
      //  Dummy data
      this.reqData = {
        id: 1,
        title: "Leistungen",
        description:"",
        titleImg:
        require("@/static/colani.png")
          // "/_nuxt/static/colani.png"
      };
    },
  },
};
</script>

<style scoped>
.index-container {
  padding-left: 20%;
  width: 80%;
  max-height: 100%;
  padding-top: 3rem;
}
h4{
  font-size: 20px;
  line-height: 32px;
}
p{
  font-size: 16px;
  line-height: 32px;
  font-weight: 400;
  color: #7e7d7d;
  margin: 0 0 10px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
li, ol, ul {
  font-size: 16px;
  line-height: 32px;
  font-weight: 400;
}
ul, ol {
  margin: 10px 0;
  padding: 0;
}
ul{
  list-style: disc;
}
</style>
