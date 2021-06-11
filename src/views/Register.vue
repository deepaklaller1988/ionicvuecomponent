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
      <form @submit.prevent="handleRegister(form)">
        <ion-item>
          <h3>SignUp</h3>
        </ion-item>
  
        <ion-item>
          <ion-label position="floating">Name</ion-label>
          <ion-input v-model="form.name" id="name" required></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input v-model="form.email" id="email"     required></ion-input>
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
          <ion-button type="submit"> Register </ion-button>
        </ion-item>
      </form>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
// import { IonContent, IonHeader, IonPage, IonToolbar ,IonIcon } from '@ionic/vue';
import { IonPage, IonItem, IonLabel, IonButton, IonInput } from "@ionic/vue";
import { logIn, personAdd } from "ionicons/icons";
import { useRouter } from "vue-router";
// import axios from "axios";

export default ({
  name: 'Register',
  methods: {
    testFunction: function () {
        //  this.$router.push('/home');
      console.log('test clicked')
    },
    // handleRegister(form: any) {
    //   console.log(form);
    // },
  },
  components: {
    IonPage,
    IonItem,
    IonLabel,
    IonButton,
    IonInput,
  },

  
  setup() {
    const router = useRouter();
    const handleRegister= (form) => {
    // handleLogin(form) {
      console.log(form,'form data');
      if(form.username != null || form.password != null )
      {
        // window.location.href = 'ShowTask'
        router.push('/ShowTask');
      }else{
        console.log('83')
      }
    };
    return {
      router,
      logIn,
      personAdd,
      handleRegister,
      
    };

    
   
  },

  
  data() {
    return {
      form: {
        name:"",
        email: "",
        password: "",
      },
    };
  },
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
</style>