import axios from "axios";

/* Creating a new instance for axios*/

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export default instance;
