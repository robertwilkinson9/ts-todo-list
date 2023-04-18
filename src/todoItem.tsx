import React from "react";
import {_idType, todoItemProps} from './interfaces';
import {API_url, deleteItem} from './fetch';

const TodoItem = (props: todoItemProps) => {
  console.log("TodoItem props are ", JSON.stringify(props));
  const [edit_id, todo, todos, setTodos] = [props.edit_id, props.todo, props.todos, props.setter]
  if ((edit_id !== undefined) && (edit_id !== "-1")) { // it is not a new item
    props.todo._id = edit_id;
  }
  console.log("TodoItem todo ", JSON.stringify(todo));

  const DeleteMongoTodo = (_id: string) => {
    console.log("DeleteMongoTodo -> ID is ", _id);
    const delete_TODO_url = API_url + 'todo/' + _id;

    console.log("DeleteMongoTodo -> url is ", delete_TODO_url);
    deleteItem(delete_TODO_url);
  };

  const DeleteTodo = (props: todoItemProps, _id: _idType) => {
    if (_id) {
      console.log("DeleteTodo -> deleting ", _id);
      DeleteMongoTodo(_id);
      console.log("DeleteTodo -> todos are ", JSON.stringify(todos));
      const newtodos = todos.filter(todo => {return todo._id !== _id});
      console.log("DeleteTodo -> newtodos are ", JSON.stringify(newtodos));
      setTodos(newtodos);
    } else {
      console.log("DeleteTodo props.todos are ", JSON.stringify(props.todos));
      console.log("DeleteTodo todos are ", JSON.stringify(todos));
      setTodos(props.todos);
    }
  };

  const UpdateEditId = (props: todoItemProps, _id: _idType) => {
    console.log("UpdateEditId -> props are ", JSON.stringify(props));
    const [setId, setEditMode] = [props.setid, props.seteditmode]
    if (_id) {
      console.log("UpdateEditId -> _id is ", _id);
      setId(_id);
    }
    setEditMode(true);
  };

  return (
    <tr>
      <td>{todo.due}</td>
      <td>{todo.summary}</td>
      <td>{todo.text}</td>
      <td>
         <button className="btn btn-primary" onClick={() => DeleteTodo(props, todo._id)}>Delete</button>
      </td>
      <td>
        <button className="btn btn-primary" onClick={() => UpdateEditId(props, todo._id)}>Edit</button>
      </td>
    </tr>
  );
};

export default TodoItem;
