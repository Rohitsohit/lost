import { FETCH_ALL } from "../constants/actionTypes";

const itemReducer =  (item=[],action) =>{

     switch (action.type) {
          case FETCH_ALL:
               return action.payload;
          default:
               return item;
     }
}
export default itemReducer;