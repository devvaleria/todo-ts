import { useAppSelector } from "./hooks";
import {
  IgroupTodo,
  IinitialState,
  IaddTodoPayload,
  IremoveTodoPayload,
  ItoggleCompleteTodoPayload,
} from "./models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IinitialState = {
  groupsTodo: [],
  selectedGroup: undefined,
};

const findCurrentGroup = (state: IinitialState, id: string) => {
  const currentGroup = state.groupsTodo.find((group) => group.id === id);
  
  return currentGroup;
};

const generateId = () => {
  return new Date().toUTCString() + Math.random();
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addGroup: (state, action: PayloadAction<string>) => {
      const newGroup = {
        id: generateId(),
        title: action.payload,
        todos: [],
      }
      state.groupsTodo.push(newGroup);
      state.selectedGroup = newGroup.id
    },
    removeGroup: (state, action: PayloadAction<string>) => {
      state.groupsTodo = state.groupsTodo.filter(
        (group) => group.id !== action.payload
      );
    },
    addTodo: (state, action: PayloadAction<IaddTodoPayload>) => {
      const currentGroup = findCurrentGroup(state, action.payload.groupId);
      if (currentGroup) {
        const newTodo = {
          title: action.payload.title,
          id: generateId(),
          completed: false,
          groupId: currentGroup.id,
        }
        currentGroup.todos.push(newTodo);
        state.selectedGroup = newTodo.groupId
      }
    },
    removeTodo: (state, action: PayloadAction<IremoveTodoPayload>) => {
      const currentGroup = findCurrentGroup(state, action.payload.groupId);
      if (currentGroup)
        currentGroup.todos = currentGroup.todos.filter(
          (todo) => todo.id !== action.payload.idTodo
        );
    },
    toggleCompleteTodo: (
      state,
      action: PayloadAction<ItoggleCompleteTodoPayload>
    ) => {
      const currentGroup = findCurrentGroup(state, action.payload.groupId);
      if (currentGroup) {
        
        const currentTodo = currentGroup.todos.find(
          (todo) => todo.id === action.payload.idTodo
        );
        if (currentTodo) currentTodo.completed = !currentTodo.completed;
      }
    },
    selectGroup: (state, action: PayloadAction<string>) => {
      state.selectedGroup = action.payload;
    },
  },
});

export default todoSlice.reducer;
export const {
  addGroup,
  removeGroup,
  addTodo,
  removeTodo,
  toggleCompleteTodo,
  selectGroup,
} = todoSlice.actions;
