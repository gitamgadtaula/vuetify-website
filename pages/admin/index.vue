<template>
  <div class="container">
    <br />
    <br />
    <br />
    <v-row>
      <v-file-input
        label="File input"
        filled
        prepend-icon="mdi-camera"
        @change="imageChange"
      ></v-file-input>
      <img :src="image" />
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "",
    };
  },
  methods: {
    imageChange(e) {
      this.getBase64(e, (base64Data) => {
        console.log("Base 64 data is: " + base64Data);
        this.image = base64Data;
      });
      //   console.log(e);
    },
    getBase64(file, callback) {
      const reader = new FileReader();
      reader.addEventListener("load", () => callback(reader.result));
      reader.readAsDataURL(file);
    },
  },
};
</script>

<style>
</style>