import { cartData, productListData } from './reducer';
import { combineReducers } from 'redux';


export default combineReducers({ cart: cartData, product: productListData })