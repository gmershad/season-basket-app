import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk"
import rootReducer from "../reducers";

const initialState = {};
const middlewares = [thunk];

const store = configureStore({
    reducer: rootReducer,
    initialState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store;