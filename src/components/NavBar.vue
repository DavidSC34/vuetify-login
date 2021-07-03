<template>
    <nav>
        <v-toolbar>
                <v-toolbar-side-icon></v-toolbar-side-icon>
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
    </nav>
</template>

<script>
import {mapActions} from 'vuex'
export default {
        methods: {
    ...mapActions(['cerrarSesion'])
  },

}
</script>