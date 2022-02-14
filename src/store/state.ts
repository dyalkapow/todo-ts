export type TodoItem = {
  id: number;
  text: string;
  isCompleted: boolean;
};

export type State = {
  loading: boolean;
  items: TodoItem[];
};

export const state: State = {
  loading: false,
  items: [],
};
