<template>
  <div>
    <v-footer
      absolute
      class="footer"
      height="650"
    >
      <div class="footer-content-outer">
        <div class="footer-top">
          <div class="footer-block">
            <v-row>
              <v-col
                col="6">
                <nuxt-link to="/">
                  <v-img
                    src="https://mundelarchitekten.de/wp-content/uploads/2018/08/Logo_ohne_hintergrund_lang_weiss.png"
                    width="600"
                  />
                </nuxt-link>
              </v-col>
              <v-col
                class="info-col"
                col="6">
                <h6 class="footer-h6">kontakt</h6>
                <p>MundelArchitekten</p>
                <p>Büro 1: Postfach 1362 D - 71668 Marbach</p>
                <p>Büro 2: Königsbrücker Straße 99 D - 01097 Dresden</p>
                <p>Ansprechpartner Kai Mundel +49(0)172.7082774</p>
                <p>km@mundelarchitekten.de</p>
                <p>Telefon +49(0)351.&nbsp;84034611</p>
                <p>Internet www.mundelarchitekten.de</p>
              </v-col>
            </v-row>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="info-bottom">
            <p>MundelArchitekten (C) 2018 Alle Rechte vorbehalten</p>
          </div>
        </div>
      </div>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer {
  position: relative;
  background-image: url(https://mundelarchitekten.de/wp-content/uploads/2018/09/burning-bright-paperback-cover-9780857861177.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: black;
  font-size: 16px;
  word-wrap: break-word;
}

.footer:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: .8;
  z-index: 90;
}

.footer .footer-top {
  position: relative;
  padding-bottom: 33px;
  border-bottom: 1px solid rgba(255, 255, 255, .2)
}

.footer-content-outer {
  width: 70%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 0 0px;
  z-index: 100;
}

.footer-block img {
  height: auto;
  vertical-align: middle;
}

.info-col {
  /*font-size: 13px;*/
  line-height: 26px;
  font-weight: 300;
  letter-spacing: 1px;
  color: #fff;
  text-align: right
}

.info-col p {
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  color: inherit;
  font-family: 'Courier New', serif !important;
  margin: 0 0 10px;
}

.footer-h6 h6 {
  font-weight: 300;
  font-style: normal;
  letter-spacing: 4.5px;
  color: #fff;
  font-family: 'Courier New', serif !important;
  line-height: 18px;
}

h6 {
  margin-top: 0;
  margin-bottom: 37px;
  font-size: 18px;

}

.footer-bottom {
  position: relative;
  padding-top: 47px;
}

.footer-bottom .info-bottom {
  float: left;
  width: 50%;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 2px;
  font-weight: 700;
  color: #fff;
}
</style>
