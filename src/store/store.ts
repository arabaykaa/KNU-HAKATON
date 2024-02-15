import { combineReducers, configureStore } from "@reduxjs/toolkit";

const combireReducers = combineReducers({});

export const store = configureStore({
  reducer: combireReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
