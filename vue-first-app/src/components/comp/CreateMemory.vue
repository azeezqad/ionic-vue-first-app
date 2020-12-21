<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input
          type="text"
          v-model="title"
          placeholder="Enter Title"
          required
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="start">
          <img :src="takenImageUrl" />
        </ion-thumbnail>
        <ion-button type="button" fill="clear" @click="takePicture">
          <ion-icon slot="start" :icon="camera"></ion-icon>
          Take Photo
        </ion-button>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea
          rows="5"
          v-model="description"
          type="text"
          placeholder="Enter Description"
          required
        ></ion-textarea>
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="full"> Save </ion-button>
  </form>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonIcon,
  IonButton,
  IonThumbnail,
} from "@ionic/vue";
import { camera } from "ionicons/icons";
import { Plugins, CameraResultType } from "@capacitor/core";
const { Camera } = Plugins;
export default {
  emits: ["save-memory"],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    IonThumbnail,
    IonIcon,
  },
  data() {
    return {
      title: "",
      description: "",
      takenImageUrl:"",
      camera,
    };
  },
  methods: {
    async takePicture() {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
      });
      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      this.takenImageUrl = image.webPath;
      // Can be set to the src of an image now
   
    },

    submitForm() {
      const memoryData = {
        title: this.title,
        imageUrl: this.takenImageUrl,
        descripation: this.description,
      };
      this.$emit("save-memory", memoryData);
    },
  },
};
</script>

<style scoped>
</style>