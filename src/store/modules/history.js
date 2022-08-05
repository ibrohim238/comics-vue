import RepositoryFactory from "@/services/repository-factory";

const personalRepository = RepositoryFactory.get('history')

const modules = {
    namespaced: true,
    state: {
        histories: []
    },

    getters: {
        histories: state => state.histories
    },

    mutations: {
        setHistories: (state, histories) => {
            state.histories = histories
        }
    },

    actions: {
        getAll({commit}) {
            return personalRepository.index()
                .then((histories) => {
                    commit('setHistories', histories)
                })
                .catch(error => {
                    console.log(error);
                    return error;
                })
        }
    }
}

export default modules