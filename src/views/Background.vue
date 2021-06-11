<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons v-on:click="testFunction()" slot="start">
          <ion-back-button 
              :text="buttonText"
              :icon="buttonIcon">
          </ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>


    <ion-content :fullscreen="true"  class="scroll-content" >
      
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header> -->
    
   
   
  
  </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage  } from "@ionic/vue";
import { logIn, personAdd } from "ionicons/icons";
import { useRouter } from "vue-router";

// import axios from "axios";
const router = useRouter();
export default {
  name: "Background",
  components: {
   
    
  },
  setup() {
const router = useRouter();
   const testFunction= function () {
    router.push('/home');
  };
  return {
    // router,
    logIn,
    personAdd,
    testFunction

  };
},
  
};
</script>


<style scoped>
.bg-image {
   background: url('./new.png') no-repeat center center fixed;
   background-size: cover;
 }
 .no-scroll .scroll-content {
   overflow: hidden;
 }

  </style>