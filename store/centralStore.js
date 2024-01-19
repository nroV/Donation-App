// centralStore.js

import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import UsersReducer from '../redux/reducers/User';
import CategoryReducer from '../redux/reducers/Category';
import DonationReducer from '../redux/reducers/Donation';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};
const rootReducer = combineReducers({
  user: UsersReducer,
  category: CategoryReducer,
  donation: DonationReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persister = persistStore(store);
// persister.purge();

export {store, persister};
