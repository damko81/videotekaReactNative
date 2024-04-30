import { api } from "../../config/api";
import * as Keychain from 'react-native-keychain';

export const signUpUser = async reqData => {
    try {

      const response = await api.post('/users/save', reqData);
      //console.log(response.data);

    } catch (error) {
      console.error('Error signing up user:', error);
    }
};


// singin user
export const signInUser = async reqData => {
    try {
            const response = await api.post('/users/login', reqData);
            const {id, name, password,username} = response.data;
         
            // Store the credentials
            await Keychain.setGenericPassword(username, password,{service:"userCredentials"});
            await Keychain.setGenericPassword(name, JSON.stringify(id),{service:"userAdditional"});
          
    } catch (error) {
      console.error('Error signing in user:', error,reqData);
    }
  };

// update user
export const updateUserAction = async reqData => {
  try {
          const response = await api.put('/users/update', reqData);
          const {id, name, password,username} = response.data;
         
  } catch (error) {
    console.error('Error update in user:', error,reqData);
  }
};  
  
export const getUsername = async () => {
    try {
          const {username}  = await Keychain.getGenericPassword({service:"userCredentials"});
          return username;
    } catch (error) {
      console.error('Error retrieving data:', error);
      return null;
    }
  };

export const getPassword = async () => {
    try {
          const {password}  = await Keychain.getGenericPassword({service:"userCredentials"});
          return password;
    } catch (error) {
      console.error('Error retrieving data:', error);
      return null;
    }
  };  

export const getId = async () => {
    try {
          const {password}= await Keychain.getGenericPassword({service:"userAdditional"});
          return password;
    } catch (error) {
      console.error('Error retrieving data:', error);
      return null;
    }
  };

export const getName = async () => {
    try {
          const {username}= await Keychain.getGenericPassword({service:"userAdditional"});
          return username;
    } catch (error) {
      console.error('Error retrieving data:', error);
      return null;
    }
  };

export const logoutUserAction = async () => {
  
    await Keychain.resetGenericPassword({service:"userCredentials"}); 
    await Keychain.resetGenericPassword({service:"userAdditional"}); 
    
  };