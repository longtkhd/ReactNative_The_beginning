import { createStore, applyMiddleware, compose } from 'redux'
import rootSaga from '../saga/rootSaga'
import rootReducer from '../reducer/rootReducer'
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();


const composeEnhancers =
    typeof window === 'object' &&
        process.env.NODE_ENV === 'development' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
export const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga);