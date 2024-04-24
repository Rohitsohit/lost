import * as api from "../api";




export const userChats = async(chatId) => {
  try {
    const data = await api.userChats(chatId);
    return data.data;
    
  } catch (error) {
    console.log(error);
  }
};

export const createChats = async(chatData) => {
  try {
    const data = await api.createChats(chatData);
    return data.data;
    
  } catch (error) {
    console.log(error);
  }
};

export const findChat = async(senderId,receiverId)=>{
 const res =  await api.findChats(senderId,receiverId);
 return res.data
}



export const getMessages = async(chatId) => {
  try {
    const data = await api.getMessages(chatId);
      
    return data.data;
    
  } catch (error) {
    console.log(error);
  }
};

export const addMessage = async(textData) => {
  try {
    
    const res = await api.addMessage(textData);
    
    return res.data;
    
  } catch (error) {
    console.log(error);
  }
};


