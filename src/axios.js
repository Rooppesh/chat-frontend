import axios from "axios";
import Config from "./config.js";

const instance = axios.create({
  baseURL: Config.BASE_URL,
});

export default instance;
