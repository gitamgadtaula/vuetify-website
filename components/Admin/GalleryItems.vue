<template>
  <v-app>
    <div class="admin-container">
      <div class="top-nav-btns mb">
        <v-btn
          x-large
          color="primary"
          dark
          rounded
          @click="$router.back()"
          class="mb"
        >
          <v-icon left> mdi-arrow-left </v-icon> Back</v-btn
        >
        <v-btn
          x-large
          color="success"
          dark
          rounded
          @click="openCreateDialog"
          class="mb"
        >
          Add a new gallery</v-btn
        >
      </div>

      <v-card class="mx-auto contents">
        <v-card-title v-text="type.toUpperCase() + ' LISTS'"></v-card-title>

        <v-container fluid>
          <v-row dense :gutter="[12, 12]">
            <v-col v-for="(item, index) in lists" :key="index" cols="12" sm="3">
              <v-card>
                <v-img
                  :src="item.img"
                  class="white--text align-end image"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                >
                </v-img>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <!-- <v-btn icon @click="openDialog(item.id)">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn> -->

                  <v-btn icon @click="openDeleteDialog(item.id)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <!-- Add new gallery Dialog start -->
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
        v-model="dialog.create.show"
      >
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="primary" dark>Add gallery</v-toolbar>
            <v-form ref="form" lazy-validation style="padding: 20px">
              <v-file-input
                label="Upload Image"
                filled
                show-size
                prepend-icon="mdi-camera"
                @change="imageChange"
              ></v-file-input>
              <v-btn
                color="blue-grey"
                class="ma-2 white--text"
                @click="submitPost"
              >
                Submit
                <v-icon right dark> mdi-cloud-upload </v-icon>
              </v-btn>
            </v-form>

            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>

      <!-- end of add new gallery dialog -->
      <!-- start of delete dialog -->

      <v-dialog v-model="dialog.delete.show" max-width="290">
        <v-card>
          <v-card-title>
            Are you sure you want to delete this item?
          </v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="green darken-1"
              text
              @click="dialog.delete.show = false"
            >
              Cancel
            </v-btn>

            <v-btn color="red darken-1" text @click="deleteGallery">
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
    id: Number,
  },
  data() {
    return {
      lists: [],
      form: {
        img: "",
      },
      snackbar: {
        show: false,
        color: "green",
        text: "",
      },
      dialog: {
        create: {
          show: false,
        },
        delete: {
          show: false,
        },
        activeId: 0,
      },
    };
  },
  methods: {
    openCreateDialog() {
      this.dialog.create.show = true;
    },
    openDeleteDialog(id) {
      this.activeId = id;
      this.dialog.delete.show = true;
    },
    getLists() {
      this.$axios.get(`/${this.type}?master_id=${this.id}`).then((response) => {
        this.lists = response.data;
      });
    },
    submitPost() {
      let requestPayload = this.form;
      requestPayload["master_id"] = this.id;
      this.$axios
        .post(`/${this.type}`, requestPayload)
        .then((response) => {
          console.log(response);
          this.dialog.create.show = false;
          this.snackbar.show = true;
          this.snackbar.text = `Added new item successfully`;
          this.snackbar.color = "green";
          this.getLists();
        })
        .catch((err) => {
          this.snackbar.show = true;
          this.snackbar.text = "Failed ";
          this.snackbar.color = "red";
        });
    },
    deleteGallery() {
      this.$axios
        .delete(`/${this.type}/${this.activeId}`)
        .then((response) => {
          this.dialog.delete.show = false;
          this.snackbar.show = true;
          this.snackbar.text = `Deleted successfully`;
          this.snackbar.color = "green";
          this.getLists();
        })
        .catch((err) => {
          this.dialog.delete.show = false;
          this.snackbar.show = true;
          this.snackbar.text = `Error while deleting`;
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
  created() {
    this.getLists();
  },
};
</script>

<style>
</style>
