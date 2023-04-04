import TodoItem from "./todoItem";
import {DisplayTodoProps} from './interfaces';

const DisplayTodo = (props: DisplayTodoProps) => {
	const [key, todo] = [props.todo._id, props.todo]
	console.log("DisplayTodo TODO key is ", JSON.stringify(key));
	console.log("DisplayTodo TODO todo is ", JSON.stringify(todo));

	return (<>
                <TodoItem key={key} todos={props.todos} todo={props.todo} setter={props.setter} edit_id={props.edit_id} seteditmode={props.seteditmode} setid={props.setid} getTodos={props.getTodos} />
                </>);
};

export default DisplayTodo;
