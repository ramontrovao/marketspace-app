import {asyncStorage} from './asyncStorage';

export interface IStorageService {
  getItem: <T>(key: string) => Promise<T>;
  setItem: (key: string, value: unknown) => Promise<void>;
  deleteItem: (key: string) => Promise<void>;
}

export const storageService: IStorageService = asyncStorage;
