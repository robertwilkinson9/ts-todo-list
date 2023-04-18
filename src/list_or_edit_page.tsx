import Edit from './edit';
import TodoList from './todoList';
import {TodoData, ListOrEditProps} from './interfaces';

const ListOrEditPage = (props: ListOrEditProps) => {
      console.log("ListOrEditPage TODOS are ", JSON.stringify(props.todos));
      console.log("ListOrEditPage PROPS are ", JSON.stringify(props));
      if (props.edit_mode) {
        let todo:TodoData = {due : "", summary: "", text: ""}; 
        const edit_id = props.edit_id;
        if ((edit_id !== undefined) && (edit_id !== "-1")) {
          const found_todo = props.todos.find(todo => {return todo._id === edit_id});
          if (found_todo !== undefined) {
            todo = found_todo;
          } 
        }
        console.log("ListOrEditPage TODO is ", JSON.stringify(todo));
	return <Edit todo={todo} todos={props.todos} edit_id={props.edit_id} setid={props.setid} updater={props.updater} seteditmode={props.seteditmode} />
      } else {
        return <TodoList seteditmode={props.seteditmode} todos={props.todos} setter={props.setter} edit_id={props.edit_id} setid={props.setid} getTodos={props.getTodos} />
      }
}

export default ListOrEditPage;
