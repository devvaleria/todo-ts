export interface Itodo {
  groupId: string,
  id: string;
  title: string;
  completed: boolean;
}

export interface IgroupTodo {
  id: string;
  title: string;
  todos: Itodo[];
}

export interface IinitialState {
  groupsTodo: IgroupTodo[];
  selectedGroup: string | undefined
}

export interface IaddTodoPayload {
  groupId: string;
  title: string;
}
export interface IremoveTodoPayload {
  idTodo: string;
  groupId: string;
  title: string;
}
export interface ItoggleCompleteTodoPayload {
  idTodo: string;
  groupId: string;
}
