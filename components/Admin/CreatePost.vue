<template>
  <v-app>
    <div class="admin-container">
      <v-card elevation="2" class="mx-auto">
        <v-card-title>Add new {{ type }} </v-card-title>
        <v-form ref="form" lazy-validation style="padding: 20px">
          <v-text-field
            v-model="form.value"
            :rules="[() => !!form.value || 'This field is required']"
            label="Title"
            required
          ></v-text-field>
          <v-text-field
            v-model="form.desc"
            label="Description"
            :rules="[() => !!form.desc || 'This field is required']"
            required
          ></v-text-field>
          <v-file-input
            label="Upload Image"
            filled
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
    <v-snackbar v-model="snackbar.show" timeout="2000" :color="snackbar.color">
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar.show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
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
        img: "",
        value: "",
        desc: "",
      },
      snackbar: {
        show: false,
        color: "green",
        text: "",
      },
    };
  },
  methods: {
    submitPost() {
      this.$axios
        .post(`/${this.type}`, this.form)
        .then((response) => {
          console.log(response);
          this.snackbar.show = true;
          this.snackbar.text = `Added new ${this.type} successfully`;
          this.$router.push(`/admin/${this.type}`);
          this.snackbar.color = "green";
        })
        .catch((err) => {
          this.snackbar.show = true;
          this.snackbar.text = "Failed ";
          this.snackbar.color = "red";
        });
    },
    imageChange(e) {
      this.getBase64(e, (base64Data) => {
        console.log("Base 64 data is: " + base64Data);
        this.form.img = base64Data;
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