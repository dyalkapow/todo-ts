import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationType } from "./mutations";
import { State } from "./state";

export enum ActionTypes {
  GetTodoItems = "GET_ITEMS",
}

type ActionsArguments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionTypes.GetTodoItems](context: ActionsArguments): void;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetTodoItems]({ commit }) {
    await sleep(1000);

    commit(MutationType.SetLoading, false);
    commit(MutationType.SetItem, [
      {
        id: 1,
        text: "Default Todo Task",
        isCompleted: false,
      },
      {
        id: 2,
        text: "Completed",
        isCompleted: true,
      },
    ]);
  },
};
