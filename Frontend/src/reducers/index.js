
import { combineReducers } from 'redux';

import auth from './auth'
import items from './items';
import chatReducer from './chatReducres';

export const reducers = combineReducers({auth,items,chatReducer});