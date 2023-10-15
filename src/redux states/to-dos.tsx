import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

interface Task {
  id: string;
  name: string;
  isDone: boolean;
}

export interface ToDoState {
  tasks: Task[];
}

const initialState: ToDoState = {
  tasks: [],
};

export const toDoSlice = createSlice({              
  name: "to-dos",
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<string>) => {
      state.tasks.push({id: uuid().slice(0,8), name: action.payload, isDone: false})
    },
    removeToDo: (state, action: PayloadAction<string>) => {
      const findTask = state.tasks.find(task => task.id === action.payload)
      if(findTask){
        findTask.isDone = true;
      }
    }
  },
});

export const { addToDo } = toDoSlice.actions;

export default toDoSlice.reducer;
