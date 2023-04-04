import axios from "axios";

const APIHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

export const API = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    timeout: 5000,
    headers: APIHeaders,
});