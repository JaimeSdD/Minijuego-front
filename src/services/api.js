import axios from "axios";

const APIHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

export const API = axios.create({
    baseURL: navigator.userAgent.toLowerCase().indexOf('android ') !== -1? "http://10.0.2.2:8000/api"  : "http://127.0.0.1:8000/api",
    headers: APIHeaders,
});

export const getHistorical = async () => {
  const response = await API.get("/historical");
  return response.data;
}

export  const sendHistorical = async (historical) => {
  const response = await API.post("/player", historical);
  return response.data;
};

export const deleteHistorical = async () => {
  await API.delete("/reset");
}