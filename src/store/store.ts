import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { imageApiSlice } from "./slices/imageApiSlice";

const rootReducer = combineReducers({
  [imageApiSlice.reducerPath]: imageApiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
