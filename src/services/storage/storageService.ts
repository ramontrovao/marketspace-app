import {mmkvStorage} from './mmkvStorage';

export interface IStorageService {
  getItem: <T>(key: string) => T;
  setItem: (key: string, value: unknown) => void;
  deleteItem: (key: string) => void;
}

export const storageService: IStorageService = mmkvStorage;
