<template>
 
    <v-app>

        <NavBar />

      <v-content>
        <v-container>
         <router-view/>
        </v-container>
      </v-content>
    </v-app>

</template>
<script>

import NavBar from './components/NavBar.vue'
export default {
  components:{
    NavBar
  },
  data(){
    return{

    }
  },
  

}
</script>