import AsyncStorage from '@react-native-async-storage/async-storage';
import {IStorageService} from './storageService';

export const asyncStorage: IStorageService = {
  getItem: async key => {
    const item = await AsyncStorage.getItem(key);

    if (!item) {
      return null;
    }

    return JSON.parse(item);
  },
  setItem: async (key, value) => {
    const itemToSet = JSON.stringify(value);

    await AsyncStorage.setItem(key, itemToSet);
  },
  deleteItem: async key => {
    await AsyncStorage.removeItem(key);
  },
};
