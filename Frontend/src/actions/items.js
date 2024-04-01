import * as api from "../api";
import { FETCH_ALL } from "../constants/actionTypes";

export const getItems = () => async (dispatch) => {
  try {
    const data=await api.getItems();
    dispatch({ type: FETCH_ALL, payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const addItems = (formData,history) => async () => {
  try {
    await api.addItems(formData);
    history('/');
  } catch (error) {
    console.log(error);
  }
};
