import axios from 'axios';
import {API_URL} from '@env';
import {AppError} from '../services/http/appError';
import {storageService} from '../services/storage/storageService';
import {PUBLIC_PATHS, REFRESH_TOKEN_ROUTE} from '../constants/http/paths';

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  request => {
    const token = storageService.getItem('token');
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
  },
  error => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    const isPublicUrl = PUBLIC_PATHS.includes(originalRequest.url);

    if (isPublicUrl) {
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await api.post(REFRESH_TOKEN_ROUTE);

        const {token} = response.data;
        localStorage.setItem('token', token);
        api.defaults.headers.common.Authorization = `Bearer ${token}`;

        return api(originalRequest);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');

        return Promise.reject(refreshError);
      }
    }
  },
);

api.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.data) {
      throw new AppError(error);
    }

    throw new AppError({
      status: error.status,
      message: 'Ocorreu um erro inesperado! Tente novamente mais tarde.',
    });
  },
);
