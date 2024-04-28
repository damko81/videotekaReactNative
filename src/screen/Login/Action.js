import { api } from "../../config/api";

// singin user
export const signInUser = async reqData => {
    try {
     
            const response = await api.post('/users/login', reqData);
            const {id, name, password} = response.data;
         
            console.log('Id:' + id);
            console.log('Name:' + name);
            console.log('password:' + password);

    } catch (error) {
      console.error('Error signing in user:', error,reqData);
    }
  };

  export const logoutUserAction = () => {
  
    console.log('logout user');
  
  };