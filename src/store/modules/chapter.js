import RepositoryFactory from "@/services/repository-factory";

const personalRepository = RepositoryFactory.get('chapter')

const modules = {
    namespaced: true,
    state: {
        chapters: [],
        chapter: {
            volume: null,
            number: null,
            name: '',
            media: [],
            manga: {},
        }
    },
    getters: {
        chapters: state => state.chapters,
        chapter: state => state.chapter
    },

    mutations: {
        setChapter: (state, chapter) => {
            state.chapter = chapter
        },
        setChapters: (state, chapters) => {
            state.chapters = chapters
        }
    },

    actions: {

        get({commit}, id) {
            return personalRepository.show(id)
                .then((chapter) => {
                    commit('setChapter', chapter)
                })
                .catch(error => {
                    console.log(error);
                    return error;
                })
        },
        getAll({commit}, mangaSlug) {
            return personalRepository.index(mangaSlug)
                .then((chapters) => {
                    commit('setChapters', chapters)
                })
                .catch(error => {
                    console.log(error);
                    return error;
                })
        }
    }
}

export default modules