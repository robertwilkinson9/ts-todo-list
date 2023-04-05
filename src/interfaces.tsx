export interface RawTodoData {
  due: string;
  summary: string;
  text: string;
}

export interface TodoData extends RawTodoData {
  _id: string;
}

export interface GetTodos {
  (): void;
}

export interface SetTodos {
  (Todos: TodoData[]): void;
}

export interface AddTodo {
  (Todo: RawTodoData): void;
}

export interface AppsProps {
  edit_id: string;
  todo: TodoData | RawTodoData;
  todos: TodoData[];
}

export interface todoItemProps {
  todo: TodoData;
  todos: TodoData[];
  setter: SetTodos;
  edit_id?: string;
  seteditmode: SetEditMode;
  setid: SetId;
  getTodos?: GetTodos;
}

export interface UpdateTodos {
 (props: AppsProps): void;
}

export interface SetEditMode {
  (mode: boolean): void;
}

export interface SetId {
  (id: string): void;
}

export interface DeleteProps {
  id: string;
}

export interface BannerProps {
  image: string;
}

export interface TodoListProps {
  edit_id: string;
  todos: TodoData[];
  setter: SetTodos;
  seteditmode: SetEditMode;
  setid: SetId;
  getTodos: GetTodos;
}

export interface DisplayTodoProps extends TodoListProps{
  todo: TodoData;
}

export interface EditProps {
  todos: TodoData[];
  edit_id: string;
  setid: SetId;
  setter: SetTodos;
  add_todo: AddTodo;
  updater: UpdateTodos;
  seteditmode: SetEditMode;
}

export interface FormEditProps extends EditProps {
  index: string;
}

export interface ListOrEditProps {
  edit_mode: boolean;
  seteditmode: SetEditMode;
  todos: TodoData[];
  setter: SetTodos;
  add_todo: AddTodo;
  updater: UpdateTodos;
  edit_id: string;
  setid: SetId;
  getTodos: GetTodos;
}
