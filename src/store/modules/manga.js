import RepositoryFactory from "@/services/repository-factory";

const personalRepository = RepositoryFactory.get('manga')

const modules = {
    namespaced: true,
    state: {
        manga: {
            name: '',
            description: '',
            media: {},
            tags: [],
        },
        mangas: [],
        tags: [],
    },

    getters: {
        manga: state => state.manga,
        mangas: state => state.mangas,
        tags: state => state.tags.map(tag => {
            return {
                value: tag.id,
                label: tag.name
            }
        }),
    },

    mutations: {
        addManga: (state, manga) => {
            state.manga = manga
        },
        addMangas: (state, mangas) => {
            state.mangas = mangas
        },
        updateManga: (state, manga) => {
            const index = state.mangas.findIndex((m) => m.slug === manga.slug)

            state.mangas[index] = manga
        },
        deleteManga: (state, slug) => {
            const index = state.mangas.findIndex((m) => m.slug === slug)

            state.mangas.splice(index)
        },
        addTags: (state, tags) => {
            state.tags = tags
        },
        saveNewManga: (state, manga) => {
            state.mangas.unshift(manga)
        }
    },

    actions: {
        get({commit}, slug) {
            return personalRepository.show(slug)
                .then((manga) => {
                    commit('addManga', manga)
                })
                .catch(error => {
                    console.log(error);
                    return error;
                })
        },
        getAll({commit}) {
            return personalRepository.index()
                .then((mangas) => {
                    commit('addMangas', mangas)
                })
                .catch(error => {
                    console.log(error);
                    return error;
                })
        },
        store({commit}, manga) {
            return personalRepository.store(manga)
                .then((manga) => {
                    commit('saveNewManga', manga)
                })
                .catch(error => {
                    console.log(error);
                    return error;
                })

        },
        update({commit}, manga) {
            return personalRepository.update(manga)
                .then((manga) => {
                    commit('updateManga', manga)
                })
                .catch(error => {
                    console.log(error);

                })
        },
        delete({commit}, slug) {
            return new Promise((resolve, reject) => {
                personalRepository.delete(slug)
                    .then((response) => {
                        commit('deleteManga', slug)
                        resolve(response)
                    })
                    .catch(error => {
                        console.log(error);
                        reject(error)
                    })
            })
        },
        getTags({commit}) {
            return personalRepository.getTags()
                .then((tags) => {
                    commit('addTags', tags)
                })
                .catch(error => {
                    console.log(error);
                    return error;
                })
        }
    }
}

export default modules