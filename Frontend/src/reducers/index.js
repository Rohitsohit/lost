import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { combineReducers } from 'redux';
import auth from './auth';
import items from './items';

export const reducers = combineReducers({
  auth,
  items,
});

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem('reduxState', serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = window.localStorage.getItem('reduxState');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();

const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveToLocalStorage({
    auth: store.getState().auth,
    items: store.getState().items,
  });
});

export default store;
