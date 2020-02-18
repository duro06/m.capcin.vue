import axios from "axios";

// const API_URL = process.env.API_URL || "http://localhost/capcin/api/";
const API_URL = "http://localhost/capcin/";
export default axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    Data: "Multipart Form"
    // Authorization: "Bearer " + localStorage.token
  }
});
