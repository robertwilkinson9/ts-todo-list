import Edit from './edit';
import TodoList from './todoList';
import {TodoData, ListOrEditProps} from './interfaces';

const ListOrEditPage = (props: ListOrEditProps) => {
  console.log("ListOrEditPage PROPS are ", JSON.stringify(props));
  if (props.edit_mode) {
    let todo: TodoData = {due: "", summary: "", text: ""}; 
    if (props.edit_due) {
      const found_todo = props.todos.find(todo => {return todo.due === props.edit_due});
      if (found_todo !== undefined) {
        todo = found_todo;
      } 
    }
    console.log("ListOrEditPage TODO is ", JSON.stringify(todo));
    return <Edit todo={todo} todos={props.todos} updater={props.updater} seteditmode={props.seteditmode} />
  } else {
    return <TodoList seteditmode={props.seteditmode} seteditdue={props.seteditdue} todos={props.todos} setter={props.setter} getTodos={props.getTodos} />
  }
}

export default ListOrEditPage;
