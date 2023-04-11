import TodoItem from "./todoItem";
import "./todoList.css"
import {TodoListProps} from "./interfaces";

const TodoList = (props: TodoListProps) => {
  //console.log("TODO LIST todos is ", JSON.stringify(props.todos));

  const sorted_todos = props.todos.sort((a,b)  => (a.due > b.due) ? 1 : -1);

  const UpdateEditMode = (props: TodoListProps) => {
    props.seteditmode(true);
  };

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Outstanding Things to do 
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Due Datetime</th>
            <th>Summary</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
{ /*
	  <DisplayTodos todos={props.todos} setter={props.setter} edit_id={props.edit_id} seteditmode={props.seteditmode} setid={props.setid} getTodos={props.getTodos} />
          {sorted_todos?.map((todo) => <DisplayTodo key={todo._id} todos={props.todos} todo={todo} setter={props.setter} edit_id={props.edit_id} seteditmode={props.seteditmode} setid={props.setid} getTodos={props.getTodos} /> )}
*/ }
          {sorted_todos?.map((todo) => <TodoItem key={todo._id} todos={props.todos} todo={todo} setter={props.setter} edit_id={props.edit_id} seteditmode={props.seteditmode} setid={props.setid} getTodos={props.getTodos} /> )}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={() => {UpdateEditMode(props)}}>
        Add New Item
      </button>
    </>
  );
};

export default TodoList;
