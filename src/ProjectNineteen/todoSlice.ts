import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  input: { task: string; id: number };
  todos: { task: string; id: number }[];
  mode: "Add" | "Update";
};

const initialState: InitialState = {
  input: { task: " ", id: 0 },
  todos: [],
  mode: "Add",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<string>) => {
      state.input.task = action.payload;
      state.input.id = Date.now();
    },
    addTask: (state, action: PayloadAction<{ task: string; id: number }>) => {
      if (state.mode === "Add") {
        state.todos = [...state.todos, action.payload];
        state.input = { task: " ", id: 0 };
      } else {
        state.todos = [...state.todos, state.input];
        state.mode = "Add";
      }
    },
    updateTask: (
      state,
      action: PayloadAction<{ task: string; id: number }>
    ) => {
      state.mode = "Update";
      state.input.task = action.payload.task;
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export default todoSlice.reducer;
export const { setInput, addTask, updateTask, deleteTask } = todoSlice.actions;
