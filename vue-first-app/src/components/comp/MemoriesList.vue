<template>
    <ion-list>
            <MemoriesItem v-for="memory in memories" :key="memory.id"
            :memory="memory" />
            
        </ion-list>
</template>

<script>
import {
  IonList
    } from "@ionic/vue";

import MemoriesItem from "./MemoriesItem"
    export default {
        props: ["memories"],
        components:{
        
            IonList,
            MemoriesItem,
        }, 
        
    }
</script>

<style scoped>

</style>