import {applyMiddleware, createStore} from 'redux'
import rootReducer from '../reducers'
import logger from 'redux-logger'

const middleware = applyMiddleware(logger())
const store = createStore(rootReducer, middleware)

if (module.hot) {
  module.hot.accept('../reducers/', () => {
    const nextRootReducer = require('../reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
