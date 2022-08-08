import http from "@/services/http";
import urlFormatter from "@/services/url-formatter";
import News from "@/services/classes/News";

const getURL = urlFormatter({
    index: '/api/v1/news',
});

export default {
    async index() {
        const endpoint = getURL('index')

        const response = await http.get(endpoint);
        return response.data.data.map(news => new News(news))
    }
}

