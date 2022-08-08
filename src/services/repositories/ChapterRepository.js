import http from "@/services/http";
import urlFormatter from "@/services/url-formatter";
import Chapter from "@/services/classes/Chapter";

const getURL = urlFormatter({
    show: '/api/v1/chapter/{id}',
    index: '/api/v1/chapter',
    store: '/api/v1/chapter',
    update: '/api/v1/chapter/{id}?_method=PATCH',
});

export default {
    async show(id) {
        let endpoint = getURL('show', {id})

        const response = await http.get(endpoint)
        return new Chapter(response.data.data)
    },
    async index(mangaSlug) {
        const endpoint = getURL('index')

        const response = await http.get(endpoint, { params: {'filter[manga]': mangaSlug}})

        return response.data.data.map(chapter => new Chapter(chapter))
    },

    async store(chapter) {
        let endpoint = getURL('store')

        const response = await http.post(endpoint, Chapter.getStoreRequest(chapter))

        return new Chapter(response.data.data)
    },

    async update(chapter) {
        let endpoint = getURL('update', {id: chapter.id})

        const response = await http.post(endpoint, Chapter.getStoreRequest(chapter))

        return new Chapter(response.data.data)
    }
}