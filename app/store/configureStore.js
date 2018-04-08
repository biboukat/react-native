import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '~/reducers/index.js'

function configureStore() {
  const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__})
  function configureStore(initialState) {
    const enhancer = compose(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      ),
    );
    return createStore(reducer, initialState, composeWithDevTools(enhancer))
  }
  const store = configureStore({})

  store.subscribe(() => {
    console.log('subscribe', store.getState());
  })

  return store;
}

export default configureStore;
