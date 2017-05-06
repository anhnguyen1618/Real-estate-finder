import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as form } from 'redux-form'
import thunk from 'redux-thunk';

import entities from './entities'
import fetching from './Fetching'

import { promiseDispatchMiddleWare, promiseFlattenerMiddleWare } from './redux-middleware.js'

const rootReducer = combineReducers({
  entities,
  form,
  fetching
})

const store = createStore(rootReducer, applyMiddleware(thunk, promiseDispatchMiddleWare, promiseFlattenerMiddleWare));

export default store
