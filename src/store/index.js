import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '@redux/reducers'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose

const middlewares = [
  thunkMiddleware
]

/**
 * redux-logger 中间件，用于在发起 Action 时，在控制台打印 Action 及其前后 Store 中的保存的状态信息
 */
if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
  
  middlewares.push(require('redux-logger').createLogger())
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares), 
)

export default function configStore () {
  const store = createStore(rootReducer, enhancer)
  return store
}