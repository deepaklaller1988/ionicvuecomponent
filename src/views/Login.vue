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


    <ion-content :fullscreen="true">
    <form @submit.prevent="handleLogin(form)">
      <ion-item>
        <h3>Login</h3>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Username</ion-label>
        <ion-input v-model="form.username" id="username" required></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Password</ion-label>
        <ion-input
          type="password"
          v-model="form.password"
          id="password"
          required
        ></ion-input>
      </ion-item>

      <ion-item>
        <ion-button type="submit"> Login </ion-button>
      </ion-item>
    </form>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonItem, IonLabel, IonButton, IonInput } from "@ionic/vue";
import { logIn, personAdd } from "ionicons/icons";
import { useRouter } from "vue-router";

// import axios from "axios";
export default {
  name: "SignIn",
  components: {
    IonPage,
    IonItem,
    IonLabel,
    IonButton,
    IonInput,
  },
  setup() {

  const router = useRouter();
    
   const handleLogin= (form) => {
    // handleLogin(form) {
      console.log(form,'form data');
      if(form.username != null || form.password != null )
      {
        // window.location.href = 'ShowTask'
        router.push('/Dashboard');
      }else{
        console.log('83')
      }
    };

     const testFunction= function () {
    
      router.push('/home');
    };
    return {
      // router,
      logIn,
      personAdd,
      testFunction,
      handleLogin
    };
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },

    
};
</script>