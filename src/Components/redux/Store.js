import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import ProductReducer from './ProductSlice'
import thunk from "redux-thunk";
const persistConfig = {
    key: "root",
    storage
}

const rootReducer = combineReducers({
    product: ProductReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],

})

export const persistor = persistStore(store)