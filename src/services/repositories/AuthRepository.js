import http from "@/services/http";
import urlFormatter from "@/services/url-formatter";

const getURL = urlFormatter({
    login: '/oauth/token',
    logout: '/api/v1/logout',
    register: '/api/v1/register',
});

export default {
    async login(user) {
        let endpoint = getURL('login')

        const response = await http.post(endpoint, {
            grant_type: process.env.VUE_APP_GRANT_TYPE,
            client_id: process.env.VUE_APP_PASSPORT_CLIENT_ID,
            client_secret: process.env.VUE_APP_PASSPORT_CLIENT_SECRET,
            username: user.username,
            password: user.password
        });

        return  response.data.access_token;
    },
    async logout() {
        let endpoint = getURL('logout')

        return await http.post(endpoint);
    },
    async register(user) {
        let endpoint = getURL('register')

        const response = await http.post(endpoint, user);
        return response.data.access_token;
    }
}

