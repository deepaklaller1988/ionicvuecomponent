<!-- <template>
    <ion-card v-for="user in users" :key="user.id">
      <ion-card-header>
        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        <ion-card-title>Card Title</ion-card-title>
      </ion-card-header>
  
      <ion-card-content :fullscreen="true">
        {{user?.content}}
      </ion-card-content>
      
    
    </ion-card>
  </template> -->

  <template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
            <ionlabel>All Sports News</ionlabel>
        
        </ion-buttons>
      </ion-toolbar>
    </ion-header>


    <ion-content :fullscreen="true">
   

    <ion-card v-for="user in users" :key="user.id">
        <ion-card-header>
          <ion-card-subtitle>{{user?.source?.name}}</ion-card-subtitle>
          
          <ion-card-title>{{user?.title}}</ion-card-title>
        </ion-card-header>
        <ion-img :src="user.urlToImage"></ion-img>
        <ion-card-content :fullscreen="true">
          {{user?.content}}
        </ion-card-content>
        <ion-item>
          <ion-icon :icon="pin" slot="start"></ion-icon>
          <a v-bind:href="user.url" ><ion-button fill="outline" slot="end" >View</ion-button></a>
          </ion-item>
        
      
      </ion-card>


    </ion-content>
  </ion-page>
</template>
  
  <script>
  import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle ,IonImg ,IonPage} from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { ref } from "vue";
   import { useRouter } from "vue-router";   
   import axios from "axios";


  export default defineComponent({
      name : 'Sports',
    components: { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle,IonImg ,IonPage  },
    setup() {
        const users= ref([])
        const router = useRouter();

        const  handleLogin = function () {
      axios
        .get("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=31a7736e56d844cea156f84b6a5b2705")
        .then((response) => 
        users.value=response.data.articles)
        .catch((error) => 
        console.log(error));
  };



  
  // call function 
  handleLogin()  
      return { 
        handleLogin,
        users,
        router
       };
    }
  });
  </script>