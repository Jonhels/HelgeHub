import axios from "axios";

const api = axios.create({
    baseURL: "https://api.skjaerstein.com/api/users",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    }
});

export default api;