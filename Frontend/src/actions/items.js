import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const getItems = () => async () => {
  try {
    const data=await api.getItems();
    console.log(data.data);
  } catch (error) {
    console.log(error);
  }
};
export const addItems = (formData) => async () => {
  try {
    console.log(formData)
    await api.addItems(formData);
    
  } catch (error) {
    console.log(error);
  }
};
