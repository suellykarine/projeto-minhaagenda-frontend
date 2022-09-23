import axios from "axios";

const api = axios.create({
    baseURL: "https://teste-tecnico-kenzie.herokuapp.com",
});

export default api;