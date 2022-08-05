import http from "@/services/http";
import urlFormatter from "@/services/url-formatter";
import createChapterFromResource from "@/services/classes/createChapter";

const getURL = urlFormatter({
    show: '/api/v1/chapter/{id}',
    index: '/api/v1/chapter',
});

export default {
    async show(id) {
        const endpoint = getURL('show', {id})

        const response = await http.get(endpoint)
        return createChapterFromResource(response.data.data)
    },
    async index(mangaSlug) {
        const endpoint = getURL('index')

        const response = await http.get(endpoint, { params: {'filter[manga]': mangaSlug}})
        return response.data.data.map(createChapterFromResource)
    },
}