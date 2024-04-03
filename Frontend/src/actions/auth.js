import * as api from "../api";
import { AUTH } from "../constants/actionTypes";



export const signin = (formData,history) => async (dispatch) => {
  try {
    
    const data = await api.signIn(formData);
   dispatch({ type: AUTH, data });
    history("/");
  } catch (error) {
    console.log(error);
  }
};
export const signup = (formData) => async () => {
  try {
    const data = await api.signUp(formData);
    console.log(data)
   // dispatch({ type: AUTH, data });
    // sign up the user
    //history("/");
  } catch (error) {
    console.log(error);
  }
};
