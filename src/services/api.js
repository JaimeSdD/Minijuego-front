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
  const result = await API.get("/historical");
  console.log(result.data);
  return result.data;
}

export  const sendHistorical = async (historical) => {
  const result = await API.post("/player", historical);
  return result.data;
};

export const deleteHistorical = async () => {
  await API.delete("/reset");
}