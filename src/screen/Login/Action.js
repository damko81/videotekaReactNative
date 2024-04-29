import { api } from "../../config/api";
import * as Keychain from 'react-native-keychain';

// singin user
export const signInUser = async reqData => {
    try {
     
            const response = await api.post('/users/login', reqData);
            const {id, name, password,username} = response.data;
         
            //console.log('Id:' + id);
            //console.log('Name:' + name);
            //console.log('Username:' + username);
            //console.log('password:' + password);

            // Store the credentials
            await Keychain.setGenericPassword(username, password);   

    } catch (error) {
      console.error('Error signing in user:', error,reqData);
    }
  };

  
  export const getUsername = async () => {
    try {
          const {username}  = await Keychain.getGenericPassword();
          return username;
    } catch (error) {
      console.error('Error retrieving data:', error);
      return null;
    }
  };


  export const logoutUserAction = async () => {
   
    await Keychain.resetGenericPassword();   
    console.log('logout user');
  
  };