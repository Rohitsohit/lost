
import { combineReducers } from 'redux';

import auth from './auth'
import items from './items';


export const reducers = combineReducers({auth,items});