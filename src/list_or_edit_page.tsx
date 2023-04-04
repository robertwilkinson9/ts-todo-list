import Edit from './edit';
import TodoList from './todoList';
import {ListOrEditProps} from './interfaces';

const ListOrEditPage = (props: ListOrEditProps) => {
      console.log("ListOrEditPage TODOS are ", JSON.stringify(props.todos));
          if (props.edit_mode) {
	    return <Edit todos={props.todos} edit_id={props.edit_id} setid={props.setid} setter={props.setter} add_todo={props.add_todo} updater={props.updater} seteditmode={props.seteditmode} />
          } else {
	    return <TodoList seteditmode={props.seteditmode} todos={props.todos} setter={props.setter} edit_id={props.edit_id} setid={props.setid} getTodos={props.getTodos} />
          }
}

export default ListOrEditPage;
