<template>
  <div id="app">
    <v-app>
        <v-toolbar>
        <v-toolbar-title class="headline text-uppercase"> <span>Vue</span></v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn>
         <span class="mr-2">Cerrar sesion</span>
          <v-icon>fas fa-address-book</v-icon>
        </v-btn>

        </v-toolbar>


      <v-content>
        <v-container>
         <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>