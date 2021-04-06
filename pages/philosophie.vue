<template>
  <div class="index-container">
    <div class="center-text">
      <p>„ … Architektur und Bauen als Prozess bewussten Schaffens von Lebensräumen… .“</p>
    </div>
    <div class="info-text">
      <p>Architektur bedeutet Lebensräume schaffen, ist Kommunikation zwischen dem Menschen und seiner Umgebung und
        nicht nur das Erschaffen von leblosen Hüllen, die erst noch gefüllt werden müssen. Die Einzigartigkeit von
        Lebensräumen zeigt sich gerade im Zusammenspiel aller Dinge, die uns täglich begegnen. Jedes kleinste Detail
        macht einen Raum zu „unserem Raum“, alle Dinge die zusammenspielen. Materialien, Energie- konzepte, soziale
        Komponenten und der Finanzfluss die das Leben beeinflussen müssen es wert sein ganzheitlich beachtet und
        gleichermaßen bearbeitet werden. Räume entstehen dabei von Innen nach Außen, in der absoluten Konsequenz der
        daraus abgeleiteten logischen Entwurfsdidaktik.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "philosophie",
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
    this.$store.commit("setDescription",this.reqData.description)
  },
  methods: {
    getItems() {
      //  Dummy data
      this.reqData = {
        id: 1,
        title: "PHILOSOPHIE",
        description:"",
        titleImg:
          "https://mundelarchitekten.de/wp-content/uploads/2018/06/07.01-PHILOSOPHIE_bild.jpg"
      };
    },
  },
};
</script>

<style scoped>
.index-container {
  padding-left: 20%;
  padding-right: 20%;
  width: 100%;
  max-height: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.center-text{
  color: #7e7d7d;
  text-align: center;
}
.info-text{
  color: #7e7d7d;
  line-height: 35px;
}
</style>
