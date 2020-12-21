<template>
    <ion-page>
       <ion-header>
           <ion-toolbar>
               <ion-buttons slot="start">
                   <ion-back-button :default-href="PageBack"></ion-back-button>
               </ion-buttons>
                <ion-title>{{PageTitle}}</ion-title>
                <ion-buttons slot="end">
                     <slot name="actions-end"></slot>
                </ion-buttons>
                </ion-toolbar>
       </ion-header>
    <ion-content>
        <h2>{{Ttile}}</h2>
        <slot/>
    </ion-content>
   </ion-page>
</template>

<script>
import {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons
    } from "@ionic/vue";
    export default {
        props:['PageTitle' , 'Ttile', 'PageBack'],
       
         components:{
            IonPage,
            IonHeader,
            IonTitle,
            IonContent,
            IonToolbar,
            IonBackButton,
            IonButtons

            }
        
    }
</script>

<style>

</style>