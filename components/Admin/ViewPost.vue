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
          @click="$router.push(`/admin/${type}/create`)"
          class="mb"
        >
          Add new {{ type }}</v-btn
        >
      </div>

      <v-card class="mx-auto contents">
        <v-card-title v-text="type.toUpperCase() + ' LISTS'"></v-card-title>
        <v-container fluid>
          <v-row dense :gutter="[12, 12]">
            <v-col v-for="(item, index) in lists" :key="index" cols="12" sm="3">
              <v-card>
                <nuxt-link :to="'/admin/' + type + '/gallery/' + item.id">
                  <v-img
                    :src="item.img"
                    class="white--text align-end image"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  >
                    <v-card-title v-text="item.value"></v-card-title>
                    <v-card-subtitle>
                      {{ item.desc }}
                    </v-card-subtitle>
                  </v-img>
                </nuxt-link>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn icon @click="openDialog(item.id)">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>

                  <v-btn icon @click="openDeleteDialog(item.id)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <!-- model dialouge for editing the form -->
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
        v-model="dialog"
      >
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="primary" dark>Edit {{ type }}</v-toolbar>
            <v-form ref="form" lazy-validation style="padding: 20px">
              <v-text-field
                v-model="activeList.value"
                :rules="[() => !!activeList.value || 'This field is required']"
                label="Title"
                required
              ></v-text-field>
              <v-text-field
                v-model="activeList.desc"
                label="Description"
                :rules="[() => !!activeList.desc || 'This field is required']"
                required
              ></v-text-field>
              <v-file-input
                label="Upload Image"
                @change="imageChange"
                filled
                show-size
                prepend-icon="mdi-camera"
              ></v-file-input>
              <v-btn
                color="blue-grey"
                class="ma-2 white--text"
                @click="update(activeList.id)"
              >
                Update
                <v-icon right dark> mdi-cloud-upload </v-icon>
              </v-btn>
            </v-form>

            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>

      <!-- dialog for deleting -->
      <v-dialog v-model="deleteDialog" max-width="290">
        <v-card>
          <v-card-title>
            Are you sure you want to delete this item?
          </v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="deleteDialog = false">
              Cancel
            </v-btn>

            <v-btn color="red darken-1" text @click="deleteItem">
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-snackbar
        v-model="snackbar.show"
        timeout="2000"
        :color="snackbar.color"
      >
        {{ snackbar.text }}

        <template v-slot:action="{ attrs }">
          <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbar.show = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </v-app>
</template>


<script>
export default {
  props: {
    type: {
      type: String,
    },
  },
  data() {
    return {
      dialog: false,
      deleteDialog: false,
      lists: [],
      activeList: {},
      activeId: {},
      snackbar: {
        show: false,
        color: "green",
        text: "",
      },
    };
  },
  methods: {
    update(id) {
      this.$axios
        .put(`/${this.type}/${id}`, this.activeList)
        .then((response) => {
          this.activeList = response.data;
          this.getLists();
          this.snackbar.show = true;
          this.snackbar.text = "Updated successfully";
          this.snackbar.color = "green";
          this.dialog = false;
        })
        .catch((err) => {
          this.snackbar.show = true;
          this.snackbar.text = "Error while updating ";
          this.snackbar.color = "red";
        });
    },
    openDialog(id) {
      this.dialog = true;
      this.$axios.get(`/${this.type}/${id}`).then((response) => {
        this.activeList = response.data;
      });
    },
    openDeleteDialog(id) {
      this.activeId = id;
      this.deleteDialog = true;
    },
    deleteItem() {
      this.$axios.delete(`/${this.type}/${this.activeId}`).then((response) => {
        this.getLists();
        this.deleteDialog = false;
        this.snackbar.show = true;
        this.snackbar.text = "Deleted successfully";
        this.snackbar.color = "green";
        this.dialog = false;
      });
    },

    getLists() {
      this.$axios.get(`/${this.type}`).then((response) => {
        this.lists = response.data;
      });
    },
    imageChange(e) {
      this.getBase64(e, (base64Data) => {
        console.log("Base 64 data is: " + base64Data);
        this.activeList.img = base64Data;
      });
    },
    getBase64(file, callback) {
      const reader = new FileReader();
      reader.addEventListener("load", () => callback(reader.result));
      reader.readAsDataURL(file);
    },
  },
  mounted() {
    this.getLists();
  },
};
</script>

<style scoped>
.image {
  width: 300px;
  height: auto;
  object-fit: cover;
}
.contents {
  margin-top: 10px;
}
</style>