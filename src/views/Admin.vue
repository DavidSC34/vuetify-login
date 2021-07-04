<template>
   <v-layout justify-center>
       <v-flex xs6>
            <v-card class="text-xs-center">
                   <v-card-text>
                       <v-avatar>
                          <img :src="usuario.foto" alt="avatar">
                        </v-avatar>
                   </v-card-text>
                    <v-card-text>
                        <h3>{{usuario.nombre}}</h3>
                    </v-card-text>
                    <v-card-text>
                        <input type="file" ref="boton" class="d-none" @change="buscarImagen($event)">
                        <v-btn color="primary" @click="$refs.boton.click()">Buscar imagen</v-btn>
                        <v-btn color="secondary" :disabled="file === null">Subir imagen</v-btn>
                    </v-card-text>
            </v-card>
       </v-flex>
   </v-layout>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {
            file: null
        }
    },
    computed:{
        ...mapState(['usuario'])
    },
    methods: {
        buscarImagen(event) {
            console.log(event.target.files[0]);
            this.file = event.target.files[0];
        }
    },
}
</script>