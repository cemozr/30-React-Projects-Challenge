import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: number;
};

const initialState: InitialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
