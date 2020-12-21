<template>
   <defualt-layout PageTitle="All Products" Ttile=Products>
       <template v-slot:actions-end>
            <ion-button router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="add" ></ion-icon>
       
      </ion-button>
        
           
       </template>
       <MemoriesList :memories="memories">

       </MemoriesList>
   </defualt-layout>
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";
    import MemoriesList from "../components/comp/MemoriesList";
   export default {
  components: {
    MemoriesList,
    IonButton,
    IonIcon
  },
  data() {
    return { add };
  },
        computed:{
            memories(){
                return this.$store.getters.memories;
            }
        }
        
    }
</script>

<style lang="" scoped>

</style>