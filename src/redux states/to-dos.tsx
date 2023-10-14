import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ToDoState {
  value: string
}

const initialState: ToDoState = {
  value: "",
}

export const toDoSlice = createSlice({
  name: 'to-dos',
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { addToDo } = toDoSlice.actions

export default toDoSlice.reducer