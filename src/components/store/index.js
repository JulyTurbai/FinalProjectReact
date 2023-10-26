import { 
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage' ;
  import cardReducer from './cardSlice';
  import { combineReducers, configureStore } from "@reduxjs/toolkit";
  
  const rootReducer = combineReducers({
    cards: cardReducer,
  })
  const persistConfig = {
    key: 'user1',
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  
  export const persistor = persistStore(store);
  export default store;



