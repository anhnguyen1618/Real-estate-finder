import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as form } from 'redux-form'
import thunk from 'redux-thunk';

import entities from './entities/entities.js'

import { promiseDispatchWrapper } from './redux-middleware.js'

const rootReducer = combineReducers({
  entities,
  form
})

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch = promiseDispatchWrapper(store);

export default store
