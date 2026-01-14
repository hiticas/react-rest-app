import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getTasks = () => API.get("/todos?_limit=5");
export const addTask = (task) => API.post("/todos", task);
export const deleteTask = (id) => API.delete(`/todos/${id}`);

export const toggleTask = (id, completed) =>
  API.patch(`/todos/${id}`, { completed });