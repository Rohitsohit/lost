import * as api from "../api";
import { AUTH } from "../constants/actionTypes";



export const signin = (formData,history) => async (dispatch) => {
  try {
    
    const {data} = await api.signIn(formData);
    console.log(data)
    dispatch({ type: AUTH, data });
    history("/");
  } catch (error) {
    console.log(error);
  }
};
export const signup = (formData,history) => async (dispatch) => {
  try {
    const {data} = await api.signUp(formData);
   dispatch({ type: AUTH, data });
    history("/");
  } catch (error) {
    console.log(error);
  }
};

export const getUserDetails = async (id) => {
  try {
    const data = await api.getUserDetails(id);
    return data.data;
   
  } catch (error) {
    console.log(error);
  }
};