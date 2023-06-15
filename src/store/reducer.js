import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UserReducer from './user';
import CartReducer from './cart';
import CartModalReducer from './cartModal';
import { combineReducers } from '@reduxjs/toolkit';
import TokenReducer from './user/token';

const PersistConfig = (reducerName) => ({
    key: reducerName,
    storage,
});

export const RootReducer = combineReducers({
    token: persistReducer(PersistConfig('token'), TokenReducer),
    user: persistReducer(PersistConfig('user'), UserReducer),
    cart: CartReducer,
    cartModal: CartModalReducer
});