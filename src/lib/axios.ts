import axios from 'axios';
import {API_URL} from '@env';
import {AppError} from '../services/http/appError';

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.response.use(undefined, error => {
  if (error.response.data) {
    throw new AppError(error);
  }

  throw error;
});
