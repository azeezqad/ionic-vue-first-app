<template>
  <div>
    <ion-img :src="memory.image" :alt="memory.title"></ion-img>
    <h1 class="ion-text-center">{{memory.title}}</h1>
    <p class="ion-text-center"> {{memory.description}}</p>
   
  </div>
</template>

<script>
import { IonImg } from "@ionic/vue";
export default {
    props: ["memory"],
  components: {
    IonImg,
  },
};
</script>

<style scoped>
</style>