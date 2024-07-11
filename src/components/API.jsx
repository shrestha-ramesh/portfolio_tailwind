// api.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://getform.io/f/azyllozb", // Replace with your backend URL
});

export default instance;