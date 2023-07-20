export interface TodoData {
  due: string;
  summary: string;
  text: string;
}

export interface fetchTodosType {
  (url: string): TodoData[] | null;
}

export interface GetTodos {
  (): void;
}

export interface SetTodos {
  (Todos: TodoData[]): void;
}

export interface AddTodo {
  (Todo: TodoData): void;
}

export interface AppsProps {
  todo: TodoData;
  todos: TodoData[];
}

export interface UpdateTodos {
 (props: AppsProps): void;
}

export interface SetEditModeType {
//  (mode: boolean): React.Dispatch<React.SetStateAction<boolean>>;
  (mode: boolean): void;
}

export interface SetEditDueType {
  (due: string): void;
}

export interface DeleteProps {
  due: string;
}

export interface BannerProps {
  image: string;
}

export interface TodoListProps {
  todos: TodoData[];
  setter: SetTodos;
  seteditmode: SetEditModeType;
  seteditdue: SetEditDueType;
  getTodos: GetTodos;
}

export interface todoItemProps extends TodoListProps{
  todo: TodoData;
}

export interface EditProps {
  todo: TodoData;
  seteditmode: SetEditModeType;
  todos: TodoData[];
  updater: UpdateTodos;
}

export interface ListOrEditProps extends TodoListProps {
  edit_due: string;
  edit_mode: boolean;
  add_todo: AddTodo;
  updater: UpdateTodos;
}
