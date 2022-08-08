import http from "@/services/http";
import urlFormatter from "@/services/url-formatter";
import User from "@/services/classes/User";

const getURL = urlFormatter({
    login: '/oauth/token',
    refresh: '/oauth/token',
    logout: '/api/v1/logout',
    register: '/api/v1/register',
    resendVerificationEmail: '/api/v1/verify-email/resend',
    verificationEmail: '/api/v1/verify-email/{id}/{hash}',
    sendResetPassword: '/api/v1/forgot-password',
    resetPassword: '/api/v1/reset-password',
    fetchProfile: '/api/v1/user'
});

export default {
    async login(user) {
        let endpoint = getURL('login')

        const response = await http.post(endpoint, {
            grant_type: 'password',
            client_id: process.env.VUE_APP_PASSPORT_CLIENT_ID,
            client_secret: process.env.VUE_APP_PASSPORT_CLIENT_SECRET,
            username: user.username,
            password: user.password,
        });

        return response.data;
    },
    async logout() {
        let endpoint = getURL('logout')

        return await http.post(endpoint);
    },
    async register(user) {
        let endpoint = getURL('register')

        const response = await http.post(endpoint, user);

        return response.data;
    },
    async refresh(token) {
        let endpoint = getURL('refresh')

        const response = await http.post(endpoint, {
            grant_type: 'refresh_token',
            client_id: process.env.VUE_APP_PASSPORT_CLIENT_ID,
            client_secret: process.env.VUE_APP_PASSPORT_CLIENT_SECRET,
            refresh_token: token.refresh_token
        })

        return response.data;
    },
    async fetchProfile() {
        let endpoint = getURL('fetchProfile')

        const response = await http.get(endpoint)

        return new User(response.data.data)
    },
    async resendVerificationEmail() {
        let endpoint = getURL('resendVerificationEmail')

        const response = await http.post(endpoint)

        return response.data
    },
    async verificationEmail() {
        let endpoint = getURL('verificationEmail', {id: '', hash: ''})

        const response = await http.get(endpoint)

        return response.data
    },
    async sendResetPassword() {
        let endpoint = getURL('sendResetPassword')

        const response = await http.post(endpoint)

        return response.data
    },
    async resetPassword() {
        let endpoint = getURL('resetPassword')

        const response = await http.post(endpoint)

        return response.data
    }
}

