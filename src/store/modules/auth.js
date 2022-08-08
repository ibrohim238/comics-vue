import RepositoryFactory from "@/services/repository-factory";

const authRepository = RepositoryFactory.get('auth')

const modules = {
    namespaced: true,
    state: {
        router: null,
        tokenStore: null,
        httpClient: null,
        errorLogger: null,

        token: null,
        profile: {
            name: '',
            email: '',
            avatar: ''
        },
        loading: false,
    },
    getters: {
        loggedIn: state => state.token !== null,
        user: state => state.profile
    },
    mutations: {
        setTokenStore: (state, value) => {
            state.tokenStore = value;
        },
        setRouter: (state, value) => {
            state.router = value;
        },
        setHttpClient: (state, value) => {
            state.httpClient = value;
        },
        setErrorLogger: (state, value) => {
            state.errorLogger = value;
        },
        setLoading: (state, value) => {
            state.loading = value;
        },
        setProfile: (state, value) => {
            state.profile = value;
        },
        setToken: (state, value) => {
            state.token = value;
        },
    },
    actions: {
        init({ dispatch, commit }, {
            router,
            tokenStore,
            httpClient,
            errorLogger,
        }) {
            commit('setRouter', router);
            commit('setTokenStore', tokenStore);
            commit('setHttpClient', httpClient);
            commit('setErrorLogger', errorLogger);

            httpClient.onAuthError(() => dispatch('logout'));

            commit('setLoading', true);
            return dispatch('refresh')
                .then(() => dispatch('fetchProfile'))
                .catch((error) => {
                    if (error.message !== 'no_saved_token') {
                        dispatch('logout');
                    }
                })
                .finally(() => {
                    commit('setLoading', false);
                });
        },
        saveToken({ state, commit }, token) {
            state.tokenStore.saveToken(token);
            state.httpClient.setToken(token.access_token);

            commit('setToken', token);
        },
        clearToken({ state, commit }) {
            state.httpClient.clearToken();
            state.tokenStore.clearToken();

            commit('setToken', null);
        },
        fetchProfile({ commit }) {
            return authRepository.fetchProfile()
                .then((profile) => {
                    commit('setProfile', profile);
                });
        },
        refresh({ state, dispatch }) {
            const savedToken = state.tokenStore.getSavedToken();

            if (!savedToken) {
                return Promise.reject(new Error('no_saved_token'));
            }

            return authRepository.refresh(savedToken)
                .then((token) => {
                    dispatch('saveToken', token);
                });
        },
        login({dispatch}, user) {
            return authRepository.login(user)
                .then((token) => {
                    dispatch('saveToken', token);

                    return dispatch('fetchProfile')
                })
                .catch(error => {
                    console.log(error);
                    return error
                })
        },
        logout({commit, dispatch}) {
            authRepository.logout()
            commit('setProfile', null);
            dispatch('clearToken');
        },
        register({dispatch}, user) {
            return authRepository.register(user)
                .then((token) => {
                    dispatch('saveToken', token);

                    return dispatch('fetchProfile')
                })
                .catch(error => {
                    console.log(error);
                    return error
                })
        }
    }
}

export default modules