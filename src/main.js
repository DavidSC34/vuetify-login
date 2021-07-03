import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import { auth } from '@/firebase';

Vue.use(Vuetify)

Vue.config.productionTip = false

//verificar el usuario de firebase
auth.onAuthStateChanged((user) => {
    if (user) {

        store.dispatch('setUsuario', user);
    }
    //antes de que se ejecute vue 
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
});