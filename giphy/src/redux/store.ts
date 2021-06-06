import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const configureStore = (preLoadedState={}) =>{
  createStore(
    reducer,
    preLoadedState,
    applyMiddleware(thunk)
  )
}

export default configureStore;