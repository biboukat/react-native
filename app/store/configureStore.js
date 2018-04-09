import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { AsyncStorage } from 'react-native';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { autoRehydrate, persistReducer } from 'redux-persist';

import { watchActions } from '~/dataBase';
import reducer from '~/reducers/index.js'
const sagaMiddleware = createSagaMiddleware();

const config = { storage: AsyncStorage, key: 'primary' }
const combinedReducer = persistReducer(config, reducer);

function configureStore() {
  const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__})
  function configureStore(initialState) {
    const enhancer = compose(
      applyMiddleware(
        sagaMiddleware,
        loggerMiddleware,
      )
    );
    return createStore(combinedReducer, initialState, composeWithDevTools(enhancer))
  }
  const store = configureStore({});

  sagaMiddleware.run(watchActions);
  store.subscribe(() => {
    console.log('subscribe', store.getState());
  })

  return store;
}

export default configureStore;
