// Redux
import { createStore } from 'redux';

// Persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import rootReducer from './reducers';

// -------------------------------------|| STORE ||---------------------------------------------------------------------

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
export type RootState = ReturnType<typeof rootReducer>;
