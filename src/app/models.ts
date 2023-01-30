export interface Itodo {
  groupId: string,
  id: string;
  title: string;
  completed: boolean;
  index?: number;
}

export interface IgroupTodo {
  id: string;
  title: string;
  active: boolean;
  todos: Itodo[];
  changeMode: boolean;
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
}
export interface ItoggleCompleteTodoPayload {
  idTodo: string;
  groupId: string;
}

export interface IchangeGroupTitlePayload {
  groupId: string,
  newText: string
}
