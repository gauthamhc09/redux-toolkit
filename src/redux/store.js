// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import productSaga from "./productSaga";

const sagaMiddleWare = createSagaMiddleware()
const store = configureStore({ reducer: rootReducer, middleware: () => [sagaMiddleWare] })

sagaMiddleWare.run(productSaga)
export default store