import RepositoryFactory from "@/services/repository-factory";
import axios from "axios";

const personalRepository = RepositoryFactory.get('auth')

const modules = {
    namespaced: true,
    state: {
        token: localStorage.getItem('access_token') || null,
    },
    getters: {
        loggedIn: state => state.token !== null
    },
    mutations: {
        retrieve_token: (state, token) => {
            state.token = token
        },
        destroyToken: (state) => {
            state.token = null
        },
    },

    actions: {
        login({commit}, user) {
            return new Promise((resolve, reject) => {
                personalRepository.login(user)
                    .then((token) => {
                        localStorage.setItem('access_token', token)
                        commit('retrieve_token', token)
                        resolve(token)
                    })
                    .catch(error => {
                        console.log(error);
                        reject(error);
                    })
            });
        },
        logout({commit, state}) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token;

            return new Promise((resolve, reject) => {
                personalRepository.logout()
                    .then((response) => {
                        localStorage.removeItem('access_token')
                        commit('destroyToken')
                        response(response)
                    })
                    .catch(error => {
                        localStorage.removeItem('access_token')
                        commit('destroyToken')
                        reject(error)
                    })
            });
        },
        register({commit}, user) {
            return new Promise((resolve, reject) => {
                personalRepository.register(user)
                    .then((token) => {
                        localStorage.setItem('access_token', token)
                        commit('retrieve_token', token)
                        resolve(token)
                    })
                    .catch(error => {
                        console.log(error);
                        reject(error)
                    })

            })
        }
    }
}

export default modules