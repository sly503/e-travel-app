import axios from "axios";

// API base URL - update this to match your Spring Boot backend
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8081";

// Create axios instance with default config
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

// Auth API
export const authApi = {
  login: async (username: string, password: string) => {
    const response = await api.post("/api/auth/login", { username, password });
    return response.data;
  },
  logout: () => {
    localStorage.removeItem("token");
  },
};

// Example: Items API
export const itemsApi = {
  getAll: async () => {
    const response = await api.get("/api/items");
    return response.data;
  },
  getById: async (id: number) => {
    const response = await api.get(`/api/items/${id}`);
    return response.data;
  },
  create: async (data: any) => {
    const response = await api.post("/api/items", data);
    return response.data;
  },
  update: async (id: number, data: any) => {
    const response = await api.patch(`/api/items/${id}`, data);
    return response.data;
  },
  delete: async (id: number) => {
    const response = await api.delete(`/api/items/${id}`);
    return response.data;
  },
};

// Example: Orders API
export const ordersApi = {
  getAll: async () => {
    const response = await api.get("/api/orders");
    return response.data;
  },
  getById: async (id: number) => {
    const response = await api.get(`/api/orders/${id}`);
    return response.data;
  },
  create: async (data: any) => {
    const response = await api.post("/api/orders", data);
    return response.data;
  },
  submit: async (id: number) => {
    const response = await api.post(`/api/orders/${id}/submit`);
    return response.data;
  },
};
