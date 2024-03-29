import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const signin = (formData) => async () => {
  try {
    console.log(formData)
    const data = await api.signIn(formData);
    console.log(data)
    //dispatch({ type: AUTH, data });
    // log in the user
    // history("/");
  } catch (error) {
    console.log(error);
  }
};
export const signup = (formData) => async () => {
  try {
    console.log(formData)
    const data = await api.signUp(formData);
    console.log(data)
   // dispatch({ type: AUTH, data });
    // sign up the user
    //history("/");
  } catch (error) {
    console.log(error);
  }
};
