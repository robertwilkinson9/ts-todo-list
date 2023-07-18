import React from "react";
import {todoItemProps} from './interfaces';

const TodoItem = (props: todoItemProps) => {
//  console.log("TodoItem props are ", JSON.stringify(props));
  const [todo, todos, setTodos] = [props.todo, props.todos, props.setter]
  console.log("TodoItem todo ", JSON.stringify(todo));

  const DeleteTodo = (props: todoItemProps, due: string) => {
    if (due) {
      console.log("DeleteTodo -> deleting ", due);
      console.log("DeleteTodo -> todos are ", JSON.stringify(todos));
      const newtodos = todos.filter(todo => {return todo.due !== due});
      console.log("DeleteTodo -> newtodos are ", JSON.stringify(newtodos));
      setTodos(newtodos);
    } else {
      console.log("DeleteTodo props.todos are ", JSON.stringify(props.todos));
      console.log("DeleteTodo todos are ", JSON.stringify(todos));
      setTodos(props.todos);
    }
  };

  const UpdateEditMode = (props: todoItemProps, due: string) => {
    console.log("UpdateEditMode -> props are ", JSON.stringify(props));
    props.seteditmode(true);
    props.seteditdue(due);
  };

  return (
    <tr>
      <td>{todo.due}</td>
      <td>{todo.summary}</td>
      <td>{todo.text}</td>
      <td>
         <button className="btn btn-primary" onClick={() => DeleteTodo(props, todo.due)}>Delete</button>
      </td>
      <td>
        <button className="btn btn-primary" onClick={() => UpdateEditMode(props, todo.due)}>Edit</button>
      </td>
    </tr>
  );
};

export default TodoItem;
