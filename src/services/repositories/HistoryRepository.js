import http from "@/services/http";
import urlFormatter from "@/services/url-formatter";
import createHistoryFromResource from "@/services/classes/createHistory";

const getURL = urlFormatter({
    index: '/api/v1/history',
});

export default {
    async index() {
        const endpoint = getURL('index')

        const response = await http.get(endpoint);
        return response.data.data.map(createHistoryFromResource)
    }
}

