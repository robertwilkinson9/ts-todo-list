import React from "react";
import {todoItemProps} from './interfaces';

const TodoItem = (props: todoItemProps) => {
  console.log("TodoItem props are ", JSON.stringify(props));
  const [todo, todos] = [props.todo, props.todos]

  const DeleteTodo = (props: todoItemProps, due: string) => {
    console.log("DeleteTodo -> DELETING")
    if (due) {
      console.log("DeleteTodo -> deleting ", due);
      console.log("DeleteTodo -> todos are ", JSON.stringify(todos));
      const newtodos = todos.filter(todo => {return todo.due !== due});
      console.log("DeleteTodo -> newtodos are ", JSON.stringify(newtodos));
      props.setter(newtodos);
    }
  };

  const UpdateEditMode = (props: todoItemProps, due: string) => {
    console.log("UpdateEditMode -> props are ", JSON.stringify(props));
    props.seteditmode(true);
    props.seteditdue(due);
  };

  return (
    <tr data-testid="todoitem" >
      <td data-testid="todoitem_due">{todo.due}</td>
      <td data-testid="todoitem_summary">{todo.summary}</td>
      <td data-testid="todoitem_text">{todo.text}</td>
      <td>
         <button data-testid="todoitem_delete" className="btn btn-primary" onClick={() => DeleteTodo(props, todo.due)}>Delete</button>
      </td>
      <td>
        <button className="btn btn-primary" onClick={() => UpdateEditMode(props, todo.due)}>Edit</button>
      </td>
    </tr>
  );
};

export default TodoItem;
