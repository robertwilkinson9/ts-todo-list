import DisplayTodo from "./displayTodo"
import {TodoListProps} from './interfaces';

const DisplayTodos = (props: TodoListProps) => {
  console.log("DisplayTodos TODO LIST props is ", JSON.stringify(props));
  const sorted_todos = props.todos.sort((a,b)  => (a.due > b.due) ? 1 : -1);
  console.log("DisplayTodos TODO sorted_todos is ", JSON.stringify(sorted_todos));

  return (
    <>
         {sorted_todos?.map((todo) => <DisplayTodo key={todo._id} todos={props.todos} todo={todo} setter={props.setter} edit_id={props.edit_id} seteditmode={props.seteditmode} setid={props.setid} getTodos={props.getTodos} /> )}
    </>
  );
};

export default DisplayTodos;
