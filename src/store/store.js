import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlice from './slice/userSlice';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  user: userSlice,
}));

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;