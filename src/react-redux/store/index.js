import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "../redux/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/index";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
