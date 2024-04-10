import * as api from "../api";




export const userChats = async(chatId) => {
  try {
    const data = await api.userChats(chatId);
    return data.data;
    
  } catch (error) {
    console.log(error);
  }
};

export const getMessages = async(chatId) => {
  try {
    const data = await api.getMessages(chatId);
      
    return data.data;
    
  } catch (error) {
    console.log(error);
  }
};



