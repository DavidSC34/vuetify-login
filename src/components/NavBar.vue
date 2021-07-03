<template>
    <nav>
        <v-toolbar>
                <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title class="headline text-uppercase"> 
                <router-link :to="{path:'/'}">
                    <span>Vue</span>

                </router-link>
                
                </v-toolbar-title>
                <v-spacer></v-spacer>

                <v-btn @click="cerrarSesion">
                <span class="mr-2">Cerrar sesion</span>
                <v-icon>fas fa-address-book</v-icon>
                </v-btn>

        </v-toolbar>

        <v-navigation-drawer class="indigo" v-model="drawer" app>
                <v-list v-for="(item,index) in items" :key="index">
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon class="white--text">{{item.icon}}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                             <v-list-tile-title class="white--text">{{item.title}}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                  
                </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data() {
        return {
            drawer: true,
            items: [
          { title: 'Dashboard', icon: 'fas fa-address-card' },
          { title: 'Account', icon: 'fas fa-address-card' },
          { title: 'Admin', icon: 'fas fa-address-card' }
        ]
        }
    },
        methods: {
    ...mapActions(['cerrarSesion'])
  },

}
</script>