import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig';

import { groupsGetAll } from './groupsGetAll';

export const groupRemoveByName = async (groupDelete: string) => {
  try {
    const storedGroups = await groupsGetAll();
    const groups = storedGroups.filter(group => group !== groupDelete);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDelete}`);

  } catch (error) {
    throw error;
  }
}