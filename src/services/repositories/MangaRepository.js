import http from "@/services/http";
import urlFormatter from "@/services/url-formatter";
import createMangaFromResource from "@/services/classes/createManga";

const getURL = urlFormatter({
    show: '/api/v1/manga/{slug}',
    index: '/api/v1/manga',
    store: '/api/v1/manga',
    update: 'api/v1/manga/{slug}',
    destroy: 'api/v1/manga/{slug}',
    getTags: '/api/v1/tags'
});

export default {
    async show(slug) {
        const endpoint = getURL('show', {slug})

        const response = await http.get(endpoint)
        return createMangaFromResource(response.data.data)
    },
    async index() {
        const endpoint = getURL('index')

        const response = await http.get(endpoint)
        return response.data.data.map(createMangaFromResource)
    },
    async store(manga) {
        const endpoint = getURL('store')

        const response = await http.post(endpoint, manga)
        return createMangaFromResource(response.data.data)
    },
    async update(manga) {
        const endpoint = getURL('update', { slug: manga.slug})

        const response = await http.patch(endpoint, manga)
        return createMangaFromResource(response.data.data)
    },
    async destroy(slug) {
        const endpoint = getURL('destroy', { slug: slug})

        return await http.patch(endpoint)
    },
    async getTags() {
        const endpoint = getURL('getTags')

        const response = await http.get(endpoint)
        return response.data.data.map(createMangaFromResource)
    }
}