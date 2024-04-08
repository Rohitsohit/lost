import * as api from "../api";
import { GET_CHAT } from "../constants/actionTypes";



export const userChats = (chatId) => async (dispatch) => {
  try {
    const data = await api.userChats(chatId);
    dispatch({ type: GET_CHAT, payload: data.data });
    
  } catch (error) {
    console.log(error);
  }
};

