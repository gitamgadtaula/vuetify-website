<template>
  <div class="container">
    <br />
    <br />
    <br />
    <!-- <v-row> -->
    <v-card elevation="2" class="mx-auto">
      <v-card-title>Enter new item </v-card-title>
      <v-form ref="form" lazy-validation style="padding: 20px">
        <v-text-field v-model="form.value" label="Title" required></v-text-field>
        <v-text-field
          v-model="form.desc"
          label="Description"
          required
        ></v-text-field>
        <v-file-input
          label="Upload Image"
          filled
          prepend-icon="mdi-camera"
          @change="imageChange"
        ></v-file-input>
        <v-btn color="blue-grey" class="ma-2 white--text" @click="submitPost">
          Submit
          <v-icon right dark> mdi-cloud-upload </v-icon>
        </v-btn>
      </v-form>
    </v-card>

    <img :src="form.image" />
    <!-- </v-row> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        image: "",
        value: "",
        desc: "",
      },
    };
  },
  methods: {
    submitPost() {
      this.$axios.post("/projekte", this.form).then((response) => {
        console.log(response);
      });
    },
    imageChange(e) {
      this.getBase64(e, (base64Data) => {
        console.log("Base 64 data is: " + base64Data);
        this.form.image = base64Data;
      });
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