import { put, takeEvery } from "redux-saga/effects";

function* getProducts() {
    let fetchedData = yield fetch('https://jsonplaceholder.typicode.com/todos/3');
    let data = yield fetchedData.json();
    yield put({ type: 'SET_PRODUCT_LIST', data })
}

//generator function - to handle async function
export default function* productSaga() {
    yield takeEvery('PRODUCT_LIST_ADD', getProducts)
}