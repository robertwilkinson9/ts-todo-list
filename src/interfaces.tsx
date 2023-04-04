export interface TodoData {
  due: string;
  summary: string;
  text: string;
}

export interface IdTodoData extends TodoData {
  _id: string;
}

export interface GetTodos {
  (void): IdTodoData[];
}

export interface SetTodos {
  (IdTodoData[]): void;
}

export interface AppsProps {
  edit_id: number;
  todo: TodoData;
  todos: TodoData[];
}

export interface SetEditMode {
  (mode: boolean): void;
}

export interface SetId {
  (id: number): void;
}

export interface DisplayTodoProps {
  edit_id: number;
  todo: IdTodoData;
  todos: IdTodoData[];
  setter: SetTodos;
  seteditmode: SetEditMode;
  setid: SetEditMode;
  getTodos: GetTodos;
}