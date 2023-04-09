import axios from "axios";

const APIHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const API = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    timeout: 5000,
    headers: APIHeaders,
});

export const getHistorical = async () => {
  const response = await API.get("/historical");
  console.log(response.data);
  return response.data;
}

export  const sendHistorical = async (historical) => {
  const response = await API.post("/player", historical);
  return response.data;
};

export const deleteHistorical = async () => {
  await API.delete("/reset");
}