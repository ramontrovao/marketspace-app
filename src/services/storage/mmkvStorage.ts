import {MMKV} from 'react-native-mmkv';
import {IStorageService} from './storageService';

export const storage = new MMKV();

export const mmkvStorage: IStorageService = {
  getItem: key => {
    const item = storage.getString(key);

    if (!item) {
      return null;
    }

    return JSON.parse(item);
  },
  setItem: (key, value) => {
    const itemToSet = JSON.stringify(value);

    storage.set(key, itemToSet);
  },
  deleteItem: key => {
    storage.delete(key);
  },
};
