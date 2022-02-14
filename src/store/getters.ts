import { GetterTree } from "vuex";
import { State, TodoItem } from "./state";

export type Getters = {
  completedTodos(state: State): TodoItem[];
  allTodos(state: State): TodoItem[];
  activeTodos(state: State): TodoItem[];
};

export const getters: GetterTree<State, State> & Getters = {
  completedTodos(state) {
    return state.items.filter((e) => e.isCompleted);
  },
  activeTodos(state) {
    return state.items.filter((e) => !e.isCompleted);
  },
  allTodos(state) {
    return state.items;
  },
};
