import { createStore, applyMiddleware, compose } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { watchActions } from '~/dataBase';
import reducer from '~/reducers/index.js'
const sagaMiddleware = createSagaMiddleware();

function configureStore() {
  const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__})
  function configureStore(initialState) {
    const enhancer = compose(
      applyMiddleware(
        sagaMiddleware,
        loggerMiddleware
      ),
    );
    return createStore(reducer, initialState, composeWithDevTools(enhancer))
  }
  const store = configureStore({})

  sagaMiddleware.run(watchActions);
  store.subscribe(() => {
    console.log('subscribe', store.getState());
  })

  return store;
}

export default configureStore;
