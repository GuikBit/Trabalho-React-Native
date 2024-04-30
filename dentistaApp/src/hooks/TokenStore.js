import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = async (value) => {
  try {
    await AsyncStorage.setItem('jwt-token', value);
  } catch (e) {
    // saving error
  }
};

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('jwt-token');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('jwt-token');
  } catch (e) {
    // remove error
  }

  // console.log('Done.');
};
