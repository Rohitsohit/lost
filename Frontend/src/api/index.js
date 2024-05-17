import axios from 'axios'

const API = axios.create({baseURL:'https://lost-backend-api.vercel.app'})
//const API = axios.create({baseURL:'http://localhost:5001'})


export const signIn =(formData)=>API.post('/user/signin',formData);
export const signUp =(formData) => API.post('/user/signup',formData)
export const getUserDetails=(id)=>API.get(`/user/${id}`);
export const getItems =(params) => API.get(`/lost-items/search`,params)
export const addItems =(formData)=>API.post('/lost-items/add-item',formData);

export const userChats =(chatId)=>API.get(`/chat/${chatId}`);
export const createChats =(chatData)=>API.post('/chat/',chatData);
export const findChats =(senderId,receiverId)=>API.get(`/chat/find/${senderId}/${receiverId}`);



export const getMessages =(chatId)=>API.get(`/message/${chatId}`);
export const addMessage =(data)=>API.post('/message/',data);