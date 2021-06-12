import Vue from "vue";
Vue.prototype.$getImagePath = img => {
  console.log(img);
  return "https://3i6hdatjtq-dw7qpnwz42cro.eu.s5y.io" + img;
};
