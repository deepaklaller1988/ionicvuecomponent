<template>
  <ion-app>
    <ion-menu type="overlay" class="sidebar" swipeGesture="false">
      <ion-header>
        <ion-toolbar>
          <ion-title class="ion-no-padding">
           Menu
          </ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list class="menu_list">
          <ion-menu-toggle auto-hide="false" >
            <ion-item >
              <ion-icon slot="start"></ion-icon>
              <!-- <img [src]="p.src" [routerLink]="p.url" routerDirection="forword"> -->
              <ion-label>
               gfidgjdfigjdig
              </ion-label>
            </ion-item>
          </ion-menu-toggle>
          <ion-menu-toggle side="right" type="overlay" auto-hide="false" >
              <ion-item   class="logout">
                  <ion-icon slot="start" name="exit"></ion-icon>
                  <ion-label>
                   Logout
                  </ion-label>
                </ion-item>
            </ion-menu-toggle>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet , IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet, IonItem, IonLabel, 
  }
});
</script>