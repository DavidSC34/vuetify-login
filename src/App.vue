<template>
 
    <v-app>

        <NavBar v-if="usuario !=''"/>

      <v-content>
        <v-container>
         <router-view/>
        </v-container>
      </v-content>
    </v-app>

</template>
<script>

import NavBar from './components/NavBar.vue'
import {mapState} from 'vuex'
export default {
  components:{
    NavBar
  },
  data(){
    return{

    }
  },
  computed: {
    ...mapState(['usuario'])
  },
  

}
</script>