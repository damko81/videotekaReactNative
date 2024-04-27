import { api } from "../../config/api";

// singin user
export const signInUser = reqData => async dispatch => {
    try {
     
            const response = await api.post('/users/login', reqData);
            const {id, name, password} = response.data;
         
            console.log('Id:' + id);
            console.log('Name:' + name);
            console.log('password:' + password);

            dispatch('LOGIN_SUCCESS');
 
    } catch (error) {
      console.error('Error signing in user:', error,reqData);
      dispatch('LOGIN_ERR');
    }
  };

  export const logoutUserAction = () => async dispatch => {
  
    dispatch({type:LOGOUT_SUCCESS});
    console.log('logout user');
  
  };