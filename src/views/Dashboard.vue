<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title></ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-content :fullscreen="true" >
       <ion-header collapse="condense">
            <ion-toolbar>
              <ion-title size="large">Blank</ion-title>
            </ion-toolbar>
          </ion-header>
        
          <div id="container" >
            <strong>All India Latest News</strong><br>
            <ion-button @click="() => router.push('/Sports')">Sports News</ion-button>
            <ion-button @click="() => router.push('/Health')">Health News</ion-button>
            <ion-button @click="() => router.push('/Bussines')">Business News</ion-button>
          </div>
       
      
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'Dashboard',
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar
    },
    setup() {
        const router = useRouter();
        return { router };
      }
  });
  </script>
  
  <style scoped>
  #container {
    text-align: center;
    
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  
  #container strong {
    font-size: 20px;
    line-height: 26px;
  }
  
  #container p {
    font-size: 16px;
    line-height: 22px;
    
    color: #8c8c8c;
    
    margin: 0;
  }
  
  #container a {
    text-decoration: none;
  }
  
  .scroll-content {
      background: url('./new.png') 
    }
  </style>