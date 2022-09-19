import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { persistReducer, persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import rootReducer from "./rootReducer";
import { rootSaga } from "./rootSaga";

const config = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: []
};


const persistedReducer = persistReducer<any, any>(config, rootReducer);
// Create the saga middleware
const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

//MiddleWare
if (__DEV__) {
    middleware.push(createLogger());
}

const enhancers = [...middleware];

const persistConfig: any = { enhancers };

// Mount it on the Store
const store = configureStore({
    reducer: persistedReducer,
    middleware: enhancers
});

// Run the saga
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store, persistConfig);

export { store, persistor };

