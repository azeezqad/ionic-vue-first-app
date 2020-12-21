<template>
    <defualt-layout PageTitle="Add Memory" PageBack="/memories">
    <CreatMemory @save-memory="saveMemory"></CreatMemory>
    </defualt-layout>
     
</template>

<script>
import CreatMemory from "../components/comp/CreateMemory"
 export default {
     
        components: {
           CreatMemory
        },
        methods:{
            saveMemory(memoryData){
                  this.$store.dispatch('addMemory', memoryData);
                  this.$router.replace('/memories');

            }
        }
        
    }
</script>

<style scoped>

</style>