import { createStore, combineReducers, applyMiddleware } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
// import { initStart } from '../modules/application/actions'

export default (rootReducer, rootSaga, history) => {
  const middleware = []
  const sagaMiddleware = createSagaMiddleware()
  const routesMiddleware = routerMiddleware(history)

  middleware.push(sagaMiddleware)
  middleware.push(routesMiddleware)

  const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
  )

  // persistStore(store, {}, () => store.dispatch(initStart()))

  // sagaMiddleware.run(rootSaga);

  return store
}
