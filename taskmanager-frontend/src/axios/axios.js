import axios from "axios";

if (!window.API_BASE_URL) {
    console.warn("window.API_BASE_URL is not defined. Falling back to default.");
}

const axiosInstance = axios.create({
    baseURL: window.API_BASE_URL || "http://localhost:9090/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;