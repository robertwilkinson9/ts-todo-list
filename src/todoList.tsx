import TodoItem from "./todoItem";
import "./todoList.css"
import {TodoListProps} from "./interfaces";

const TodoList = (props: TodoListProps) => {
  const sorted_todos = props.todos.sort((a,b)  => (a.due > b.due) ? 1 : -1);

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
          {sorted_todos?.map((todo) => <TodoItem key={todo._id} todos={props.todos} todo={todo} setter={props.setter} edit_id={props.edit_id} seteditmode={props.seteditmode} setid={props.setid} getTodos={props.getTodos} /> )}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={() => {props.seteditmode(true)}}>
        Add New Item
      </button>
    </>
  );
};

export default TodoList;
