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
    <form >
      <ion-item>
        <h3>All Task List</h3>
        <ion-button slot="end" type="submit" @click="() => router.push('/AddTask')" >AddTask </ion-button>
      </ion-item>

      <ion-item>
        <table>
          <tr>
            <th>Id</th>
            <th>Email</th>
          </tr>

          <tr v-for="user in users" :key="user.id">
            <td>{{user.id}}</td>
            <td>{{user.email}}</td>
          </tr>
        </table>
      </ion-item>
  
      
    </form>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonItem } from "@ionic/vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

import axios from "axios";
export default {
  name: "ShowTask",
  components: {
    IonPage,
    IonItem,
    
  },
  setup() {
   const router = useRouter();
   const testFunction= function () {
    router.push('/home');
  };

// use to store the data
  const users= ref([])
// end to function

  const  handleLogin = function () {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => 
        users.value=response.data)
        .catch((error) => 
        console.log(error));
  };

  // call function 
  handleLogin()

  return {
    router,
    testFunction,
    handleLogin,
    users,
    // data : response.data

  };
},
  
};
</script>

<style>
  */
table { 
  width: 100%; 
  border-collapse: collapse; 
}
/* Zebra striping */
tr:nth-of-type(odd) { 
  background: #eee; 
}
th { 
  background: #333; 
  color: white; 
  font-weight: bold; 
}
td, th { 
  padding: 6px; 
  border: 1px solid #ccc; 
  text-align: left; 
}
</style>