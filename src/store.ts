import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./ProjectEighteen/counterSlice";
import todoReducer from "./ProjectNineteen/todoSlice";

export const store = configureStore({
  reducer: { counterReducer, todoReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
