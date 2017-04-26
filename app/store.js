import { createStore, compose, applyMiddleware } from 'redux';
import { fromJS } from 'immutable';
import createReducer from './reducers';
import devTools from 'remote-redux-devtools';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__ 
});

function configureStore(initialState = fromJS({ })) {
  const createStoreWithMiddleware = compose(applyMiddleware(loggerMiddleware), devTools())(createStore);
  return createStoreWithMiddleware(createReducer(), initialState);
}

module.exports = configureStore;
