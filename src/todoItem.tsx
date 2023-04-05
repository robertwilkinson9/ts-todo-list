import React from "react";
import {todoItemProps} from './interfaces';

const TodoItem = (props: todoItemProps) => {
  const [todo, todos, setTodos] = [props.todo, props.todos, props.setter]
  console.log("TodoItem todos are ", JSON.stringify(todos));
  console.log("TodoItem todo ", JSON.stringify(todo));
  const id = todo._id;

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
    console.log("DeleteTodo -> deleting ", id);
    DeleteMongoTodo(props);
    console.log("DeleteTodo -> todos are ", JSON.stringify(todos));
    const newtodos = todos.filter(todo => {return todo._id !== id});
    console.log("DeleteTodo -> newtodos are ", JSON.stringify(newtodos));
    setTodos(newtodos);
  };

  const UpdateEditId = (props: todoItemProps) => {
    console.log("UpdateEditId -> props are ", JSON.stringify(props));
    const [todo, setId, setEditMode] = [props.todo, props.setid, props.seteditmode]
    const id = todo._id;
    console.log("UpdateEditId -> id is ", id);
    setId(id);
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
      	<button className="btn btn-primary" onClick={() => UpdateEditId(props)}> Edit
	</button>
      </td>
    </tr>
  );
};

export default TodoItem;
