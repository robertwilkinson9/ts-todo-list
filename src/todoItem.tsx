import React from "react";
import {todoItemProps} from './interfaces';

const TodoItem = (props: todoItemProps) => {
  console.log("TodoItem props are ", JSON.stringify(props));
  const [edit_id, todo, todos, setTodos] = [props.edit_id, props.todo, props.todos, props.setter]
  if ((props.edit_id !== undefined) && (props.edit_id !== "-1")) {
    props.todo._id = props.edit_id;
  }
  console.log("TodoItem todo ", JSON.stringify(todo));
  // const id = todo._id;

  // pass these down from App.js - but test for now.
  const API_url = 'http://localhost:5000/api/';
  const TODO_url = API_url + 'todo/';

  const DeleteMongoTodo = (props: todoItemProps) => {
    const id = props.todo._id;
    console.log("DeleteMongoTodo -> ID is ", id);
    const this_TODO_url = TODO_url + id;
    console.log("DeleteMongoTodo -> url is ", this_TODO_url);
    fetch(this_TODO_url, {
      method: 'DELETE',
      headers: {
              'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("delete data is ");
      console.log(data);
      // Handle data
    })
    .catch((err) => {
      console.log(err.message);
    });
  };

  // all the above should be in a top level mongo db file and passed down as props?

  const DeleteTodo = (props: todoItemProps) => {
    const id = props.todo._id;
    if ((id ! === undefined) && (id !== "-1")) {
      console.log("DeleteTodo -> deleting ", id);
      DeleteMongoTodo(props);
      console.log("DeleteTodo -> todos are ", JSON.stringify(todos));
      const newtodos = todos.filter(todo => {return todo._id !== id});
      console.log("DeleteTodo -> newtodos are ", JSON.stringify(newtodos));
      setTodos(newtodos);
    } else {
      setTodos(props.todos);
    }
  };

{ /*
  const UpdateEditId = (_id: string, props: todoItemProps) => {
    console.log("UpdateEditId -> passed ID is ", _id);
*/ }
  const UpdateEditId = (props: todoItemProps) => {
    console.log("UpdateEditId -> props are ", JSON.stringify(props));
    const [todo, setId, setEditMode] = [props.todo, props.setid, props.seteditmode]
    const id = todo._id;
    if (id) {
      console.log("UpdateEditId -> id is ", id);
      setId(id);
      console.log("UpdateEditId -> todo is ", JSON.stringify(todo));
      console.log("UpdateEditId -> props are ", JSON.stringify(props));
    }
    setEditMode(true);
  };

  return (
    <tr>
      <td>{todo.due}</td>
      <td>{todo.summary}</td>
      <td>{todo.text}</td>
      <td>
      	<button className="btn btn-primary" onClick={() => DeleteTodo(props)}>
       	 Delete
	</button>
      </td>
      <td>
{ /*
      	<button className="btn btn-primary" onClick={() => UpdateEditId(todo._id, props)}> Edit
*/ }
      	<button className="btn btn-primary" onClick={() => UpdateEditId(props)}> Edit
	</button>
      </td>
    </tr>
  );
};

export default TodoItem;
