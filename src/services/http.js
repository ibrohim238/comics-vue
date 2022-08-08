import axios from "@/services/axios";

export default axios;

axios.setToken = (token) => {
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
};

axios.clearToken = () => {
    delete axios.defaults.headers.common.authorization;
};

axios.onAuthError = (callback) => {
    axios.interceptors.response.use(
        response => response,
        (error) => {
            if (error && error.response && [401, 403].includes(error.response.status)) {
                callback();
            }

            return Promise.reject(error);
        },
    );
};