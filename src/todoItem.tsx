import React from "react";

const TodoItem = (props) => {
//  const [todo, todos, setTodos, setId, setEditMode] = [props.todo, props.todos, props.setter, props.setid, props.seteditmode]
  const [todo, todos, setTodos] = [props.todo, props.todos, props.setter]
  console.log("TodoItem todos are ", JSON.stringify(todos));
  console.log("TodoItem todo ", JSON.stringify(todo));
  const id = todo._id;

  // pass these down from App.js - but test for now.
  const API_url = 'http://localhost:5000/api/';
  const TODO_url = API_url + 'todo/';

  const DeleteMongoTodo = ({id}) => {
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

  const DeleteTodo = ({id}) => {
    console.log("DeleteTodo -> deleting ", id);
    DeleteMongoTodo({id})
    console.log("DeleteTodo -> todos are ", JSON.stringify(todos));
    const newtodos = todos.filter(todo => {return todo._id !== id});
    console.log("DeleteTodo -> newtodos are ", JSON.stringify(newtodos));
    setTodos(newtodos);
  };

  const UpdateEditId = (props) => {
    console.log("UpdateEditId -> props are ", JSON.stringify(props));
//    const [todo, todos, setTodos, setId, setEditMode] = [props.todo, props.todos, props.setter, props.setid, props.seteditmode]
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
      	<button className="btn btn-primary" onClick={() => DeleteTodo({id})}>
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
