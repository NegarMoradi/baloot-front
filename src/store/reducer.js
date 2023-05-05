import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import getCommoditiesList from './commodities';
import UserReducer from './user';
import { combineReducers } from '@reduxjs/toolkit';
import TokenReducer from './user/token';

const PersistConfig = (reducerName) => ({
    key: reducerName,
    storage,
});

export const RootReducer = combineReducers({
    token: persistReducer(PersistConfig('token'), TokenReducer),
    user: UserReducer,
});