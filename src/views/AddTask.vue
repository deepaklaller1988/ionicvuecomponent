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
        <h3>Add New Task</h3>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Task Name</ion-label>
        <ion-input v-model="form.taskname" id="taskname" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-button type="submit"> Add </ion-button>
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
  name: "AddTask",
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
      router.push('/ShowTask');
    }


    return {
      router,
      logIn,
      personAdd,
      handleLogin,
    };
  },
  data() {
    return {
      form: {
        taskname: ""
   
      },
    };
  },

  // methods: {
  //   handleLogin(form) {
  //     alert('Successfully added',);
  //   },
  //   testFunction: function () {
  //       window.location.href = 'ShowTask'

  //     console.log('test clicked')
  //   }
  // },
};
</script>