import axios from "axios";

const API = axios.create({baseURL: "https://vastrama.com:5000"});

export default API;