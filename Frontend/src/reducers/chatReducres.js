import { FETCH_ALL,GET_CHAT } from "../constants/actionTypes";

const chatReducer =  (chat=[],action) =>{

     switch (action.type) {
          case GET_CHAT:
               return action.payload;
          default:
               return chat;
     }
}
export default chatReducer;