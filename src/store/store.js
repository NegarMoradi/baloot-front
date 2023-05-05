import { createStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import { RootReducer } from './reducer';

export const Store = createStore(RootReducer, {});
export const Persistor = persistStore(Store);