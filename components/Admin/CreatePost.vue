<template>
  <v-app>
    <div class="container">
      <br />
      <br />
      <br />
      <!-- <v-row> -->
      <v-card elevation="2" class="mx-auto">
        <v-card-title>Enter new item </v-card-title>
        <v-form ref="form" lazy-validation style="padding: 20px">
          <v-text-field
            v-model="form.value"
            label="Title"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.desc"
            label="Description"
            required
          ></v-text-field>
          <v-file-input
            label="Upload Image"
            filled
            multiple
            show-size
            prepend-icon="mdi-camera"
            @change="imageChange"
          ></v-file-input>
          <v-btn color="blue-grey" class="ma-2 white--text" @click="submitPost">
            Submit
            <v-icon right dark> mdi-cloud-upload </v-icon>
          </v-btn>
        </v-form>
      </v-card>
      <div class="uploaded-images">
        <!-- <img
          v-for="(item, index) in form.image.filter(
            (item, index) => item || item != ''
          )"
          :key="index"
          :src="item"
          class="images"
        />
      </div> -->
        <!-- </v-row> -->
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  props: {
    type: String,
  },
  data() {
    return {
      form: {
        image: [],
        value: "",
        desc: "",
      },
    };
  },
  methods: {
    submitPost() {
      this.form.image = this.form.image.filter((item, index) => index > 0);
      this.$axios.post(`/${this.type}`, this.form).then((response) => {
        console.log(response);
      });
    },
    imageChange(e) {
      e.forEach((element) => {
        this.getBase64(element, (base64Data) => {
          console.log("Base 64 data is: " + base64Data);
          this.form.image.push(base64Data);
        });
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

<style scoped>
.images {
  display: inline-block;
  width: 100px;
  height: 200px;
  object-fit: cover;
}
</style>