import Vue from 'vue'
import Vuex from 'vuex'
import { auth, db } from '@/firebase'
import router from '@/router';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        usuario: ''
    },
    mutations: {

        nuevoUsuario(state, payload) {
            if (payload === null) {
                state.usuario = '';
            } else {
                state.usuario = payload;
            }
        }
    },
    actions: {
        async setUsuario({ commit }, user) {

            try {
                //verificar si el usuario ya existe
                const doc = await db.collection('usuarios').doc(user.uid).get();
                if (doc.exists) {
                    //Volvio el usuario(lo creamos de forma local para uso de los componentes)
                    commit('nuevoUsuario', doc.data());
                } else {
                    //Construir usuario( sacamos data del proveedor de login usuado)
                    const usuario = {
                        nombre: user.displayName,
                        email: user.email,
                        uid: user.uid,
                        foto: user.photoURL
                    };
                    //Guardar en firestore
                    await db.collection('usuarios').doc(usuario.uid).set(usuario)
                    console.log('usuario guardado en DB');
                    commit('nuevoUsuario', usuario);
                }

            } catch (error) {
                console.log(eror);
            }

        },

        cerrarSesion({ commit }) {
            auth.signOut();
            commit('nuevoUsuario', null);
            router.push('ingreso');
        }

    },
    modules: {}
})