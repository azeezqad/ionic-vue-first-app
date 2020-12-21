<template>
 <defualt-layout :PageTitle="loadedMemory.title" :Ttile="loadedMemory.title" PageBack="/memories">
       <MemoryOverview :memory="loadedMemory">

       </MemoryOverview>
        
        
   </defualt-layout>
</template>

<script>
import MemoryOverview from "../components/comp/MemoryOverview"
    export default {
        data(){
            return{
                memoryID: this.$route.params.id,
            }
        },
        components: {
            MemoryOverview
        },
         computed: {
    loadedMemory() {
      return this.$store.getters.memory(this.memoryID);
    },
  },
  // watch: {
  //   $route(currentRoute) {
  //     this.memoryId = currentRoute.params.id;
  //   },
  // },
};
</script>

<style  scoped>

</style>